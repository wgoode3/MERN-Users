import React, { useState, useEffect } from 'react';
import axios from 'axios';


const SignUp = props => {

  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState({});

  const register = e => {
    e.preventDefault();
    const newUser = {username, email, password, confirm};
    axios.post("http://localhost:8000/api/register", newUser)
      .then(res => {
        console.log(res);
        if(res.data.errors) {
          setErrors(res.data.errors);
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <fieldset>
      <legend>Sign Up</legend>
      <form onSubmit={ register }>
        <p>
          Username:&nbsp;
          <input 
            type="text" 
            name="username" 
            onChange={ e => setUsername(e.target.value) } 
            value={ username }
          />
          <span>{errors.username ? errors.username.message : ""}</span>
        </p>
        <p>
          Email:&nbsp;
          <input 
            type="text" 
            name="email" 
            onChange={ e => setEmail(e.target.value) } 
            value={ email }
          />
          <span>{errors.email ? errors.email.message : ""}</span>
        </p>
        <p>
          Password:&nbsp;
          <input 
            type="password" 
            name="email" 
            onChange={ e => setPassword(e.target.value) } 
            value={ password }
          />
          <span>{errors.password ? errors.password.message : ""}</span>
        </p>
        <p>
          Confirm:&nbsp;
          <input 
            type="password" 
            name="confirm" 
            onChange={ e => setConfirm(e.target.value) } 
            value={ confirm }
          />
        </p>
        <input type="submit" value="Sign Up" />
      </form>
    </fieldset>
  );
}

export default SignUp;