import express  from 'express';
import router from './routes/index.js';
import db from './config/db.js';


const app = express();

// Contectar la base de datos

db.authenticate() 
    .then( () => console.log('Base de datos Conectada'))
    .catch( error => console.log(error));


//Definir puerto

const port = process.env.PORT || 4000;

//Habilitar pug

app.set('view engine', 'pug');

// Obtener el año actual
//.use() responde a todos los verbos
app.use( (req, res, next) => {  
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";

    return next();
})



// Definir la carpeta publica para obtener imagenes y estilos
app.use(express.static('public'));

//Agregar router
app.use('/', router);

app.listen(port, () => { //arranca el servidor
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})