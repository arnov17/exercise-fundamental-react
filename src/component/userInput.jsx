import React from 'react'

const InputName = ({ person, changeName }) => {
  console.log(person)
  return (
    <>
      <label htmlFor="name">Input Name:</label>
      <input type="text" name="name" value={person} onChange={changeName} />
    </>
  )
}

export default InputName
