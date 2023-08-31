const express = require('express');
const database = require('./configs/database');

// conexão com o banco de dados
database.mongoose.connect(database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log('conexão estabelecida com banco de dados.')
}).catch(err => {
    console.log('nao conseguiu conectar com banco de dados', err);
    process.exit();
});

// criando uma aplicação express
const app = express();

// definindo que vamos enviar e receber json na requisição
app.use(express.json());
app.use(express.urlencoded({extended: true}));

var carroRouter = require('./routes/carroRouter');
app.use('/', carroRouter);

var esportivoRouter = require('./routes/esportivoRouter');
app.use('/', esportivoRouter);

var utilitarioRouter = require('./routes/utilitarioRouter');
app.use('/', utilitarioRouter);

var clienteRouter = require('./routes/clienteRouter');
app.use('/', clienteRouter);

var funcionarioRouter = require('./routes/funcionarioRouter');
app.use('/', funcionarioRouter);

var promocaoRouter = require('./routes/promocaoRouter');
app.use('/', promocaoRouter);

var reservaRouter = require('./routes/reservaRouter');
app.use('/', reservaRouter);

const PORT = 3000;
const HOST = '0.0.0.0'

app.listen(PORT, HOST, () =>{
    console.log(`servidor executando na porta ${PORT}`);
});