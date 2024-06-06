// Importación de módulos de node.
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Configuraciones
const app = express();
const PORT = 4000;

// Middlewares
// Cors
app.use(cors());
// Morgan
app.use(morgan('dev'));
// Interpretar objetos json
app.use(express.json())



// Rutas
app.get('/', (req, res) => {
    res.send('Servidor funcionando')
})

app.use(require('./routes/user.routes'));


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))





