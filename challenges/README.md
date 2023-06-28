


# Challenges

```javascript
npm create-react-app toDo
npm install react-bootstrap bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
yarn add react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
```

#### APIs
https://api.publicapis.org/
https://rapidapi.com/weatherapi/api/weatherapi-com/


### 1 
<details>
  <summary>  Todo  </summary> 

- Need two satates, input and todo lists.
- `<input />` with handleon change to set input
- button to add todo to the list using using accumolate operator as

```javascript
const handleAddTodo = () => {
  setTodo([...todo, { text: input, completed: false }]);
};

 const handleCheck = (index) => {
    console.log(index);
    const newTodo = [...todo];
    newTodo[index].isCompleted = !newTodo[index].isCompleted;
    setTodo(newTodo);
  };

 style={{textDecoration: element.isCompleted ? "line-through" : ""}}
```

- `return ()` includes an array read through

```javascript
todo.map((item, index)=>{ return ( )})
<li key={index}>
```

- set syle if not completed

```javascript
 <span
              style={{
                textDecoration: item.completed ? "line-through" : "underline"
              }}
              onClick={(_) => handleCompleteTodo(index)}
            >
```

- handleCompleteTodo is the one to change the complete task
  `newTodo[index].completed = !newTodo[index].completed;`

- add delete button to handle as `newTodo.splice(index, 1)`
</details>

### 2 
<details>
  <summary>  Weather  </summary> 
- Show the weather, set interval to hit endpoint
- UseEffect to fetch data, response includes data, status in json // no need to parse.json(response)
- setWeather useState to manage response
- return is conditional

```javascript
return (
  <div>
    {weatherData ? (
      <>
        <h1>{weatherData.location.name}</h1>
        <p>Description: {weatherData.curren.temp_c} C</p>
      </>
    ) : (
      <p>Loading weather data...</p>
    )}
  </div>
);
```

- Use axios to fetch

```javascript
await axios.get(apiUrl);
await axios.post(apiUrl, payload, { header });
```
</details>

### 3 
<details>
  <summary>  Drag and Drop  </summary> 
* first add `onDragOver` on items and the zone you want to drop to call anonymouse function prevent event default 
*  `dragable` built in tag to identify which object is dragable
*  `onDragStart` built in function to trigger a function using anonymouse function 
*  `onDrop` built in tag, to handle when drop over
*  On each event, we have event handlers to set states. State are array of items. to accumulate or remove 
*  On return is a map go over an array of items and display them, below can usefull when wants to delete an item
```javascript
 event.dataTransfer.setData('text/plain', index);
index = event.dataTransfer.getData('text/plain');
```
</details>

### Tips
<details>
  <summary> variables  </summary> 

#### Variables

* Variable define in global scope become property of global objects
  * If browser, the global object is window (window.myvar)
  * If node, global object is the module name  (mdodule.myvar)
* `const` , `let` are block scope, `var` is function scope 

#### This
* Manualy set this to a function
  * if a function uses this inside, you can pass an object to it to be its `this`
    * `myfunction.call(person)` , person is an object, 
  * If you don't want to call object right away, bind it later call and this is there
    * `const newfunc = myfunction.bind(person)`
  * If you want another object, you can use  `apply` instead of call



##### Spread Operator

- The spread operator is a powerful feature in JavaScript that simplifies working with arrays, objects, and function arguments by providing a concise and flexible syntax for expanding iterable values into individual elements.

* Flatten nested Javascript Array without using Array.prototype.flat()

##### Shallow vs deep Copy

-  Modifying the copied object affect the original object. To create independent copies of objects, you need to use appropriate techniques like
   - spread operators for shallow copies `[...arr]` , `{...obj}` or deep copies like `Object.assign()`, `JSON.parse(JSON.stringify())`
- Create a new object, the new object or array will have its own references to the same values as the original. But the nested values are unchanged, if you want all nesged values cahnge then use deep copy

```javascript
// Shallow copy of an array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
// deep copay or use lodash.cloneDeep
const deepCopiedArray = JSON.parse(JSON.stringify(array));
```
* https://api.github.com/
* https://api.github.com/search/issues?q={query}
  {&page,per_page,sort,order}
