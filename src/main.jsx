import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { RouterProvider} from 'react-router-dom'
import router from './routes/router.jsx'
import AuthProvider from './context/AithProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
<AuthProvider>

<RouterProvider router={router}>

</RouterProvider>
</AuthProvider>
   

  </React.StrictMode>
)
