import React from 'react';
import logoImage from '../assets/logo.png';

export default function Logo(){
  return (
    <div>
      <img src={logoImage} alt='logo' className='h-40 w-40 mr-2'></img>
    </div>
  )
}