* https://api.github.com/users/openai/repos
* https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=FJkYOq9tW

#### 
```javascript
export default function search() {
// above is wrong, correct it 
export default function Search() {
```
* Accumulate states, we can update using setState as below
```javascript
setDropZoneItems((prevItems) => [...prevItems, draggedItem]);
```
* Map either put return with { } or use ().
* below print nothing, need uncomment `return` or remove`{}` and replace with `()`
```javascript
  {dropedItems && dropedItems.map((item) => 
  //return
             { // (
               <div key={item}>
                    
                     {item}    
                    
                </div>
             } // )
            
        )}
```

### Clean up function


* It performs when the component unmounts or when the dependencies changed
* It is useful for canceling subscriptions, clearing timers, or releasing any resources.
* return a function inside useEffect is cleanup function. One common clean up is return cancel axios to cancel request
```javascript
// on top
  useEffect(() => {
    const source = axios.CancelToken.source();
  .
  .
  .
    return () => {
        // Cancel the ongoing request
        source.cancel("Request canceled by cleanup");
    };
```


#### State Value
* If you update the state value directly and try to use setState with that not working! React can't recognize any change on object since it checks shallow copy. So to solve it you always need to make a copy shallow of the state, update it and then use it to set 
```javascript
const [anystate, setAnystate] = useState([])

anystate.push(1)
setAnyState(anystate) // not changing 

newvar = [...anystate]
newwar.push(1)
setAnyState(newvar) // works
```

### Test Async/Await

* `async` words just tell compiler that this function return a promise, so it wrapped it with a resolved promise
* Function body executes synchronously until it sees `await`. So it waits until the promise is resolved and controlled back to the place when `async` function was called and continue to execute the rest of codes
* When reached to the end of function, caller back to resolve the promise.
```javascript
 (async function(){
            console.log("before")
            const result = await axios.request(options)
            console.log("after")
            console.log(result)
        })();
  console.log("continue to the end of code")
// result
before
continue to the end of code
after 
result
```
* Remove await, which allows to go over next line without doing execution as async

```javascript
 (async function(){
            console.log("before")
            const result = axios.request(options)
            console.log("after")
            console.log(result)
        })();
  console.log("ss")
// result
before
after 
result(a promise)
ss
```
* Race between promise and I/o. To test that I added one setTimeout, as you see the result saying I/O is always on priority compare to promise queues. 

```javascript
    (async function(){
            console.log("before")
            const result = await axios.request(options)
            console.log("after")
            console.log(result)
        })();
        setTimeout(() => {
            console.log("from time out") 
        }, 0);
        console.log("continue to the end of code")
   
    })
// result
before
continue to the end of code
from time out
after 
result

```

</details>

### 4
<details>
  <summary> Search  </summary> 

* connect to github and search users
```javascript
// a good example of fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
```
* To handle search
```javascript
 const handleKeyDown = (e) => {
    e.preventDefault();
    const input = e.target.value;
    let selectedUsers = [];
    users.forEach((user) => {
      if (user.toLowerCase().includes(input)) {
        selectedUsers.push(user);
      }
    });
    setSearch(selectedUsers);
  };

```
</details>

### 5
<details>
  <summary> Carousel </summary> 
Carousel: Create a carousel component that displays a set of images or content and allows users to navigate between them using buttons or swipe gestures. This exercise tests your knowledge of React component lifecycle methods, event handling, and handling state transitions.
</details>

### 6 
<details>
  <summary> Form Validation </summary> 

* Form Validation: Create a form with various input fields and implement validation logic to ensure that the data entered by the user meets certain criteria. This exercise evaluates your ability to manage form state, handle user input, and display validation errors.
</details>

### 7
<details>
  <summary> write an unlimited scroll, pagination </summary> 

Pagination: Implement a pagination component that fetches data from an API and displays it in paginated form, allowing users to navigate through the pages. This exercise examines your ability to manage state, handle API pagination, and render data dynamically.

