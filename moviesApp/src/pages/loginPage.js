import React, { useContext, useState } from "react";
import { Navigate, useLocation, Link } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';

const LoginPage = () => {
  const context = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    // Uncomment the line below once you have the authentication logic
    context.authenticate(userName, password);
  };

  let location = useLocation();
  const { from } = location.state || { from: "/" };

  // Uncomment the lines below once you have the authentication logic
  if (context.isAuthenticated) {
    return <Navigate to={from} />;
  }

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: 'auto',
        padding: '30px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Login Page</h2>
      <p style={{ fontSize: '18px', marginBottom: '30px' }}>You must log in to view the protected pages</p>

      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ fontSize: '18px', marginBottom: '10px' }} htmlFor="username">
          Username:
        </label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          onChange={(e) => setUserName(e.target.value)}
          style={{ padding: '15px', marginBottom: '20px', border: '2px solid #ddd', borderRadius: '6px' }}
        />

        <label style={{ fontSize: '18px', marginBottom: '10px' }} htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '15px', marginBottom: '20px', border: '2px solid #ddd', borderRadius: '6px' }}
        />

        <button
          type="button"
          onClick={login}
          style={{
            backgroundColor: '#4caf50',
            color: '#fff',
            padding: '15px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '18px',
          }}
        >
          Log in
        </button>
      </form>

      <p style={{ fontSize: '16px', marginTop: '20px' }}>
        Not Registered? <Link to="/signup">Sign Up!</Link>
      </p>
    </div>
  );
};

export default LoginPage;
