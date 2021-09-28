const dbCollections = {
    parkingSpace: {
        collection: "parkingSpace",
        defaultData: [
            {
                parkSpaceSize: "smallSpacesParking",
                parkSpaceSlot: {
                    smSpA: {
                        available: true,
                        time_parked: null,
                        distance: {
                            entryNorth: 3,
                            entryEast: 6,
                            entryWest: 2,
                        }
                    },
                    smSpB: {
                        available: true,
                        time_parked: null,
                        distance: {
                            entryNorth: 2,
                            entryEast: 5,
                            entryWest: 3,
                        }
                    },
                    smSpC: {
                        available: true,
                        time_parked: null,
                        distance: {
                            entryNorth: 1,
                            entryEast: 4,
                            entryWest: 4,
                        }
                    },
                    smSpD: {
                        available: true,
                        time_parked: null,
                        distance: {
                            entryNorth: 2,
                            entryEast: 3,
                            entryWest: 5,
                        }
                    },
                    smSpE: {
                        available: true,
                        time_parked: null,
                        distance: {
                            entryNorth: 3,
                            entryEast: 2,
                            entryWest: 6,
                        }
                    },
                }
            }, {
                parkSpaceSize: "mediumSpacesParking",
                parkSpaceSlot: {
                    meSpA: {
                        available: true,
                        time_parked: null,
                        distance: {
                            entryNorth: 4,
                            entryEast: 5,
                            entryWest: 1,
                        }
                    },
                    meSpB: {
                        available: true,
                        time_parked: null,
                        distance: {
                            entryNorth: 3,
                            entryEast: 4,
                            entryWest: 2,
                        }
                    },
                    meSpC: {
                        available: true,
                        time_parked: null,
                        distance: {
                            entryNorth: 2,
                            entryEast: 3,
                            entryWest: 3,
                        }
                    },
                    meSpD: {
                        available: true,
                        time_parked: null,
                        distance: {
                            entryNorth: 3,
                            entryEast: 2,
                            entryWest: 4,
                        }
                    },
                    meSpE: {
                        available: true,
                        time_parked: null,
                        distance: {
                            entryNorth: 4,
                            entryEast: 1,
                            entryWest: 5,
                        }
                    },
                }
            }, {
                parkSpaceSize: "largeSpacesParking",
                parkSpaceSlot: {
                    laSpA: {
                        available: true,
                        time_parked: null,
                        distance: {
                            entryNorth: 5,
                            entryEast: 6,
                            entryWest: 2,
                        }
                    },
                    laSpB: {
                        available: true,
                        time_parked: null,
                        distance: {
                            entryNorth: 4,
                            entryEast: 5,
                            entryWest: 3,
                        }
                    },
                    laSpC: {
                        available: true,
                        time_parked: null,
                        distance: {
                            entryNorth: 3,
                            entryEast: 4,
                            entryWest: 4,
                        }
                    },
                    laSpD: {
                        available: true,
                        time_parked: null,
                        distance: {
                            entryNorth: 4,
                            entryEast: 3,
                            entryWest: 5,
                        }
                    },
                    laSpE: {
                        available: true,
                        time_parked: null,
                        distance: {
                            entryNorth: 5,
                            entryEast: 2,
                            entryWest: 6,
                        }
                    },
                }
            }
        ]
    }
}

const entryPoints = {
    entryNorth: "entryNorth",
    entryEast: "entryEast",
    entryWest: "entryWest"
};

const carSizes = {
    smallCar: "smallCar",
    mediumCar: "mediumCar",
    largeCar: "largeCar"
};

const parkingSpacesSizes = {
    smallSpacesParking: "smallSpacesParking",
    mediumSpacesParking: "mediumSpacesParking",
    largeSpacesParking: "largeSpacesParking"
}

const parkingSpaceSlot = {
    [parkingSpacesSizes.smallSpacesParking]: {
        smSpA: "smSpA",
        smSpB: "smSpB",
        smSpC: "smSpC",
        smSpD: "smSpD",
        smSpE: "smSpE",
    },
    [parkingSpacesSizes.mediumSpacesParking]: {
        meSpA: "meSpA",
        meSpB: "meSpB",
        meSpC: "meSpC",
        meSpD: "meSpD",
        meSpE: "meSpD",
    },
    [parkingSpacesSizes.largeSpacesParking]: {
        laSpA: "laSpA",
        laSpB: "laSpB",
        laSpC: "laSpC",
        laSpD: "laSpD",
        laSpE: "laSpE",
    }
}

const parkingCharge = {
    flatRate: {
        charge: 40,
        time: 3,
        currency: "Php"
    },
    excessRate: {
        time_start: 4,
        time_end: 23,
        time: 1,
        currency: "Php",
        charge: {
            [parkingSpacesSizes.smallSpacesParking]: 20,
            [parkingSpacesSizes.mediumSpacesParking]: 60,
            [parkingSpacesSizes.largeSpacesParking]: 100,
        }
    },
    overDayRate: {
        charge: 5000,
        time: 24,
        currency: "Php"
    }
}


export { dbCollections, entryPoints, carSizes, parkingSpacesSizes, parkingSpaceSlot, parkingCharge };
