import React, { useState } from 'react';


export default function DragAndDrop() {
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (event, item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    // Add your logic here to handle the dropped item
    console.log('Item dropped:', draggedItem);
    setDraggedItem(null);
  };

  return (
    <div>
      <div
        draggable
        onDragStart={(event) => handleDragStart(event, 'Item 1')}
      >
        Item 1
      </div>
      <div
        draggable
        onDragStart={(event) => handleDragStart(event, 'Item 2')}
      >
        Item 2
      </div>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{ border: '1px solid black', padding: '10px' }}
      >
        Drop here
      </div>
    </div>
  );
}
