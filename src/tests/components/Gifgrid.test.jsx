import { render, screen } from "@testing-library/react";
import { Gifgrid } from "../../components/Gifgrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('oruebas en <GifGrid />', () => {

    const category = 'One Punch';
    test('debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<Gifgrid category={category} />);
        expect(screen.getByText('Cargando ...'));
        expect(screen.getByText(category));
    })

    test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<Gifgrid category={category} />);


        expect(screen.getAllByRole('img').length).toBe(2);
    })
})