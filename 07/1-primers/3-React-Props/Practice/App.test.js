import React from 'react';
import renderer from 'react-test-renderer';
import Card  from './components/Card';
import bella from "./components/images/Bella.jpg"
import bailey from "./components/images/Bailey.jpg"
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'


test('Card renders with name in a h4', () => {
    const {root: bellaInstance} = renderer.create(<Card name="Bella" activity = "running" image = {bella}/>);
    // assert that bolded element includes 'Bella'
    expect(bellaInstance.findByType("b").children.join('')).toBe('Bella');

    const {root: baileyInstance} = renderer.create(<Card name="Bailey" activity = "long walks" image = {bailey}/>);
    // assert that bolded element includes 'Bailey'
    expect(baileyInstance.findByType("b").children.join('')).toBe('Bailey');
})

test('Card renders with activity in the string "I really love ACTIVITY"', () => {
    const {root: bellaInstance} = renderer.create(<Card name="Bella" activity = "running" image = {bella}/>);
    // assert that p includes 'I really love running'
    expect(bellaInstance.findByType("p").children.join('')).toBe('I really love running');

    const {root: baileyInstance} = renderer.create(<Card name="Bailey" activity = "long walks" image = {bailey}/>);
    // assert that p includes 'I really love long walks'
    expect(baileyInstance.findByType("p").children.join('')).toBe('I really love long walks');
})


test('Card renders image with name as alt text"', () => {
    render(<Card name="Bella" activity = "running" image = {bella}/>);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('alt', 'Bella')
})