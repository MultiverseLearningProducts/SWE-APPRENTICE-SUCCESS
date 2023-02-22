![MV Logo](/logo.jpg)

# Application Servers
While a web server delivers static content to the user, an application server delivers dynamic content. This means that the content is generated on the fly based on the user's request. For example, instead of simply sending back html content for our superheroes, we may want to send back JSON data about each superhero or a list of superheroes.

```js
import express from 'express';
const app = express();

// Our superhero database
const superheroes = [
  { name: 'Superman', power: 'flight, super strength, laser vision' },
  { name: 'Spiderman', power: 'wall-crawling, spider sense, web slinging' },
  { name: 'Batman', power: 'genius-level intellect, martial arts, gadgets' }
];

// Endpoint for fetching all superheroes
app.get('/', (req, res) => {
  res.json(superheroes);
});

// Start the server
app.listen(3000, () => {
  console.log('Superhero server listening on port 3000!');
});
```

In this code, we're using the `app.get` method to create an endpoint at the URL `http://localhost:3000` that sends the heroes back to the user as a JSON response.

## #checkoutTheDocs 🔍
- [Express Routes](https://expressjs.com/en/guide/routing.html)
- [Express Response](https://expressjs.com/en/api.html#res)

## Video Resources 🎥
