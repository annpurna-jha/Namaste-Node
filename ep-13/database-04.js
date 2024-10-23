// insert document into collection 

const {MongoClient}= require("mongodb");

const url = "mongodb+srv://annpurnajha4:Annpurna2002@namastenode.t4jex.mongodb.net/";

const client = new MongoClient(url);

const dbName = 'HelloWorld';//DB name 

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');

    // insert documents
    const data = {
        firstName: "Ranveer",
        lastName: "Singh",
        city: "Delhi",
    };
    const insertResult = await collection.insertMany([data]);
    console.log("Inserted documents =>", insertResult);

    return 'done';
}

main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close());