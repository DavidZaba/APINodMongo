const {Router} = require('express');//Exporta la funcion Router de la libreria 
//express para crear un router

const router=Router();//Crea una instancia de Router 


const {usuarioGet, usuarioPost,usuarioPut,usuarioDelete,PromGet}=
require('../controllers/usuario')


//Definir rutas y asignar controladores a cada ruta
//Ruta para obtener todos los usuarios (GET '/')
router.get('/',usuarioGet)

//Ruta para obtener todos los promedios de los usuarios (PROMGET '/')
router.get('/promedio',PromGet)


//Ruta para crear un nuevo  usuarios (POST '/')
router.post('/',usuarioPost)

//Ruta para actualizar  un usuarios (PUT '/')
router.put('/',usuarioPut)

//Ruta para eliminar   un usuarios  existente (DELETE '/')
router.delete('/',usuarioDelete)


module.exports=router;






