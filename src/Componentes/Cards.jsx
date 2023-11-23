import Spray from '../Imagenes/spray-detergent-1-svgrepo-com.svg';
import Aspi from '../Imagenes/vacuum-cleaner-svgrepo-com.svg';
import Escoba from '../Imagenes/magic-broom-svgrepo-com.svg';
import '../Estilos/Cards.css';
import CountUp from 'react-countup';


export const Cards = () => {
    return (
        <section className='cardContainer d-flex justify-content-evenly align-items-center w-100 px-0'>
            <div className='card'>
                <img src={Spray} alt='card' />
                <CountUp className='contador' duration={10} end={2000} />
                <p className='cardP'>Trabajos Realizados</p>
            </div>
            <div className='card'>
                <img src={Aspi} alt='card' />
                <CountUp className='contador' duration={10} end={500} />
                <p className='cardP'>Clientes Satisfechos</p>
            </div>
            <div className='card'>
                <img src={Escoba} alt='card' />
                <CountUp className='contador' duration={10} end={20} />
                <p className='cardP'>Años de Experiencia</p>
            </div>
        </section>
    );
}