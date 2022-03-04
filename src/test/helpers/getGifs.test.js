import { getGifs } from "../../helpers/getGifs";

describe('Pruebas al helper getGifs', () => {

    test('Debe traer 10 elementos', async() => {

        const gifs = await getGifs('goku');
        expect(gifs.length).toBe(10);
        
    });

    test('Validar cuando la categoria es vacia', async() => {

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
        
    });
    
    

});