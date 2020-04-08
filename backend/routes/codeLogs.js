const router = require('express').Router();
let CodeLog = require('../models/codeLog.model');

router.route('/').get((req, res) => {
    Exercise.find()
        .then(codeLogs => res.json(codeLogs))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    
    const newCodeLog = new CodeLog({
        username,
        description,
        duration,
        date
    });
    
    newCodeLog.save()
    .then(() => res.json(`Code Logged!`))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;