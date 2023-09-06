// const mongoose = require('mongoose');

// const Promocao = mongoose.Schema({
//     titulo:{
//         type: String,
//         required: true
//     },
//     descricao:{
//         type: String,
//         required: true
//     },
//     dtValidade:{
//         type: Date,
//         required: false
//     }
// }, {versionKey: false});

// module.exports = mongoose.model('Promocao', Promocao);


//Criando um model sem o mongoose para poder ter mais flexibilidade na classe, podem usar validação e etc.
module.exports = class Promocao {
    constructor(titulo,descricao,dtValidade){
        this.titulo = titulo;
        this.descricao = descricao;
        this.dtValidade = dtValidade;
    }
}
