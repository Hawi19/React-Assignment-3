import { useState } from "react";

function LoginForm({handleLogin}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = (e)=>{
        e.preventDefault();//to stop refreshing the page
        handleLogin(username, password)
       
    };
    return(  
        
        <div className="container">
            <h1>Login Form</h1>
    <form onSubmit={onSubmit} className="form">
        
        <input type="text" id="username" placeholder="User Name" value={username}  onChange={(e) => setUsername(e.target.value)}  /> 
        <input type="password" id="password" placeholder="Password" value={password}    onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Login</button>
       </form>
       </div>);
       
     
}
export default LoginForm;