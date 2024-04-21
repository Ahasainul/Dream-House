import React from 'react'
import Prev from '../icons/Prev';


const NextArow = (props) => {
    const { className,  onClick } = props;
  return (
    <div
    className={`top-1/2 right-[-200px] absolute translate-y-[-50%] z-10 ${className}`}
    onClick={onClick}
  >

   <Prev/>
  </div>
  )
}

export default NextArow