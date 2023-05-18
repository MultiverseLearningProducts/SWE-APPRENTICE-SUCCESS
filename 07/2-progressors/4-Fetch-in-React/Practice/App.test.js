import React from 'react';
import { render, screen, fireEvent, waitFor} from '@testing-library/react'
import App  from './App';
import '@testing-library/jest-dom'
test('App renders', () => {
    render(<App />);
    expect(screen.getByText('Give me a cat!')).toBeTruthy();
})

test('Cat image fetched and image with alt text of cat is rendered on button click.', async () => {
    // mock fetch call
    global.fetch = async () => ({
        json: async () => ({
            file: "https://purr.objects-us-east-1.dream.io/i/XlKiu.jpg"
        })
    })
    
    render(<App />);
    fireEvent.click(screen.getByText("Give me a cat!"))
    await waitFor(() => {
        expect(screen.getByAltText('cat')).toBeTruthy();
    })
})