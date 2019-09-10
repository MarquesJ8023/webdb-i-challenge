const express = require('express');

// database access using knex
const db = require('./dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
    db.select('*')
        .from('accounts')
        .then(posts => {
            res.status(200).json(accounts);
        })
        .catch(err => {
            res.json(err)
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('accounts')
        .where({ id })
        .first()
        .then(accounts => {
            res.status(200).json(accounts);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post('/', (req, res) => {
    const accountData = res.body;
        //validate postData before inserting into db

    db('accounts')
    .insert(accountData, 'id')
    .then(([id]) => {
        db('accounts')
        .where({ id })
        .first()
        .then(posts => {
            res.status(200).json(accounts);
        })

    })     
    .catch(err => {
        res.json(err)
    })
});

router.put('/:id', (req, res) => {
const changes = req.body;
db('accounts')
.where('id', req.params.id)
.then(count => {
    res.status(200).json({message: `updated ${count} records`})
})
.catch(err => {
    res.json(err)
})
});

router.delete('/:id', (req, res) => {
    db('accounts')
    .where({id: req.params.id})
    .del()
    .then(count => {
        res.status(200).json({message: `deleted${count} records`})
    })
    .catch(err => {
        res.json(err)
    })
});

module.exports = router;