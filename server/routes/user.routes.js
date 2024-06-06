const router = require('express').Router();
const { 
    crearUsuario,
    // Aquí debo desestructurar el resto de las funciones controladoras

} = require('../controllers/users.controllers')

// Ruta para crear un usuario
router.post('/api/users', crearUsuario)
    
// Ruta para obtener todos los usuarios
router.get('/api/users', (req, res) => {
    res.send({
        users: [
            {
                id: 1,
                name: 'Pedro',
                age: 25
            },
            {
                id: 2,
                name: 'Juan',
                age: 30
            },
            {
                id: 3,
                name: 'Carla',
                age: 35
            }

        ]
    })
})

// Ruta para obtener un usuario por su id
router.get('/api/users/:id', (req, res) => {
    // Formas de recibir información por la URL
    const id = req.params.id;
    const query = req.query;
   
    // Conectarme a la base de datos y recuperar el usuario por su id

    // Solo devolvemos como respuesta el id y el query
    res.json({
        id,
        query
    })

})

// Ruta para actualizar un usuario por su id
router.put('/api/users/:id', (req, res) => {
    // Formas de recibir información por la URL
    const id = req.params.id;
    const body = req.body;
   
    // Conectarme a la base de datos y actualizar el usuario por su id

    // Solo devolvemos como respuesta el id y el body
    res.json({
        id,
        body
    })

});

router.delete('/api/users/:id', (req, res) => {
    // Formas de recibir información por la URL
    const id = req.params.id;
   
    // Conectarme a la base de datos y borrar el usuario por su id

    // Solo devolvemos como respuesta el id
    res.json({
        id
    });
});

module.exports = router;