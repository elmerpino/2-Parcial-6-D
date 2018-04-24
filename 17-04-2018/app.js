//las funciones son first class
//Invocacion al callback
//System Events and custom events (con array de funciones).
function greet(callback){
    console.log('Hola');
    var data = {
        name: 'Elmer Pino'
    };
    callback(data);
}

greet(function(data){
    console.log('The callback was invoked');
    console.log(data);
})

greet(function(data){
    console.log('A diferent callbac was invoked');
    console.log(data.name);
})