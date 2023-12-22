import React, { useContext, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';

const SignUpPage = () => {
  const context = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegEx.test(password);

    if (validPassword && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  };

  if (registered) {
    return <Navigate to="/login" />;
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
      <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Sign Up</h2>
      <p style={{ fontSize: '18px', marginBottom: '30px' }}>You must register a username and password to log in</p>

      <input
        value={userName}
        placeholder="Enter your username"
        onChange={(e) => setUserName(e.target.value)}
        style={{ padding: '15px', marginBottom: '20px', border: '2px solid #ddd', borderRadius: '6px' }}
      />

      <input
        value={password}
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: '15px', marginBottom: '20px', border: '2px solid #ddd', borderRadius: '6px' }}
      />

      <input
        value={passwordAgain}
        type="password"
        placeholder="Enter your password again"
        onChange={(e) => setPasswordAgain(e.target.value)}
        style={{ padding: '15px', marginBottom: '20px', border: '2px solid #ddd', borderRadius: '6px' }}
      />

      <button
        type="button"
        onClick={register}
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
        Register
      </button>

      <p style={{ fontSize: '16px', marginTop: '20px' }}>
        Already have an account? <Link to="/login">Log In!</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
