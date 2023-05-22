import { useState } from "react";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    console.log(input);
    setTodo([...todo, { text: input, completed: false }]);
    console.log(todo);
  };

  const handleDeleteTodo = (index) => {
    // const newtodo = todo.splice(index, 1);
    // setTodo(todo);

    const newTodo = [...todo];

    newTodo.splice(index, 1);

    setTodo(newTodo);
  };

  const handleCompleteTodo = (index) => {
    const newTodo = [...todo];
    newTodo[index].completed = !newTodo[index].completed;
    setTodo(newTodo);
  };

  return (
    <div className="App">
      <input onChange={handleChange} />
      <button onClick={handleAddTodo}>Add</button>

      {todo.map((item, index) => {
        return (
          <>
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "underline",
              }}
              onClick={(_) => handleCompleteTodo(index)}
            >
              <li key={index}>
                {item.text}
                {item.completed}
              </li>
            </span>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </>
        );
      })}
    </div>
  );
}
