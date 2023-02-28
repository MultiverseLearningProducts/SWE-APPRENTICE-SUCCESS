import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import App  from './App';
import From from "./components/Form";

test('App renders', () => {
    render(<App />);
    // expect(screen.getByText('Create a Character')).toBeTruthy();
})

test('Form state is updated as user updates the form', () => {

    const result = render(<App />);
    // Input fields
    const input = result.container.querySelector('input');
    const textarea = result.container.querySelector('textarea');
    // Values for form
    const name = 'Sully the Giant';
    const description = 'Fights scary wizards';
    const superpower = '💨';
    const icon = '🫡';
    fireEvent.change(input, {target: {value: name}});
    fireEvent.change(textarea, {target: {value: description}});

    const form = result.container.querySelector('form');
    fireEvent.submit(form);

    // expect the words to show below
    expect(screen.getByText("Sully the Giant")).toBeTruthy();
    expect(screen.getByText("Fights scary wizards")).toBeTruthy();
})