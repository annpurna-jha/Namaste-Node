// for performing operation into collection (User) with code
// we have to connect mongo db to project for this install mongodb package with - 
//**  npm i mongodb

// below code for connecting to the db server
const {MongoClient}= require("mongodb");

const url = "mongodb+srv://annpurnajha4:Annpurna2002@namastenode.t4jex.mongodb.net/";

const client = new MongoClient(url);

const dbName = 'HelloWrold';//DB name 

async function main() {
    // use connect() method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');
    return 'done';
}

main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close());