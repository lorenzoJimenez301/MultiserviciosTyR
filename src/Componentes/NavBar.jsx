import React from 'react';
import LogoBlanco from '../Imagenes/Logo Blanco.png';
import '../Estilos/NavBar.css';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { BsWhatsapp, BsList } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Navbar = () => {


  return (
    <nav className='navbar navbar-expand-lg \bg-body-tertiary p-2 px-0 w-100'>
      <div className='container-fluid d-flex justify-content-start p-0'>
        <Link to='/'><img className='Logo' src={LogoBlanco} alt='Logo' /></Link>
        <BsList className='burgerBtn ms-3 m-2 d-block d-lg-none' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation' />
        <div className='collapse navbar-collapse d-lg-flex justify-content-end align-items-center ps-1 ps-sm-0 ms-3 mt-3 mt-lg-0 ms-sm-0 px-lg-4' id='navbarNavAltMarkup'>
          <div className='navbar-nav w-100 d-lg-flex justify-content-end m-0 p-0'>
            <Link className='mb-3 ms-0 ms-sm-3 mb-lg-0 aNav' to='/'>Inicio</Link>
            <Link className='mb-3 ms-0 ms-sm-3 mb-lg-0 aNav' to='/Nosotros'>Sobre Nosotros</Link>
            <Link className='mb-3 ms-0 ms-sm-3 mb-lg-0 aNav' to='/Servicios'>Servicios</Link>
            <Link className='mb-3 ms-0 ms-sm-3 mb-lg-0 aNav' to='/Contacto'>Contacto</Link>
            <div className='socialMediaIcon d-none d-lg-flex ms-lg-3'>
              <a className='mx-2 p-0 Insta' href='/'><BsInstagram /></a>
              <a className='mx-2 p-0 Face' href='/'><FaFacebook /></a>
              <a className='mx-2 p-0 Whats' href='https://wa.me/70193948'><BsWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}