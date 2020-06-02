// Archivo con la lógica de la conexión a la BD

const mongoose = require('mongoose');
const app = require('./app');
const port = 3000;


// URL Base de Datos

const BD = 'mongodb://localhost:27017/otoMusicApp';


// Conexión a y Servidor

mongoose.connect(BD, (err, res)=>{
    if(err){
        console.log(`El error es ${err}`);
    }else{
        console.log(`Conexión Exitosa`);
        app.listen(port, ()=>{
            console.log(`Puerto: ${port}`)
        });
    }
});