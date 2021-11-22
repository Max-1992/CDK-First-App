exports.getHello = async (event) => {
    console.log('GoodBye Worlld!!!')

    return {
        statusCode: 200,
        body: 'Se proceso la petición correctametne getHello!'
    }
}