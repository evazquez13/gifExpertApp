import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas al componente <GifGrid/>', () =>{

    const category = 'Goku';
    
    test('Validar que el componente se muestre de manera correcta', () =>{

        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar iimagenes cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [{
            id:'ABC',
            url:'http://localhost/cualquier/cosa.jpg',
            title:'Cualquier cosa'
        }];
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGrifItems').length).toBe(gifs.length);
        
    });

});