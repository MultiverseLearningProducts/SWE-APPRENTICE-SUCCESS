# Source Order, Specificity, and Inheritance
- When thinking of cascading rules, there are three to consider when determining which style rules will be applied:
    - Source Order
    - Specificity
    - Inheritance
- When resolving conflicting rulesets, CSS will consider source order, specificity, and importance styling a page.

## Source Order Example

Consider the following conflicting CSS rulesets that both try to style the background color of the page.
```css
body {
    background-color: green;
}

body {
    background-color: red;
}
```

The body will be styled red because source order styles based on the ruleset that comes ***last***.

## Specificity

When determining which style rules to apply, CSS uses the following specificity scores:

| Selector Type | Score/Rank |
| ------------- | ---------- |
| HTML Element and Pseudo-Element | 1 |
| Attribute, Class, and Pseudo-Class | 10 |
| ID | 100 |
| Inline CSS | 1000 |

When two rulesets are attempting to style the same element, the ruleset with the higher score/rank is the style that is applied. Suppose we have the following HTML element:

```html
<p class = "myPara">Some text to style</p>
```

```css
.myPara {
    font-size: 30px;
}

p {
    font-size: 10px;
}
```

Even though the `p` selector would be applied when considering source order, the `.myPara` class has a higher score/rank, so the paragraph text selected will have a `font-size` of `30px`.

## Inheritance

When styling with CSS, there are some properties that are inherited by the child elements from the parent. Suppose we have the following HTML and CSS.

**`index.html`**
```html 
<div>
    <p>Child #1</p>
    <p>Child #2</p>
    <p>Child #3</p>
</div>
```

**`style.css`**
```css
div {
    color: purple;
}
```

All of the child `p` elements will be styled purple because they inherited this color from the parent `div` element.

## Try It Out! 💻
1. Navigate back to [CSS Diner](https://flukeout.github.io/)
2. Try to complete all the levels!

## #checkoutTheDocs 🔍
- **MDN**: [Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- **MDN**: [Cascade and Source Order](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

## Video Resources 🎥
- [Source Order, Specificity, and Inheritance](https://www.youtube.com/watch?v=CHyPGSpIhSs)