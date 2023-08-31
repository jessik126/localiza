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
            res.status(500).send({mensagem: error.message || `Erro ao tentar inserir os dados do cliente: ${req.body.cliente}.`});
        });
    }

    static async buscar(req, res){
        console.log(req.body);

        Cliente.findOne({cpfCliente: req.body.cpfCliente}).then(data => {
            console.log(data);
            if(!data){
                return res.status(404).json({'mensagem':`Nenhum cliente encontrad com o cpf ${req.body.cpfCliente}.`});
            }
            res.send(data);
        }).catch(error =>{
            res.status(500).send({mensagem: error.message || `Erro ao tentar buscar os dados do cliente pelo CPF: ${req.body.cpfCliente}.`});
        });
    }
}