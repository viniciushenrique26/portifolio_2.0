import React from 'react';
import Logo from '../assets/logo_slavov.svg';
const Header = () => {
  return <div className='py-8'> 
  <div className="container mx-auto"> 
    <div className='flex justify-between items-center'>
      <a href='#'> 
        <img src={Logo} alt="logo do portifolio" />
      </a> 
      <button className='btn btn-sm'>
        Envie a sua proposta
      </button>
    </div>
  </div>
  </div>;
};

export default Header;
