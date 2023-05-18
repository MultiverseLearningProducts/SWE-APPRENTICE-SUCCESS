![MV Logo](/logo.jpg)

# 404 Handling with Express## 🤔 Lost in the City of Errors
Picture this: You're navigating through the city of errors when you stumble upon a dead end. No matter which street you take, you end up facing an error. To make things worse, you can't even find the way back to where you started! Well, you can imagine how your users feel when they encounter a 404 error. 🤯

In Express, there isn't a framework-specific way to deal with 404 handlers, but we can handle 404 errors with middleware functions by using something true of Express: Routes are matched in the order they're defined. Thus, if you add the middleware function to the end of all the other routes and middleware functions, the 404 handler will only be called if no other routes match the request.

```js
import express from 'express';
const app = express();

// Other routes and middleware functions
// ...

// 404 handler defined last
app.use((req, res, next) => {
  res
    .status(404)
    .send('Page not found');
});

```

The `handle404` middleware function creates a new error with a message and a status code of 404. It then calls `next` with the error as an argument. The `handleError` middleware function checks the error for a status code and message, and sends an appropriate response to the client.
## #checkoutTheDocs 🔍
- [Express - 404 handling](http://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses)

## 🎥 Video Resources
- [Express 404 Handlers](https://www.youtube.com/watch?v=deZP3Z33DJ4)
