import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'

import App  from './App';

test('App renders', () => {
    render(<App />);
    expect(screen.getByText('STATE BUTTONS')).toBeTruthy();
})
