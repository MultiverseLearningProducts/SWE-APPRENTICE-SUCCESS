# Media Queries
- When designing websites, we need to consider all the different types of browsers that our users my access from (phones, tablets, laptops, desktops, etc)
- Media queries allow us to specify different CSS rulesets that will be applied based on the size of the screen.
- The `@media` rule is used in media queries to apply different styles for different media types/devices.

## `@media` Example

We have decided to style our page with a `yellow` background.
`style.css`
```css
body {
    background-color: yellow;
}
```

This is nice, but we want a `lightblue` background only when the screen is smaller than `600px`. A `@media` rule can help to add this in.

`style.css`
```css
body {
    background-color: yellow;s
}

@media only screen and (max-width: 600px){
    body {
        background-color: lightblue;
    }
}
```

This now will color the `body` yellow on screens that are ***larger*** than 600px and will color the `body` lightblue on screens smaller than 600px. 

## Try It Out 💻
1. Navigate to [Free Code Camp's Responsive Piano](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-responsive-web-design-by-building-a-piano/step-1).
2. Build a responsive piano that is styled differently based on the screen size.

## #checkoutTheDocs 🔍
- **W3Schools**: [CSS @media Rule](https://www.w3schools.com/cssref/css3_pr_mediaquery.php)
- **CSS Tricks**: [A Complete Guide to Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

## Video Resources 🎥
- [Learn How to Use CSS Media Queries](https://www.youtube.com/watch?v=2KL-z9A56SQ)