# Hackjam Introduction to React

## Getting Started

```Bash
git clone https://github.com/hackages/hackjam-introduction-react
cd hackjam-introduction-react
npm run start
```

## How to use this repo

Each exercise will teach you about a core concept of React. To jump from one exercise to another, edit `src/index.js` and change the path of the import of the `<App />` component.

## 1. What is JSX anyway?

The goal of this exercise is to teach you about JSX to remove the magic behind it.

JSX is just there to allow you to write React in a pretty way but behind the scene it really is just JavaScript.

For example, the following JSX code:

```JavaScript
const MyComponent = () => (
  <h1 className="title big">Hello, world!</h1>
)
```

Will be transformed to

```JavaScript
const MyComponent = () => (
  React.createElement(
    'h1',
    {
     className: 'title big'
    },
    'Hello, world!'
  )
)
```

This means you can not use reserved JS keywords when passing properties to your React components because they'll simply get transformed to a function call to createElement at buildtime

## 2. Class Components

This exercise will go over Statefull components in React or "class components"

```JavaScript
// Stateless component
const MyComponent = () => (
  <h1>Hello, world!</h1>
)

// Statefull component
// Notice that it's a class and not a function anymore!
class MyStatefullComponent extends React.Componrnt {
  // The only required method on a statefull component
  // It tells React how to render your component
  render(){
    // Simply return your markup inside of this function
    return (
      <h1>Hello, world!</h1>
    )
  }
}
```

## 3. Synchronized Counters

This exercise will have you mix Props and State to make sure you understand it all

## 4. Conditional Rendering

JSX is just Javascript, right? That means you can use any javascript expression you'd like inside of your JSX!

Here's a non-exaustive list of javascript expressions you can use to conditionally render component

```JavaScript
const MyComponent = () => (
  <div>
    {/** the <h1/> will only appear if condition is true **/}
    {condition && <h1>Hello, world!</h1>}
    {/** Ternary operator **/}
    {condition ? <ComponentA /> : <ComponentB />}
    {someMarkup || <FallBack />}
  </div>
)
```

## 5. Collection of objects

Once again, JSX is just Javascript! If you want to iterate over a list or filter elements based on a predicate you don't need to learn some complicated domain specific language, you can just use JavaScript!

```JavaScript
const MyComponent = () => (
  <div>
    {
      /** Returns an array of numbers from 0 to 50, let's filter out the odd numbers and return a <p> for each even number **/
      range(0, 50)
        .filter(x => x % 2)
        .map(number => <p>{number}</p>)
    }
  </div>
)
```

## 6. Lifecycle hooks

Each component has a bunch of lifecycle events, they happen throughout the life of your component. You already know one them, the render method!

## 7. Routing

Quick exercise to show you how you could implement Routing in your <App />
