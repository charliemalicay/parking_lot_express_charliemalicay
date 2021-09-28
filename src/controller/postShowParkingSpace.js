import { client, parkingSpaceCollection } from '../db/initMongoDB.js';
import {carSizes, entryPoints, parkingSpacesSizes} from "../constants.js";


const postShowParkingSpace = async ({ entryPoints, carSize }) => {
    await client.connect();

    let matchCarSize = [];
    let filter = {};

    switch (carSize) {
        case carSizes.smallCar:
            matchCarSize.push(
                parkingSpacesSizes.smallSpacesParking,
                parkingSpacesSizes.mediumSpacesParking,
                parkingSpacesSizes.largeSpacesParking
            );

            break;
        case carSizes.mediumCar:
            matchCarSize.push(
                parkingSpacesSizes.mediumSpacesParking,
                parkingSpacesSizes.largeSpacesParking
            );

            break;
        case carSizes.largeCar:
            matchCarSize.push(
                parkingSpacesSizes.largeSpacesParking
            );

            break;
        }

    if(matchCarSize.length > 0)
        filter.parkSpaceSize = { $in: matchCarSize};

    const parkingSpaces = await parkingSpaceCollection.find(
        filter,
        {
            projection: {
                _id: 0,
                parkSpaceSize: 0
            }
        }).toArray();

    return { parkingSpaces, entryPoints }
}

export default postShowParkingSpace;
