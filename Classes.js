/* Classes are Templates or Blueptint of an object. 

Encapsulation: Class Buble.

A class is a set of objects that inherit properties from the same prototype object and therefor generate from the same constructors
An object generate from a constructor function is an instance of classe, or istance of a object.prototype.
A constructor is a function that creates instances of an object. A constructor functions is the only object with prototype properties.
The prototype fo the constructor is the prototype of the recentcly created instance.
In JS, classes are actually Functions, nut they have no hoisting. Classes can not be called before being initialized. 
Each class has an constructor function.  

- CLass Expressions 

The name of class is declared after the calls keyword. I can be unnamed. The name is a property
local to the class scope. 


Class Name (Optional){ 
    Variables Fields Declaration
    Constructor (parameters) {
        this.property = null
        this.propery = null
    }
}

The body of the class is between {}
The code execute inside the body is in strict mode (every variabe must be declared before initialization).
The constructor is a special method for initializing all ths instances created whitin the class.
The fields for variable declarations is alqays before the Constructor. 

The properties created within the constructor block scope will be universal. 
Differently of prototype value assignment, the methods defined with the class are not declared with the constructor "function"

*/

// Example



 class Car {
    constructor(x) {
        this.numero = x
    }
    getcar() {
        console.log(this.numero)
    }

     time() {
        let date = new Date;
        return [date.getTime(), date.getDate()] // Returns an array of callable functions from Date.prototype.
    }    
}

console.log(Car.name) // Output OcO

let Car1 = new Car(4)

console.log(Car1.numero) // 4 
Car1.getcar()  // 4
console.log(Car1.time())   // [ 1655656893144, 19 ]


// Assessing the prototype chain

console.log(Car1 instanceof Car)
console.log(Car.isPrototypeOf(Car1)) // False - The object prototype of Car1 is the prototype property of the Constructor Function.
console.log(Car.prototype.isPrototypeOf(Car1)) // True
console.log(Object.getPrototypeOf(Car1)) // {}
console.log(Car1.constructor) // [Class Car] - The constructor treasures the class name and type as constructors of this instance. 




/* Classes - More Advanced


Public Fields

By default, all properties (fields) or methods of a class can be examined by outside (public fields)

They can be STATIC and INSTANCE PUBLIC FIELDS

They are enumerables, writables and configurables properties.

Public Fields always participate in ptototype inheritance.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields

* Public Static Fields 

The STATIC KEYWORD defines a static method or property or variable.
A Static method or property can be called without instantiating their class. (Regardeless of Instances)
The statics values can not accessed by any instance, only by the class itself or by the prototype chain.

*/

class ClassWithStaticField {
    static baseStaticField = 'base static field'
    static anotherBaseStaticField = this.baseStaticField
  
    static baseStaticMethod() { return 'base static method output' }
  }
  
  class SubClassWithStaticField extends ClassWithStaticField {
    static subStaticField = super.baseStaticMethod() // super is calling the superclass constructor, inherited via prototype chain. 
  }
  
  console.log(ClassWithStaticField.anotherBaseStaticField)
  // expected output: "base static field"
  
  console.log(SubClassWithStaticField.subStaticField)
  // expected output: "base static method output"  The Sublass inherited the static property from the upper class.
// expected output: "base field"


/* 

One can use the keyword SUPER to call the superclass object§s parente or functions. / (The prototype)

Super() can call a parent method
Spuer() can call properies defined in the parent class constructor.
Super () can refer tohe parent constructor

Syntax:

super(arguments);  // calls the parent constructor (only inside the constructor)
super.parentMethod(arguments);  // calls a parent method


*/

  class i {


      constructor(c,d) {
      this.p = c 
      this.z = d
      this.s = c 
      this.nonargument = null
      }

      methos(c) {
        return c
      }

      static noninheritable() {
          return "this is statical"
          
      }
    
  }

      class n extends i {

          constructor(n,o) {
              super(n,o) /* super is acessing all the properties defined from the parent class, and passing the arguments
              of the subsclass constrcutor to define the inherited properties of the  parent class */

              /* What is hidden here is:

              i.prototype.p  = n
              i.prototype.z = o
              i.prototype.s = n */

              
        
          }

          metehosuper(c) {
            return super.methos(c) // invokes the function from the superclass
          }
   
       static subclassStatic() {
            return super.noninheritable() // invoke a static method from the suprclass.
       }
   
   }
          
  

      ob = new n(45,50) 

      console.log(ob.p) // 45 inherited all the properties from the parent constructor, passing its own subclass constructor arguments to dfine them
      console.log(ob.z) // 50
      console.log(ob.s) // 45
      console.log(ob.metehosuper(5)) // 5
      console.log(ob.methos(10)) // 10
      console.log(ob.nonargument) // inherited despite super function does not pass any value to it
      console.log(n.noninheritable())  // this is statical. The subclass inherit static method fomr the parent class
      console.log(n.subclassStatic())  // this is statical. A Subblass method that invokes the statical parent method.


/*

/* Public Instance Fields

Only exists in a created instance of a class. 


* Public Static Methods */ 


class ClassWithStaticMethod {
  static staticMethod() {
    return 'static method has been called.';
  }
}

console.log(ClassWithStaticMethod.staticMethod()); // Onyl Callable by the class itself


// Public Instance Methods

class ClassWithPublicInstanceMethod {
  publicMethod() {
    return 'hello world'
  }
}

/* Priva Fields 

Private fields are only accessible within the class constructor and declaration, theferore 
I will be invisible and inaccessible (and therefore immutable) to any code outside of the class body.
They can not be acessed from the outside scope neither be called with out initialization.
There is no hoisting features for private fields.


Comparisions

Prototype Inheritance - Only Public Fields (super invocator)
Acessibility outside the class scope - Only Public Fields.
Static Fields: Both public and private area only acessible by the keyword this from the class
declaration scope.




/* THIS keyword

In instance public methods or fields, THIS refers to the istance it self. */

/* Private Instance or Static  Field-Properties.

*/

 class CarStatic {
    constructor(x) {
        this.numero = x
    }
    getcar() {
        console.log(this.numero)
    }

     time() {
        let date = new Date;
        return [date.getTime(), date.getDate()] // Returns an array of callable functions from Date.prototype.
    }    

    static displayname() { 
        return ` Hora e hora `
    }

    static displayname2() { 
        return  this
    }

    displyname3() {
        return this
    }
 }

 let CarStatic1 = new CarStatic(5)
 
 // console.log(CarStatic1.displayname()) - // Error - It can not acess a static method
 
 console.log(CarStatic.displayname()) //   Hora e hora - Returns the static method once de access is from the class rather than any instance.


 /* Stric Mode
 In functions, the this value is the global object. 
 Inside classes block scope, this keywords in called properties or static methods  only passes the global object value due to the syntatic boundary. 
 Classes block scopes are alqyas in stric mode. */

CarStatic.displayname2() // Returns the Global Object
 
let NewMeto = CarStatic.displayname2

 console.log(NewMeto()) // Undefined  - The block scope of the class is always in strict mode. 

 console.log(CarStatic1.displyname3()) // CarStatic { numero: 5 }

 

