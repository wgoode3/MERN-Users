import React, { useState, useEffect } from 'react';
import axios from 'axios';


const SignIn = props => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const login = e => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/login", {email, password})
      .then(res => {
        console.log(res);
        if(res.data.msg === "invalid login attempt") {
          setErrorMessage("Invalid login attempt");
        } else {
          setErrorMessage("Success!");
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <fieldset>
      <legend>Sign In</legend>
      <form onSubmit={ login }>
        <p>
          Email:&nbsp;
          <input 
            type="text" 
            name="email" 
            onChange={ e => setEmail(e.target.value) } 
            value={ email }
          />
        </p>
        <p>
          Password:&nbsp;
          <input 
            type="password" 
            name="email" 
            onChange={ e => setPassword(e.target.value) } 
            value={ password }
          />
        </p>
        <input type="submit" value="Sign In" />
        <p>{errorMessage ? errorMessage : ""}</p>
      </form>
    </fieldset>
  );
}

export default SignIn;