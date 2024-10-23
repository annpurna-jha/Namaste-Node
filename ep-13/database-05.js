// Find Documents with a Query Filter
const {MongoClient}= require("mongodb");

const url = "mongodb+srv://annpurnajha4:Annpurna2002@namastenode.t4jex.mongodb.net/";

const client = new MongoClient(url);

const dbName = 'HelloWorld';//DB name 

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');

    // Find Documents with a Query Filter
    const filteredDocs = await collection.find({ firstName: "Annpurna" }).toArray();
    console.log('Found documents filtered by { firstName: Annpurna } =>', filteredDocs);

    return 'done';
}

main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close());