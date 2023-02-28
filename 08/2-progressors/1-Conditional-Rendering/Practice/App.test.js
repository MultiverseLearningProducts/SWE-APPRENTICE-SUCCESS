import React from 'react';
import { render, screen } from '@testing-library/react'
import App  from './App';
import Login from './components/Login';

test('Login component renders with Login button when isRegistered is false and Welcome Back! when isRegestered is true', () => {
    render(<Login isRegistered = {false} />);
    expect(screen.getByText('Login')).toBeTruthy();

    render(<Login isRegistered = {true} />);
    expect(screen.getByText('Welcome Back!')).toBeTruthy();
})

test('Item components only renders when login state is true', () => {
    render(<App />);
    expect(screen.getByText('Bananas')).toBeTruthy();
    expect(screen.getByText('Canned Soup')).toBeTruthy();
})

test('Item components render a ❄️ for items with a prop of refrigerate that is true', () => {
    render(<App />);
    expect(screen.getByText('Ice Cream ❄️')).toBeTruthy();
    expect(screen.getByText('Cheese ❄️')).toBeTruthy();
})