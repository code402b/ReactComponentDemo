import React from 'react'

export default function SubmitButton({ handleClick, text }) {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}
