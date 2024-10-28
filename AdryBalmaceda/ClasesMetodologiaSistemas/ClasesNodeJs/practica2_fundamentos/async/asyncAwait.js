// la palabra async no es necesaria en las funciones, por que ya son asincronas
// igual proyectan una sincronia visual

async function hola(nombre){
    return new Promise(function (resolve, reject) {
        setTimeout( function(){
            console.log('Hola '+nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function hablar(nombre){
    return new Promise( (resolve, reject) =>{ // usar la sintaxis  ES6
        setTimeout( function (){
        console.log('bla bla bla')
        resolve(nombre);
     },1000);
    })
    
}

async function adios(nombre){
    return new Promise( (resolve, reject) => {
        setTimeout( function(){
            console.log('Adios '+nombre);
            resolve();
            //reject('Hay un error');
        }, 1000);
    })
}

// await hola('Ariel'); // ésto es una mala sintaxis
// await solo es valido dentro de una función asincrona.
// async se puede usar sin await PERO await no se puede usar sin el async
async function main(){
    let nombre = await hola('Ariel');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso...')
}

//console.log('Empezamos el proceso...')
//main();
//console.log('Esta va a ser la segunda instruccion')

// es asincrono y retorna una promesa
// código en ingles
function sayHello(name) {
    return new Promise((resolve, reject) => {
        setTimeout(  function(){
            console.log('Hello '+ name);
            resolve(name);
        }, 2000);
    });
}

function talk(name){
    return new Promise((resolve, reject) => {
        setTimeout( function(){
            console.log('bla bla bla');
            resolve(name);
        }, 2000);
    });
}

function bye(name){
    return new Promise((resolve, reject) => {
        setTimeout( function(){
            console.log('Bye '+ name)
            resolve();
        },2000)
    })
}
async function main2(name){
    console.log('Code in english')
    console.log('Starting async process...')
    await sayHello(name)
    await hablar();
    await hablar();
    await bye(name);
    console.log('Process completed.')
}
main2('Adri');