const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('Base de datos conectada en línea');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        throw new Error('Error al conectar la base de datos');
    }
};

module.exports = {
    dbConnection
};