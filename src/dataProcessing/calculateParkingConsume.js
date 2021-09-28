import { parkingCharge } from '../constants.js';
import getDateTime from '../utils/getDateTime.js';


const calculateParkingConsume = async ({ parkSpaceSize, parkSpaceSlot }) => {
    let calculatedRate = "";

    Object.keys(parkSpaceSlot).map((key, _) => {
        if(!parkSpaceSlot[key].available) {
            const time_end = getDateTime();
            // const time_end = "9/29/2021/18";

            const time_start_items = parkSpaceSlot[key].time_parked.split("/")
            const time_end_items = time_end.split("/")

            let totalConsumeTime = 0;

            if(time_end_items[3] > time_start_items[3])
                totalConsumeTime += (time_end_items[3] - time_start_items[3]);

            if(time_end_items[1] > time_start_items[1])
                totalConsumeTime += ((time_end_items[1] - time_start_items[1]) * 24);

            if(time_end_items[0] > time_start_items[0])
                totalConsumeTime += ((time_end_items[0] - time_start_items[0]) * 24 * 30);

            if(time_end_items[2] > time_start_items[2])
                totalConsumeTime += ((time_end_items[2] - time_start_items[2]) * 24 * 30 * 12);

            const flatRateCondition = totalConsumeTime <= parkingCharge.flatRate.time;
            const excessRateCondition = (parkingCharge.excessRate.time_start <= totalConsumeTime) &&
                (totalConsumeTime <= parkingCharge.excessRate.time_end);
            const overDayRateCondition = totalConsumeTime >= parkingCharge.overDayRate.time;

            const parkingChargeCategory = parkingCharge.excessRate.charge[parkSpaceSize];

            if (flatRateCondition)
                calculatedRate = `${parkingCharge.flatRate.charge} ${parkingCharge.flatRate.currency}`;

            else if (excessRateCondition) {
                const excessChargeRate = (parkingChargeCategory * (totalConsumeTime - parkingCharge.flatRate.time)) +
                    parkingCharge.flatRate.charge;

                calculatedRate = `${excessChargeRate} ${parkingCharge.excessRate.currency}`;
            }

            else if (overDayRateCondition) {
                const parkingOverDayCharge = Math.round((totalConsumeTime / parkingCharge.overDayRate.time)
                    .toFixed(1));
                const excessConsumeTime = totalConsumeTime - (parkingCharge.overDayRate.time * parkingOverDayCharge);
                const overDayChargeRate = (parkingOverDayCharge * 5000)
                    + (parkingChargeCategory * (excessConsumeTime - parkingCharge.flatRate.time))
                    + parkingCharge.flatRate.charge;

                calculatedRate = `${overDayChargeRate} ${parkingCharge.excessRate.currency}`;
            }
        }
    });

    return calculatedRate;
}


export { calculateParkingConsume};
