import React from 'react';
import Logo from "../images/Logo.png"
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom';
import Products from './Products';

const Navbar = () => {
  return (
    <div className={styles.header}>
    <div>
    <ul className={styles.list}>
    <li><Link to="/">Home Page</Link> </li>
   <li><Link to="/Products">Products</Link> </li>
   <li> <Link to="/aboutus">About Us</Link></li>
       
    </ul>
    </div>
    <div>
        <img src={Logo} alt='Logo' className={styles.logo}/>
    </div>
</div>
  );
};

export default Navbar;