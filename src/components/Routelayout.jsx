import React from 'react'
import Naver from '../pagesh/Naver'
import { Outlet } from 'react-router-dom'

const Routelayout = () => {
  return (
    <>
    <Naver/>
    <Outlet/>
    </>
  )
}

export default Routelayout