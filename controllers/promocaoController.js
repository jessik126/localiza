const Promocao = require('../models/promocao');
const Cliente = require('../models/cliente');

module.exports = class PromocaoController {
    
    static async inserir(req, res){
        console.log(req.body);

        const promocao = new Promocao({
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            dtValidade: req.body.dtValidade
        });

        Promocao.save(promocao).then(data => {
            res.send(data);
        }).catch(error =>{
            res.status(500).send({mensagem: error.message || `Erro ao tentar inserir os dados do promocao: ${req.body.promocao}.`});
        });
    }
    
    static async enviarPromocao(req, res){
        //aqui é uma regra de negocio e poderia estar num serviço
        console.log(req.body);

        const { id } = req.query;
        const promocao = await Promocao.findById(id);
        console.log(promocao);

        const cliente = await Cliente.find({});
        console.log(cliente);

        res.json({'promocao': promocao, 'clientes': cliente}); //aqui poderia ser o envio de email

    }

}