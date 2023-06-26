

# JavaScript Design pattern


* `doc` hit tab -> html
* shift + ctrl + p, cmd +shift+p -> live

* Function as first class citizen: means a function can pass to function as variable, assign it to a variable, or return as result
```javascript
const calc = () =>{
    return 4+3
}
let aNumber = calc()
console.log(aNumber)
```
* callback: a faunciton is a function when you pass a function inside funciton and call it
```javascript
const calc = () =>{
    return 4+3
}
const printCalc = (cb) =>{
    console.log(cb())
}

printCalc(calc)
```
### Creational Pattern

* class/prototype pattern: provide blueprint for a type of object and we use it by creating new obj from that class. A class used to be prototype because of ES6 
```javascript
class Car {
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color
    }
}

const civic = new Car(4, 'v6', 'grey')
console.log(civic)

```
* constructor pattern: extends the current class, use super verb to initialize the parent class constructor 
```javascript
class Suv extends Car {
    constructor(doors, engine, color,wheels ){
        super(doors, engine, color)
        this.wheels = wheels 
    }
}
const cx5 = new Suv(4, 'v8', 'red', '4')

```
* singleton pattern: means allow only one instance of a class 
  
```javascript
let instance = null;
class Car {
    constructor(doors, engine, color){
        if(!instance){
            this.doors = doors;
            this.engine = engine;
            this.color = color
            instance = this;
        }else{
            return instance
        }
    }
}
const civic = new Car(4, 'v6', 'grey')
// here won't create new one because it is already created 
const honda = new Car(2, 'v4', 'blue')
```
* Factory Pattern: is good when you want to create other objects, like the acutal factory to create cars
```javascript
class Car {
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color
    }
}

class CarFactory {
    createCar(type){
        switch(type){
            case 'civic':
                return new Car(4, 'v6', 'grey')
            case 'honda':
                return new Car(2, 'v2', 'red')
            default
                return null
        }
    }
}

const factory = new CarFactory()
const civic = new factory.createCar('honda')

console.log(civic)
```

* Abstract Factory: is one step further in factory pattern. Here you can create multiple factory and classes. Like a car company with multiple factories. `autoManufacturer` is an abstract factory pattern to create any type of functions of this class

```javascript
class Car {
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color
    }
}

class CarFactory {
    createCar(type){
        switch(type){
            case 'civic':
                return new Car(4, 'v6', 'grey')
            case 'honda':
                return new Car(2, 'v2', 'red')
            default
                return null
        }
    }
}

class Suv {
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color
    }
}

class SuvFactory {
    createSuv(type){
        switch(type){
            case 'cx5':
                return new Car(4, 'v6', 'grey')
            case 'santa fe':
                return new Car(2, 'v2', 'red')
            default
                return null
        }
    }
}

const CarFactory = new CarFactory()
const SuvFactory = new SuvFactory()

const autoManufacturer = (type, model) =>{
    switch(type) {
        case 'car':
            return CarFactory.createCar(model)
        case 'suv':
            return SuvFactory.createSuv(model)
    }
}

// autoManufacturer is an abstract factory pattern, we can create any type of class

const cx5 =  autoManufacturer('suv', 'cx5')
```
### Structural pattern

* Module pattern: Encapsulate your code into pure function. import and export are key word which added codes when we need 

```javascript
// export const calc = () => {
const calc = () =>{
    return 4+ 3
}

export default calc;

///
import calc from './calc';
```
* Mixins pattern: add new object to the current class


```javascript

let carMixin = {
    revEngine() {
        console.log(`the ${this.engine}`)
    }
}
// car.prototype means car class 
Object.assign(Car.prototype, carMixin)
cx5.revEngine()
```
* Facede pattern: is a way to hide complexity of the code by creating components and usign them into another file. In react this pattern is used. When we have `<NewSingle />` this is facede pattern which a whole code is imported from another file.
* Flyweight pattern: when we create component, the brower stack them into memory to not save them twice into memory. This is looks like below
```javascript
let instance = null;
class Car {
    constructor(doors, engine, color){
        if(!instance){
            this.doors = doors;
            this.engine = engine;
            this.color = color
            instance = this;
        }else{
            return instance
        }
    }
}

```
* Decorator pattern: is looks like mixins just use `@` to add new object to the class
```javascript

class C{
    @my_func1()
    @my_func2()
    function hello(){
        console.log("aaa")
    }
}

```
* `MVC`: Model: data resign define schemas, View: visuals UI, and conctroller: logic of applications. View access to model directly 

* `MVP`: Model, view, presenter pattern. View doesn't have access to the model(unlike MVC) and it has to get it from presenter. presenter servce as logic. `Android`

* `MVVM` or `MVVC`: React patterns, Model view view controller (MVVC)
    * First view has no logic (stateless visuals)
    * Second view model: holds logic and state of data which connects to model (statefull visual)
    * Model: data

* `Memento` pattern: Serialize JS object into json for streaming into HTTP protocol. When receive response from backend as JSON, we need to deserialize it into JavaScript object for consumption into application

### Behavioral Pattern

* Command pattern: redux
    * actions: we call actions from an event
    * reducer execute actions
    * containers: figure out which case is the action, then run the function from reducer
    * reducer change state and return state with new change



# Redux
* 