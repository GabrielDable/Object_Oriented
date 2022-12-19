

peso = 4
altura = 3
idade = 5


class Animal {

    #restrito; // Private Instance Fields are declared outside form the constructor scope, but can be lately acessed from constructor
    static #restrito2 // They are not acessible by instances. They can not be called inside the constructor, only by the static methods or the class ( As It will construct any instance)
    static apenastatico = 4
   
    constructor (peso, altura, idade, y) { // Inside the Constructor there is the FIEL INITIALIZATION BODY. Once can not write private or instance field on it.

    this.peso = peso;
    this.altura = altura;
    this.idade = idade;
    this.#restrito = y;   
    }


    getanimal() {
        return `${this.peso} e ${this.altura} e ${this.#restrito}`
    }

    static getidade() { 
        this.#restrito2 = 5;
        return `a idade é ${this.idade} e restrito é ${this.#restrito2}`
    }

    static getidadef() {
        return " Static Methods Inherited from Pareting Class"
    }

    #getpeso() { // Like the public quivalent, there is no inheritance to other instances or subclasses. 
        return `o peso é ${this.peso}`
    }  

    getpesopublic() {
        return this.#getpeso()
    }
    
    getretritos() {
        return `O restrito2 é  e a retrição é ${this.restrito2}`
    }

}   


let ornito = new Animal (3,4,5, "restrito")

// console.log(ornito.#restrito) Error - An instance does not inherit private fields

console.log(ornito.getpesopublic()) // o peso é 3 - The private instance method within the same class scope - passing into a public instance method
// console.log(ornito.#getpeso()) - Error
console.log(ornito.getanimal()) // 3 e 4 e restrito - The created instance acess the public method that concatenare both public and private fields.
console.log(Animal.getidade()) // A idade é undefined e restrito é 5 - The Private Static Field is parsed by the public static method


// Subclassing

class mammals extends Animal  {
    
    constructor(raça, regiao) {
        super(peso,altura) /* Calling the fields from the 
        constructor to be passes to the subclass. It the arguments of 
        super is empty, the subclass will inherit all the methods, but no fields. */
        this.raça= raça
        this.regiao = regiao

    }

    getregiaoEpeso() {
        return `o peso é ${this.peso} e a região é ${this.regiao}`
    }  

 }


let gato = new mammals ("husky" , "rússia")

//Inspecting the inheritance

// Reference: https://betterprogramming.pub/es2022-a-complete-guide-on-private-static-class-fields-methods-and-static-initialization-blocks-f12943a86b2d


console.log(gato) // mammals { peso: 4, altura: undefined, idade: undefined, 'raça': 'husky', regiao: 'rússia'}
console.log(gato.getanimal()) //  4 e 3 - The subclass inherit the methods always, but the  considered fields must be invokated with SUPER

// Inspecting  inherited static methods and fields: 

console.log(gato.getregiaoEpeso()) // o peso é 4 e a região é rússia. A string template literal contatenaiting values from the parent class and from the subclass

//console.log(Animal.getidade()) // The Static Public Fields inside the function are not parameters in super (arguments)

console.log(mammals.getidadef()) //  Static Methods Inherited from Pareting Class 

console.log(mammals.apenastatico) // Inherited the Static Field despite not being in superclass constructor (It can not be there)

/* A Static Method can be inherited from the parenting class, but all the values inside the methods must be parsable between classes extentions */

/* Wrapping Up

Private Fields and Methods are not inherited by instances neither subclasses (Encapsulation). But They can be acessed by the Class constructor.
Public Fields and Method - despite static or instance - will be inherited.

    What is the difference between the inheritance of the instance or static public fields or methods ? 
        The instance values can be written inside the constructor and should be called in Super Argument, as they will build up instances.
        The static fields are inherited from upper class despite not being written in super method.
        Static Fields can notfinstance be written or called respectively in constructors or super. */

        // What is the use of a static private field as it can not be inherited ? 
            // It can be used inside a static private  method in the same private scope, providing encapsulation for the field value.