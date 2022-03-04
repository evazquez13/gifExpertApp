import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas al componente <AddCategory/>', () =>{

    const setCategory = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategory}/>);

    beforeEach( () =>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategory}/>);
    });

    test('Validar que el componente se muestre correctamente ', () =>{
        expect(wrapper).toMatchSnapshot();
    });

    test('Evaluar cambios de texto en el input', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {target:{value} });
    });

    test('No debe postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        //Valida que la funcion no se ejecute
        expect(setCategory).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () =>{
        const value = 'Hola mundo';
        wrapper.find('input').simulate('change',{target:{value}});
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        
        //Valida que la funcion se ejecute
        expect(setCategory).toHaveBeenCalled();
        //Valida que la funcion se ejecute n cantidad de veces como se ponga dentro del parentesis
        expect(setCategory).toHaveBeenCalledTimes(1);
        //Valida que se llame una funcion
        expect(setCategory).toBeCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
    });

});