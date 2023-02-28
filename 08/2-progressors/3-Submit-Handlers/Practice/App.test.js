import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import App  from './App';
import From from "./components/Form";

test('App renders', () => {
    render(<App />);
    // expect(screen.getByText('Create a Character')).toBeTruthy();
})