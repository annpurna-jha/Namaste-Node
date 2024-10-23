// Index a Collection ->  can improve your application's performance.
const {MongoClient}= require("mongodb");

const url = "mongodb+srv://annpurnajha4:Annpurna2002@namastenode.t4jex.mongodb.net/";

const client = new MongoClient(url);

const dbName = 'HelloWorld';//DB name 

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');

    // Index a Collection
    const indexName = await collection.createIndex({ a:1 });
    console.log('index name =', indexName);

    return 'done';
}

main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close());