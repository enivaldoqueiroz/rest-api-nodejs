const express = require('express');
const router = express.Router();

//Retorno as messagem do mural
router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota do mural de mensagens'
    });
});

//Insere um mensagem
router.post('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota do mural de mensagens'
    });    
});

//Retorna os dados da mensagem
router.get('/:id_mural', (req, res, next) =>{
    const id = req.params.id_mural

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Retornando o GET de da mensangem dop mural',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Voce passou um ID '
        });
    }    
});

//Altera uma mendagem
router.patch('/',(req, res, next) =>{
    res.status(201).send({
        mensagem: "Usando o PATCH dentro da rota do mural de mensagens"
    });
});

//Exclui uma mendagem
router.delete('/',(req, res, next) =>{
    res.status(201).send({
        mensagem: "Usando o DELETE dentro da rota do mural de mensagens"
    });
});

module.exports = router;