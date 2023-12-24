
import { createBrowserRouter } from 'react-router-dom'
import LogInPage from '../Pages/LogInPage'
import Dashboard from '../Pages/Dashboard'

const router = createBrowserRouter([{
     path:'/login',
     element:<LogInPage/>
},{
     path:'/dashboard',
     element:<Dashboard/>
}])

export default router