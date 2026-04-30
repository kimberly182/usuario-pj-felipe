const express = require('express')
const path = require('path');

const validar = require('./middlewares/validar');

const app = require();

app.use(express.json());

//Servir HTML/CSS/JS
app.use(express.static(path.join(__dirname, 'public')));

//Rota com MIDDLEWARE
app.post('/cadastro', validar, (req, res) => {
    res.json({messagem: "Paciente cadastrado com sucesso" });
});

app.listen(3000, () => {
    console.log("Rodando na porta 3000");
});
