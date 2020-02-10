import React from 'react';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';


function App() {
  return (
    <>
      <h1 className="jumbotron">MERN Users</h1>
      <div className="container">
        <SignIn />
        <SignUp />
      </div>
    </>
  );
}

export default App;
