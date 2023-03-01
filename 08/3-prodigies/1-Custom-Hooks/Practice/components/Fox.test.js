import React from 'react';
import { render, screen, waitFor} from '@testing-library/react'
import Fox from './Fox';
import '@testing-library/jest-dom'

const foxData = 
{
    "image": "https://randomfox.ca/images/57.jpg",
    "link": "https://randomfox.ca/?i=57"
}

test('Renders fox image with the correct url and an alt tag of "fox" after the API call', async () => {
    // mock fetch call
    global.fetch = async () => ({
        json: async () => (foxData)
    })
    
    render(<Fox />);

    await waitFor(() => {
        expect(screen.getByAltText('fox')).toBeTruthy();
        const image = screen.getByAltText('fox');
        expect(image.getAttribute("src")).toBe("https://randomfox.ca/images/57.jpg")
    })
})