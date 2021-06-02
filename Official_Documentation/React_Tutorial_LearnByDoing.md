# React Tutorial

### learn by doing

- https://reactjs.org/tutorial/tutorial.html

### Building a Tic-Tac-Toe Game

- React

  - "a declarative, efficient, and flexible JS library for building UI. It lets you compose complex UIs from small and isolated pieces of code called "components".

- React has few components
  - start with `React.Component` subclasses

* We use components to tell React what we want to see on the screen
  - When our data changes, React will efficiently update and re-render our components

- React Component Class [Type]

  - component takes in parameters
  - takes in parameters called `props`
  - returns a hierarchy of views to display via the `render` method

    - `render` returns a **description** of what to display

- To "remember" stuff components use **state**

  - this.state for Class Types
  - useState for Functional Types

- React DevTools - let you check the props and state of your React Components

- To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can then pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.

- In React, it's conventional to use **on[Event]** names for props which represent events and **handle[Event]** for the methods which handle the events

- **Immutability** - is IMPORTANT!!
  (1) Time Travel
  (2) Detecting Changes
  (3) Determining When to Re-Render in React

- **Time Travel** : use History!

- **List Key**

  - When a list is re-rendered, React takes each list item's key and searches the previous list's items for a matching key. Key tells React about the identity of each component which allows React to maintain state between re-renders.

  - Key is a special and reserved property in React - when element is create React extracts the key property and stores the key directly on the returned element.
