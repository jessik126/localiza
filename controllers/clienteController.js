const Cliente = require('../models/cliente');

module.exports = class ClienteController {
    
    static async inserir(req, res){
        console.log(req.body);

        const cliente = new Cliente({
            nome: req.body.nome,
            cpf: req.body.cpf,
            idade: req.body.idade,
            dtNascimento: req.body.dtNascimento,
            telefone: req.body.telefone,
            email: req.body.email,
            endereco: req.body.endereco,
            numCarteiraMotorista: req.body.numCarteiraMotorista,
            anoVencimentoCarteira: req.body.anoVencimentoCarteira,
            fotoCarteira: req.body.fotoCarteira
        });

        cliente.save(cliente).then(data => {
            res.send(data);
        }).catch(error =>{
            res.status(500).send({mensagem: error.message || `Erro ao tentar inserir os dados do cliente: ${cliente}.`});
        });


    }
}