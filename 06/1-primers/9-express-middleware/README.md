![MV Logo](/logo.jpg)

# Express Middleware
Middleware is one of the great things that makes Express so flexible and powerful. It's the layer between the request and the response, where you can perform all sorts of magic to transform or augment the request or response.

Middleware is essentially a function that gets called on every request, and it has access to the request object (`req`), the response object (`res`), and the `next` function. You can think of middleware as a series of gates that the request has to pass through before it reaches the destination (i.e., the route handler). Each gate can perform some operation on the request or response, or even terminate the request early if necessary.

Here's a simple example of middleware that just logs the URL of the incoming request:
```js
import express from 'express';
const app = express();

app.use((req, res, next) => {
  console.log(`Incoming request to ${req.url}`);
  next(); // make sure to call next() to pass the request to the next middleware or route
});

app.get('/', (req, res) => {
  res.send('Hello, superheroes!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```
You can use `req` and `res` to read and modify the incoming request and outgoing response, respectively. And you must call `next()` at the end of the function to pass control to the next middleware function or route handler.

A few common use cases for middleware include:
- Logging
- Parsing request bodies
- Authentication

We'll look at the first two. For both of these, it's important to note that _the order in which middleware functions are added to the application is important_. Middleware functions are executed in the order they are defined, so if you need to use a parsing middleware like `express.json()` or `express.urlencoded()`, you should add it before any other middleware that needs to access the request body. This is because the parsing middleware needs to parse the request body before it can be accessed by other middleware functions. 

```js
import express from 'express';
const app = express();

// DO NOT add routes before adding middleware that you need in these routes.

// ⭐️ Parsing middleware
app.use(express.json());

// ⭐️ Logging middleware
app.use((req, res, next) => {
  console.log(req.body);
  next();
});

// Other middleware and routes...
```

## #checkoutTheDocs 🔍
- [Express Middleware](https://expressjs.com/en/guide/using-middleware.html)