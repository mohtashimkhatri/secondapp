import React from 'react'
import './Button.css'
type privacy ={
    label:string,
}
function Button(props:privacy) {
  return (
    <>
<button className='button'>{props.label}</button>
    </>
  )
}

export default Button
