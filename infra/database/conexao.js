const mongoDB = require('mongodb');
const dotenv = require('dotenv');

module.exports = class Conexao {
    async connectToDatabase() {
        dotenv.config();
        const client = new mongoDB.MongoClient(process.env.DB_CONNECTION_STRING);

        await client.connect();

        this.database = client.db(process.env.DB_NAME);

        console.log(`Successfully connected to database: ${this.database.databaseName}`);
    }

    database;
}