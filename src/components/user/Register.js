import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContex';
import "./user.css"

const Register = () => {
const {register}=useContext(AuthContext)

const  handlesinupt =(event)=>{
event.preventDefault()

const from=event.target;
const email=from.email.value;
const password=from.password.value;



register(email,password)
.then((result)=>{ 
    const user=result.user
    console.log(user)
  
}).catch((err)=>console.log(err))


    }

const googolelogin=()=>{
    
}

    return (
        <div className='from'>
<h1>Register</h1>
         <form onSubmit={handlesinupt}>
            <input type="text" name='email' placeholder='email' required/>
            <input type="password"  name='password' placeholder='password' required/>
            <button >sinup</button>
            <p><Link to="/login">already have a acount</Link></p>
         
         <button onClick={googolelogin}>login-with google</button>
         
         </form>
        </div>
    );
};

export default Register;