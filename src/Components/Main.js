import React, {useState, useEffect} from 'react'
import Photowall from './Photowall'
import AddPhoto from './AddPhoto'
import {Link, Route} from 'react-router-dom'
import Single from './Single'
import Login from './Login'
import fire from '../database/config'

const Main = (props) => {
    
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
      }
    
      const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
      }
    
      const handleLogin = () => {
        clearErrors();
        fire.auth().signInWithEmailAndPassword(email, password).catch((err) => {
          switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
          }
        })
      }
    
      const handleSignup = () => {
        clearErrors();
        fire.auth().createUserWithEmailAndPassword(email, password).catch((err) => {
          switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
          }
        })
      }
    
      const handleLogout = () => {
        fire.auth().signOut();
      }
    
      useEffect(()=>{
        const authListener = () => {
            fire.auth().onAuthStateChanged((user)=>{
              if(user){
                clearInputs();
                setUser(user);
              }else{
                setUser("");
              }
            })
          }
        authListener();
        props.startLoadingPost().then(()=>{
            setLoading(false);
        })
        props.startLoadingComments()
      }, []);

    return (
        <div className="App">
            {user ? (
                <div>
                  <button className="but" onClick={handleLogout}>Logout</button>
                  <h1><Link to="/">PhotoWall</Link></h1>

                  <Route exact path = "/" render={()=>(
                      <div>
                          <Photowall {...props} />
                      </div>
                  )} /> 
                  
                  <Route path="/AddPhoto" render={({history}) => (
                      <AddPhoto {...props}/>
                      )} />  
                  
                  <Route path="/single/:id" render={(params) => (
                      <Single loading={loading} {...props} {...params}/>
                  )}/>
                </div>
            ):(
                <Route path="/" render={()=>(
                    <div>
                        <Login 
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            handleLogin={handleLogin}
                            handleSignup={handleSignup}
                            hasAccount={hasAccount}
                            setHasAccount={setHasAccount}
                            emailError={emailError}
                            passwordError={passwordError}
                        />
                    </div>    
                )}/>
            )}
        </div>
    )
}   


export default Main
