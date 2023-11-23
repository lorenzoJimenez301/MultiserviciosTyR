import React from 'react';
import '../Estilos/SectionInfo1.css';
import { BsTelephoneFill } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';


export const SectionInfo1 = () => {
    return (
        <section className='sectionInfo w-100 d-flex justify-content-between justify-content-lg-evenly'>
            <div className='sectionInfoContainer'>
                <BsTelephoneFill />
                <p>4001-5327</p>
            </div>
            <div className='sectionInfoContainer'>
                <AiOutlineClockCircle />
                <p>24 Horas</p>
            </div>
            <div className='sectionInfoContainer'>
                <FaLocationDot />
                <p>Todo Costa Rica</p>
            </div>
        </section>
    )
}