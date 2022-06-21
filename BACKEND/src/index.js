const express = require ('express');
const app = express();
const port = ('port', process.env.PORT || 5000);

app.set('port', port);
app.listen(app.set('port'));

app.use('/', require('./routes/acceso'))
app.use('/categorias', require('./routes/categorias'))
app.use('/compra', require('./routes/compra'))
app.use('/alta', require('./routes/altas'))

console.log('SERVIDOR EN PUERTO');
