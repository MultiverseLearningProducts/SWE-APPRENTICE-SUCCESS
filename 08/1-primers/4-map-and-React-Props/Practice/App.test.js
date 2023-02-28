import React from 'react';
import renderer from 'react-test-renderer';
import App from "./components/App"
import YearbookCard  from './components/YearbookCard';

test('Yearbook card renders {name} in bolded h4 and {quote} in p. The quote should render with quotation marks around the text', () => {
    const {root: zeusInstance} = renderer.create(<YearbookCard name= "Zeus" quote = 'I am the king of the school'/>);
    // assert that bolded h4 includes 'Zeus'
    expect(zeusInstance.findByType("b").children.join('')).toBe('Zeus');
    // assert that p includes 'I'm the king of the school'
    expect(zeusInstance.findByType("p").children.join('')).toBe('"I am the king of the school"');

    const {root: igorInstance} = renderer.create(<YearbookCard name= "Igor" quote = "Insert senior quote"/>);
    // assert that h1 includes 'Little Fieldmouse'
    expect(igorInstance.findByType("b").children.join('')).toBe('Igor');
    // assert that h2 includes 'mouse'
    expect(igorInstance.findByType("p").children.join('')).toBe('"Insert senior quote"');
})

test("Yearbook component renders 30 times (i.e. the number of objects in the array)", () => {
    const component = renderer.create(<App/>);
    const instance = component.root;

    // expect Yearbook component to be rendered in App 30 times
    expect(instance.findAllByType(YearbookCard).length).toBe(30);

})
