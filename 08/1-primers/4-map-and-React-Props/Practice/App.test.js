import React from 'react';
import renderer from 'react-test-renderer';
import App from "./components/App"

test("App component renders", () => {
    const component = renderer.create(<App/>);
    const instance = component.root;
    const h1 = instance.findByType("h1");
    expect(h1.children.includes('Mapping Our Yearbook')).toBe(true);
})
// Write tests here
