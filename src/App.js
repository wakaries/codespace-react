import React, { useMemo, useState, useEffect } from "react";
import "./App.css";
import Login from "./Login";

function App() {
 
  const [todos, setTodos] = useState([]);
  const [token, setToken] = useState('');

  function entradas() {
      async function fetchData() {
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        };
        const response = await fetch('http://localhost/codespace/public/index.php/api/entrada', {
          method: 'GET',
          headers: headers
        })
        const data = await response.json();
        console.log(data);
        setTodos(data);
      }
      fetchData();
  }

 
  return (
    <div className='App'>
      <Login setToken={setToken}/>
      <p>{token}</p>
      <button onClick={entradas}>Entradas</button>
{      <ul>
        {
          todos.map(({titulo}, index) => (
            <li>{titulo}</li>
          ))
        }
      </ul>}
    </div>
 
  );
}

export default App;