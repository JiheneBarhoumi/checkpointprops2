import React from 'react';
import logo from './logo.svg';
import {Profile} from './profile/Profile.js';
import './App.css';



const handleName=(fullName)=>{
 
  alert("your name is : "+fullName);
}



function App() {
  return (
    <div className="App">
      <Profile fullName={'jihen'} bio={'am studying'} profession={'student'} handleName={handleName}>
          <img src={logo} style={{width:500,height:500}}/>
      </Profile>
    </div>
  );
}

export default App;
