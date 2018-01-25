import React from 'react'
import PropTypes from 'prop-types'
import users from '../mocks/users'

const User = ({gender, firstName, lastName, avatar, jobTitle}) => (
  <p
    style={{
      color: gender === 'F' ? 'pink' : 'blue'
    }}
  >
    <img alt={`Avatar of ${firstName} ${lastName}`} src={avatar} />
    {`${firstName} ${lastName} is a/an ${jobTitle}`}
  </p>
)

User.propTypes = {
  gender: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired
}

// TODO 2:
// Map over the first 50 users and return a list of them

// TODO 3:
// Use propTypes to validate the props of the User component

// TODO 4:
// Make sure your console is free of error/warnings
export class App extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <ul>
          <li>
            {users.slice(0, 50).map(user => <User {...user} key={user.guid} />)}
          </li>
        </ul>
      </div>
    )
  }
}
