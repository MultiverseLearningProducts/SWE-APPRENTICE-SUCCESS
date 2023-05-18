import React from 'react';
import { render, screen, waitFor} from '@testing-library/react'
import PokemonCard from "./PokemonCard";
import '@testing-library/jest-dom';
import pokeTestData from './pokeTestData';

test('Renders the name of the pokemon, Height: <pokemon_height>, and Weight: <pokemon_weight> from the api call', async () => {
    // mock fetch call
    global.fetch = async () => ({
        json: async () => (pokeTestData)
    })
    
    render(<PokemonCard />);

    await waitFor(() => {
        expect(screen.getByText("caterpie")).toBeTruthy();
        expect(screen.getByText("Height: 3")).toBeTruthy();
        expect(screen.getByText("Weight: 29")).toBeTruthy();
    })
})

test('Renders the name of the pokemon, Height: <pokemon_height>, and Weight: <pokemon_weight> from the api call', async () => {
    // mock fetch call
    global.fetch = async () => ({
        json: async () => (pokeTestData)
    })
    
    render(<PokemonCard />);

    await waitFor(() => {
        expect(screen.getByAltText('caterpie')).toBeTruthy();
        const image = screen.getByAltText('caterpie');
        expect(image.getAttribute("src")).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10.png")
    })
})