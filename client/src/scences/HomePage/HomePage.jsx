import { React, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Marquee from '../../components/Marquee/Marquee'
import Cards from '../../components/Card/Card'
import FlipCard from '../../components/FlipCard/FlipCard'
import './HomePage.css'

function HomePage() {
  // const [count, setCount] = useState(0)

  return (
    <div className='container-main'>
      <Navbar/>
      <div className='container-top'>
      <div className='container-top-left'>
          <ul>
            <li>UXUI</li>
            <li>Graphic</li>
            <li>Illustration</li>
            <li>CV</li>
          </ul>
       <div className='container-top-right'>
        <FlipCard/>
      </div>
      </div>
      </div>
      <div className='container-middle'>
        <ul className='head-card'>Recent works</ul>
        <div className='components-cards'>
        <Cards/>
        </div>
      </div>
      < Marquee />
      <div className='container-bottom'>
        <ul>
          <li>Pimchanokptyn@gmail.com</li>
          <li>Bangkok, Thailand</li>
          <li>+66 81 835 3358</li>
        </ul>
      </div>
    </div>
  )
}

export default HomePage