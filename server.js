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

//rota de produtos
app.get('/produtos', (req, res) => {
    const produtos = [
        { id: 1, nome: 'Notebook', preco: 3500.00 },
        { id: 2, nome: 'Mouse Sem Fio', preco: 120.00 }
    ];
    res.json(produtos);
});

//rota de filmes
app.get('/filmes', (req, res) => {
    const filmes = [
        { id: 1, titulo: 'Interestelar', genero: 'Ficção Científica' },
        { id: 2, titulo: 'O Poderoso Chefão', genero: 'Drama' }
    ];
    res.json(filmes);
});

//rota de celulares
app.get('/celulares', (req, res) => {
    const celulares = [
        { id: 1, marca: 'Apple', modelo: 'iPhone 15' },
        { id: 2, marca: 'Samsung', modelo: 'Galaxy S24' }
    ];
    res.json(celulares);
});

//rota de jogos
app.get('/jogos', (req, res) => {
    const jogos = [
        { id: 1, titulo: 'Elden Ring', plataforma: 'PC / Consoles' },
        { id: 2, titulo: 'The Legend of Zelda', plataforma: 'Nintendo Switch' }
    ];
    res.json(jogos);
});

//inicia servidor
app.listen(3000, () => {
    console.log("Servidor rodando");
})
