![MV Logo](/logo.jpg)

# React

- React is a JavaScript library that is used to build user interfaces.
- React is a particularly powerful tool for building user interfaces because it allows programmers to create reusable components.

## Try It Out: Setting Up React with Parcel 💻
1. Create a new folder for your project and `cd` into that folder
```shell
mkdir name-of-folder
cd name-of-folder
```
2. Run the command `npm init -y` to create a `package.json`.
3. Run the command `npm install parcel` to install all the necessary dependencies you’ll need to work with your React project.
4. Run the  command `npm install react` to install the react library.
5. Run the command `npm install react-dom` to install the react library which will be necessary in order to render a JSX.
6. Open your `package.json` and add the following start command:
```shell
"start": "parcel index.html --open"
```
7. Create an HTML file called `index.html` that contains the HTML boilerplate and a `div` element that contains the id of `root`.
    - The id can be anything, but it needs to be consistent with what you select for in the next step.
8. Between your `<body>` and `</body>` tags add the following script tag:
```html
<script type="module" src="index.js"></script>
```
9. Create a new Javascript file named `index.js` that contains:
```javascript
import React from "react";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<h1>I just made a React page!</h1>);
```
10. Finally, run your application using:
```shell
npm run start
```

## #checkoutTheDocs 🔍
- **React**: [Start a New React App](https://beta.reactjs.org/learn/start-a-new-react-project)
- **Parcel**: [React](https://parceljs.org/recipes/react/)

## Video Resources 🎥
- [How to Setup React JS with Parcel](https://www.youtube.com/watch?v=U7CQE1TFMkg)