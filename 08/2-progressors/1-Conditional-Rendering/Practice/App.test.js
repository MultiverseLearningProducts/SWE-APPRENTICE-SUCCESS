import React from 'react';
import renderer from 'react-test-renderer';
import App  from './App';

test("App component renders with h1 title of 'Shopping List'.", () => {
    const component = renderer.create(<App/>);
    const instance = component.root;

    const h1 = instance.findByType("h1");

    expect(h1.children.includes('Shopping List 📝')).toBe(true);
})