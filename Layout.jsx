import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from './src/Components/TopBar/TopBar'
import Header from './src/Components/Header/Header'

const Layout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
      <Header />
    </>
  )
}

export default Layout