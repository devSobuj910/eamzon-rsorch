import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContex';

const Login = () => {
    const {login}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    let x = location.state?.from?.pathname || "/";
const handlelogin=(event)=>{
event.preventDefault();


const  from=event.target;
const email=from.email.value;
const password=from.password.value;
console.log(email, password);



login(email, password)
.then((result)=>{
const user=result.user

console.log(user)

navigate(x, { replace: true });
})


}


//login  with googole
const googolelogin=()=>{
}

    return (
        <div className='from'>
<h1>login</h1>
         <form  onSubmit={handlelogin}>
            <input type="text" name='email' placeholder='email' required/>
            <input type="password"  name='password' placeholder='password' required/>
            <button type='submit' >sinup</button>
            <p><Link to="/login">new in amazon</Link></p>
         
         <button onClick={googolelogin}>login-with google</button>
         
         </form>
        </div>
    );
};

export default Login;