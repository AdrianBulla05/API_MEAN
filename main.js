//Se guarda la constante express la libreria correspondiente a express
const express = require("express");
//Se guarda la constante cors la libreria correspondiente a cors
const cors = require('cors');

//Se guardan en la constante app todos los metodos de la libreria de express
const app = express();

const {dbConnection} = require("./connections/connections") 


//Creacion de la constante puerto en el que estaremos trabajando
const port = 1098;

//creación de la constante connectDB
const connectDB = '/api/users';

//creación de la constante userRoutes
const userRoutes = require("./routes/userRoutes");

// definicion para la autorizacion del puerto de Angular
app.use(cors(
    {
        origin: "*"
    }))

//Verificacion para que todos los documentos que se crean sean en objeto .json
app.use(express.json());

//ruta de acceso a informacion de la base de datos
app.use(connectDB, userRoutes);
dbConnection();
//Verificar si esta conectada la base de datos y el puerto asignado
app.listen(port, () => {console.log("El servidor se ejecuta en http://localhost:" + port)});
