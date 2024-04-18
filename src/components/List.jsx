import React from 'react'

const List = ({className,text}) => {
  return (
    <li className={`list-none text-[18px] font-bold ${className}`}>{text}</li>
  )
}

export default List