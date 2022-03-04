import React from 'react';
import { shallow } from 'enzyme';
import { GifGrifItems } from '../../components/GifGrifItems';

describe('Pruebas al componente <GifGrifItems/>',() => {
    
    const titulo = 'Un titulo';
    const url = 'htts://localhost/prueba.jpg';
    const wrapper = shallow(<GifGrifItems title={titulo} url={url}/>);
    
    test('Debe mostar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe tener un parrafo con titulo', () =>{

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(titulo);

    });

    test('Debe tener la imagen igual al url y alt de los props', () =>{

        const img = wrapper.find('img');
        expect(img.props().src).toBe(url);
        expect(img.prop('alt')).toBe(titulo);

    });

    test('El div debe tener la clase animate__fadeIn', () => {

        const div = wrapper.find('div');

        expect(div.props().className.includes('animate__fadeIn')).toBe(true);
        
    });
    

});