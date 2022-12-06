const logger = require('./logger');

const miFuncion = val => {
    if (typeof val === number) {
        return 2 * val;
    }
    return false;
}

const numero = 3;

try {
    console.log("Esta ejecutandose correctamente");
    const doble = miFuncion(numero);
} catch (error) {
    logger.info("ERROR NO SE A EJECUTADO")
}
