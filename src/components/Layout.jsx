import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

const Layout = (props) => {
  return (
    <div>
    <Header/>
    <Navbar/>
<div className='max-w-7xl min-h-screen mx-auto'>
{props.children}
</div>
    <Footer/>
</div>
  )
}

export default Layout