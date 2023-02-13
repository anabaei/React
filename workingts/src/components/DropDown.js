
import React, { useState } from 'react';

const UserDropdown = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleChange = (event) => {
    setSelectedUser(event.target.value);
  };

  return (
    <select value={selectedUser} onChange={handleChange}>
      <option value={null}>Select a user</option>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default UserDropdown;
