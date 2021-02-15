import React from 'react'

function Login(props) {

    const {
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError} = props;
    
    return (
        <section className="login">
            <div className="loginContainer">
                <h2>PhotoWall</h2>
                <label>username</label>
                <input type="text" autoFocus required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>
                <label>password</label>
                <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <div>
                            <button className="butt" onClick={handleLogin}>Login</button>
                            <p>Don't have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>SignUp</span></p>
                        </div>
                    ):(
                        <div>
                            <button className="butt" onClick={handleSignup}>Sign Up</button>
                            <p>Have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Login</span></p>
                        </div>

                    )}
                </div>
            </div>
        </section>
    )
}

export default Login
