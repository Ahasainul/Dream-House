
import React from 'react'
import Next from '../icons/Next';

const PrevArrows = (props) => {
    const { className,  onClick } = props;
  return (
    <div
    className={`top-1/2 left-[-230px] absolute translate-y-[-50%] z-10 ${className}`}
    onClick={onClick}
  >

    <Next/>
  </div>
  )
}

export default PrevArrows