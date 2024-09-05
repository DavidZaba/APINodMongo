//importamos una funcion responde desde el modulo express
const { response } = require('express')
//controlador para la solicitud get a la ruta de usuario
usuarioGet = (req, res = response) => {
    res.json({ msg: 'get API' })
}
usuarioPOST = (req, res = response) => {
    res.json({ msg: 'post API' })
}
usuarioPUT = (req, res = response) => {
    res.json({ msg: 'put API' })
}
usuarioDELETE = (req, res = response) => {
    res.json({ msg: 'delete API' })
}
module.exports = {
    usuarioGet,
    usuarioPOST,
    usuarioPUT,
    usuarioDELETE
}

