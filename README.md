# SWE Apprentice Success Guide

Welcome to the Apprentice Success Guide for Software Engineering (SWE)!

This resource is designed to provide additional support and practice for apprentices who are enrolled in a SWE course. Each weekly topic will include content for multiple groups. For example, if you are with the...

1. 🔍 Primers - Great content if you **require additional support** to fully grasp the material - we provide additional explanations and examples to help you better understand the material.
2. 🚀 Progressors - This is your group if you're tracking with the concepts, but seek opportunities to further **enhance your understanding and skills** - we provide additional exercises and challenges to help you solidify your understanding of the material and build your skills.
3. 🏆 Prodigies - If you're finished with all the course content in a flash and are **excelling beyond** what the course requires, and need extra practice to challenge yourself - we provide advanced content and projects to help you push your skills to the next level.

## Navigating and Using This Resource

To access the content, navigate to the corresponding weekly topic folder and find the content that is most appropriate for where you are. We encourage you to take advantage of all the resources available to you, regardless of your current level of understanding.

Please note that the content provided in this repository is meant to supplement, not replace, the material covered in your SWE apprenticeship curriculum. It is essential that you continue engaging with the material covered in your course.

If you have any questions or feedback, please ask your coach. We hope that this resource helps you achieve success in your SWE course work!

## Coding and Running Tests In StackBlitz

Given that we do not learn `git` until Week 3,  you can edit your code and run the tests by forking [The Stackblitz](https://stackblitz.com/edit/github-j5cqqs?file=README.md) 

To run tests in StackBlitz, simply type the following command in the StackBlitz terminal

```shell
npm install
jest PATH_TO_FILE
```

For example, if I wanted to run the week 1 tests in the primers folder for variables and constants I would type

```shell
jest 01/1-primers/1-variables-constants
```

## Running Tests Locally

All tests can be run locally, but running the following in the root directory:

```shell
npm install 
npm run test PATH_TO_FILE
```

For example, if I wanted to run the week 1 tests in the primers folder for variables and constants I would type

```shell
npm run test 01/1-primers/1-variables-constants
```

For week 8, there are Practice folders for each React topic, so tests can be run ***inside*** these folders by doing

```shell
npm install 
npm run test
```

Week 8 React pages can be previewed by running:
```shell
npm install 
npm run start
```