import { client, parkingSpaceCollection } from '../db/initMongoDB.js';
import getDateTime from '../utils/getDateTime.js';


const postUpdateParkingSpace = async ({ slotName, parkSpaceSize, parkSpaceSlot, availability }) => {
    await client.connect();

    const timeNow = (availability ? null : getDateTime());
    const filter = { parkSpaceSize };

    const updateData = {
        $set: {
            parkSpaceSlot: {
                ...parkSpaceSlot,
                [slotName]: { ...parkSpaceSlot[slotName], available: availability, time_parked: timeNow }
            }
        }
    }

    return await parkingSpaceCollection.updateOne(filter, updateData);
}

export default postUpdateParkingSpace;
