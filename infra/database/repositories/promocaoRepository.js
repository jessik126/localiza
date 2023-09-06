const Conexao = require('../conexao');
const ObjectId = require('mongodb');

module.exports = class PromocaoRepository {
    async inserir(promocao){
        const conexao = new Conexao();
        await conexao.connectToDatabase();

        await conexao.database.command({
            "collMod": 'promocao',
            "validator": {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["titulo"],
                    additionalProperties: false,
                    properties: {
                        _id: {},
                        titulo: {
                            bsonType: "string"
                        },
                        descricao: {
                            bsonType: "string"
                        },
                        dtValidade: {
                            bsonType: "date"
                        }
                    }
                }
             }
        });

        const collection = conexao.database.collection('promocao');
        return await collection.insertOne(promocao);
    }

    async recuperarPorId(id){
        const conexao = new Conexao();
        await conexao.connectToDatabase();

        const collection = conexao.database.collection('promocao');
        return await collection.findOne({_id: new ObjectId(id)});
    }
}