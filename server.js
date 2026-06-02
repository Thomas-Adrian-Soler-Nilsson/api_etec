//Thomas Adrian Soler Nilsson
//Samuel Roberto Dias Batista Amante
// Importa express
const express = require('express')

const mysql = require('mysql2');

const app = express()

app.use(express.json());

const conexao = mysql.createConnection({
    host: 'localhost',

    user: 'root',

    password: '',

    database: 'etec_api'
}

)

conexao.connect((erro) => {
    if(erro){
        console.log('erro ao conectar');

        return;
    }

    console.log('MySQL conectado')

});


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
    const sql = 'SELECT * FROM usuarios';

    conexao.query(sql, (erro,resultado) => {
        if (erro){
            
            console.log(erro);
            
            return;
        }
        res.json(resultado);
    }
    )
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
