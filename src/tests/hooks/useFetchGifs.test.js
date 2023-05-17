import { renderHook,waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => { 
    test('debe regresar el estado inicial', () => { 
        const {result} = renderHook(()=> useFetchGifs('OnePunch'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

     });

     test('debe de retornar un arreglo de imagenes y isLoading en false', async() => { 
        const {result} = renderHook(()=> useFetchGifs('OnePunch'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
        
        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

     });
 })