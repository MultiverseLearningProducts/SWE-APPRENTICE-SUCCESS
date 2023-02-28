import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'

import App  from './App';

test('Initial language state of ruby, count state of 0, and radio state of null are rendered in App', () => {
    render(<App />);
    
    // Get state on App render
    expect(screen.getByText('I like: Ruby')).toBeTruthy();
    expect(screen.getByText('Current Count: 0')).toBeTruthy();
    expect(screen.getByText('Radio Value:')).toBeTruthy();
})

test('Clicking the language buttons changes the language state', () => {
    render(<App />);

    expect(screen.getByText('I like: Ruby')).toBeTruthy();

    // Change state to Java
    fireEvent.click(screen.getByText('Java'));
    expect(screen.queryByText('I like: Ruby')).toBeNull();
    expect(screen.getByText('I like: Java')).toBeTruthy();

    // Change state to Python
    fireEvent.click(screen.getByText('Python'));
    expect(screen.queryByText('I like: Java')).toBeNull();
    expect(screen.getByText('I like: Python')).toBeTruthy();

    // Change state to JavaScript
    fireEvent.click(screen.getByText('JavaScript'));
    expect(screen.queryByText('I like: Python')).toBeNull();
    expect(screen.getByText('I like: JavaScript')).toBeTruthy();

    // Change state to C++
    fireEvent.click(screen.getByText('C++'));
    expect(screen.queryByText('I like: JavaScript')).toBeNull();
    expect(screen.getByText('I like: C++')).toBeTruthy();
})

test('Clicking the counter + and - buttons increment the count', () => {
    render(<App />);

    expect(screen.getByText('Current Count: 0')).toBeTruthy();
    
    // Increment counter twice
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('+'));
    expect(screen.queryByText('Current Count: 0')).toBeNull();
    expect(screen.getByText('Current Count: 2')).toBeTruthy();

    // Decrease counter once
    fireEvent.click(screen.getByText('-'));
    expect(screen.queryByText('Current Count: 2')).toBeNull();
    expect(screen.getByText('Current Count: 1')).toBeTruthy();
})

test('Clicking the radio buttons changes the radio state', () => {
    render(<App />);

    expect(screen.getByText('Radio Value:')).toBeTruthy();

    // click the radio button labeled 1
    const oneRadio = screen.getByLabelText(/1/i);
    fireEvent.click(oneRadio);
    expect(screen.getByText('Radio Value: 1')).toBeTruthy();

    // click the radio button labeled 2
    const twoRadio = screen.getByLabelText(/2/i);
    fireEvent.click(twoRadio);
    expect(screen.getByText('Radio Value: 2')).toBeTruthy();

    // click the radio button labeled 3
    const threeRadio = screen.getByLabelText(/3/i);
    fireEvent.click(threeRadio);
    expect(screen.getByText('Radio Value: 3')).toBeTruthy();

    // click the radio button labeled 4
    const fourRadio = screen.getByLabelText(/4/i);
    fireEvent.click(fourRadio);
    expect(screen.getByText('Radio Value: 4')).toBeTruthy();
})