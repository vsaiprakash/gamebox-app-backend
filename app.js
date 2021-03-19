const express = require('express')
const app = express();
const routes = require('./routes');

var port = process.env.PORT || 3000;
    
app.use('/', routes);

app.listen(port, function () {
    console.log('Server started on port: ' + port);
});