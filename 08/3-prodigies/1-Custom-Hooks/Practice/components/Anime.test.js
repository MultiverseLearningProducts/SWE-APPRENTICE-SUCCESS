import React from 'react';
import { render, screen, waitFor} from '@testing-library/react'
import Anime from './Anime';
import '@testing-library/jest-dom'

const animeData = 
    {
        anime: "Fruits Basket",
        character: "Arisa Uotani",
        quote: "Maybe I was lonely. Maybe I've just... always... been lonely."
    }

test('Renders character name and quote returned from the API call', async () => {
    // mock fetch call
    global.fetch = async () => ({
        json: async () => (animeData)
    })
    
    render(<Anime />);

    await waitFor(() => {
        expect(screen.getByText("Arisa Uotani")).toBeTruthy();
        expect(screen.getByText("Maybe I was lonely. Maybe I've just... always... been lonely.")).toBeTruthy();
    })
})

