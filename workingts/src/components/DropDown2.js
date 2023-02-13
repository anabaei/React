import react, { useState } from "react";

const DropDown2 = ({options, 
    selected, 
    setSelected}) => {

      const eventHandler = (e) => {
        setSelected(e.target.value)
      }

  return (
    <select value={selected} onChange={eventHandler}>
      {options.map((option) => (
        <option key={option.id} 
        value={option.id}>
            {option.name}
        </option>
      ))}
    </select>
  );
};

export default DropDown2;
