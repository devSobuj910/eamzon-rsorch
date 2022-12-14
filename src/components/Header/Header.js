import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContex';

import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const {logout}=useContext(AuthContext)
const out=()=>{
logout(()=>{})
}

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link  to="/login">login</Link>
                <Link to="/register"> register</Link>
                <button onClick={out}>logout</button>

       
            </div>
        </nav>
    );
};

export default Header;