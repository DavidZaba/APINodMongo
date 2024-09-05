//Se conecta con la base de datos

const{Schema, model} = require('mongoose');//Importa las funciones schema y model de mongoose para definir
//esquemas y modelos de datos

//Define el esquema del modelo usuario 
const UsuarioSchema=Schema({
    nombre:{
        type:String,
        required:[true, 'El nombre es obligatorio']//Define el campo nombre es obligatorio 
    },
    email:{
        type:String,
    },

    password:{
        type:String,
        required:[true, 'El password es obligatorio'],//Define el campo password es obligatorio
        minlenght:3,//Se define la longitud minima del campo del password 
        maxlenght: [60, 'El password debe tener una longitud maxima de 60 caracteres'],
    },
    rol:{
        type:String,
        required:[true], //Define el campo rol es obligatorio 
        enum:['admin', 'Usuario']//Define que el campo rol solo puede tener valores 'Admin', o 'Usuario'

    
    },
    estado:{
        type:Boolean,
        default:true,
        required:[true, 'El estado es obligatorio']//Define el estado email es obligatorio 
    }

})


//Crea y exporta el modelo de usuario a partir del esquema UsuarioSchema

module.exports=model('Usuario', UsuarioSchema)















