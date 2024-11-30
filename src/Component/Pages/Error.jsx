import React from 'react'
import error from "../Assets/error.jpg";
import './Error.css'
export const Error = () => {
  return (
    <div className='errorMain'>
        <div className="error-logo">
        <img src={error} alt="Logo" className="logo-image" />
      </div>
    </div>
  )
}
