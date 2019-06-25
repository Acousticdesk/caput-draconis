/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState } from 'react'
import VerEx from 'verbal-expressions'
import './App.css'

const DEFAULT_PASSWORD = ''

const Person = ({ children }) => (
  <strong>
    {children}:
  </strong>
)

const Emoji = ({ children, label }) => (
  <span role="img" aria-label={label}>
    {children}
  </span>
)

const passwordTest = VerEx()
  .removeModifier('g')
  .startOfLine()
  .then('Caput ')
  .maybe(
    VerEx()
      .word()
      .then(' ')
  )
  .then('Draconis')
  .withAnyCase()

const isPasswordValid = password => passwordTest.test(password)

const App = ()  => {
  const [password, setPassword] = useState(DEFAULT_PASSWORD)

  const handlePasswordChange = e => setPassword(e.target.value)

  return (
    <div className="App">
      <p>
        <Person>The Fat Lady</Person>
        {' '}
        Password?
      </p>
      <p>
        <Person>Harry Potter</Person>
        {' '}
        <input
          type="text"
          value={password}
          onChange={handlePasswordChange}
        />
      </p>
      <p>
        <Person>The Fat Lady</Person>
        {!isPasswordValid(password)
          ? <Emoji label="woman shrugging">🤷‍</Emoji>
          : <Emoji label="slightly smiling face">🙂</Emoji>}
      </p>
    </div>
  )
}

export default App
