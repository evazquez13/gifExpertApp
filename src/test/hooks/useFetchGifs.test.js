import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Realizar las pruebas al hook useFetchGifs', () =>{

    test('Debe restornar el estado inical', async() => {

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Dragon ball'));
        const {data, loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
        
    });

    test('Debe retornar una arreglo con imagenes y el loading en false', async() => {

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Dragon ball'));
        await waitForNextUpdate();
        
        const {data, loading} = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
        
    });
    
    

});