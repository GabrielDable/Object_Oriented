/* The constructor New generates a new objec within an instance.
// The difference between an object constructor function and a function realies on the syntax.
 Normal functions invocation are definied with parenthesis, and constructor functions with NEW. */

function Construcao() { // It is a convention to capitalize the first Character of a Object Function Constructor Identifier.

}

console.log(new Construcao) // Returns an empty object


// Now lets code parameters and properties within the constructor to pass it

  function Construcao(area, andar) {
    this.area = area
    this.andar = andar
}

console.log(new Construcao(4,5)) // Construcao { area: 4, andar: 5 }

/* Arrow functions can never be invoked as object constructors functions, as the this. objete-reference in
arrow functions will not refer to the parameters invoked within the original function

Prototypes are recommended to define functions that will be common methods for all the instances
of the same object. They are mostly used to define prototypes properties, only functions. But common properties can be set within the prototype

They never use the Keyword RETURN.

*/

 /* Syntax - Setting up Protypes

 / 1. Constructor

 (object_constructor_function).(prototype).(method) */

Construcao.prototype.calculo = function () {
        return this.andar + this.area
}

let casa1 =  new Construcao(6,5)
console.log(casa1.calculo()) // 11

console.log(casa1) // Construcao { area: 4, andar: 5 }. Methods definied with prototype will 
// appear as a content of the instance. 


// Accessing the Propotype of an Object.

console.log(Object.getPrototypeOf(casa1)) // { calculo: [Function (anonymous)] }



// Example 


x = 5
y = 8

let ob = function (x,y) { // THIS Keyword inherited by the instances, will referer to instantiated object rather the prototype.
    this.nombre = x
    this.filiacao = y
}

console.log(ob)


// Setting Methods onto the Prototype

ob.prototype.getdados = function getdad() {
    return `o nome é ${this.nombre}  e a filiacão é ${this.filiacao}`
}

ob.prototype.getCalculos = function () {
    return (2 * 4) + 10
}

// Setting Properties onto the prototype

ob.prototype.nombre = null  // It will not overwritte the own properties of the constructor (Property Shadowing)
ob.prototype.nombre2 = null



// Declaring an Object with the Function Constructor

let ob1= new ob("maria", "manuel")


// Setting a new Object Constructor Function 
let ob2 = function (z,y) {
    this.mae = z
    this.pai = y
}

// Setting the OB2 constructor prototype to inherit the OB Prototype


Object.setPrototypeOf(ob2.prototype, ob.prototype) // Set the prototype of OB2 in OB. Interrelates prototype properties of constructors.


console.log(ob2.prototype)  // [Function: ob]
Object.getPrototypeOf(ob2) // ob {}

let ob3 = new ob2("maria", "joao")


// Setting values to the properties in Ob3 inherited from OB

ob3.nombre2 = "marynk"

console.log(ob3) // ob2 { mae: 'maria', pai: 'joao', nombre2: 'marynk' }

// Analysing the Chain

console.log([[ob3]]) // [ [ ob2 { mae: 'maria', pai: 'joao' } ] ]
console.log(Object.getPrototypeOf(ob3)) // ob{}
console.log(ob3.getCalculos()) // 18
console.log(ob3) // ob2 { mae: 'maria', pai: 'joao' }


// Analysing the Prototype

console.log(ob3 instanceof ob) // TRUE - Syntax - The Object is an instance generated from this constructor

            // console.log(ob3.prototype.isPrototypeOf(ob)) // Error - the prototype property does not exist in OB3, as this is only an object rather than a constructor. It holds the property constructor only. 

console.log(ob.isPrototypeOf(ob3)) // False - Syntax: The object.prototype is prototype of the (object)
console.log(ob2.prototype.isPrototypeOf(ob3)) // True

console.log (ob3.constructor) // [Function: ob2] - The construct holds the reference of the constructor identifier.             
console.log(ob2.constructor) // [Function: Function]



/* The Prototype Chain: Object.Prototype (Global) - Ob.Prototype (Constructor) - Ob2.Prototype( Constructor)
                                (Constructed ob1)           (Constructed Ob3)   */




// References
// https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript
// https://www.youtube.com/watch?v=PFmuCDHHpwk


/* 2.Object.create

It Creates a new object using a previous object as prototype for the on-going instance.

Object.Create(proto, propertiesObject)

proto is the object which should be the prototype of the newly.created object.  */

let criator = {
    c : 4, 
    p : 7,
    getdad : function () {
        return 2
    }
}

let creator2 = Object.create(criator)

console.log(creator2.getdad()) // 2


// Analysing the prototype

console.log(criator.isPrototypeOf(creator2)) // True

// console.log(criator.prototype.isPrototypeOf(creator2)) // Error - It would function if the prototype was originally definied within the prototype property of a constructor.

// console.log(creator2 instanceof criator) // Error - TypeError: Right-hand side of 'instanceof' is not callable. Criator is not a constructor. 

console.log(Object.getPrototypeOf(creator2)) // { c: 4, p: 7, getdad: [Function: getdad] } - Returns the prototype object values

console.log(creator2.constructor) // [Function: Object]


/* set.PrototypeOf Versus Object.Create

It is highly recommended to use Object.Create rather than setPrototypeOf to set the prototype chain. 

In order to append a prototype chain across constructors, the Object.Create syntax will require the objects.prototype to be written, rather the simples object identifier. */

var ob7 = Object.create(ob.prototype)

console.log(ob7.getCalculos()) // 18

// Otherwise

var ob7 = Object.create(ob) 

// ob7.getCalculos() // Error, the prototype of the ob7 is not the constructor prototype property, but only its exclusive values out side the prototype property.












