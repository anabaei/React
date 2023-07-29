

  <details>
        <summary> Reducer </summary>
  
  * Reducer 
    * 
  * Reducer Right
  </details>

  <details>
        <summary> What is difference between map and for each </summary>

* arr.forEach((ar)=>{}) doesn't return anything, even if you return. Foreach uses same space
* arr.map returns an array,  you can add filter after that
* arr.(a => a*2).filter(a => a<4)

</details>
  <details>
        <summary> Flatten an array</summary>
  
* arr = [ [1,2,3], [4,5,6]]
* (...arr) -> spread one layer, 
* cancat add two or more arrays togather
```javascript
[].concat(...arr) -> flatten one layer [1,2,3,4,5,6]
```
* There is a built in flat function to pass depth flat(arr,2)
  
 <details>
        <summary> Find Uniqueness </summary>

/**
 * Implement a uniqueVals() function that will return an array
 * of unique values of a given object.
 *
 * uniqueVals({ a: 1, b: 1, c: 2 }) -> [1, 2]
 */

 * Solution1 
 ```javascript
function uniqueVals(obj) {
  const values = Object.values(obj); // Object.keys
  const uniqueValues = new Set(values);

  return [...uniqueValues];
  // return Array.from(uniqueValues)
}

 ```
 * Solution2 
 

</details>
</details>
  <details>
        <summary> var let const</summary>

* Var is function scope,  let and const are block scope
```javascript
{
  var pvar = 3
}
// 3
{
  let plet = 3
}
// error throw 
  const pconst = 3
}
//error throw 
```
### Initialize serveral times
* ...
```javascript
var ay = 33
var ay = 34
var ay
// no problem

// throw error
let ay = 33
let ay = 34
let ay
ay = 35 

// throw error
const ay = 33
ay = 35 
const a --> error
```
* 

</details>

<details>
   <summary> Composing </summary>

*  const compose = fun1(fun2(fun3)), an alternative is using reducer
* function compose(fun1, func2, func3) as:
```javascript
const compose => (...funcs) => {return (args) => {return funcs.reduceRight((accumulate, value)=> value(accumulate)), args}}
```
</details>

<details>
          <summary>  Hoisitng </summary>


* Variable declarations are processed before any code is execute
* 
```javascript
console.log(typeof variable); // Output: undefined.
//In JavaScript, an undeclared variable is assigned the value undefined at execution and is also of type undefined.

console.log(variable); // Output: ReferenceError: variable is not.defined. In JavaScript, a ReferenceError is thrown when trying to access a previously undeclared variable.
```
* https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript
* Always declare variables regardless of whether they are in a function or global scope. This clearly delineates how the interpreter should handle them at run time
```javascript
function hoist() {
  a2 = 20;
  var ab = 100;
}

hoist();
console.log("?", a2); 
console.log("?>", ab);
```
* What is the output?
```javascript
function hoist() {
  console.log(message);
  var message='Hoisting is all the rage!'
}

hoist();
// is undefined
```
* This is how the interpreter views the above code:
```javascript
function hoist() {
  var message;
  console.log(message);
  message='Hoisting is all the rage!'
}

hoist(); // Ouput: undefined
```
###  const, let
* With const, just as with let, the variable is hoisted to the top of the block
```javascript
console.log(hoist); // Output: ReferenceError: hoist is not defined
const hoist = 'The variable has been hoisted.';

hoist = "sss" // Output: TypeError: Assignment to constant variable.
```
* vv
```javascript
console.log(hoist); // Output: ReferenceError: hoist is not defined ...
let hoist = 'The variable has been hoisted.';
```
```
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function 
  // has access to the correct index
  setTimeout(function() {
    return function() {
      console.log('The index of this number is: ' + i);
    }
  }(), 3000);
}

for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function 
  // has access to the correct index
  setTimeout(function() {
    return function() {
      console.log('The index of this number is: ' + i_local);
    }
  }, 3000);
}
```

</details>

<details>
          <summary> "use strict" </summary>

* Strict is a restricted variant of JavaScript. It provides better security and stronger error checking
* strict will not tolerate usage of a variable before declaration
```javascript
'use strict';
* when you use "use strict" then if you leave not mentioning type of var it throws an error
```javascript
"use strict"
"use strict";
tt = "A" // throws error 
console.log("somthing")
```
 </details> 

<details>
          <summary>  JavaScript Object	& What is JSON </summary>

  * Everything in JavaScript is object [resource](https://javascript.info/object)
  * We can create an object in JavaScript as
  ```javascript
   newObj = {
     propertyName: "new name",
     data: "some info"
   }
  ```
  * JSON (in Javascript) is a string! JSON is not Javascript object. But it can be parsed and convert to JavaScript object as 
  ```javascript
  JSON.parse(javascriptString); // parse javascript string to javascript object
  JSON.stringify(javascriptObject); // Javascript object to string 
  ```
  * `YAML and JSON` Technically YAML is a superset of JSON. This means that, in theory at least, a YAML parser can understand JSON, but not necessarily the other way around.
  * Duplicate keys, which are potentially valid JSON, are definitely invalid YAML.
  * YAML has a ton of features, including comments and relational anchors. YAML syntax is accordingly quite complex, and can be hard to understand.
  ## Travers JSON
  
```javascript
let a = {
   name: "John",
   age: 32,
   city: "Hong Kong"
}
console.log(Object.keys(a).length)
```
* We can have 
```javascript
let a = {
   name: "John",
   age: 32,
   city: "Hong Kong"
}

for(let key in a) {
   console.log(key)
}
//  name, age, city
```

</details>

<details>
         <summary> Splice </summary>

* split and splice
```javascript
let mutatingReplace = ['a', 'b', 'c', 'd', 'e','g','j'];
mutatingReplace.splice(2, 2, 30);

//return
// 
//[ 'a', 'b', 30, 'e', 'g', 'j' ]
```
* slice (on string and arrays). Slice from index i to j
```
u = "0123456789"
slice(2,4)
23
```
* split (only on strings) return array
```javascript
a = "amir"
arr = a.split("")
['a','m','i','r']
```

</details>

<details> 
        <summary> Destrucutres </summary>
  
* Instead of calling via index we can have
```javascript
const arr = ['first', 'second', 'third']
console.log(arr[0]) // returns first
// 
const [A, B, C] = ['first', 'second', 'third']
console.log(A)// return first
console.log(B)// return second
// 
const [, , C] = ['first', 'second', 'third']
console.log(C)// return third

