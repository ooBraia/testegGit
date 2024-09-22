const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.status(200).send({message: 'olá, mundo! estou funcionando...'});
})

app.listen(3001, ()=>{
    console.log("API rodando na porta 3001");

})