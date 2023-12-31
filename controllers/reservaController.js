const Reserva = require('../models/reserva');

module.exports = class ReservaController {
    
    static async inserir(req, res){
        console.log(req.body);

        const reserva = new Reserva({
            placaCarro: req.body.placaCarro,
            cpfCliente: req.body.cpfCliente,
            status: req.body.status,
            dtInicio: req.body.dtInicio,
            dtFim: req.body.dtFim
        });

        reserva.save().then(data => {
            res.send(data);
        }).catch(error =>{
            res.status(500).send({mensagem: error.message || `Erro ao tentar inserir os dados do reserva: ${reserva}.`});
        });
    }

    static async buscar(req, res){
        console.log(req.body);

        Reserva.findOne({cpfCliente: req.body.cpfCliente}).then(data => {
            if(!data){
                return res.status(404).json({'mensagem':`Nenhuma reserva encontrada para o cpf ${req.body.cpfCliente}.`});
            }
            res.send(data);
        }).catch(error =>{
            res.status(500).send({mensagem: error.message || `Erro ao tentar buscar os dados do reserva pelo CPF do cliente: ${req.body.cpfCliente}.`});
        });
    }

    static async atualizar(req, res){
        console.log(req.body);

        const { id } = req.query;
        
        Reserva.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(data => {
            if(!data){
                res.status(404).send({mensagem:`Nenhuma reserva encontrada para o id ${id}.`});
            } else res.send({mensagem: `Reserva id ${id} atualizada com sucesso.`});
        }).catch(error =>{
            res.status(500).send({mensagem: error.message || `Erro ao tentar atualizar os dados do reserva id: ${id}.`});
        });
    }
}