[a, b, ...rest] = [10, 20, 30, 40, 50] // rest = [30, 40, 50]
```

</details>


<details>
          <summary>  Questions	 </summary>
	
* What would be out put of below?
```javascript
function foo(){
    function bar(){
        console.log('amir')
        setTimeout(
            () => console.log('curly'), 1)   
    }
    console.log('lary')
    return bar
}
let x= foo()
x()
console.log('Moe')
```
* What is wrong if we dont have state inside construcor and no using this?
* assigning props inside childeren 
* Answer
```javascript
lary
amir
Moe
curly
```
</details>


<details> 
  <summary> This   </summary>

* This in cont

```javascript
const object = {
  message: 'Hello, World!',
  getMessage() { // this is a function
    const message = 'Hello, Earth!';
    return this.message;
  }, 
  newone: params => {
    console.log("ss")
  }
  or 
  //   getMessage: function() { 
  //   const message = 'Hello, Earth!';
  //   return this.message;
  // }
};
console.log(object.getMessage);
//--> [Function: getMessage]
console.log(object.getMessage());
// no need to specify the function keyword when defining functions inside objects.
// --> Hello, World!
```

* Why we need this! At below if the user wants to print `Hi There` how can he would?we want to call a variable of an objec that is part of.
```javascript
var obj = {
    val: 'Hi There',
    printVal: function() {
     console.log(this.val) // val
    }
}
obj.printVal();  // prints Hi There
```
* `This` keyword is a mechanism to reach out to containing object for the variable or properties that are on that object.
```javascript
var obj = {
    val: 'Hi There',
    printVal: function() {
     console.log(this.val) // val
    }
}
var obj2 = {
  val: 'Whats up'
}
obj2.printVal = obj.printVal
obj2.printVal()  // it prints whats up
```
* The reason it displays `whats up` because JS look at leading object. In this case is `obj2` and take that scope. 
* Below call the `this` as window object because `this` binds to nothing so it binds to window global scope, and `this.val` would referes to  undefined
```javascript
var print = obj.printVal;
print()
```
### Use Strict
* If we add `use strict` then we get error when we call 
```javascript
var print = obj.printVal;
print() // return undefined this, but without use strict we get a global scope as this 
```
* We can bind the object as 
```javascript
var print = obj.printVal.bind(obj2)
print()  // this one works and display `whats up`
```
* Remember `callbacks` are like `print` above. `this` in call backs refers to global scopes and not to current object. A good example fo callbacks are timeouts
```javascript
this.delaygreeting = function() {
  setTimeout(this.greet, 1000)
}
```
* To solve it we can either do bind callbacks 
```javascript
this.delaygreeting = function() {
  setTimeout(this.greet.bind(obj2), 1000)
}
```
* Or we can create a local variable and reference `this` to it as `_this`. Then our callback knows `this` means `_this` and not global scope 
</details>	
<details> 
  <summary> Async Patterns   </summary>
	
* Three patterns `callbacks` , `promises` `Asyn` in ES7 which uses a transpiler Babel
### Callbacks
* callbacks can end to callback hell and difficult to troubleshoot. One way to get ride of callback hell is not using anonymouse functions. 
* Node is always execute error and results as `function find(err, res){ if(err){ return done(err, null) } else{} }`
* Everytime we call done, it means we are out of callbacks, so we should `return` it. 
### Promises 
* Promises extract callbacks 
* Return `Hi` when promise resolve after a certain of time passed and return `bye` if promise rejected
```javascript
function sayHiToPerson(name) {
    return new Promise((res, rej)=> {
       setTimeout(() => { // Can't remove the timeout
       res(`Hi, ${name}!`);
    }, Math.floor(Math.random() * (5000 - 1000) + 1000)); // random number between 1000 and 5000
      rej('Bye');
    }) 
  }
```
* 
```javascript
function asyncMethod(message, calbak){
  setTimeout(function() {
   console.log(message);
   calbak();
   } , 500)
}
```
* And define asyncMethods as 
```javascript
asyncMethod('open DB Connection', function(){
    asyncMethod('Find User', function(){
        asyncMethod('validate User', function(){
	    asyncMethod('do stuff', function(){
	})    
     })
  })
})
```
* If we run the above, then we would see the callbacks in console. So we made async methods 
* Now make above with promises first add [cdn](https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.auto.js) 
```javascript
function asyncMethod(message){
 return new Promise(function(fulfill, reject) {
  setTimeout(function() {
   console.log(message);
   fulfill();
   } , 500)
   });
}
```
* Now it becomes like 
```javascript
 asyncMethod('open DB Connection').then(function(){
    asyncMethod('Find User').then(function(){
        asyncMethod('validate User').then(function(){
	    asyncMethod('do stuff').then(function(){
	})    
     })
  })
})
```
* Promise makes our function `then` able. If we define functions that returns `promises` so we can chain `then` above is exactly the same we have below 
```javascript
function findUser(){
 return asyncMethod('Find User')
}
function validateUser(){
 return asyncMethod('Validate user')
}
function validateUser(){
 return asyncMethod('do stuff')
}

asyncMethod('open DB Connection')
      .then(findUser)  // alternatively we can have error becasue of asyncmethod defination as .then(findUser, err) 
      .then(validateUser)
      .then(doStuff) 
      .then(function(){})
