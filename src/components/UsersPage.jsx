import React, { useEffect, useState } from 'react'

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res);
        return res.json()
      })
      .then(data => setUsers(data))
  }, []);

  return (
    <div>
      <h3>Users List</h3>
      {users.map(user => (
        <h5 key={user.id}>{user.name}</h5>
      ))}
    </div>
  )
}

export default UsersPage
