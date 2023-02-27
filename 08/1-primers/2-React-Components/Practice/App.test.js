import React from 'react';
import renderer from 'react-test-renderer';
import App  from './App';
import NavBar from "./components/NavBar"
import Pizza from "./components/Pizza"
import Menu from "./components/Menu"
import Pepperoni from "./components/Pepperoni"
import Veggie from './components/Veggie';
import MeatLover from './components/MeatLover';
import Hawaiian from './components/Hawaiian';
import Bbq from './components/Bbq';

test("App component - Renders NavBar, Pizza, and Menu components", () => {
    const component = renderer.create(<App/>);
    const instance = component.root;

    // expect Navbar, Pizza, Menu component to be rendered in App
    expect(instance.findByType(NavBar)).toBeTruthy();
    expect(instance.findByType(Pizza)).toBeTruthy();
    expect(instance.findByType(Menu)).toBeTruthy();
})

test("Peperoni component has an h5 element with 'Peperoni Slice' title and edited the p element text.", () => {
    const component = renderer.create(<Pepperoni/>);
    const instance = component.root;

    const h5 = instance.findByType("h5");
    const p = instance.findByType("p");

    expect(h5.children.includes('Pepperoni Slice')).toBe(true);
    expect(p.children.includes("It's got cheese, it's got tomato sauce, and it's only  a dollar. What more could you ask for?")).toBe(false)
})

test("Veggie component has an h5 element with 'Veggie Slice' title and edited the p element text.", () => {
    const component = renderer.create(<Veggie/>);
    const instance = component.root;

    const h5 = instance.findByType("h5");
    const p = instance.findByType("p");

    expect(h5.children.includes('Veggie Slice')).toBe(true);
    expect(p.children.includes("It's got cheese, it's got tomato sauce, and it's only  a dollar. What more could you ask for?")).toBe(false)
})

test("MeatLover component has an h5 element with 'Meat Lover Slice' title and edited the p element text.", () => {
    const component = renderer.create(<MeatLover/>);
    const instance = component.root;

    const h5 = instance.findByType("h5");
    const p = instance.findByType("p");

    expect(h5.children.includes("Meat Lover's Slice")).toBe(true);
    expect(p.children.includes("It's got cheese, it's got tomato sauce, and it's only  a dollar. What more could you ask for?")).toBe(false)
})

test("Menu renders Hawaiian component.", () => {
    const component = renderer.create(<Menu/>);
    const instance = component.root;

    expect(instance.findByType(Hawaiian)).toBeTruthy();
})

test("Bbq component is rendered in the Menu.", () => {
    const component = renderer.create(<Menu/>);
    const instance = component.root;

    expect(instance.findByType(Bbq)).toBeTruthy();
})

test("Bbq component has an h5 element with 'BBQ Chicken'.", () => {
    const component = renderer.create(<Bbq/>);
    const instance = component.root;

    const h5 = instance.findByType("h5");

    expect(h5.children.includes("BBQ Chicken")).toBe(true);
})