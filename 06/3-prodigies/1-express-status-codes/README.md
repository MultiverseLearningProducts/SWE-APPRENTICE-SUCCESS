![MV Logo](/logo.jpg)

# Express Status Codes## 🚦 The Traffic Light of the Internet
Just like the traffic lights on the streets, HTTP status codes are the way your server communicates with the client. They tell the client what's going on and what to do next. Think of them as the traffic light of the internet! 🚦

In Express, you can set the status code of a response using the `status` method of the `res` object. For example, to send a `404` error status code with a message, you would do:

```js
app.get('/not-found', (req, res) => {
  res.status(404).send('Page not found');
});

```

you can alternatively use the express `res.sendStatus` method to send a status code without a message:

```js
app.get('/not-found', (req, res) => {
  res.sendStatus(400);
});

```

Here are some common status codes that you can use in your Express applications:

- `200 OK`: the request was successful
- `201 Created`: a new resource was created
- `204 No Content`: the request was successful, but there is no response body
- `400 Bad Request`: the request was malformed or invalid
- `401 Unauthorized`: authentication is required and has failed or has not yet been provided
- `403 Forbidden`: the client does not have access to the requested resource
- `404 Not Found`: the requested resource could not be found
- `500 Internal Server Error`: an error occurred on the server


When setting the status code, it's a good practice to also set a message that explains what happened. The `send` method of the `res` object can be used to send a message with the response.

## #checkoutTheDocs 🔍
- [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [Express.js: HTTP Status Codes](https://expressjs.com/en/api.html#res.status)
- [HTTP Cats](https://http.cat/)

## 🎥 Video Resources
- [Handling HTTP Status codes and HTTP Methods in Express](https://www.youtube.com/watch?v=wgWmYJAmJmU)
- [Learn HTTP Status Codes In 10 Minutes](https://www.youtube.com/watch?v=wJa5CTIFj7U)
