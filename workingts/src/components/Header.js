import Dropdown2 from "./DropDown2";

const Header = ({
    options,
    setSelected,
    selected,
    setSortType,
    sortType, 
    types
}) => {

  return (
    <div>
      {/* <UserDropdown users={options} /> */}
      <Dropdown2
        options={options}
        selected={selected}
        setSelected={setSelected}
      />
       <Dropdown2
        options={types}
        selected={sortType}
        setSelected={setSortType}
      />
    </div>
  );
};

export default Header;
