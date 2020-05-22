import React, { useState } from 'react'

export default () => {
  const [person, setPerson] = useState('')

  const updatePerson = (event) => {
    setPerson(event.target.value)
  }

  return (
    <div className="page">
      <div className="title">To whom am I speaking?</div>
      <input className="inputField" type="text" name="search" onChange={updatePerson} />
      {person &&
        (
          <div className="person">
            Hello, nice to meet you
            {' '}
            {person}
          </div>
        )}
    </div>
  )
}