```
### Async/Await (coolest thing) 
* remember bable is a transpiler to convert js files into a code runnable as es6. Manually would be like
```javascript
babel app.js -o es6.js
```
* Async/Await limited the need for callbacks and promises.  
* `Wait` and `async` keyword help to wait until the function is done so we can have execute them in order
```javascript
async function main(){
 var one = await asyncMethod('open DB connection')
 var two = await asyncMethod('Find User')
 var three = await asyncMethod('Validate User')
 var four = await asyncMethod('do stuff')
}
main()
```
</details>	

<details> 
  <summary> NPM   </summary>

* create app.js as 
```
console.log('hi')
```
* then `npm init` which create `package.json` file. or `npm init --yes` for lazy ppl
* `engines` in package.json shows what engine we should use to run project. Node changes fast so it is good idea to have 
```javascript
npm config set save-exact=true
npm install express 
```
* above save exact version in package and not `^` because carrots means equal or bigger this version
</details>
<details> 
  <summary> JSON   </summary>
	
* Flow of data among web services 
* is string (JSON as well).
* To create web service at the end we call `JSON.stringify(res)`
* `json()` returns promise that resolve parsing of text as json. It uses when hittin gend point by callout function and want to send results to view as promise
* 


#### Parse from txt to JS 
* JSON is like only txt so unlike XML, there is no need to parse and javascript can convert JSON(txt) into JavaScript Objects using `JSON.parse` function
```javascript
var json = '{"result":true, "count":42}';
obj = JSON.parse(json);
console.log(obj.count); //  output: 42
console.log(obj.result); // output: true
```
#### Stringify from JS to txt
* On the other hand, `Stringify` converts JavaScript objects into a string as [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
```javascript
console.log(JSON.stringify({ x: 5, y: 6 })); //output: "{"x":5,"y":6}"
console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)])); // output: "[3,"false",false]"
console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] })); //  output: "{"x":[10,null,null,null]}"
console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5))); //  output: ""2006-01-02T15:04:05.000Z""
```
	
</details>

<details> 
	<summary> Lazy Loading </summary>

* Lazy loading is a practice that delays the initialization of web elements. It helps web performance, like you can stop a video from initializing
#### Intersection Observer API
* A built in browser tool for using lazy loading on different features. 
* To use Intersection Observer, first create a callback, which can be triggered by an element that intersects with a specified element or the viewport.
```javascript
let callback = (entries, observer) => {
  entries.forEach(entry => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```

</details>

<details> 
	<summary> RSA JavaScript </summary>

* RSA [link](http://people.cs.pitt.edu/~kirk/cs1501/notes/rsademo/index.html)
</details> 

<details> 
	<summary> Traverse Array </summary>
	
* Easy way is below or you can use `in` instead of `of`
```javascript
const myStringArray = ["Hello", "World"];
for (const s of myStringArray) {
  // ... do something with s ...
}
```
* Enumerate an object in JavaScript
```javascript
var obj = {
  "a": 1,
  "b": 2,
  "c": 3
};

for (var prop in obj) {
  if (obj.hasOwnProperty(prop)) { 
  // or if (Object.prototype.hasOwnProperty.call(obj,prop)) for safety...
    alert("prop: " + prop + " value: " + obj[prop])
  }
}
```
</details> 
<details> 
	<summary> Proccess.env Protorype class </summary>

* Here is good resource to understand [prototypes](https://hackernoon.com/prototypes-in-javascript-5bba2990e04b)
* The full path to this is provided in first two index, 
```javascript

```
</details>	
<details> 
	<summary> Buffer Objects I/O</summary>
	
* To perform any IO operation, you need to use `fs` module
```javascript
var fs = require('fs')
```
* All synchronous (or blocking) filesystem methods in the fs module end with `Sync`. To read a file, you'll need to use  
  `fs.readFileSync('/path/to/file')`. This method will return a Buffer object containing the complete contents of the file
*. `Buffer` objects are Node's way of efficiently representing arbitrary arrays of data, whether it be ascii, binary or some other format. `Buffer` objects can be converted to strings by simply calling the toString() method on them. e.g. var str = buf.toString().
* Like you can use this convert to string and split('\n') where it does equal action with `cat file | wc -l`
</details>
 
 <details> 
	<summary> Bitwise </summary>
	
* [Bitwise operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators) are operation based on binary represantation but returns standard numeric values 
```javascript
1 << 2 // shift to left 2 bite from righ convert 1 to 100 
4 
1 & 3 // returns 1 in which coresponding bit for both are 1 , 1 & 11 returns 1
1
1 & 4
0 
```
* Write all subsets of a set
```javascript
var arr = [1, 2, 3, 4,5,6];

function generatePowerSet(array) {
  var result = [];
//  result.push([]);

  for (var i = 1; i < (1 << array.length); i++) {
    var subset = [];
    for (var j = 0; j < array.length; j++)
      if (i & (1 << j))
        subset.push(array[j]);

    if ( subset.length > 3)
    result.push(subset);
  }

  console.log(result[1][1]);
  return result;
}

console.log(generatePowerSet(arr));
```
</details>
 *[callbacks](https://github.com/maxogden/art-of-node#callbacks)



----------------
----------------

#### JS Object
* An object is a collection of properties, and a property is an association between a name or key and a value. A property's value can be a function, in which case the property is known as a method. [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
* To create Object You define a normal JavaScript function and then create an object by using the new keyword. To define properties and methods for an object created using function() , you use the this keyword.
* In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object

* DOM event object spread through the document in a specific manner they always begin at the eldest node then trickle downwards to the target triggering any listener along the ways (capturing phase).
* Once an event reaches the target node, it is in a transition phase named 'At_Target' afterwards, the event bubbles up from parent to parant.
* JS leaking memory from [here](https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/)
 
#### Propagation
![CodeCore](https://user-images.githubusercontent.com/7471619/34623250-53082cba-f205-11e7-8869-da7a17f54ac5.png)
* A click event is dispathed to the target node begining from the #document and move to desending

##### Bubbling phase
*After Clicking on an event DOM first checks if there is a listener or not, if not then check its descender for leisterner and it continues till reach to a listener. They call the target finally. As the listener go up to next ascending dive, then it add one to phase.Start up at target and keeps it doing it until the end.
```javascript
qs('.doggo, body').forEach(node =>{node.addEventListener('click', e=> { const currentTarget = e.currentTarget; 
const {id, tagName, className, eventPhase} = currentTarget;});
});
```

##### Capturing phase
There is a capturing phase, it happen before bubbling phase that dom it does start it. if we aad capture: true, then totatlly would be desc order starts from body. 
This is like an algorithm that browsers use it. 
```javascript
qs('.doggo, body').forEach(node =>{node.addEventListener('click', e=> { const currentTarget = e.currentTarget; 
const {id, tagName, className, eventPhase} = currentTarget;}, {capture: true;});
});
```
* If we want to the event stop at a specific div and not continue going to ascending or descening parents we use stop
```javascript
if (currentTarget.matches(.divname) && e.eventphase == 3) {
e.stopPropagation();}
console.log(tagName);
)}
```

### S E L E C T I N G  N O D E S

 `document.getElementById`
☝️ a method that returns the first node in the document
 with a given id. It's fastest all the different selector methods.
 ```javascript
 let toxicTim = document.getElementById('toxic-tim');
 ```
 ##### <Any-Node>.querySelector
querySelector is a method available on nodes that returns the first node  from its descendents that matches a given CSS query.
You can use any CSS selector you've learned.
```javascript
let teamAquamarineHeading = document.querySelector('.team.aquamarine').querySelector('h1');
let lastDoggoOfTeamSalmon = document.querySelector('.team.salmon .doggo:last-child');
let allTeams = document.querySelectorAll('.team');
document.querySelectorAll('.team.khaki .doggo:not(:first-child)'); // select all but not the first child
```
* queryselectorAll returns all as an array of results
* Use the `.matches` method to test whether or not a node matches a CSS query.
```javascript
toxicTim.matches('div') // true
```
### Match
* The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object
Below returns "ain" matches in the string in case insensitive form  
```javascript
var str = "The rain in SPAIN stays mainly in the plain"; 
  str.match(/ain/gi);
```

##### M A N I P U L A T I N G  N O D E S

```javascript
toxicTim.style.backgroundImage = 'url(images/paws.jpg)';
toxicTim.style['border-top-right-radius'] = '15px';
toxicTim.style.backgroundImage = 'url(images/paws.jpg)';
```
* The .style property only returns the inline style of a node (those assigned  with the html attribute `style`.) To get all styles (from stylesheets and browser defaults) of a node, use the function `getComputedStyle`.
```javascript
let toxicTimStyle = getComputedStyle(toxicTim) // will return a big object containing *ALL* calculated
// styles for toxicTim.
toxicTimStyle.borderWidth; // returns "0px"
toxicTimStyle.borderRadius; // returns "0px 15px 0px 0px"
```
* Use the `.innerHTML` property to get all the HTML content of node as a string.
 ```javascript
 toxicTim.innerHTML; // returns "<h1>Toxic Tim</h1>"
