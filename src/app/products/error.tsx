'use client';
import React from 'react'

const error = ({error} : {error:Error}) => {
  return (
    <div>
        <h1>Error {error.message} </h1>
    </div>
  )
}

export default error
