import express from 'express';
const app = express();
const port = 8080;
import {validaAno, retornaFatoHistorico} from './servico/servico.js'


app.get('/', (req, res) => {

    let ano = req.query.ano;
    
    if(validaAno(ano)) {
    
    let fato = retornaFatoHistorico(ano);

    res.json({fato: fato});

    } else {
        res.status(400).json({erro:'Parâmetro ano inválido'});
    }
});

app.listen(port , () => {
    let data = new Date();
    console.log(`Servidor node iniciado na porta ${port}, em:  ${data}`);
});