import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import Cat from "./Cat";
const url = "https://purr.objects-us-east-1.dream.io/i/XlKiu.jpg"

test("renders Cat component with no errors", () => {
    render(<Cat url = {url}/>)
    expect(screen.getByAltText('cat')).toBeTruthy();
})

test("image has a source that matches the prop passed in", () => {
    render(<Cat url = {url}/>)
    const image = screen.getByAltText('cat');
    expect(image.getAttribute("src")).toBe(url)
})