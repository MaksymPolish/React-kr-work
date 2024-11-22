import React from "react";

const UserList = ({ users, onDeleteUser }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
          <h3>{`${user.first_name} ${user.last_name}`}</h3>
          <p>Email: {user.email}</p>
          <button onClick={() => onDeleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
