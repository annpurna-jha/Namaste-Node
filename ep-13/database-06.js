// Update a document
const {MongoClient}= require("mongodb");

const url = "mongodb+srv://annpurnajha4:Annpurna2002@namastenode.t4jex.mongodb.net/";

const client = new MongoClient(url);

const dbName = 'HelloWorld';//DB name 

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');

    // Update a document like change the city from delhi to mumbai for 3rd document or ranveer singh
    const updateResult = await collection.updateOne({ city: "Delhi" }, { $set: { city: "Mumbai" } });
    console.log('Updated documents =>', updateResult);
    
    return 'done';
}

main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close());