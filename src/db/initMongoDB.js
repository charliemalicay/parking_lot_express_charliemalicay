import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

import { dbCollections } from '../constants.js';


dotenv.config();

const { parkingSpace } = dbCollections;
const url = process.env.mongoDBURL;
const dbName = process.env.dbName;
const client = new MongoClient(url);
const db = client.db(dbName);
const parkingSpaceCollection = db.collection(parkingSpace.collection)


const main = async () => {
    await client.connect();

    const currentData = await parkingSpaceCollection.find({}).toArray();

    if(currentData && currentData.length === 0)
        await parkingSpaceCollection.insertMany(parkingSpace.defaultData);

    return 'Done Initialize Local DB';
}

main().then(console.log).catch(console.error).finally(() => client.close());

export { client, parkingSpaceCollection };
