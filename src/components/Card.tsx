import React from 'react'

const Card = ({children} : {children : React.ReactNode}) => {
  return (
    <div style={{background:'red'}}>
      {children}
    </div>
  )
}

export default Card
