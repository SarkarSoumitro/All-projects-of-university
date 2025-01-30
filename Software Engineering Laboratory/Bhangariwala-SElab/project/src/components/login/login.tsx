import React from 'react';
import { useState } from 'react';
import { login } from '../api/login_model'; // Import your API service
import './login.css';
import { useNavigate } from 'react-router-dom'; // Import useHistory for redirection

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate(); // Access the history object

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      // Handle response here
      console.log('Login response:', response);
      if (response.rspnsCode === '200') {
        sessionStorage.setItem('user', JSON.stringify(response.rspnData));
        // Redirect to home page upon successful login
         history('/');
      } else {
        // Handle other response codes (if needed)
        console.error('Login failed:', response.rspnsMsg);
      }
    } catch (error) {
      // Handle error here
      console.error('Error occurred during login:', error);
    }
  };

  return (
    <div className="background-img">
      <div className="login_area">
        <h1>Bhangariwala</h1>
        <form onSubmit={handleLogin}>
          <div className="input_area">
            <label htmlFor="email">Username</label>
            <br />
            <input className='inputInfo' type="email" name="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input_area">
            <label htmlFor="password">Password</label>
            <br />
            <input className='inputInfo' type="password" name="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <a href="" className="fp">
            Forget password?
          </a>
          <br />
          <button className='logBtn' type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/signup">Signup</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
