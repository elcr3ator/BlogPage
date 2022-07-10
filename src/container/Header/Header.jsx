import React from 'react'

import images from '../../constants/images';
import './Header.css';

const Header = () => (
    <div className="app__header">
      <div className="app__header_undercontent">
      <div className='app__header_secondlayer'>
          <div className="secondlayer-frstsection">
            <div className='frstone'>
              <header>
              <ul className='app__header_secondlayer-firstsection'>
                <li>Послуги</li>
                <li>Просування</li>
                <ol>Сайтів в</ol>
                <ol>Google</ol>
              </ul>
              </header>
              <img className="arrowone" src={images.arrowone} alt="Arrow to right" />
            </div>
            <img className="palm" src={images.palm} alt="Palm" /> 
          </div>
          <p className="rotatedtext">Feed Motion ADS</p>
          <div className="secondlayer-secondsection">
            <img src={images.arrowtwo} alt="Arrow to bottom" />
            <div className='secondlayer-secondsection-utp'>
              <section className="secondlayer-secondsection-utpsign">Утп</section>
              <div className="secondlayer-secondsection-utp-pairs">
                <div className="secondlayer-secondsection-utp-pairs-circle"></div>
                <p>Підготовка сайту до <strong>реклами</strong></p>
              </div>
              <div className="secondlayer-secondsection-utp-pairs">
                <div className="secondlayer-secondsection-utp-pairs-circle"></div>
                <p>Мінімальний рекламний бюджет <strong>₴ 3000/міс</strong></p>
              </div>
              <div className="secondlayer-secondsection-utp-pairs">
                <div className="secondlayer-secondsection-utp-pairs-circle"></div>
                <p>Поступове зниження <strong>Ціни За Клік</strong></p>
              </div>
            </div>
          </div>
        </div>
        <div className="app__header_firstlayer">
          <div className="app__header_firstlayer-whiteplate"></div>
          <div className="app__header_firstlayer-arrowthree">
            <img src={images.arrowthree} alt="Arrow down" />
          </div>
        </div>
      </div>
    </div>
);

export default Header