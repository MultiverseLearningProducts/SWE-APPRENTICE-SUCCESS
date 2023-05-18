import React from 'react';
import { render, screen, fireEvent, waitFor} from '@testing-library/react'
import App  from './App';
import '@testing-library/jest-dom'

const potterData = [
    {
        "id": "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
        "name": "Harry Potter",
        "alternate_names": [ ],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "31-07-1980",
        "yearOfBirth": 1980,
        "wizard": true,
        "ancestry": "half-blood",
        "eyeColour": "green",
        "hairColour": "black",
        "wand": {
        "wood": "holly",
        "core": "phoenix feather",
        "length": 11
        },
        "patronus": "stag",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Daniel Radcliffe",
        "alternate_actors": [ ],
        "alive": true,
        "image": "https://ik.imagekit.io/hpapi/harry.jpg"
    },
    {
        "id": "4c7e6819-a91a-45b2-a454-f931e4a7cce3",
        "name": "Hermione Granger",
        "alternate_names": [ ],
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "19-09-1979",
        "yearOfBirth": 1979,
        "wizard": true,
        "ancestry": "muggleborn",
        "eyeColour": "brown",
        "hairColour": "brown",
        "wand": {
        "wood": "vine",
        "core": "dragon heartstring",
        "length": null
        },
        "patronus": "otter",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Emma Watson",
        "alternate_actors": [ ],
        "alive": true,
        "image": "https://ik.imagekit.io/hpapi/hermione.jpeg"
    },
    {
        "id": "c3b1f9a5-b87b-48bf-b00d-95b093ea6390",
        "name": "Ron Weasley",
        "alternate_names": [
        "Dragomir Despard"
        ],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "01-03-1980",
        "yearOfBirth": 1980,
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "blue",
        "hairColour": "red",
        "wand": {
        "wood": "willow",
        "core": "unicorn tail-hair",
        "length": 14
        },
        "patronus": "Jack Russell terrier",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Rupert Grint",
        "alternate_actors": [ ],
        "alive": true,
        "image": "https://ik.imagekit.io/hpapi/ron.jpg"
    },
];

test('Renders character name returned from the API call', async () => {
    // mock fetch call
    global.fetch = async () => ({
        json: async () => (potterData)
    })
    
    render(<App />);

    await waitFor(() => {
        expect(screen.getByText("Harry Potter")).toBeTruthy();
        expect(screen.getByText("Hermione Granger")).toBeTruthy();
        expect(screen.getByText("Ron Weasley")).toBeTruthy();
    })

})

test('Renders character patronus data returned from the API call', async () => {
    // mock fetch call
    global.fetch = async () => ({
        json: async () => (potterData)
    })
    
    render(<App />);

    await waitFor(() => {
        expect(screen.getByText("Patronus: stag")).toBeTruthy()
        expect(screen.getByText("Patronus: otter")).toBeTruthy()
        expect(screen.getByText("Patronus: Jack Russell terrier")).toBeTruthy()
    })
})