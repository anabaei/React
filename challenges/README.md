# Challenges

### Todo

- Need two satates, input and todo lists.
- `<input />` with handleon change to set input
- button to add todo to the list using using accumolate operator as

```javascript
const handleAddTodo = () => {
  setTodo([...todo, { text: input, completed: false }]);
};
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

### Weather

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

### Tips

##### Spread Operator

- The spread operator is a powerful feature in JavaScript that simplifies working with arrays, objects, and function arguments by providing a concise and flexible syntax for expanding iterable values into individual elements.

##### Shallow vs deep Copy

- Create a new object, the new object or array will have its own references to the same values as the original. But the nested values are unchanged, if you want all nesged values cahnge then use deep copy

```javascript
// Shallow copy of an array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
// deep copay or use lodash.cloneDeep
const deepCopiedArray = JSON.parse(JSON.stringify(array));
```
* https://api.github.com/

#### 
```javascript
export default function search() {
// above is wrong, correct it 
export default function Search() {
```



1- Todo App: Implement a simple todo application where users can add, delete, and mark items as complete. This exercise tests your understanding of React component structure, state management, and event handling.

2- Weather App: Build a weather application that fetches data from a weather API and displays the current weather conditions. This exercise assesses your ability to work with APIs, handle asynchronous data fetching, and update the UI accordingly.

3- GitHub User Search: Develop a user search feature that fetches GitHub user data based on a search query and displays the results. This exercise evaluates your understanding of React's controlled components, API integration, and rendering lists of data.

4- Carousel: Create a carousel component that displays a set of images or content and allows users to navigate between them using buttons or swipe gestures. This exercise tests your knowledge of React component lifecycle methods, event handling, and handling state transitions.

5 - write an unlimited scroll 


6- Pagination: Implement a pagination component that fetches data from an API and displays it in paginated form, allowing users to navigate through the pages. This exercise examines your ability to manage state, handle API pagination, and render data dynamically.

7- Drag and Drop: Build a drag-and-drop interface where users can drag elements from one container and drop them into another. This exercise assesses your understanding of React's event system, handling drag events, and manipulating the DOM.

Form Validation: Create a form with various input fields and implement validation logic to ensure that the data entered by the user meets certain criteria. This exercise evaluates your ability to manage form state, handle user input, and display validation errors.

Movie/Book Search: Develop a search feature that allows users to search for movies or books by title, fetches the data from an API, and displays the results. This exercise tests your skills in working with external APIs, handling user input, and rendering search results.

User Authentication: Build a user authentication system with registration, login, and logout functionality. This exercise tests your understanding of authentication flows, managing user sessions, and handling protected routes.

E-commerce Product Listing: Create a product listing page for an e-commerce website that fetches product data from an API and displays it in a visually appealing and user-friendly manner. This exercise evaluates your ability to work with complex data structures, handle API integration, and implement filtering or sorting functionalities based on name, date, type and country. 

Chat Application: Develop a real-time chat application where users can join chat rooms, send messages, and view the messages in real-time. This exercise examines your knowledge of React's lifecycle methods, working with websockets or real-time communication libraries, and managing state updates across multiple users.

Drag and Drop Kanban Board: Build a Kanban board interface where users can create columns, add tasks, and drag tasks between columns. This exercise tests your understanding of React's drag-and-drop libraries, state management, and updating data structures based on user interactions.

Image Gallery: Implement an image gallery component that displays a grid of images and allows users to filter or search for specific images. This exercise assesses your skills in handling image loading, optimizing rendering performance, and implementing interactive features.

Quiz Application: Create a quiz application that presents a set of questions, tracks user answers, and provides feedback on the results. This exercise evaluates your ability to manage application state, handle user interactions, and dynamically render content based on data.

Social Media Feed: Build a social media feed component that fetches posts from an API and displays them in a chronological order. This exercise examines your understanding of React's lifecycle methods, handling asynchronous data fetching, and rendering dynamic content.