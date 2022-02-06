import React from 'react'

const NewMessageList = ({ data }) => (
  <ul>
    {data.map((message) => (
      <li key={message}>{message}</li>
    ))}
  </ul>
)

export default NewMessageList
