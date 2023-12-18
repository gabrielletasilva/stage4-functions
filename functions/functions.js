/*
    Function()constructor

    * expressão new
    * criar um novo objeto
    * * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }

}
const gabrielle = new Person("Gabrielle")
const joao = new Person("João")
console.log(gabrielle.walk())
console.log(joao.walk())

