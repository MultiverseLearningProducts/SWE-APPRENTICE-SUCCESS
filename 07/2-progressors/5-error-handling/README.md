![MV Logo](/logo.jpg)

# Error Handling with Express
As a Superhero, you're no stranger to encountering unexpected events, like natural disasters or criminal activity. Similarly, when building an API with Express, you need to handle errors and exceptions that may occur during the request-response cycle. In this lesson, we'll show you how to handle errors in Express.
## The Error Middleware
Express has a built-in middleware function for handling errors: `app.use((err, req, res, next) =&gt; {...})`. This function takes four arguments: the error object, the request object, the response object, and the next middleware function. You can use it to handle any errors that occur in your application, such as 404 errors or database errors.

```
import express from 'express';

const app = express();

app.get('/superheroes', (req, res, next) => {
  const error = new Error('Superheroes not found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ error: message });
});

```

In this example, we're creating an error object with a custom message and status code in the `/superheroes` route handler. We then pass this error object to the next middleware function using `next(error)`. The error middleware function checks for the status and message properties of the error object and sends a JSON response with the appropriate status code and message.
## Asynchronous Error Handling
When working with asynchronous code, you need to handle errors differently. You can use the `try...catch` statement to catch errors and pass them to the error middleware function.

```
import express from 'express';
import Superhero from '../models/Superhero';

const app = express();

app.get('/superheroes/:id', async (req, res, next) => {
  try {
    const superhero = await Superhero.findByPk(req.params.id);
    if (!superhero) {
      const error = new Error('Superhero not found');
      error.status = 404;
      throw error;
    }
    res.json(superhero);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ error: message });
});

```

In this example, we're using the `findByPk` method of Sequelize to retrieve a Superhero by its ID. If the Superhero is not found, we create an error object and throw it using the `throw` keyword. The `catch` block catches the error and passes it to the error middleware function using `next(err)`.
## Conclusion
In this lesson, we learned how to handle errors in Express using the error middleware function and the `try...catch` statement. By handling errors properly, you can make your API more robust and prevent unexpected behavior.
## #checkoutTheDocs 🔍
- [Express Error Handling](https://expressjs.com/en/guide/error-handling.html)
