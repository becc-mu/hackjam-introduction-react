import React from 'react'

const Title = ({name}) => <h1>Hello, my name is {name}</h1>

const Container = ({children}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}
  >
    {children}
  </div>
)

const Math = () => <h2>{2 + 2}</h2>

export const App = () => (
  <Container>
    <Title name={'Antonio'} />
    <Math />
  </Container>
)
