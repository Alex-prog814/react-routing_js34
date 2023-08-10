import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  // async function getUser() {
  //   try {
  //     let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  //     let data = await res.json();
  //     setUser(data);
  //   } catch(err) {
  //     console.log(err);
  //   };
  // };

  // useEffect(getUser, []);

  useEffect(() => {
    let isMounted = true; // флаг для отслеживания состояния компонента
    async function getUser() {
      try {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        let data = await res.json();
        if (isMounted) {
          setUser(data); // обновление состояния только если компонент монтирован
        }
      } catch (err) {
        console.log(err);
      }
    }
    getUser();
    return () => {
      isMounted = false; // устанавливаем флаг в false при размонтировании
    };
  }, [id]);

  return (
    <div>
      <h2>Profile Details</h2>
      {user ? (
        <>
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
          <h3>{user.phone}</h3>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}

export default UserDetails