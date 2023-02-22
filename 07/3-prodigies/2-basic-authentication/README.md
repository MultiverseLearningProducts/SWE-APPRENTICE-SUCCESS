![MV Logo](/logo.jpg)

# Basic Authentication in Express## 🔒 A Superhero Secret Base
Imagine that you are building a web application for a team of superheroes who need to access a secret base. You don't want just anyone to be able to access it, so you decide to add some authentication. Basic authentication is a simple way to protect your endpoints with a username and password.

In Express, we can use the `basic-auth` npm package to handle basic authentication. Here's an example:

```js
import basicAuth from 'basic-auth';

app.use((req, res, next) => {
  const user = basicAuth(req);

  if (!user || user.name !== 'admin' || user.pass !== 'secret') {
    res.sendStatus(401);
    return;
  }

  next();
});

app.get('/secret-base', (req, res) => {
  res.send('Welcome to the secret base!');
});

```

But we can also implement Basic Auth without an external package, opting to create the auth middleware ourselves, by parsing the headers and checking the credentials ourselves:

```js
import express from 'express';

// Create a new instance of Express.js
const app = express();

// Define Basic Authentication middleware
const basicAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    res.status(401).send('Unauthorized');
    return;
  }

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  if (username !== 'username' || password !== 'password') {
    res.status(401).send('Unauthorized');
    return;
  }

  next();
};

app.get('/secret-base', basicAuth, (req, res) => {
  res.send('Welcome to the secret base!');
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server listening at http://localhost:3000');
});

```

With the middleware, we check if the username and password match our desired credentials (in this case, "username" and "password"). If the credentials don't match, we return a `401 Unauthorized` status code. If the credentials do match, we call `next()` to allow the request to continue to the `/secret-base` endpoint.

Note that this is a very basic example and in practice, you should use a more secure method of authentication, like OAuth or JSON Web Tokens (JWT). Also, be careful not to send the credentials in plain text. Instead, use HTTPS to encrypt the connection.

## #checkoutTheDocs 🔍
- [HTTP authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)
- [Basic access authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#Basic_authentication_scheme)
- [Base 64 Encoding Tool](https://www.base64decode.org/)

## 🎥 Video Resources
- ["Basic Authentication" in 5 Minutes](https://www.youtube.com/watch?v=rhi1eIjSbvk)
- [Basic Authentication and Authorization in Express](https://youtu.be/YQlgRCMheqg?t=212)