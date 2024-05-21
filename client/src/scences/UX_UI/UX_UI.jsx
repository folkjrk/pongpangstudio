import { React, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'


const UxUi = () => {
  // const [count, setCount] = useState(0)

  return (
    <div className='container-main'>
      <Navbar/>
      <div className='container-top'>
      <div className='container-top-left'>   
       <div className='container-top-right'>
      </div>
      </div>
      </div>
      <div className='container-middle'>
        <div className='components-cards'>
        </div>
      </div>
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

export default UxUi;