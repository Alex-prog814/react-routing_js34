import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div>
      <h3>Users List</h3>
      {users.map(user => (
        <Link to={`/users/100`} key={user.id}>
          <h5>{user.name}</h5>
        </Link>
      ))}
    </div>
  )
}

export default UsersPage
