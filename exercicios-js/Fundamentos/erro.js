function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw { // lança uma mensagem/informação
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{ // Ele tenta , se der erro vai pro catch
        console.log(obj.name.toUpperCase() + "!!!");
    } catch (e) {
        tratarErroELancar(e)
    } finally { // executa mesmo se da erro ou não
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj);