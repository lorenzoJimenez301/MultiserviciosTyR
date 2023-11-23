import React from 'react';
import { Hero } from '../Componentes/Hero';
import { SectionInfo1 } from '../Componentes/SectionInfo1';
import { Cards } from '../Componentes/Cards'
import { Articulo1 } from '../Componentes/Articulo1';
import { Articulo2 } from '../Componentes/Articulo2';
import { SectionInfo2 } from '../Componentes/SectionInfo2';

export const Index = () => {
    return (
        <>
            <Hero />
            <SectionInfo1 />
            <Cards />
            <Articulo1 />
            <Articulo2 />
            <SectionInfo2 />
        </>
    );
}