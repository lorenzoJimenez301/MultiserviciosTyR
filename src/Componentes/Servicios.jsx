import React from 'react';
import '../Estilos/Servicios.css';
import imgCard1 from '../Imagenes/img card.jpg';
import imgCard2 from '../Imagenes/img card2.jpg';
import imgCard3 from '../Imagenes/img card3.jpeg';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'react-phone-number-input';
import Input from 'react-phone-number-input/input';


const Card = ({ img, p, title }) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const [state, setState] = useState('Ver más');

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
        if (state === 'Ver más') {
            setState('Ver menos');
        }
        else {
            setState('Ver más')
        }
    };


    return (
        <div className='d-flex flex-column align-items-center justify-content-center h-100 p-4 p-lg-0'>
            <AnimatePresence>
                {!isFlipped && (
                    <motion.div
                        initial={{ opacity: 0, rotateY: 0 }}
                        animate={{ opacity: 1, rotateY: 180 }}
                        exit={{ opacity: 0, rotateY: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='cardServices d-flex flex-column justify-content-center align-items-center ' style={{ backfaceVisibility: 'hidden' }}>
                            <img className='imgCard' src={img} alt='imagen' />
                        </div>
                    </motion.div>
                )}
                {isFlipped && (
                    <motion.div
                        initial={{ opacity: 0, rotateY: 180 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: 180 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='cardServices d-flex flex-column justify-content-center align-items-center ' style={{ backfaceVisibility: 'hidden' }}>
                            <div className='h-50 d-flex flex-column justify-content-center align-items-center p-3'>
                                <p className='textCard text-center'>'{p}'</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className='w-100 pt-4 pb-1'>
                <h5 className='p-2 titleCard text-center'>{title}</h5>
            </div>
            <div className='w-100 text-center p-2 d-flex justify-content-center align-items-center'>
                <input onClick={handleFlip} className='btnSeeMore' type='submit' value={state} />
            </div>
        </div>
    );
}

export const Servicios = () => {

    const [fullName, setFullName] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [numero, setNumero] = useState('');
    const [correo, setCorreo] = useState('');
    const [provincia, setProvincia] = useState('-- Elija su provincia --');
    const [direccion, setDireccion] = useState('');
    const [desc, setDesc] = useState('');

    const enviarSevicio = (e) => {
        e.preventDefault();
        try {
            emailjs.send('service_7f0u2qp', 'template_br7n6cm', {
                fullName: fullName,
                empresa: empresa,
                numero: numero.replace('+506', ''),
                correo: correo,
                provincia: provincia,
                direccion: direccion,
                desc: desc
            }, 'bGQ_1Y-Iph9is7VqK');

            alert('Solicitud enviada con exito!')
        } catch (error) {
            alert('Solicitud no enviada' + error);
        }
    }

    return (
        <section className='sectionService p-0 pt-5 pb-0 p-ls-5'>
            <div className='titleContainer w-100 text-center p-3 pb-0'>
                <h2 className='servicesTitle'>Permitenos Ayudarte</h2>
                <p>Servicio 100% personalizado y de calidad en limpieza de...</p>
            </div>
            <div className='d-flex flex-column flex-lg-row w-100 justify-content-evenly p-4 m-auto'>
                <Card
                    img={imgCard1}
                    p={'Un servicio de limpieza de oficinas y empresas proporciona soluciones profesionales para mantener espacios de trabajo limpios y ordenados, mejorando la higiene, la productividad y la imagen corporativa.'}
                    title={'Oficinas y Empresas'}
                />
                <Card
                    img={imgCard2}
                    p={'Un servicio de limpieza de ventanas y muebles se encarga de mantener las ventanas y los muebles de un espacio en óptimas condiciones, eliminando suciedad, polvo y manchas para mejorar la apariencia y la higiene, y garantizar un entorno más limpio y agradable.'}
                    title={'Ventanas y Muebles'}
                />
                <Card
                    img={imgCard3}
                    p={'Un servicio de limpieza de interiores y exteriores se encarga de limpiar y mantener tanto el interior como el exterior de un edificio o espacio. Esto implica la limpieza de áreas internas, como habitaciones, cocinas y baños, así como la limpieza de áreas externas, como jardines, patios y fachadas.'}
                    title={'Interiores y Exteriores'}
                />
            </div>
            <div className='formTitle'>
                <h2>Solicitanos un Servicios</h2>
                <p>Solicite su servicios ahora mismo, pronto lo contactaremos!</p>
            </div>
            <form onSubmit={enviarSevicio} method='post' className='formServices w-50 m-auto pt-3 d-flex flex-column justify-content align-items-center p-5' >
                <div className='d-flex flex-column flex-lg-row align-items-center justify-content-center '>
                    <div className='d-flex flex-column ms-0 me-0 me-lg-3'>
                        <label htmlFor='name'>Nombre Completo</label>
                        <input value={fullName} onChange={(e) => setFullName(e.target.value)} required className='formInput' id='name' type='text' />
                    </div>
                    <div className='d-flex flex-column ms-lg-3 ms-0 me-0 mt-4 mt-lg-0'>
                        <label htmlFor='empresa'>Empresa</label>
                        <input value={empresa} onChange={(e) => setEmpresa(e.target.value)} className='formInput' id='empresa' type='text' />
                    </div>
                </div>
                <div className='d-flex flex-column flex-lg-row align-items-center justify-content-center '>
                    <div className='d-flex flex-column ms-0 me-0 me-lg-3 mt-4'>
                        <label htmlFor='numero'>Número</label>
                        <Input minLength={12} maxLength={9} required={true} international defaultCountry='CR' value={numero} onChange={setNumero} className='inputContact' />
                        <p className='text-danger text-center mt-2'>{numero ? (isValidPhoneNumber(numero) ? undefined : 'Número Invalido') : ''}</p>
                    </div>
                    <div className='d-flex flex-column ms-lg-3 ms-0 me-0 mt-4 mt-lg-0'>
                        <label htmlFor='correo'>Correo</label>
                        <input value={correo} onChange={(e) => setCorreo(e.target.value)} required className='formInput' id='correo' type='email' />
                    </div>
                </div>
                <div className='d-flex flex-column flex-lg-row align-items-center justify-content-center '>
                    <div className='d-flex flex-column ms-0 me-0 me-lg-3 mt-4'>
                        <label htmlFor='provincia'>Provincia</label>
                        <select value={provincia} onChange={(e) => setProvincia(e.target.value)} required className='servicesSelect'>
                            <option disabled> -- Elija su provincia -- </option>
                            <option value='Cartago'>Cartago</option>
                            <option value='San José'>San José</option>
                            <option value='Heredia'>Heredia</option>
                            <option value='Alajuela'>Alajuela</option>
                            <option value='Guanacaste'>Guanacaste</option>
                            <option value='Puntarenas'>Puntarenas</option>
                        </select>
                    </div>
                    <div className='d-flex flex-column ms-lg-3 ms-0 me-0 mt-4 mt-lg-0' >
                        <label htmlFor='direccion'>Dirección</label>
                        <input value={direccion} onChange={(e) => setDireccion(e.target.value)} required className='formInput' id='direccion' type='text' />
                    </div>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center mt-4'>
                    <label htmlFor='desc'>Descripción</label>
                    <textarea value={desc} onChange={(e) => setDesc(e.target.value)} required name='desc' id='desc' cols='30' rows='10'></textarea>
                    <input className='servicesBtn' type='submit' value={'Enviar'} />
                </div>
            </form>
        </section>
    );
}