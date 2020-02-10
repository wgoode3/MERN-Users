import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UserList = props => {

  const [users, setUsers] = useState([]);

  useEffect( () => {
    axios.get("http://localhost:8000/api/users", {
      withCredentials: true
    })
      .then(res => setUsers(res.data))
      .catch(err => {
        console.log("not authorized");
        console.log(err);
      });
  }, []);

  return (
    <>
      <h3>All Users:</h3>
      <table>
        <tbody>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Created On</th>
          </tr>
          {
            users.map(user => 
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  );

}

export default UserList;