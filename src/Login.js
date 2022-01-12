import React from 'react';

function Login(props) {
  const { email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailEror, passwordEror } = props;
  console.log(password);
  return (
    <section className="login">
      <div className="loginContainer">
        <label>username</label>
        <input type="text" required autoFocus value={email} onChange={(e) => setEmail(e.target.value)} />
        <p className="errorMsg">{emailEror}</p>
        <label>password</label>
        <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <p className="errorMsg">{passwordEror}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>sign in</button>
              <p>
                dont have account? <span onClick={() => setHasAccount(false)}>buat</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignUp}>sign up</button>
              <p>
                have account? <span onClick={() => setHasAccount(true)}>masok</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Login;
