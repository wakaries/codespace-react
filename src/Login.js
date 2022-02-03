import React, { useState } from "react";
 
export default function Login({setToken}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
 
  function handleSubmit(event) {
    async function fetchData() {
        const loginResponse = await fetch('http://localhost/codespace/public/index.php/api/login_check', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: '{"username":"' + email + '","password":"' + password + '"}'
        })
        const token = await loginResponse.json();
        setToken(token.token);

        console.log(token);
    }
    fetchData();
    event.preventDefault();
  }
 
  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div size="lg" controlId="email">
          <label>Email</label>
          <input
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div size="lg" controlId="password">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </button>
      </form>
    </div>
  );
}