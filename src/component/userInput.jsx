import React from 'react'

const InputName = ({ user, changeName }) => {
  console.log(user)
  return (
    <>
      <label htmlFor="name">Input Name:</label>
      <input type="text" name="name" value={user} onChange={(event) => changeName(event.target.value)} />
    </>
  )
}

export default InputName
