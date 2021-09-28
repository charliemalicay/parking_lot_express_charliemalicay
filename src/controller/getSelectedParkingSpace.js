import { client, parkingSpaceCollection } from '../db/initMongoDB.js';
import { parkingSpaceSlot } from "../constants.js";


const getSelectedParkingSpace = async ({ slotName, availability }) => {
    await client.connect();

    let parkingSize = "";

    Object.keys(parkingSpaceSlot).map((key, _) => {
        Object.keys(parkingSpaceSlot[key]).map((slot, _) => {
            if (slot === slotName) parkingSize = key;
        });
    });

    return await parkingSpaceCollection.findOne(
        { parkSpaceSize: parkingSize },
        {
            projection: {
                _id: 0
            }
        }
    );
}


export default getSelectedParkingSpace;
