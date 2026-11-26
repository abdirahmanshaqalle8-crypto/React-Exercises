import { useState } from "react";

const LoginForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleLogin = (event) => {
      event.preventDefault();  
        if (username && password) {
      setIsLoggedIn(true);
    }
    }

    const handleLogout = () => {
    setUsername('');
    setPassword('');
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome, {username}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }


    return (
            <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <div>
            <label>Username: 
            <input type="text" value={username} placeholder="Enter your username" required onChange={(e) => setUsername(e.target.value)}
 /> <br />      </label>    </div>
                <div>
            <label>Password:
            <input type="password" value={password} placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)}
/>  <br />      </label>    </div>
            <button type="submit">Login {}</button>
            </form>
    )
}

export default LoginForm