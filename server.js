//Thomas Adrian Soler Nilsson
// Importa express
const express = require('express')
const app = express()

//cria rota GET
app.get('/', (req, res) => {
    //retorna JSON
    res.json({
        mensagem: 'API funcionando',
        curso:'ETEC DS'
    });
});

//rota usuarios
app.get('/usuarios', (req,res) => {
    const usuarios = [
        {
            id: 1,
            nome: 'André',
            idade:'34',
            Email:'andréprof@gmail.com',
            Cidade:'Santo André'
        },

        {
            id: 2,
            nome: 'Maria',
            idade:'22',
            Email:'marialegal444@gmail.com',
            Cidade:'Susano'
        },

        {
            id: 3,
            nome: 'Tatu',
            idade:'3',
            Email:'tatubando@email.com',
            Cidade:'Ubatuba'
        },

        {
            id: 4,
            nome: 'Jorge',
            idade:'32',
            Email:'historia@hirtorio.com',
            Cidade:'Indaiatuba'
        },

        {
            id: 3,
            nome: 'Onça Parda',
            idade:'8',
            Email:'Oncaparda@email.com',
            Cidade:'Jales'
        }

    ]
res.json(usuarios);
})

//inicia servidor
app.listen(3000, () => {
    console.log("Servidor rodando");
})