import React, { useState } from "react";
import './userForm.css';
import axios from "axios"


const UserUpdate = () => {

    const http = "http://127.0.0.1:5000/add"

const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [intelligence, setIntelligence] = useState(0);
  const [charisma, setCharisma] = useState(0);
  const [behaviour, setBehaviour] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
  const data = {
    name,
    department,
    intelligence: parseInt(intelligence),
    charisma: parseInt(charisma),
    behaviour: parseInt(behaviour),
  };


    const response = await axios.post("/update", data)
      .then(response => {
        console.log(response.data);
        // Here you can add some code to show a success message or redirect the user to another page
      })
      .catch(error => {
        console.error(error);
        // Here you can add some code to show an error message or handle the error in some other way
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Введите имя:</label>
        <input className="input-text" type="text" value={name} onChange={(event) => setName(event.target.value)} />
      
      <label>Введите должность</label>
        <input className="input-text" type="text" value={department} onChange={(event) => setDepartment(event.target.value)} />
      
      <label>
        Проголосуйте за очки профессионализма</label>
        <input className="input-number" type="number" value={intelligence} onChange={(event) => setIntelligence(parseInt(event.target.value))} />
      
      <label>
        Проголосуйте за очки полезности:</label>
        <input className="input-number"  type="number" value={charisma} onChange={(event) => setCharisma(parseInt(event.target.value))} />
      
      <label>
        Проголосуйте за очки поведения:</label>
        <input className="input-number" type="number" value={behaviour} onChange={(event) => setBehaviour(parseInt(event.target.value))} />
      
      <button className="button-submit" type="submit">Submit</button>
    </form>
  );
}

export {UserUpdate};