</details>

### 8
<details>
  <summary> Chat application, Pop Over </summary>

* Chat Application: Develop a real-time chat application where users can join chat rooms, send messages, and view the messages in real-time. This exercise examines your knowledge of React's lifecycle methods, working with websockets or real-time communication libraries, and managing state updates across multiple users.
</details>

### 8.5
<details>
  <summary> Quiz app </summary>

* Quiz Application: Create a quiz application that presents a set of questions, tracks user answers, and provides feedback on the results. This exercise evaluates your ability to manage application state, handle user interactions, and dynamically render content based on data.
</details>

### 9
<details>
  <summary> Star Rating, Design Accordion,  Debounce function  </summary>


</details>

### 10
<details>
  <summary> tic tac toe, snake ladder board, Calender, throttle function   </summary>


</details>

### 11
<details>
  <summary> Translation  </summary>

* 
</details>

### 12
<details>
  <summary> HTML, JavaScript  </summary>

* Implement accordion, form sort, validation based using javascript html 

### Only JS

* two3pointer
* fastSlow pointer
* slidingShow


#### Document vs Window
* Window represent javascript object in each browser or tab, variables and functions with no scope are global
```javascript
window.alert() is same as alert()
// navigation or new url
window.open()

setTimeout()
setInterval()
```
* Window object provides event listeners for browser events, `window.onload` `window.onresize` 
* `Document` represent HTML object. It is a property of window object. 
* Dom Manipulation like `document.getElementById()`, `document.createElement()` 
* Dom selection: like `document.querySelector()` 
* Styling: document object allow to styl like `document.body.style `
* Event Handling: DOM provides event listeners such as `document.onclick` 
* Form Handling: allow to interact with forms, like form and submit. 


### Event Listener

* `target element` One you want to attach event listener to it using `document.getElementById() or document.querySelector().`
* `event type`  This is a string that specifies the type of event you want to listen for, such as `click`, `keydown`, `submit`
* `event handler` this can handle the event 
```javascript
const myButton = document.getElementById('myButton');

function handleClick(event) {
  console.log('Button clicked!');
  // Additional code here...
}

myButton.addEventListener('click', handleClick);
```
* This is toggle use 
```javascript
const listItems = document.querySelectorAll('ul li');
    listItems.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('highlight');
      });
```
* In React the job of `Babel` is translate JSX to JS which is javascript format. 

</details>

<details>
  <summary> Authentications  </summary> 

###### JWT
* `JWT` is unique string that we give to users when they login, they use this token to verify their authenticity, it is encoded based on 64
* JWT has 3 parts, it is based on 
  * header: tells type and sign in algos 
  * payload: Includes basic informaiton like email, name, profile infos
  * signiture: To prove the authenticity of the data, it is created by header and payload using secret key. 
* Anyone can see data but can't change the JWT unless they have secret keys
* JWTs are stateless, it means whatever they need are inside tokens
* There is no regenerate token so if it is expire user needs to create new ones

* `localstorage`  
  * after close browser data is still there
  * 5-10 MB
  * Isolate to a domain -> security risk
  * Not cleared automatically and not send to server on each request automatically

* `cookies`
  * 4kb
  * send to server on each request automatically -> security risk
  * can set expiration data
  * access among different browsing devices
  * Dont save sensitive info in it
  * has limited of 20-25 

* `sessionStorage`
  * data is available only on one tab and not share with other tabs/windows
  * 5-10MB
  * Not sent on each HTTP request to server
  * When tab close it is gone
  * Not good for long term data
  

#### User Cycle using token
* User login in successfully
* Service use secret key to generate token
* Server send token to the user
* FE store token in cookies, sessions,local storage
  * each one has its own pros and cons
* Whenever user wants to send any other request, they send JWT along with request
```javascript
//header 
Authorization: 'bearer 9843hfoihfoahyfehfoehoewhohefo'
```
* Server verify the token

#### Signing vs Encrypting
* Siging make sure the data is not tamper
* Encrypting can even hide the actual data of payload from being seen

</details>


