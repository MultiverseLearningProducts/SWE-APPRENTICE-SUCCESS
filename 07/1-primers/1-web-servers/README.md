![MV Logo](/logo.jpg)

## TL/DR
In simple terms, a web server is a computer program that stores and delivers web content to users over the internet.

## The Barista Analogy
Imagine you're a customer at a busy coffee shop, and you're craving a delicious cappuccino. You walk up to the barista and place your order, but there's a problem - the barista can't make your cappuccino right there on the spot. Instead, they have to go to the back room and retrieve the ingredients: coffee, milk, and a fancy frothing machine.

Once they have all the ingredients, they put them together and create your delicious cappuccino. Then, they bring it back out to you and voila! Your craving is satisfied.

Just like the barista has to go to the back room to get the ingredients for your cappuccino, the web server has to retrieve the web content from its storage location and deliver it to your computer. And just like the end result is a delicious cappuccino, the end result of a web server's work is a website that you can enjoy in your web browser.

## Web Servers
When you visit a website, your computer sends a request to the web server asking for the website's content. The web server then retrieves the content (which may include HTML files, images, videos, and other files) and sends it back to your computer, which then displays it in your web browser.

Web servers are often used by businesses and organizations to host their websites and make them accessible to the public. They can also be used to host web applications and provide other online services.

## Example
Imagine we're creating a website for a group of superheroes who need a platform to showcase their various powers and abilities. We'll call it the "League of Incredibly Super Heroes" (L.I.S.H. for short).

To start, we'll need to install the necessary dependencies. Open up your terminal and navigate to your project folder. Then, type the following command:
```bash
npm install express
```
Next, let's create a new file called `server.js` and add the following code:

```js
import express from 'express';
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```
In this code, we're requiring the `express` module and creating a new instance of the `express` object. We then tell our server to serve static files located in a folder called `public` (which we'll create in a moment). Finally, we start our server and listen on port 3000.

Now, let's create our `public` folder and add an `index.html` file with some super-serious superhero content. For example:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>League of Incredibly Super Heroes</title>
  </head>
  <body>
    <h1>Welcome to L.I.S.H.!</h1>
    <p>Meet our team of superheroes:</p>
    <ul>
      <li>Super Fastman</li>
      <li>Ultra Stretchywoman</li>
      <li>Mega Laserboy</li>
      <li>Immortal Ghostgirl</li>
    </ul>
  </body>
</html>
```
Now, if we run our `server.js` file by typing `node server.js` in the terminal, our server should start up and be ready to serve our `index.html` file!

Navigate to http://localhost:3000 in your web browser and you should see the superhero content we just created. Congratulations, you've just created a web server using Express to serve static HTML content!


## #checkoutTheDocs 🔍
- [Express](https://expressjs.com/)
- [Express - Static Files](https://expressjs.com/en/starter/static-files.html)
- [Express - Hello World](https://expressjs.com/en/starter/hello-world.html)

## Video Resources 🎥
- [What is a Web Server?](https://www.youtube.com/watch?v=9J1nJOivdyw)
