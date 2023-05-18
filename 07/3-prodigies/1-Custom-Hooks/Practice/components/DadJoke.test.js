import React from 'react';
import { render, screen, waitFor} from '@testing-library/react'
import DadJoke from './DadJoke';
import '@testing-library/jest-dom'

const dadData = 
    {
        joke: "When is a door not a door? When it's ajar."
    }

test('Renders character name and quote returned from the API call', async () => {
    // mock fetch call
    global.fetch = async () => ({
        json: async () => (dadData)
    })
    
    render(<DadJoke />);

    await waitFor(() => {
        expect(screen.getByText("When is a door not a door? When it's ajar.")).toBeTruthy();
    })
})

