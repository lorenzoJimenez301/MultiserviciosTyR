import React from 'react';
import img4 from '../Imagenes/Imagenes(Artes2)/4.png';
import img5 from '../Imagenes/Imagenes(Artes2)/5.png';
import img6 from '../Imagenes/Imagenes(Artes2)/6.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';


import '../Estilos/Articulo2.css';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export const Articulo2 = () => {
    return (
        <section className='Art2 d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center pb-5 pt-5 px-0 p-lg-5'>
            <article className='Art2Container1 d-flex align-items-center justify-content-center'>
                <Swiper
                    className='superSwiper mt-4 mt-lg-0'
                    effect={'fade'}
                    speed={2000}
                    navigation={false}
                    modules={[EffectFade, Autoplay]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                >
                    <SwiperSlide><img className='photo_Arte m-auto' src={img4} alt='' /></SwiperSlide>
                    <SwiperSlide><img className='photo_Arte m-auto' src={img5} alt='' /></SwiperSlide>
                    <SwiperSlide><img className='photo_Arte m-auto' src={img6} alt='' /></SwiperSlide>
                </Swiper>
            </article>
            <article className='Art2Container2 textContainer d-flex flex-column justify-content-center align-items-center'>
                <div className='infoArt2Container d-flex flex-column justify-content-center '>
                    <h2 className='art2Title w-100'>Nuestro Equipo</h2>
                    <p className='art2P w-100'>Contamos con el mejor equipo de limpieza en el mercado para una limpieza de calidad, como los siguientes:</p>
                    <ul className='art2List ps-4 ps-lg-5'>
                        <li>Aspiradora.</li>
                        <li>Escobas y trapeadores.</li>
                        <li>Bayetas y paños de microfibra.</li>
                        <li>Detergentes y productos de limpieza</li>
                        <li>Máquinas de limpieza especializadas.</li>
                        <li>Equipos de seguridad.</li>
                    </ul>
                </div>
            </article>
        </section>
    )
}