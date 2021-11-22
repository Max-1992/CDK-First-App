exports.saveHello = async (event) => {
    console.log('Hello World!!!')

    return {
        statusCode: 200,
        body: 'Se proceso la petición correctametne saveHello!'
    }
}