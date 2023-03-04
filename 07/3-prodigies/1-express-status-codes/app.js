// app setup
import express from 'express';
const app = express();
app.use(express.json());

/**
 * Challenge: Rockin' Robots Dynamic HTTP Status Codes
 *
 * The Rockin' Robots need you to create a dynamic route that can handle different status codes.
 * The route should receive a JSON object with the following properties: { code, message }.
 * It should then set the status code to the code passed in the body and send the message as the response.
 *
 * 1. Create an Express route with a POST method that listens to the path '/status'.
 * 2. Parse the JSON object received in the request body using `express.json()`.
 * 3. Use the `res.status()` method to set the status code to the code passed in the body.
 * 4. Use the `res.send()` method to send the message passed in the body.
 *
 * Example:
 *
 * POST '/status'
 * Request Body: { "code": 404, "message": "Not Found" }
 * Response:
 * Status Code: 404
 * Body: "Not Found"
 */

// 👇👇👇 YOUR CODE for the `POST /status` route 👇👇👇




export default app;