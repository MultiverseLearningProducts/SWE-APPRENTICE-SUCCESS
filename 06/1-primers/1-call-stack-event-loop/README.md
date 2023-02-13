![MV Logo](/logo.jpg)

# Call Stack and Event Loop
Imagine you're hosting a big party at your house and you have a whole bunch of tasks to do: serving drinks, cooking food, playing music, and so on. You have a limited amount of energy to handle all these tasks. But wait! The guests just started to arrive and they want more drinks, the timer on the oven just went off, and your favorite song just came on. What do you do?

You call in reinforcements! Your trusty sidekick, Tim, steps in to manage all these extra tasks while you keep the party going. Tim acts as the DJ, playing all the right tunes at the right time, and handling all the drink orders while you keep cooking and chatting with guests. With Tim by your side, the party is a huge success and everyone has a great time!

This is similar to how the Call Stack and Event Loop work in programming. Just like you in the story, the JavaScript engine has a limited amount of resources (the Call Stack) to handle all the tasks that need to be done. The Event Loop acts like Tim, managing all the extra tasks and making sure everything runs smoothly. The Call Stack and Event Loop work together to ensure that the program runs efficiently, without any errors or delays.

## Call Stack
The Call Stack and Event Loop play a key role in the execution of asynchronous code.

The Call Stack is a data structure that stores the function calls that are made in a program. It works like a stack of plates, with the most recently added function call being the first one to be executed. When a function is called, it is pushed onto the top of the stack. When the function returns, it is popped off the top of the stack.

Here's an example of how the Call Stack works in JavaScript:
  
```js
function a() {
  console.log("Function a");
  b();
}

function b() {
  console.log("Function b");
  c();
}

function c() {
  console.log("Function c");
}

a();
```

When this code is run, the following output is produced:

```js
Function a
Function b
Function c
```

## Event Loop
The Event Loop is a mechanism that allows JavaScript to handle async tasks like user input, network requests, and timers. It works by monitoring the Call Stack and the message queue. When the Call Stack is empty, the Event Loop checks the message queue for any messages (i.e. functions) that need to be executed. If there are any, they are pushed onto the Call Stack to be executed.

Consider the `setTimeout` function that receives a callback to be executed after a specified amount of time:
```js
console.log("Start");
setTimeout(() => {
  console.log("Timeout");
}, 0);
console.log("End");
```

When this code is run, the Call Stack and message queue look like this:

```md
Call Stack:
- console.log("Start")
- console.log("End")

Message Queue:
- setTimeout callback function
```

As you can see, the setTimeout function is not executed immediately, but instead is _added to the message queue_. Once the Call Stack is empty, the Event Loop will take the function from the message queue and push it onto the Call Stack to be executed. The final output will be:

```md
Start
End
Timeout
```

The Call Stack and Event Loop work together to allow JavaScript to execute code in a non-blocking manner, and to handle async tasks in a way that makes the user interface responsive and fast.

## #checkoutTheDocs 🔍
- [Call Stack](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)
- [Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

## Video Resources 🎥
- [JavaScript Event Loop Explained](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [Call Stack, Callback Queue, and Event Loop](https://www.youtube.com/watch?v=FVZ-A_Akros)
