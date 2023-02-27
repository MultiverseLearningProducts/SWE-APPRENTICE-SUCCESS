import React from 'react';
import renderer from 'react-test-renderer';
import App  from './App';

// Setup test
test("App component Renders", () => {
    const component = renderer.create(<App/>);
    const instance = component.root;

    const h1 = instance.findByType("h1");
    expect(h1.children.includes('Dogbook 🐶')).toBe(true);
})