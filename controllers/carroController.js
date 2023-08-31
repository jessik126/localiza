const Carro = require('../models/carro');

module.exports = class CarroController {
    
    static async inserir(req, res){
        console.log(req.body);

        const carro = new Carro({
            placa: req.body.placa,
            ano: req.body.ano,
            modelo: req.body.modelo,
            tipo: req.body.tipo,
            quilometragem: req.body.quilometragem,
            diaria: req.body.diaria,
            observacao: req.body.observacao
        });

        carro.save(carro).then(data => {
            res.send(data);
        }).catch(error =>{
            res.status(500).send({mensagem: error.message || `Erro ao tentar inserir os dados do ${req.body.carro}.`});
        });
    }

    static async buscarPlaca(req, res){
        console.log(req.body);

        Carro.findOne({placa: req.body.placa}).then(data => {
            console.log(data);
            if(!data){
                return res.status(404).json({'mensagem':`Nenhum carro encontrado pela placa ${req.body.placa}.`});
            }
            res.send(data);
        }).catch(error =>{
            res.status(500).send({mensagem: error.message || `Erro ao tentar buscar os dados do carro pela placa: ${req.body.placa}.`});
        });
    }
}