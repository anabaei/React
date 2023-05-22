import react, { useState } from "react";

const DropDown2 = ({options, 
    selected, 
    setSelected,
    setSortType,
    sortType, 
    types
  }) => {

      const eventHandler = (e) => {
        setSelected(e.target.value)
      }

  return (
    <select value={selected} onChange={eventHandler}>
      {options.map((option, index) => (
        <option key={index} 
        value={index}>
            {index}
        </option>
      ))}
    </select>
    
  );
};

export default DropDown2;
