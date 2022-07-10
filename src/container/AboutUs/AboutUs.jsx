import React from 'react'

import './AboutUs.css';
import images from '../../constants/images';

const AboutUs = () => (
    <div className='app__aboutus'>
      <div className='app__aboutus-textdecoratives'>
        <div className='pinksubstrate' id='about-us'>
          <div className='ArrowFife'>
            <img src={images.arrowfife} alt="Arrow fife, about us sign" />
          </div>
          <p className='Review'>Ми команда, що розуміє проблеми бізнесу та їх <br /> виклики сьгодення. Тому і глобальною ціллю <br /> нашої компанії стали: просування сайтів <br /> рекламним та органічним шляхом, організація <br /> роботи рекламних кампаній, їх супровід з <br /> підготовкою сайту до викликів. </p>
          <div className='TwoHeaders'>
            <p className='FullName'>Feed Motion ADS</p>
            <p className='Abbreviation'>FMA</p>
          </div>
        </div>
      </div>
      <div className='app__aboutus-greysubstrate'></div>
      <div className='app__aboutus-stairsimage'>
        <img src={images.stairs} alt="Spinned Stairs" />
      </div>
    </div>
);

export default AboutUs