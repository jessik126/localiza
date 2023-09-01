const express = require('express');
const router = express.Router();

const CarroController = require('../controllers/carroController');

router.post('/carro', CarroController.inserir);
router.get('/carro', CarroController.buscarPlaca);
router.delete('/carro/:id', CarroController.deletar);

module.exports = router;