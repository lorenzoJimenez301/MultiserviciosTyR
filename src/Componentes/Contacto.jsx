import React, { useState, useRef } from 'react';
import '../Estilos/Contacto.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
import emailjs from 'emailjs-com';
import L from 'leaflet';
import Input from 'react-phone-number-input/input';
import 'leaflet/dist/leaflet.css';
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'react-phone-number-input';



export const Contacto = () => {


    const customIcon = new L.Icon({
        iconUrl: 'https://i.pinimg.com/originals/8c/42/25/8c42257e089f1f737f9803ec2e3f8a49.png',
        iconSize: [50, 50],
        iconAnchor: [15, 30],
    });


    const [name, setName] = useState('');
    const [correo, setCorreo] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [numero, setNumero] = useState('');
    const [comentario, setComentario] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        try {
            emailjs.send('service_7f0u2qp', 'template_t016eot', {
                user_name: name,
                user_lastname: apellidos,
                user_email: correo,
                user_number: numero,
                message: comentario,
            }, 'bGQ_1Y-Iph9is7VqK');

            alert('Correo enviado con Exito!');
        } catch (error) {
            alert('Correo No Enviado!');
        }

    };


    return (
        <section className='d-flex flex-column-reverse flex-lg-row contactSection'>
            <div className='mapContainer'>
                <MapContainer className='map' center={[9.82537052067811, -83.9072520387586]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='<a href="https://www.openstreetmap.org/copyright"></a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker icon={customIcon} position={[9.82537052067811, -83.9072520387586]}>
                        <Popup>
                            Central de MultiserviciosTYR
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            <div className='contactContainer d-flex flex-column justify-content-center align-items-center p-5 '>
                <div className='w-100 d-flex justify-content-center align-items-center p-2 pb-4'>
                    <h2 id='tituloContacto'>Contacto</h2>
                </div>
                <form className='formulario' onSubmit={sendEmail} ref={form} method='post'>
                    <div className='d-flex flex-column flex-lg-row align-items-center'>
                        <div className='d-flex flex-column text-center m-4 mt-3 mt-lg-4'>
                            <label>Nombre</label>
                            <input required={true} value={name} onChange={(e) => setName(e.target.value)} className='inputContact' type='text' />
                        </div>
                        <div className='d-flex flex-column text-center m-4 mt-3 mt-lg-4'>
                            <label>Apellidos</label>
                            <input required={true} value={apellidos} onChange={(e) => setApellidos(e.target.value)} className='inputContact' type='text' />
                        </div>
                    </div>
                    <div className='d-flex flex-column flex-lg-row align-items-center'>
                        <div className='d-flex flex-column text-center m-4 mt-2'>
                            <label>Correo</label>
                            <input required={true} value={correo} onChange={(e) => setCorreo(e.target.value)} className='inputContact' type='email' />
                        </div>
                        <div className='d-flex flex-column text-center m-4 mt-2'>
                            <label>Número</label>
                            <Input minLength={12} maxLength={9} required={true} international defaultCountry='CR' value={numero} onChange={setNumero} className='inputContact' />
                            <p className='text-danger text-center mt-2'>{numero ? (isValidPhoneNumber(numero) ? undefined : 'Número Invalido') : ''}</p>
                        </div>
                    </div>
                    <div className='text-center d-flex flex-column align-items-center'>
                        <label> </label>
                        <textarea required={true} value={comentario} onChange={(e) => setComentario(e.target.value)} cols='30' rows='10'></textarea>
                    </div>
                    <div className='text-center'>
                        <input className='inputBtn' type='submit' value={'Enviar'} />
                    </div>
                </form>
                <div className='w-100 d-lg-flex d-none justify-content-center contact mt-5 mb-5'>
                    <div className='mx-3 d-flex'>
                        <BsFillTelephoneFill />
                        <p className='mx-2'>7019-3948</p>
                    </div>
                    <div className='mx-3 d-flex'>
                        <AiOutlineMail />
                        <p className='mx-2'>info@multiserviciostyr.com</p>
                    </div>
                </div>
            </div>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
            </MapContainer>
        </section>
    );

}