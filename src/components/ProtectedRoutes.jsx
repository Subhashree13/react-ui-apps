import React from 'react'
import { Navigate, Outlet } from 'react-router';

const ProtectedRoutes = () => {
    //fetch auth api to check the state of the user (logged in or not logged in)
    const isAuthenticated = false;
  return (
    isAuthenticated? <Outlet/>:<div>{window.alert("this route is protected! please login to view About us page")}<Navigate to="/"/></div>
  )
}

export default ProtectedRoutes