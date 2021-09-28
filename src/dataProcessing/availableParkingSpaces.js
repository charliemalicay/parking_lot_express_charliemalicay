
const getNearestParkingSpace = async ({ parkingSpaces, entryPoints }) => {

    let result = [];

    parkingSpaces.map((data, _) => {
        Object.keys(data.parkSpaceSlot).map((slotName, _) => {
            let copyParkSpace = false;

            if (data.parkSpaceSlot[slotName].available) copyParkSpace = true;

            if(copyParkSpace) {
                result.push(
                    {
                        [slotName]: {
                            available: data.parkSpaceSlot[slotName].available,
                            time_consume: data.parkSpaceSlot[slotName].time_consume,
                            distance: {
                                [entryPoints]: data.parkSpaceSlot[slotName].distance[entryPoints]
                            }
                        }
                    }
                );
            }
        });
    });

    result.sort((a, b) => {
        const keyA = Object.keys(a)[0];
        const keyB = Object.keys(b)[0];

        return a[keyA].distance[entryPoints].toString().localeCompare(b[keyB].distance[entryPoints].toString())
    });

    return result;
}


export { getNearestParkingSpace };
