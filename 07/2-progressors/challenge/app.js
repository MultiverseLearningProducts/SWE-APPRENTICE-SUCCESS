import express from 'express';
import { body, validationResult } from "express-validator";
import _ from 'lodash';
import { Op } from 'sequelize';

// database and the NobleHouse model
import { db, NobleHouse, Guest } from './db';

// Create the Express app
const app = express();

// Parse JSON bodies
app.use(express.json());

/* 
Query Parameters: The Royal Court is hosting a grand feast and they need a way to display the guests in different categories, such as age, occupation, and status. They have tasked you with creating an application that can filter the guests based on these categories using query parameters.
👇👇👇 YOUR CODE for Query Parameters 👇👇👇
*/
// GET /guests?age=35&occupation=Knight&status=Accepted


/*
Server Side Validation: The Royal Court has become increasingly concerned with the security of their data. Using express-validator, the queen wants you to protect this route by confirming that `name` is not empty and `age` is an integer.
*/
// POST /guests
app.post(
  '/guests',
  // 👇👇👇 YOUR CODE (middleware) for Server Side Validation 👇👇👇


  async (req, res) => {const errors = validationResult(req);
    // 👇👇👇 YOUR CODE (error handling) for Server Side Validation 👇👇👇
    


    const { name, age, occupation, status } = req.body;
    const guest = await Guest.create({ name, age, occupation, status });
    res.send(guest);
  }
);

/*
Pagination: The Royal Court is managing a large number of noble houses and they need an application that can handle pagination of the noble houses in a clean and efficient way. They have tasked you with refactoring this api route to paginate the noble houses based on query parameters `page` and `pageSize`. 

Considerations:
- If there are no query params passed in, the default values should be `page=1` and `pageSize=10`.
- Return the data in this format: `{ page, pageSize, totalPages, nobleHouses }` where 
  - `page` is the current page number
  - `pageSize` is the number of noble houses per page
  - `nobleHouses` is the resulting array of noble houses for the given page
  - `totalPages` is the total number of pages when dividing the total number of noble houses by the page size.

  */
 // GET /noblehouses?page=1&pageSize=10
 app.get('/noblehouses', async (req, res) => {
  // 👇👇👇 YOUR CODE: page, pagesize and offset 👇👇👇
  

  

  const nobleHouses = await NobleHouse.findAndCountAll({
    // 👇👇👇 YOUR CODE: tell sequelize what limit and offset 👇👇👇
    

  });

  // 👇👇👇 YOUR CODE: calculate totalPages 👇👇👇
  

  res.send({
    nobleHouses: nobleHouses.rows,
    // 👇👇👇 YOUR CODE: edit the following page, pageSize, totalPages and nobleHouses 👇👇👇
    page: 1,
    pageSize: 10,
    totalPages: 100,
  });
});


/*
Filtering and Sorting: The Royal Court wants to be able to find like-minded nobles quickly and easily. They have asked you to refactor this API route so that it that can filter and sort the houses based on query parameters `sigil` and `words`. 

Considerations:
- The query parameters should be optional and the default sort should be by `id` in ascending order.
- Results should be returned even if the parameters are found within the `sigil` or `words` fields, not only if they are an exact match. (Hint: Array.prototype.includes() will be very helpful here) 
👇👇👇 YOUR CODE for Filtering and Sorting 👇👇👇
*/
// GET /noblehouses/search?sigil=blue&words=Fire&sort=words&order=DESC
app.get('/noblehouses/search', async (req, res) => {
  // 👇👇👇 YOUR CODE: add `sigil` and `words` to the where clause if they exist on req.query 👇👇👇
  




  const houses = await NobleHouse.findAll({
    // 👇👇👇 YOUR CODE: add `where` and `order` to the options object 👇👇👇
    
    
  });

  res.send(houses);
});





// NOTE: This route is for testing purposes only. Do not modify it or change the order in which it appears!
app.get('/errorcheck', (req, res, next) => {
  next(new Error('This is an error'));
});

/*
404 Handling with Express: The Royal Court is experiencing an increase in attempted data breaches and they are concerned about hackers gaining access to their data. They need an application that can handle 404 errors in a way that does not provide sensitive information to potential attackers. You have been tasked with creating an application that can handle 404 errors with Express. Create a catch-all middleware that sends back a 404 status code.
👇👇👇 YOUR CODE for 404 Handling with Express 👇👇👇
*/


/*
Error Handling with Express: The Royal Court has recently experienced several instances of data corruption and loss due to faulty error handling. They need an application that can handle errors gracefully and prevent data loss. You have been tasked with creating an Express error handling middleware. When an error is thrown, return a status of 500 with a message of "Mighty sorry old chap. Something has gone a pity wrong."
*/

// 👇👇👇 YOUR CODE for Error Handling with Express 👇👇👇








// Start the server
const PORT = process.env.PORT || 3000;
// Export the app. NOTE: Do not start the server with app.listen() here. We will do that in the test file.
export default app;
