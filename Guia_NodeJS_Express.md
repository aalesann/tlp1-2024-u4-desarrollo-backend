
# Guía para Iniciar un Proyecto con Node.js y Express

## 1. Introducción a Node.js
Node.js es un entorno de ejecución para JavaScript que permite a los desarrolladores utilizar JavaScript en el lado del servidor. 
Es ideal para construir aplicaciones de red escalables y rápidas.

## 2. Instalación de Node.js
Asegúrate de tener Node.js instalado en tu máquina. Puedes descargarlo desde [aquí](https://nodejs.org/).

## 3. Iniciando un Proyecto Node.js

### Crear un Directorio para el Proyecto
```bash
mkdir mi-proyecto-node
cd mi-proyecto-node
```

### Inicializar el Proyecto
```bash
npm init -y
```
Esto creará un archivo `package.json` con la configuración predeterminada.

## 4. Instalación de Dependencias

### Express
Framework minimalista y flexible para Node.js.
```bash
npm install express
```

### CORS
Middleware para permitir solicitudes de diferentes orígenes.
```bash
npm install cors
```

### Morgan
Middleware para registrar solicitudes HTTP.
```bash
npm install morgan
```

## 5. Creación de la Estructura de Directorios

### Crear Directorios
```bash
mkdir src
mkdir src/routes
mkdir src/controllers
mkdir src/models
```

## 6. Configuración del Servidor

### Crear el archivo principal del servidor

- **src/index.js**
```javascript
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

### Crear las Rutas

- **src/routes/userRoutes.js**
```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

module.exports = router;
```

### Crear los Controladores

- **src/controllers/userController.js**
```javascript
const getAllUsers = (req, res) => {
    res.json({ message: 'Obteniendo todos los usuarios' });
};

const createUser = (req, res) => {
    res.json({ message: 'Creando un usuario' });
};

module.exports = {
    getAllUsers,
    createUser
};
```

### Crear los Modelos (opcional para esta guía inicial, pero es bueno tener una estructura preparada)

- **src/models/userModel.js**
```javascript
// Aquí puedes definir tu esquema de usuario si estás usando una base de datos
```

## 7. Ejecutar el Servidor

### Iniciar el Servidor
```bash
node src/index.js
```

### Probar Endpoints
Puedes usar herramientas como [Postman](https://www.postman.com/) o [Insomnia](https://insomnia.rest/) para probar tus endpoints:
- GET `http://localhost:4000/api/users`
- POST `http://localhost:4000/api/users`
