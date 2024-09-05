const {Router} = require('express');//Exporta la funcion Router de la libreria 
//express para crear un router

const router=Router();//Crea una instancia de Router 

const {login}=require('../controllers/auth')//Importa el controlador 

//Define una ruta POST '/Login' que utiliza el controlador login 

router.post('/login', login)

module.exports = router;//Exporta el router para que esté disponible 
//Para otros modulos 

