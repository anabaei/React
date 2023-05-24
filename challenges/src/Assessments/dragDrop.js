import React, { useState } from "react";

export default function DragAndDrop() {
  const [draggedItem, setDraggedItem] = useState(null);
  const [dropedItems, setDropedItems] = useState([]);
  const itemsNames = ["item3", "item4"];
  const [itemsName, setItemNames] = useState(itemsNames);
  const handleDragStart = (event, index) => {
    
    event.dataTransfer.setData('text/plain', index);
    const ind = event.dataTransfer.getData('text/plain');
    console.log(ind)
    setDraggedItem(index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    // Add your logic here to handle the dropped item
    setDropedItems((prevItems) => [...prevItems, draggedItem]);
    // setItemNames(())
    console.log("Item dropped:", draggedItem);
    const ind = event.dataTransfer.getData('text/plain');
    const itemsNameshallowcopy = [...itemsName]
    itemsNameshallowcopy.splice(ind,1)
    setItemNames(itemsNameshallowcopy)
    setDraggedItem(null);
  };

  return (
    <div>
      <div onDragOver={handleDragOver}>
        {itemsName &&
          itemsName.map((item, index) => (
            <div
              key={index}
              draggable
              onDragStart={(event) => handleDragStart(event, item)}
            >
              {item}
            </div>
          ))}

        <div
          draggable
          onDragStart={(event) => handleDragStart(event, "Item 1")}
        >
          Item 1
        </div>
        <div
          draggable
          onDragStart={(event) => handleDragStart(event, "Item 2")}
        >
          Item 2
        </div>
      </div>

      

      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{ border: "1px solid black", padding: "10px" }}
      >
        Drop here
        {dropedItems &&
          dropedItems.map((item, index) => <div key={index}>{item}</div>)}
      </div>
    </div>
  );
}
