import { useRef, useState, useEffect } from "react";

function SignIn() {
  const userRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // send req
    setUsername("");
    setPassword("");
  };

  return (
    <section id="signin">
      <h2>Welcome back</h2>

      <p>Enter your username and password</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <button>SIGN IN</button>
      </form>
    </section>
  );
}

export default SignIn;
