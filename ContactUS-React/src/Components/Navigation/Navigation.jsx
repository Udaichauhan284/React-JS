import React from 'react';
import styles from './Navigation.module.css';
import brandLogo from './brand_logo.png';
function Navigation(){
return (
  <>
    <nav className={`${styles.navigation} container`}>
        <img src={brandLogo} alt = 'brandLogo'></img>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </>
)
}
export default Navigation;