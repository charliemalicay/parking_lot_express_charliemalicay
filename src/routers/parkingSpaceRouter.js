import express from "express";

import { displayParkingSpaces, selectUnSelectParkingSpaces } from '../validation/routerParameterValidator.js';

import postShowParkingSpace from '../controller/postShowParkingSpace.js';
import getSelectedParkingSpace from '../controller/getSelectedParkingSpace.js';
import postUpdateParkingSpace from '../controller/postUpdateParkingSpace.js';

import { getNearestParkingSpace } from '../dataProcessing/availableParkingSpaces.js';
import { calculateParkingConsume } from '../dataProcessing/calculateParkingConsume.js';


const router = express.Router();

router.get('/', async (req, res) => {
   res.send('\'/parking-space\' api is up');
});


router.post('/show-park-slot', async (req, res) => {
   const { body } = req;

   const validationResponse = displayParkingSpaces(body);

   if(!validationResponse.response) res.send(validationResponse)

   const queriedData = await postShowParkingSpace(body);
   const processedData = await getNearestParkingSpace(queriedData);

   res.send(processedData);
});


router.post('/select-park-slot', async (req, res) => {
   const { body } = req;

   const validationResponse = selectUnSelectParkingSpaces(body);

   if(!validationResponse.response) res.send(validationResponse)

   const parkingSpace = await getSelectedParkingSpace(body);

   const updateResponse = await postUpdateParkingSpace({
      ...body, ...parkingSpace, availability: false
   });

   res.send({
      message: `Parked Slot in ${body.slotName} `
   });
});


router.post('/unselect-park-slot', async (req, res) => {
   const { body } = req;

   const validationResponse = selectUnSelectParkingSpaces(body);
   if(!validationResponse.response) res.send(validationResponse)

   const parkingSpace = await getSelectedParkingSpace(body);
   const parkingConsumeRate = await calculateParkingConsume({ ...parkingSpace })
   await postUpdateParkingSpace({
      ...body, ...parkingSpace, availability: true
   });

   res.send({
      message: `Your total Parking Fee is ${parkingConsumeRate}`
   });
});


export { router as parkingSpaceRouter };
