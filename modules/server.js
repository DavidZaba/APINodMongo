//Importa la libreria express para crear el servidor web 

const express=require('express');

//Importa la funcion de conexion a la base de datos

const {dbConnection}=require('../database/config');

//Importar la libreria CORS para permitir las peticiones desde otros dominos 
const cors=require('cors')

//Importar la libreria body-parser para guardar datso del cuerpo de las peticiones HTTP

const bodyParser=require('body-parser');


class Server{
    constructor(){
        this.app=express()//Iniciar la aplicación express 
        this.port=process.env.PORT;//Obtienen el puerto de conexión 
        //De las variables  de entorno 
        this.usuariosPath='api/usuarios'//Define la ruta base para las operaciones 
        //de autenticacion 
        //Relacionada con los usuarios 
        this.authPath='api/auth'//Define la ruta base para las operaciones 
        //de autenticacion 
        this.middlewares();//Configura los Middlwares de la aplicacion 
        this.routes();
        this.connectionDb();//Inicializamos la conexion en la base de datos
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Escuchando por el puerto $(this.port)`)
        })}


        middlewares(){
            //Configura los CORS para permitir peticion desde otros dominios 
            this.app.use(cors());
            //Configura el body-parse para parsear los datos del otro cuerpo de las peticiones HTTP 
            this.app.use(bodyParser.json());//Para parsear applicacion/json
            //configurar express.stactic para servir archivos estáticos 
            this.app.use(express.static(__dirname+"/public"));
        }

routes(){
    //Configurar las rutas de la aplicacion
    this.app.use(this.usuariosPath, require("../routes/usuario"))
    //Define la ruta para las operaciones de autenticacion  
    this.app.use(this.authPath, require("../routes/auth"))
}

async connectionDb(){
    //Conceta con la base de datos MONGOdb al inicio 
    await dbConnection()
}




}



module.exports=Server;