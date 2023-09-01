/**
* @swagger
* components:
*     schemas:
*         Carro:
*             type: object
*             required:
*                 - placa
*                 - ano
*                 - modelo                  
*                 - tipo                  
*                 - quilometragem                  
*                 - diaria                  
*             properties:
*                 id:
*                     type: string
*                     description: The auto-generated id of the book
*                 placa:
*                     type: string
*                 ano:
*                     type: number
*                 modelo:
*                     type: string
*                 tipo:
*                     type: string
*                 quilometragem:
*                     type: number
*                 diaria:
*                     type: number
*                 observacao:
*                     type: string           
*             example:
*                 placa: ABC1234
*                 ano: 2000
*                 modelo: uno
*                 tipo: utilitario
*                 quilometragem: 10000
*                 diaria: 100
*
* tags:
*   name: Carro
*   description: API Carro
* /carros:
*   post:
*     summary: Criar novo carro
*     tags: [Carros]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Carro'
*     responses:
*       200:
*         description: Carro criado.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Carro'
*       500:
*         description: Erro servidor
*
*/


const express = require('express');
const router = express.Router();

const CarroController = require('../controllers/carroController');

router.post('/carro', CarroController.inserir);
router.get('/carro', CarroController.buscarPlaca);
router.delete('/carro/:id', CarroController.deletar);

module.exports = router;