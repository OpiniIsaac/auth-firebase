import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LogInPage from '../Pages/LogInPage'

const router = createBrowserRouter([{
     path:'/login',
     element:<LogInPage/>
}])

export default router