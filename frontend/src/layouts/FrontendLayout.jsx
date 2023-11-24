import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import App from '../App'

function FrontendLayout() {
  useEffect(() => {
    App();
  }, [])
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default FrontendLayout
