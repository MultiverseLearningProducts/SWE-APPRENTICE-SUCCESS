![MV Logo](/logo.jpg)

# NPM
npm, or Node Package Manager, is a package manager for the JavaScript programming language. It provides a centralized repository of open-source packages, which can be easily downloaded and used in your Node.js projects.

## Installation
npm is included with Node.js, so you don't need to install it separately. To check that you have npm installed, run the following command in your terminal:
```sh
npm -v
```
if you don't have npm installed, you likely don't have Node installed.  To check that you have Node installed, run the following command in your terminal:
```sh
node -v
```
If you don't have Node installed, you can download it from [nodejs.org](https://nodejs.org/en/).

## Creating a Project
Creating a project: To start using npm, you'll first need to create a project. Navigate to the directory where you want to create your project and run the following command:
```sh
npm init -y
```
This will create a `package.json` file in the current directory. This file contains information about your project, including the name, version, and dependencies.

## Installing Packages
To install a package, run the following command in your terminal:
```sh
npm install <package-name>
```

For example, to install the lodash package, run the following command:
```sh
npm install lodash
```
This will install the lodash package and add it to the `dependencies` section of the `package.json` file.

## Using Packages
To use a package in your project, you need to import it using the require function:
```js
const _ = require('lodash');
```
This will import the lodash package and assign it to the `_` variable.

## Updating Packages
As an application grows, it will often need to use newer versions of its dependencies. To update a package, run the following command:
```sh
npm update <package-name>
```
This will update the package to the latest version and update the `package.json` file.

npm makes it easy to manage your project's dependencies and ensure that you have the latest version of each package.

### #checkoutTheDocs 🔍
- [getting started with the cli](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Video Resources 🎥
- [npm crash course](https://www.youtube.com/watch?v=jHDhaSSKmB0)