// Write to it to replace the HTML contents of a node.
toxicTim.innerHTML = 'PAWS';
```
* To replace a content of an html use `outerHTML`
```javascript
toxicTim.outerHTML = 'new content';
```
All standard attributes of html nodes can be accessible, to acceess all attributes including your own custom attr instead you can use `getAttribute` as belows 
```javascript
toxicItem.id // returns id
toxicTim.getAttribute('id') // returns toxic tim's id
toxicItem.value // returns text

toxicTim.classList // returns a list of toxic tim's classes as an array 
toxicTim.setAttribute('id', 'moneybags-michael') // replaces toxic tim's id with moneybags-michael
```
 * To add a class use the method of `classList` `add`:
```javascript
toxicTim.classList.add('labourer');
toxicTim.classList.add('cancer', 'tumor');
```
To remove a class use the `remove` method:
```javascript
toxicTim.classList.remove('cancer', 'tumor');
toxicTim.classList.toggle('fighter') // removes fighter class
toxicTim.classList.toggle('fighter') // adds the fighter class
```
* Use the method `.hasAttribute` to check whether or not a node
```javascript
toxicTim.hasAttribute('id') // returns true
toxicTim.hasAttribute('href') // returns false
toxicTim.removeAttribute('id') // removes the id attribute
```
* Use the `.remove` method to remove a node from the DOM.
```javascript
toxicTim.remove();
```


#### Exercise
1. Change the color of all teams to fuchsia
```javascript
for (let node of document.querySelectorAll('.team')) {
  node.style.backgroundColor = 'fuchsia';
}
```

```javascript
document.querySelectorAll('.team').forEach(node => {
  node.style.backgroundColor = 'fuchsia';
})
```

2. Rename all doggos to Rob The Slob
```javascript
for (let doggo of document.querySelectorAll('.team .doggo')) {
  doggo.innerHTML = '<h1>Rob The Slob</h1>';
}
```
```javascript
a = document.querySelector("#logo > a")
a.setAttribute('href', "https://www.google.ca/")
```

##### C R E A T I N G  N O D E S

```javascript
const drillBitDarel = document.createElement('div')
drillBitDarel.innerHTML = '<h1>Drill Bit Darel</h1>';
```
* Adding nodes to the DOM
```javascript
Document.querySelector('.roster').appendChild(drillBitDarel);
```
🔥 🔥 🔥 🔥 🔥
* use the `.prepend` method to on a parent node to add a node as the first child of that parent node
```javascript
const teamKhakiRoster = document.querySelector('.team.khaki > .roster')
teamKhakiRoster.prepend(toxicTim);
```
* Use `.cloneNode()` to make a copy of a node without its descendents. Use `.cloneNode(true)` to make a copy of node including all of its descendents.
```javascript
const toxicTimClone = toxicTim.cloneNode(true);
teamKhakiRoster.prepend(toxicTim);
```
#### Parse Float output 🥊 
 ```javascript
 var res = 2 * 4;
 res = (parseFloat(res).toPrecision(2)); //Output would be `8.0`
```
#### Call Back 🗣
```javascript
function test(params1, prams2, func)
{
// do stuff
 func();
}
function test(params1, params2, function() => {
  console.log("hi")
});
```
#### Function Expression 💋
* A function created inside an expression or inside another syntax construct
```javascript
sum(1,2) // returns error because unlike functions, expressions are available just after they defined 
let sum = function(a, b) {
      return a + b;
}; // or a shorter version with arrow function 
let sum = (a, b) => a + b;
```
#### !!
* !! means two !, below are equals
```javascript
!!var1 same as var1 !== 'undefined' && var1 !== false && var1 !== null
```
#### Map vs forEach
* For each
```javascript
let arr = [1, 2, 3, 4, 5];
```
```javascript
arr.forEach((num, index) => {
    return arr[index] = num * 2;
});
```
* Output
```javascript
arr = [2, 4, 6, 8, 10]
```
* forEach() affects and changes our original Array, whereas map() returns an entirely new Array — thus leaving the original array unchanged and map is 70% faster than foreach and chainable using filter reduce etc ...
* Map
```javacript
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map(num => num * 2).filter(num => num > 5);
arr2 = [6, 8, 10]
```
* Notice: you can not use if inside foreach callback from [this](https://stackoverflow.com/questions/38274001/if-condition-inside-foreachs-anonymous-function-does-not-work)
## Reduce 
* The reduce() method reduces the array to a single value. [link](https://ultimatecourses.com/blog/array-reduce-javascript)

```javascript
const items = [
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 }
];
```
Then use reduce to add price as
```javascript
const reduced = items
  .map(item => item.price)
  .reduce((prev, next) => prev + next);

