'use strict';

class Person {
    constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}
    greet() {
        console.log('Hi '+ this.firstname + ' ' + this.lastname);
    }
}

var jose = new Person('Jose' , 'Fajardo');
jose.greet();

var gali = new Person('Galilea', 'Lopez');
gali.greet();


console.log(jose._proto_);
console.log(gali._proto_);
console.log(jose._proto_===gali._proto_);
