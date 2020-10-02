import { NowResponse, NowRequest  } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'
import url from 'url'

// Criando cache de uma conexão com o banco de dados
// Se houver uma conexão com o banco essa conexão será retornada
// Isso permite que eu use uma mesma conexão. E que a cada requição não seja feita uma nova conexão com o banco
let cachedDb: Db = null;

async function connecToDatabase(uri: string) {
    if (cachedDb) {
        return cachedDb;
    }

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    // Pegando o nome do banco de dados na url de conexão com o mongoDB
    const dbName = url.parse(uri).pathname.substr(1);

    const db = client.db(dbName);

    cachedDb = db;

    return db;
}

export default async (req: NowRequest, res: NowResponse) => {
    const { name } = req.body

    const db = await connecToDatabase(process.env.Mongo_Connection);

    const collection = db.collection("users_created");

    const user = await collection.insertOne({
        name,
        createdAt: new Date()
    })

    return res.send({ user })
}