// Total: price
console.log(found);
```
## String 
#### Slice vs Substring vs Substr
* Slice() takes 2 args, first is begining and second is ending position
```javascript
var numbers="0123456789";
console.log(numbers.slice(2,4));   // shows 23
```
* Substring() takes 2 args, first starting and second is optional ending
```javascript
console.log(numbers.substring(3));  // shows 3456789
```
* Substr() takes 2 args, first starting point and second is the lenghth of it
```javascript
console.log(numbers.substr(2,5)); // shows 23456
console.log(numbers.substr(-3));// shows 789  if lenght is ommited!
 ```
 Strings from [this link](http://www.tothenew.com/blog/javascript-slice-vs-substring-vs-substr/)
#### Search vs Indexof
* Search method searches a string for a specific value, and return the position of the value if not found return -1
```javascript
var str = "Visit W3Schools!";
var n = str.search("W3Schools"); // return 6
var n = str.search(/blue/i); // ignore case sensitiveness 
```
* IndexOf works exactly same but indexOf just can use strings but search accept regulare expressions and  indexof is faster

### callBacks
* To Asynch action we use callbacks, passing a function as last params to another funciton and then call that function inside. 
```javascript
	function getInput (options, callback) {
    allUserData.push (options);
// Pass the global variable generalLastName to the callback function​
    callback (generalLastName, options);
}
```
### jQuery

* jQuery is a javascript library that allows you to simplify DOM manipulation. It is looks like querySelectAll code but starting with `$`. jQuery returns an array of objects with node js and it has its own functions.
* For example if we have 
```javascript
$('a').attr('href') 
```
* This replaces the values of href all anchor tags
* It returns the first href attribute of first `$('a')[1]` returns first node that doesn't have nifty jQuery methods but `$('a').eq(1)` returns a wraped node with jquery
```javascript
$('.shap.blue).removeClass('blue').addClass('red')
```
* jQuery's map mehtod getting node, index parameters in reverse than the map in plain JavaScript. in JS we have (node, index) in jQuery we have as below
* When iterating over a jQuery collection, the nodes we get back are reqular JS nodes and need to be wrapped with $ if we want to use jQuery function otherwise JS functions still works

```javascript
$('a').map((index,value) => value.innerHtml
or with jQuery
$('a').map((index,value) => $(value).html
```
* Creat and add a new node to selected tag
```javascript
$('ul').prepend($('<div> this new tag </div>'))
```
*  `on` works as `addEventListener` in JavaScript. 
* map is callback like `on` 
```javascript
$('.blue').on('mouseenter', e=> {console.log('yes')});
$('.blue').on('click', e=> {console.log('yes')});
```
### JavaScript World
* 

### Promises

* To get the resolved value from a promise, use the `.then` method. When the status of the promise is changed to `resolved`, a callback passed to `then` will be called with the promise value as its argument.

* A question version from [this](https://github.com/CodeCoreYVR/class-notes-sept-2017/blob/master/js-promises/question.js)

One to Many Associations:

one to one  example:-- user per a profile,



rails g model answer question:reference body:text

it tells question has foreign key, 

then it creates db for us, 

then we add index:true in front of that, 
index then create a data structure that its default is binary search with log(n) fast

then run the migration 

# belongs to can be optional 
belongs_to :question, optional: true


// these both are the same 
Question.find(a.question_id)
a.question 
http://guides.rubyonrails.org/association_basics.html#belongs-to-association-reference

// 
Has many 
http://guides.rubyonrails.org/association_basics.html#the-has-many-association

q is the one question
q.answers << Answer.create(body: 'tow')
q.answers // gives back all the answers belongs to that question

.to_formatted_s 


# POST /questions/5/answers
Nested resources 

in console we c we have app object 

// parent resource is question and child is answer 
app.question_answers_path(quesiton_id)

// each quesiton has many ids so we can define it as it is. 

resource :questions do
   resource :answers  , only: [:create, :destroy]
end 


inside the form because we want to have form for the each question belongs to each answer,
then we have to write it as 

<%= form_for [@question, @anwer] do |f| %>
  <% f.text_area :body %>
<% end %> 


def create 
 question = Question.find params[:quesiton_id]
 /// it means only one parametr as body is permited through the params 
 answer_params = params.require(:answer).permit(:body)
 
 // answer = Answer.new(answer_params)
 // answer.quesiton
 //render json: params
end 


/// 
validates :body, presence: true

we can use render by any display by providing the path, then for validation since we 
render the page, we have to intiialize all @ansers and other local variables 


now for delete


helpers:
simple function to refactor our code, the error messages to refactor the code, 
// search for rails content_tag 
<%= errors_for @answers %>

def errors_for(model)
  content_tag :div, somefunctions 
  some functions 

end 


html skip// by defaults strings returns from hlper method are escaped, 
// meaning special charactors are not interepreted as HTML
def htmlsafe
 '<div class="somehting"> this is what you want </div>'.html_safe 
end

it tell rails none of the charactors are not to be skipped and they are html_safe


Refrence Delete:

in has many: 
it delete all associated answers to question be deleted 

// will update the question_id in all associated answers to null
dependent: :nullify 
we can tell it dependent: :destroy 

if we go to answr controllers 

  ////////////// Dom  
Day 27 Dom Manipulation

toxicTim.children.__proto__

HTMLDIVElement /// we can manipulate them easily by adding things
HTMLCollection /// then we have to address the array  then manipulate them 

// toxiTim is an selected attribute here 
toxicTim.children.__proto__
toxicTim.children[0].__proto__


Document object model, 
is just taking an html we write and transfer to browser. 

Tag is just a text
but a node is DOM object which is transfer to browser. 

the very top node is document, you can type node inside console chrom, 

console.dir(document)
javascript representation of DOM, it convert DOM to an object javascript, 
even html is. 

$0 each node has a number, which works like an onject.

It can be used instead of any object instead of  document except getelementbyid, other get elements
work decsendending. 

// the way firt 
team[0].getelemensbyclass('name')

// it returns the first match 
document.querySelector('.doggo:last-of-type') 

document.querySelector('.doggo > .myname last-of-type')  
 class myname should be a child of doggo wihtout any div between
document.querySelector('.doggo  .myname last-of-type') 
 it covers all myname classes nested inside of doggo class 

document.querySelector('.doggo:last-of-child') 
document.querySelector('.oneclass .doggo:not(last-child)') 

document.querySelectorAll('.team')

/// the fastest selection is not query selector, it is getelemenbyid and is O(1). 

document.querySelector('#nameId')
document.querySelectorAll('#name')[0] // it selects only one 

// it selects twos 
document.querySelectorAll('#name , #lary')

// 
  document.querySelectorAll(.name .dogo:not(:first-child)) 
  
  // select the second child of them 
  document.querySelectorAll(.name .dogo:nth-child(2)) 

// it returns the next sibling one , if there is no sibling then we get null. 
toxicTim.nextElementSibling 
// it gets the same node that share same parent 
.previousElementSibling 

// returns the parent node of the current node 
.parentElement

.childeren

.childNodes
// you can access to text with it 


/// CSSS
let div = document.getElementById('toxic-tim')

// either of each 
div.style.color = 'green';
div.style['color'] = 'green';


getComputedStyle(div)


outerHTML

// it does replace the the div selected with everything we pass even name of div  
div.outerHTML = '<h1> this samwa way </h1>'

// it replace the texts inside the the div we selected 
div.innerHTML = '<h1> this samwa way </h1>'


// 

div.classList
div.classList.add('labour')
div.classList.remove('injured ', 'lsboutr')
div.classAdd 
div.classRemove
// it tells is it 
div.classList.contains('labour')
// it add or remove the the class 
div.classList.toggle('labour') // returns on and off 


div.setAttribute('data-name', 'thename')
div.hasAttribute('data-name') // returns true or false 
div.getAttribute('data-name') // returns the value of attribute 


/// since queryselector select an array and then we loop through it. 
document.querySelectorAll('.team').forEach(node => {
  node.style.backgroundColor = 'fuchsia';
});


for (let node of document.querySelectorAll('.team')) {
  node.style.backgroundColor = 'fuchsia';
}



Creating nodes

// Create new nodes that isnt attach to Dom

call appendChild to a add a node passed arg as last child 

div.querySelector('.roster').appendChild(newdiv)

///???
insert before it insets the firstarguemnt, the second argument and after firstargu. in front of a child of second argument
div.insertBefore(firstargu, secondargu)







// SELECTING NODES

// document.getElementById
// getElementById is a method that returns a node with a given
// id pass as argument. It's the fastest of all the different
// selector methods.
let toxicTim = document.getElementById('toxic-tim')

// <Any-Node>.getElementsByClassName
// getElementsByClassName is a method that returns an array-like object
// containing all nodes that match the classes given as argument.
// It can be used on any node (including document) to search only
// the descendants of that node.
let doggos = document.getElementsByClassName('doggo')
// returns all nodes with the doggo class
let teamAquamarine = document.getElementsByClassName('team aquamarine')
// returns all nodes with team & aquamarine class

// <Any-Node>.querySelector
// querySelector is a method that returns the first node that matches
// a given CSS selection. You can use any CSS selector you know to find
// nodes.

let lastDoggoOfTeamSalmon = document.querySelector('.team.salmon .doggo:last-child')
let teamKhaki = document.querySelector('.team.khaki')

// <Any-Node>.querySelectorAll
// querySelectorAll is a method that returns all nodes that match a given CSS selection.
// You can use any CSS selector just like querySelector.

doggos = document.querySelectorAll('.doggo')
let lastDoggosOfAllTeams = document.querySelectorAll('.team .doggo:last-of-type')

// E X E R C I S E: Picking Doggos
// 1. Select Knight Nicholas by id
document.querySelector('#knight-nicholas')
document.getElementById('knight-nicholas')
document.querySelectorAll('#knight-nicholas')[0]

// 2. Select Moneybags Michael & Larry The Lion
document.querySelectorAll('#moneybags-michael, #larry-the-lion')

// 3. Select all Team Khaki Doggos but the first
document.querySelectorAll('.team.khaki .doggo:not(:first-child)')

// 4. Select the second doggo in every team
document.querySelectorAll('.team .doggo:nth-child(2)')

// NAVIGATING NODES
// With a node selected, we have access to several methods to access nodes
// that are siblings, parents or childen.

// .nextElementSibling & .previousElementSibling
// nextElementSibling gets the next node that shares a the same parent of the current
// node and the reverse for previousElementSibling.

let bumbleBertha = toxicTim.nextElementSibling
let ninaTheNinja = toxicTim.nextElementSibling.nextElementSibling

toxicTim.previousElementSibling // returns `null`, because it does wrap around

// .parentElement returns the parentNode of the current node
let roster = toxicTim.parentElement
let teamSalmon = roster.parentElement

// .children
// .children returns an HTMLCollection of all nodes that are immediate children
// of the current node

teamSalmon.children // returns its title and .roster
let teamSalmonDoggos = teamSalmon.children[0].children // returns all doggos of the team

// .matches
// Returns a boolean based on whether a node matches the CSS query given

toxicTim.matches('.doggo') // returns true
toxicTim.matches('div.fighter') // returns true
toxicTim.matches('a.doggo') // returns false

// MANIPULATING NODES

// Changing Inline Styles
// Nodes have a `style` property whici is an object that contains all inline styles.
// Changing these properties will be immediately reflected in the DOM.

toxicTim.style.color = 'Aquamarine'
toxicTim.style.border = 'thick solid salmon'
toxicTim.style['border-radius'] = '5px'

// When using dot notation to refer to a CSS style, make sure to
// use camelCase instead of kebab-case.

// To get all calculated styles, those that are default, declared in a stylesheet
// or even inline, use getComputedStyle

let toxicTimsStyles = getComputedStyle(toxicTim)
toxicTimsStyles.top
toxicTimsStyles.bottom
toxicTimsStyles.borderRadius

// Modifying the contents of node
// .innerHTML
// When read, returns the HTML inside of a node
toxicTim.innerHTML // returns `<h1>Toxic Tim</h1>`
// When written to, replaces the innerHTML with a string
/*
toxicTim.innerHTML = '<h1>Conny Coneface</h1>'
*/

// .outerHTML works nearly the same way as innerHTML except that
// it includes the node itself. This means that it can be used
// to completely the node and its contents.

// Manipulating HTML attributes
// For non-custom HTML attributes, you can refer to them by name except for class
// Use className or, better yet, classList

/*
toxicTim.id // returns Toxic Tim's id `toxic-tim`
toxicTim.id = 'bumble-bertha' // replaces Toxic Tim's id
*/

// For classes, it is recommended that you use the classList properties.
// In returns an array-like object with several utility methods:

toxicTim.classList
toxicTim.classList.add('labourer')
toxicTim.classList.add('injured', 'cancer')
toxicTim.classList.remove('fighter')
toxicTim.classList.contains('cancer')
// returns true if toxicTim has the class `cancer`
toxicTim.classList.toggle('cancer') // turns on and off the class
toxicTim.classList.toggle('cancer')

// There are more general methods to manipulate attributes on a node

// .setAttribute can be used to add an attribute. It takes the name of
// the attribute as the first argument and its value as the second argument.

// HTML attributes can only have strings as values.
toxicTim.setAttribute('data-date', '2018-01-01')
// ð adds custom addtribute `data-date` to Toxic Tim. This can be used for
// any kind of attribute.
toxicTim.getAttribute('data-date') // returns the value of the attribute `data-date`
toxicTim.hasAttribute('data-date') // returns true if the attribute exists ortherwise false
toxicTim.removeAttribute('data-date') // removes the attribute

// E X E R C I S E: Vandalise the Arena

// 1. Change the color of all teams to fuchsia

/*
document.querySelectorAll('.team').style.backgroundColor = 'fuchsia'
// BAD! querySelectorAll doesn't a return a node, but a collection of nodes
*/

// To affect all the nodes of a NodeList or an HTMLCollection,
// loop over with the .forEach method or use a `for .. of` loop.


document.querySelectorAll('.team').forEach(node => {
  node.style.backgroundColor = 'fuchsia';
});


for (let node of document.querySelectorAll('.team')) {
  node.style.backgroundColor = 'fuchsia';
}

// 2. Rename all doggos to Rob The Slob

for (let node of document.querySelectorAll('.doggo')) {
  node.innerHTML = '<h1>Rob The Slob</h1>';
}

// 3. Change all doggo pictures to that of a cat from the internet

let teamSalmonRoster = teamSalmon.querySelector('.roster')
teamSalmonRoster.appendChild(drillBitDarel)
// ð adds the newly created node, drillBitDarel, as child of `.team.salmon > .roster`
// node

// <Any-Node>.insertBefore
// Call .insertBefore on a node to add a node passed as the first argument
// in front a of a child (of <Any-Node>) passed as a second argument.

teamSalmonRoster.insertBefore(
  drillBitDarel,
  teamSalmonRoster.firstElementChild
)



/// get the first link of a page 
document.querySelector('a')

// get all links 
document.querySelectorAll('a')

// change all links from craiglist of links to my name
for (let node of document.querySelectorAll('a')) { node.innerHTML = "amir" }



/// change image of header 
var img = new Image();
img.src = "https://image.flaticon.com/teams/slug/google.jpg"
$0.appendChild('https://image.flaticon.com/teams/slug/google.jpg')

//change the font of all docs
document.body.style.fontFamily = 'papyrus'
// or 
document.querySelector('body').style.fontFamily = 'papyrus'


////
document.querySelector('a.image img').srcset = 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKTAAAAJDRmNTA3MDk1LTNkNDEtNDgyOS1hYjA1LTA2Yjc1YTE2OGE5Yg.jpg'

document.getElementById('firstHeading').innerHTML = 'Tam Kbeili'

for (let node of document.querySelectorAll('p')) {
  node.innerHTML = node.innerHTML.split('Pug').join('SPUD')
}

// prepands
function prepand(arg1,arg2){
  var parent = document.getElementById(arg1)
  var child = document.getElementById(arg2)
  child.id = 'newid'
  parent.appendChild(chile);
}


//////    Day30  jQuery 
////// Two capture phases in reading DOM. 

Events are dipatch to target node, they trickes down descendants to dispatching node (capture phase)
once the event reaches to target node, it is in between phase at target. Then event bubble up to parent 
until to reach parent node it is bubble phase. by passing a third argument true to addEventListener are triggered. 

/////// this phase is danger
Event start from target travel upward to ancester nodes (bubble phase)

/// we want to check how the events are spreading through capture phase,
to see capturing and bubbling phases, we have to use debug mood 

when you click on something then you would have all ancestors that are trigger. 
// to see phases it is an object of event name phase 

event.stopPropagation(); 
// it stop going down and up in event. it means we want to just trigger it. 


/// it returns tons of functions are available in jquery 
console.dir($) 
// tag name 
$('button')
$('button:nth-of-type(2)')

//select all ancer tags a inside li tags
$('li a')

$('.blue.circle').length
// it returns the length of object 

// select individual nodes 
$('.blue.circle')[0].className or
$('.blue.circle').eq(0)

add,remove,toggle alll are done in classList
but in jquery we use addclass, removeclass and toggleclass

// when you use a method to read it returns only one argument 

// it changes all attributes of href to google
$('a').attr('href', 'google')

// look at the second circle there is no . 
$('.circle').removeClass('circle').addClass('diamond')
// if we had to do it in javascript we had to loop trhou all 
// when writing in jquery all nodes all affected but when reading only the first node is affected
// remove the blue class from all shapes and replace with red 
$('.shape').removeClass('blue').addClass('.red')

// EXERCISE: Practice

// 1. Set the âclassâ attribute of all anchors to âhighlightâ with attr method
$('a').attr('class','highlight') // this works, but avoid using it becaue it totaly replace the class
// instead use addclass removeclass toggleclass instead.

// 2. Replace all âcircleâ classes with the âdiamondâ class.
$('.circle').removeClass('circle').addClass('diamond')
// 3. Remove all shapes in the green & purple container.
$('#green-container .shape, #purple-container .shape').remove();
it retuens all the shapes inside containers 

// DEMO: html
innerHTML in jquery is html method
children property in jquery is children method filters 
parent property in jquery is a parent method filters 

// 1. Get "html" of the reset button.
$('#reset').html() it returns html inside that
// 2. Get "html" of all links.
$('ul').html() // returns only one 

$('a').map((index,node) => node.innerHTML())
$('a').map((index,node) => $(node).html())
// javascript $('ul').[0]

// 3. Change "reset" button to read "Launch Doggos!".
  $('#reset').html('loaunch Doggos!');
// EXERCISE: practice

// 1. Replace contents of every "td" with "yass"
$('td').html('yaaas');
// 2. Select parents of td tags
$('tr').parent();

// createElement method in javascript 
// 1. Create a "small blue diamond" with $ function
$(`
  <div class="small blue diamond shape"></div>
`)

// 2. Append "small blue diamons" to all containers

$('.container').append(
  $(`
    <div class="small blue diamond shape"></div>
  `)
)
/// add a section to a DOM and append a circle inside a container to it.  
// prepanad added before the current one and append added inside that 
$('h1').append($('<div class="container"></div>'))
$('.container:nth-of-type(1)').append($('<div class="small black circle shape"></div>'))

// 3. Prepend a new link, "http://www.nyan.cat", to the list of links
$('ul').prepend(
  $(`
    <li><a href="http://www.nyan.cat">Nyan Cat</a></li>
  `)
)

$('ul').prepend(
  $("<li><a href=\"http://www.nyan.cat\">Nyan Cat</a></li>")
)

///.on is more consitant 

JavaScript is run before the entire HTML is loaded. 
so all the dom manipulations that related to DOM so we need to wait the whole dom load first.

//in JavaScript we put all stuff inside this which needs the DOM be loaded first. 
document.addEventListener('DOMContentLoaded',() =>{

})


// Listening for events with jquery
// use the .on method with a jQuery list. jQuery will add an event
// listener for every in the list. It behaves nearly identically to addEventListener.
// It takes an event name as the first argument and a callback as the second argument.

document.addEventListener('DOMContentLoaded', () => {
  $('.blue.circle').on('mouseenter', event => {
    console.log('Blue circle away with DOMContentLoaded!')
  })
})

$(function () {
  $('.blue.circle').on('mouseenter', event => {
    console.log('Blue circle away with jQuery!')
  })

  $('#button-1').on('click', event => {
    $('.shape').remove()
  })
})


// 

$('#button-1').on('click', event =>{
  const{currentTarget} = event;
  $(currentTarget).attr('disable', true)

})


$('tr').on('mouseenter', event =>{
  const{currentTarget} = event;
  $(currentTarget).addClass('highlight');
})


/// Animations & affects
// Velocity JS is very good 
first one is the time we want to be done and second arg is the 
call back when the effects is complete 

// it is good idea to not to use => function because we need to use this here 
$('.blue').fadeIn(5000, funciton(){
    $(this).slidDown(1000);
})

/// also we can chain in another funciton 
$('.blue').fadeIn(500, funciton(){
     $(this).slidDown(1000, function(){
      $(this).fadeOut(200);
    });
});

/// To select a class combination of two or three in jquery we have to add them next to each other wihtout space
// space in selections means we nested selector or 

/// Exercise Labs
document.addEventListener('DOMContentLoaded', () => {

$('#form-1').append($(`
    <div id="22"></div>
  `));  
$('#form-message').html(' ');
  $('.shape').on('mouseenter', event => {
     const{currentTarget} = event;
     $(currentTarget).addClass('highlight');
  })



    $('.shape.small').on('click', event => {
     const{currentTarget} = event;
      
     $(currentTarget).hide();
  })

  $('.shape.medium').on('click', event => {
     const{currentTarget} = event;
      
     $(currentTarget).addClass('small');
     $(currentTarget).removeClass('medium');
  })
    $('.shape.large').on('click', event => {
     const{currentTarget} = event;
      
     $(currentTarget).addClass('medium');
     $(currentTarget).removeClass('large');
  })



 $('table').prepend('<tr> <td>  0 </td>  <td>  - </td></tr>');


    $('#button-1').on('click', event => {
     const{Target} = event;
      
     $('#green-container').toggle();
  })

      $('#button-2').on('click', event => {
      $('#button-2').fadeOut()
  })
      
      $('#button-3').on('click', event => {
      $('#button-2').fadeIn()
  })

       $('#button-4').on('click', event => {
      $('#green-container').slideUp()
  })

  //      $('#button-2').on('click', event => {
  //     $('#button-2').html("Button 2 ").fadeIn(30000)
  // })

  $(document).on('keyup', event => {
    if(event.keyCode == 71){
      $('.shape.grey').fadeOut()
    }else if (event.keyCode == 32){
      $('#green-container').append('<div class = "small blue circle shape"></div>')
    }
  })

  
  
  $('input').on('keyup', event => {
  a =   $('input').val();
  b = 14 - a.length; 
   $('#22').html(b);
  })

  /// Lab4 

  $('#form-1').submit(event =>{
   a = $('input').val();
   b = "red blue yellow green"
   
   if (a === "red" ||a === "blue" || a === "yellow" ||a === "green" )

   $('.'+a).hide();
   else 
   {
    $('#form-message').html('Alert, the color inoput is invalid');
   // event.stopPropagation(); 
    $('input').val('')
  }
  })


 /// Lab 5
  rev = [];
  $('input').on('keyup', event => {
  a =   $('input').val();
    a = a.slice(-1);
   // console.log(a);
   rev.push(a);
    console.log(rev);
    
   $('#form-message').prepend(a);
 //  $('#form-message').html(a);
  })


  $('#orange-container').on('click', event => {
    $('.shape.red').hide();
    
 //  $('#form-message').html(a);
  })
})

//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// Day 39 /////////////////////////////////////////
////////////////////////////// Advance JavaScript /////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

//concept of promises 
promises are kind of abstraction of asynchronyses 
callback is a function that call another function. 
all callbacks are asynchronyses. 
getting values from asynchronyses functiones. 
so when we want to get asynchronyses, we use callbacks. 
promises. ES6 
An abstraction


new Promise(function (){})
// here [[]] are set in language, open the promise, we gonna use 'catch' and 'then' methods 
new Promise((resolve, reject)=>{
  const resolveValue = 'It worked';
  resolve(resolveValue);
})

// promise contstrcutor returns two call back functions 
//here in below only reject works and another one doesnt work, 
new Promise((resolve, reject)=>{
  if (true) {
    // to throw an error inside a promise, user the reject function with error as its argument.
    reject(new Error('oops'))
  }
  const resolveValue = 'It worked';
  // to return a value from a promise, call the resolve function with the value as its argument
  // 
  resolve(resolveValue);
})

// DEMO: Flipping coin 

function flipCoin(){
  return new Promise((resolve, reject) =>{
    const side = ['head','tail'][Math.floor(Math.random()*2)]
    resolve()
  })

}

/// call function with call back in asyncronize mood 
function flipCoinWithCb(cb){
    const side = ['head','tail'][Math.floor(Math.random()*2)]
    if (typeof cb === 'function') cb(side);
}


// my solution 
// function rolldie(n){
//    const number = Math.floor(Math.random()*n + 1);
//       resolve(number)
// }

function roll(){
new Promise((resolve, reject)=>{
  const resolveValue = Math.floor(Math.random()*4 + 1);
  resolve(resolveValue);
})
}


new Promise((resolve, reject)=>{
  if (true) {
    // to throw an error inside a promise, user the reject function with error as its argument.
    reject(new Error('oops'))
  }
  const resolveValue = 'It worked';
  // to return a value from a promise, call the resolve function with the value as its argument
  // 
  resolve(resolveValue);
})

// resolve is somthing has meaning 


// EXERCISE: Roll Die
function random (number) {
  return Math.ceil(Math.random() * number);
}

function rollDie(number) {
  return new Promise(function (res, rej) {
    res(random(number));
  });
}
 

// DEMO: Throwing the Coin Too Far
function flipCoin () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const side = ['heads', 'tails'][random(2) - 1];
      resolve(side);
    }, 1000 + random(3000));
  });
};

// promises has three states, 
// [[]] means they are properties that you can not touch them, and already defien in lang

function flipCoin () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const side = ['heads', 'tails'][random(2) - 1];
      resolve(side);
    }, 1000 + random(3000));
    setTimeout(()=>{
     reject('the coin was thrown too far!');
    },3000);
  });
};

// .then always return a promise, argument pass to next then is the result 
// catch is the error 
// now you can run it inside the chrome 
flipCoin().then(resolveValue => {console.log(resolveValue)})
.then(resolveValue => {console.info('next value', resolveValue); return 10})
.then(resolveValue => {console.info('next value', resolveValue); return 14})
.then(resolveValue => {console.info('next value', resolveValue); return 18})

// output is 
head
10
14
18 
// these are asyncronize after  each other, the return always hand the value as resolveValue to 
// the next then. 

// the return of the flip always going be that 
flip.then(function(value){console.log(value)});

/// 


// librayr of blue beries 

// function de() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const side = ['heads', 'tails'][random(2) - 1];
//       resolve(side);
//     }, 1000 + random(3000));
//     setTimeout(()=>{
//      reject('the coin was thrown too far!');
//     },3000);
//   });
// };


/// converting settimeout function to work as a promise delay


// Define a delay function 
// function delay (ms, value) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), ms);
//   });
// }


function delay (ms, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), ms);
  });
}

/// 
delay(1000, 'hellow')
// .then(() => {
//   console.log('Waited 1s!')
//   return delay(2000, 'hellwo')
// })
.then(() => (result => console.info(result)) 
// {
//   console.log('Waited another 2s!')
//   console.info('Waited another 2s!')
// })

/// 

/// think about it 
/// then.resolve(3000).resulet
// it checkes whether it has two values or not if dont so 
// return the reuslt as an object holding a promise 
function delayWith (ms, value) {
  if (typeof value === 'undefined') {
    return result => new Promise((resolve, reject) => {
      setTimeout(() => resolve(result), ms);
    });
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), ms);
  });
}

////// promise Utility Mehtods 


/// Promise.resolve immediately returns that is resolve with an arg
Promise.resolve(20) // returns promise that resolved with PromiseValue 20
new Promise((resolve,reject)=>(20));

// Promise.regect immediately returns that is rejected with an argument

Promise.all executes an array of all promises and once the last one is resolved it returns, 


///
function parallelDemo () {
  console.time('parallelDemo total time');
  Promise.all([
    delay(1000 + random(2000), 10),
    delay(1000 + random(2000), 20),
    delay(1000 + random(2000), 30),
    delay(1000 + random(2000), 40),
    delay(1000 + random(2000), 50)
  ])
    .then(arrOfResolvedValues => {
      console.timeEnd('parallelDemo total time');
      console.log(arrOfResolvedValues)
    })
}

// Async Functions 
//with this we can eliminate call backs,

### Cruptoassets
https://medium.com/@linda.xie/beginners-guide-series-on-cryptoassets-d897535d887

### LESS
* link to [start](http://lesscss.org/)


* [Node JS](https://inteygrate.com/salesforce-nodejs-integration-with-streaming-api/)
* [JavaScript Algorithm](https://github.com/trekhleb/javascript-algorithms)
* [Regular Expressions](http://users.cs.cf.ac.uk/Dave.Marshall/Internet/NEWS/regexp.html)
* [Create Component](https://medium.com/@BrodaNoel/how-to-create-a-react-component-and-publish-it-in-npm-668ad7d363ce)
* [IK_link_christopher](https://docs.google.com/presentation/d/1zxzHpiEOhc_pAxNrK8yavSuv15IMA9Ru6ubl4KbdHxw/edit?pli=1#slide=id.g112f6017585_0_409)
* [code_base_examples](https://codesandbox.io/s/ik-course-sty8g?file=/src/principles/reduce/problem.js)
  

















