import React from 'react'
import {Link} from 'react-router-dom'

export const Car = ({id, img, manufacturer, model, price}) => (
  <div>
    <p>
      {/** Wrap the next Line in a Link that points to /:id **/}
      <Link to={`/${id}`}>{model} made by {manufacturer}</Link>
    </p>
  </div>
)
