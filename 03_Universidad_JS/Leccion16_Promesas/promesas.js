//PROMESA BASICA
// let miPromesa = new Promise((resolved,rejected) => {
//     let expresion = false;
//     if(expresion){
//         resolved("Resolvió correcto");
//     }
//     else{
//         rejected("Se produjo un error");
//     }

// });

//DEFINICION DE THEN CON DOS PARAMETROS
//miPromesa.then(valor => console.log(valor), error => console.log(error));

// DEFINICION DE THEN Y CATCH
// miPromesa
// .then(valor => console.log(valor))
// .catch(error => console.log(error));


// PROMESA CON SET TIMEOUT
// let promesa = new Promise((resolved) => {
//     console.log("Inicio promesa");
//     setTimeout( () => resolved("Saludo con promesa y timeout"),3000 );
//     console.log("Fin promesa");
// });

// promesa.then( valor => console.log(valor));


// PALABRA CLAVE ASYNC
// indica que una funcion regresa una promesa
// simplifica el uso de las promesas
async function miFuncionConPromesa() {
    return "Saludo con promesa y async";
}

miFuncionConPromesa().then( valor => console.log(valor));


// ASYNC con AWAIT
async function miFuncionConPromesaYAwait() {
    let miPromesa = new Promise(resolved => {
        resolved("Promesa con await");
    });
    console.log(await miPromesa);
}

miFuncionConPromesaYAwait();


// PROMESA, SET TIMEOUT, ASYNC Y AWAIT
async function funcionConPromesaAwaitTimeout(){
    let miPromesa = new Promise(resolved => {
        setTimeout( () => resolved("Promesa con await y timeout"), 3000);
    });
    console.log( await miPromesa );
}

funcionConPromesaAwaitTimeout();