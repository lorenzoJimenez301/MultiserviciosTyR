import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import '../Estilos/SectionInfo2.css';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

export const SectionInfo2 = () => {

    const query = useMediaQuery('(max-width: 992px)');

    return (
        <section className='w-100 d-flex justify-content-center align-items-center sectionInfo2'>
            <p className='pe-3 pe-lg-0'>{query ? '¡Reserve su limpieza ahora!' : '¡Deje la limpieza en nuestras manos expertas!'}</p>
            <button className='btnContact'><BsTelephoneFill className='celBtn' /><Link to={'/Contacto'}>Contactenos</Link></button>
        </section>
    );
}