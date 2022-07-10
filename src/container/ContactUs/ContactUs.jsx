import React from 'react'
import images from '../../constants/images';


import './ContactUs.css';


class CotactUs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      backgroundImage: images.bench
    }
  }


  render(){
    return(
      <div className='app__contactUs' id='contacts' style={{backgroundImage: "url(" + this.state.backgroundImage + ")"}} >
        <div className='telephone'>
          <p>
            Олесандр
          </p>
          <a href='tel:0956201283'>
            +38(095)-620-1283
          </a>
        </div> 
        <div className='email'>
          <p>
            E-mail
          </p>
          <a href='mailto:fma@gmail.com'>
            fma@gmail.com
          </a>
        </div>
      </div>
    )
  }
}

export default CotactUs;