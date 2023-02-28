import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer';
import App  from './App';

test('App renders', () => {
    render(<App />);
    expect(screen.getByText('Give me a cat!')).toBeTruthy();
})