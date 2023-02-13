import Dropdown2 from "./DropDown2";

const Header = ({
    options,
    setSelected,
    selected,
}) => {

  return (
    <div>
      {/* <UserDropdown users={options} /> */}
      <Dropdown2
        options={options}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default Header;
