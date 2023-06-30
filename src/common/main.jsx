import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routing from './Routing'
import Header from './header/Header'
import Footer from './footer/Footer'
import AuthProvider from '../auth/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Header/>
    <AuthProvider>
      <Routing />
    </AuthProvider>
    <Footer/>
  </React.StrictMode>,
)
