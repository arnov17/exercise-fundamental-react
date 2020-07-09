import React from 'react'

const InputName = ({ user, changeName }) => {
  console.log(user)
  return (
    <div>
      <label htmlFor="name">Input Name:</label>
      <input type="text" name="name" value={user} onChange={changeName} />
    </div>
  )
}

export default InputName
