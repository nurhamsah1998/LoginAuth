import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import fire from './fire';
import Login from './Login';
import Hero from './Hero';
import firebase from 'firebase';
function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailEror, setEmailEror] = useState('');
  const [passwordEror, setPasswordEror] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const clearInput = () => {
    setEmail('');
    setPassword('');
  };
  const messageEror = () => {
    setEmailEror('');
    setPasswordEror('');
  };

  const login = () => {
    messageEror();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((eror) => {
        switch (eror.code) {
          case 'auth/invalid-email':
          case 'auth/user-disable':
          case 'auth/user-not-found':
            break;
          case 'auth/wrong-password':
            setPasswordEror(eror.message);
            break;
        }
      });
  };
  const signUp = () => {
    messageEror();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((eror) => {
        switch (eror.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailEror(eror.message);
            break;
          case 'auth/weak-password':
            setPasswordEror(eror.message);
            break;
        }
      });
  };
  const logOut = () => {
    fire.auth().signOut();
  };
  const listener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser('');
      }
    });
  };
  useEffect(() => {
    listener();
  }, []);

  console.log(hasAccount);
  return (
    <div className="App">
      {user ? (
        <Hero hendleLogout={logOut} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={login}
          handleSignUp={signUp}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailEror={emailEror}
          passwordEror={passwordEror}
        />
      )}
    </div>
  );
}

export default App;
