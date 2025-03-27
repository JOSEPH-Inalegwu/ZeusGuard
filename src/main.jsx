import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Send from './Components/Send/Send.jsx'
import Receive from './Components/Receive/Receive.jsx'
import Buy from './Components/Buy/Buy.jsx'
import Login from './Components/Login/Login.jsx'
import Wallet from './Components/Wallet/Wallet.jsx'
import Profile from './Components/Profile/Profile.jsx'

const router = createBrowserRouter([
  { path: "/", element: <Login /> }, 
  
  { 
    path: "/app", 
    element: <Layout />, 
    children: [
      { path: "", element: <Home /> },
      { path: "send", element: <Send /> },
      { path: "receive", element: <Receive /> },
      { path: "buy", element: <Buy /> },
      { path: "wallet", element: <Wallet /> },
      { path: "profile", element: <Profile /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
