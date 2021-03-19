const routes = require('express').Router();
const properties = require('./package.json')

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

routes.get('/about', (req, res) => {
    var about = {
        name: properties.name,
        version: properties.version
    }
    res.json(about);
});

module.exports = routes;