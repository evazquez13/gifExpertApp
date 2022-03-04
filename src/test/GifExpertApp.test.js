import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Pruebas al componente <GifExpertApp/>', () =>{

    
    test('Validar que el componente se muestre correctamente', () => {
        
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar una lista de categorias', () => {

        const categorias = ['One punch','Dragon ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categorias}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categorias.length);
                
    });
    
    

});