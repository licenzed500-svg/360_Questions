import { Routes, Route, Link } from 'react-router-dom';
import clasess from './App.module.css'
import React from "react";
import { UserForm } from './components/UserForm/UserForm';
import Nomad from "./components/Nomad/Nomad";
import {UserUpdate} from './components/UserForm/UserUpdate'
import Chat from './components/Chat/Chat';




function App() {

  let Auth = true

  if(Auth){
    return (

  
    <div className={clasess.wrapper}>
      
      <Nomad/>
      <Chat/>
      <UserUpdate/>
      

    </div> 
    
   
  );  
  }
else {

  return (
    <div className={clasess.wrapper}>
      
    <Nomad/>

    <UserForm/>
  

  </div> 
  )
}

}

export default App;
