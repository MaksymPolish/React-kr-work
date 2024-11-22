import React, { useState } from "react";
import { getUsers, deleteUser } from "./apiMethods";
import UserList from "./components/UserList";
import FilterBox from "./components/FilterBox";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleLoadUsers = async () => {
    setLoading(true);
    try {
      const userData = await getUsers();
      setUsers(userData || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>User Management</h1>
      <button onClick={handleLoadUsers} disabled={isLoading}>
        {isLoading ? "Loading..." : "Load Users"}
      </button>
      {users.length > 0 && (
        <>
          <FilterBox filter={filter} onFilterChange={setFilter} />
          <UserList users={filteredUsers} onDeleteUser={handleDeleteUser} />
        </>
      )}
      {users.length === 0 && !isLoading && <p>No users available.</p>}
    </div>
  );
};

export default App;
