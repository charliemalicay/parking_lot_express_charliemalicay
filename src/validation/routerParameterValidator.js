import { entryPoints, carSizes, parkingSpaceSlot } from '../constants.js';


const displayParkingSpaces = (parameter) => {
    const parameterKeys = Object.keys(parameter);

    let result = {
        response: true,
        error_message: ""
    }

    if(parameterKeys.length !== 2) {
        result.response = false
        result.error_message = `this request accepts length of JSON body of 2 not ${parameterKeys.length}`

    } else if(!parameter.entryPoints) {
        result.response = false
        result.error_message = `this request required body data \'entryPoints\'`

    } else if(!parameter.carSize) {
        result.response = false
        result.error_message = `this request required body data \'carSize\'`

    } else if(!(Object.keys(entryPoints).includes(parameter.entryPoints))) {
        result.response = false
        result.error_message = `this request body data \'entryPoints\' must have this value
         ${ Object.keys(entryPoints) } not ${parameter.entryPoints}`

    } else if(!(Object.keys(carSizes).includes(parameter.carSize))) {
        result.response = false
        result.error_message = `this request body data \'carSize\' must have this value ${ Object.keys(carSizes) }
         not ${parameter.carSize}`

    }

    return result;
}


const selectUnSelectParkingSpaces = (parameter) => {
    const parameterKeys = Object.keys(parameter);
    const parkingSpaceList = Object.keys(parkingSpaceSlot)
    let slotNameListCont = [];
    let identifySlotName = false;

    parkingSpaceList.map((data, index) => {
        const slotNameList = Object.keys(parkingSpaceSlot[data]);

        slotNameListCont.push(...slotNameList);

        if(slotNameList.includes(parameter.slotName))
            identifySlotName = true;
    });

    let result = {
        response: true,
        error_message: ""
    }

    if(parameterKeys.length !== 1) {
        result.response = false
        result.error_message = `this request accepts length of JSON body of 1 not ${parameterKeys.length}`

    } else if(!parameter.slotName) {
        result.response = false
        result.error_message = `this request required body data \'slotName\'`

    } else if(!identifySlotName) {
        result.response = false
        result.error_message = `this request body data \'slotName\' must have this value
         ${ slotNameListCont } not ${parameter.slotName}`

    }

    return result;
}

export { displayParkingSpaces, selectUnSelectParkingSpaces };
