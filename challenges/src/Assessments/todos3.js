import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import { useState } from 'react';


// TODO: pass in a section header to replace 'Get groceries'
// TODO: call deleteSection in an onClick event on the FontAwesomeIcon
function TodoSectionHeader() {
  return (
    <div className="todoSectionHeader">
      <h2>Get groceries</h2>
      <FontAwesomeIcon className="deleteTodoIcon" icon={faXmark} />
    </div>
  );
}

// TODO: pass in a todo list to replace 'Bananas', 'Apples', and 'Peanut Butter'
// TODO: call deleteTask in an onClick event on the FontAwesomeIcon
// TODO: mark each completed to do item with a strikethrough (see todoTaskCompleted in style.css)
function TodoSection() {
  return (
    <div className="todoSection">
      <TodoSectionHeader />
      <div className="todoSectionItems">
        <div className="todoTask">
          <label>
            <input className="todoTaskInput" type="checkbox" value="Bananas" />
            Bananas
          </label>
        </div>
        <FontAwesomeIcon className="deleteTodoIcon" icon={faXmark} />
      </div>
      <div className="todoSectionItems">
        <div className="todoTask">
          <label>
            <input className="todoTaskInput" type="checkbox" value="Apples" />
            Apples
          </label>
        </div>
        <FontAwesomeIcon className="deleteTodoIcon" icon={faXmark} />
      </div>
      <div className="todoSectionItems">
        <div className="todoTask">
          <label>
            <input
              className="todoTaskInput"
              type="checkbox"
              value="Peanut Butter"
            />
            Peanut Butter
          </label>
        </div>
        <FontAwesomeIcon className="deleteTodoIcon" icon={faXmark} />
      </div>

      <AddTask />
    </div>
  );
}

// TODO: create an addSection onKeyDown event handler to add a new section
function AddSection() {
  return (
    <>
      <FontAwesomeIcon className="plusIcon" icon={faPlus} />
      <input className="addTaskInput" placeholder="Add new section" />
    </>
  );
}

// TODO: create an addTodo onKeyDown event handler to add a new todo
function AddTask() {
  return (
    <>
      <FontAwesomeIcon className="plusIcon" icon={faPlus} />
      <input className="addTaskInput" placeholder="Add new todo" />
    </>
  );
}

// TOOD: create a deleteSection onClick event handler to delete a section
// TODO: display the list of sections dynamically using a passed in array of values
// TODO: pass in a section header to replace 'My To Do List'
function TodoList() {
  return (
    <div className="todoList">
      <h2 className="todoListHeader">My To Do List</h2>
      <AddSection />
      <TodoSection />
    </div>
  );
}

// TODO: start with an initialized list of items
function App() {
  return (
    <div className="app">
      <TodoList />
    </div>
  );
}

export default App;
