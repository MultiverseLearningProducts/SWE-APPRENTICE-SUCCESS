import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;


/* 
You are building a website to showcase a collection of fantasy creatures. Create an Express web server that serves static files from the `public` folder. 

For example, if a user visits http://localhost:3000, they should see something like:

Welcome to the Fantasy Creatures Collection!

Check out our creatures:
- <a href="/dragons.html">Dragons</a>
- <a href="/unicorns.html">Unicorns</a>
- <a href="/griffins.html">Griffins</a>

*/
// 👇👇👇👇 serve the static files in the `public` folder

// YOUR CODE HERE


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
