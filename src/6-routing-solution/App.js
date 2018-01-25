import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import {Cars} from './Cars'
import {CarDetails} from './CarDetails'

export class App extends React.Component {
  render() {
    return (
      /** TODO 1 */
      /** Wrap your App in a <BrowserRouter /> Component */
      <BrowserRouter>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
          }}
        >
          {/** Optional TODO: Wrap this inside of a <Link /> that points to '/' **/}
          <h2><Link to="/">Home</Link></h2>
          {/**
            TODO 2
            Add a <Route /> for the root '/' that points to the <Cars /> component

            TODO 3: Open the <Car /> Component

            TODO 4:
            Add a <Route /> for the /:id path that points to the <CarDetails /> component 

            
          **/}
          <Route exact path="/" component={Cars} />
          <Route path="/:id" render={({match: {params: {id}}}) => {
            return <CarDetails id={id}/>
          }} />
        </div>
      </BrowserRouter>
    )
  }
}
