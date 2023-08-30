const Funcionario = require('../models/funcionario');

module.exports = class FuncionarioController {
    
    static async inserir(req, res){
        console.log(req.body);

        const funcionario = new Funcionario({
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

        funcionario.save(funcionario).then(data => {
            res.send(data);
        }).catch(error =>{
            res.status(500).send({mensagem: error.message || `Erro ao tentar inserir os dados do funcionario: ${funcionario}.`});
        });


    }
}