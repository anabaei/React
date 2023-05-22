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