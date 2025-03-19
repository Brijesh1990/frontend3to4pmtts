import React from 'react'
import Navbar from './navbar'
import Slider from './Slider'
import Content from './Content'
import Footer from './Footer'
export default function Layout() {
  return (
    <div>
      <>
        <Navbar />
        <Slider />
        <Content/>
        <Footer />
      </>
    </div>
  )
}
