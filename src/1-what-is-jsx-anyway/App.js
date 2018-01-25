import React from 'react'

// TODO 2:
// Transform this into a React component
const Title = ({name}) => {
  return React.createElement('h1', null, `Hello, my name is ${name}`)
}

// TODO 3:
// Transform this into a React component
const Container = ({children}) => {
  return React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }
    },
    children
  )
}

// TODO 1
// Transform this into a React component
const Math = () => {
  return React.createElement('h2', null, 2 + 2)
}

// TODO 4:
// Transform this into a React Component
export const App = () => {
  return React.createElement(Container, null, [
    React.createElement(Title, {key: 'title', name: 'Antonio'}),
    React.createElement(Math, {key: 'math'})
  ])
}
