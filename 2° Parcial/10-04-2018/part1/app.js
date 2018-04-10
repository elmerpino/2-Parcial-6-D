var obj = {
    name: 'Elmer Pino',
    greet: function(param) {
        console.log('Hello ${ this.name }');
    }
}

obj.greet();
obj.greet.call({name: 'Luis Fajardo'});
obj.greet.apply({name: 'Luis Fajardo'});