const mogoose = require('mongoose');

//essa representação é chamada de 'documentos embutidos', o funcionário contém as informações da pessoa no mesmo documento, assim como o cliente também contém as informações da pessoa
const Cliente = new mogoose.Schema({
    nome:{
        type: String,
        required: true
    },
    cpf:{
        type: String,
        required: true
    },
    idade:{
        type: Number,
        required: true
    },
    dtNascimento:{
        type: Date,
        required: true
    },
    telefone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    endereco:{
        type: String,
        required: true
    },
    numCarteiraMotorista:{
        type: Number,
        required: true
    },
    anoVencimentoCarteira:{
        type: Number,
        required: true
    },
    fotoCarteira:{
        type: Buffer,
        contentType: String,
        required: false
    }
}, {versionKey: false});

module.exports = mogoose.model('Cliente', Cliente)