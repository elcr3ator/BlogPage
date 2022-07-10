import React, { useState } from 'react';
import TypeError from './TypeError/TypeError';


import './Footer.css';

const Footer = () => {

  const [ isOpenTypeError, setIsOpenTypeError] = useState(false);

  return(
  <div className='app_footer_mainSubstrate' id="footer">    
  <div className='mainSubstrate-divs'>
      <div className='selection-column'>
      <div className='mainSusbstrate-content-ads'>
        <p>Feed motion ADS</p>
      </div>
      <div className='mainSusbstrate-content-one'>
      <p>Одна з багатьох компаній концерну Feed Motion. Яка займається просуванням сайтів рекламним та органічним шляхом, їх підготовки та супроводження рекламних кампаній.
      </p>
      </div>     
      <div className='phone-label-phone'>
        <div className='phone-label-phone-label'>
          <p className='mainSusbstrate-content-phone-label'>Телефон</p>
          <a className='mainSusbstrate-content-phone'>+38(095)-620-1283</a>
          </div>
          <div>
          <p className='mainSusbstrate-content-mail-label'>E-mail</p>
          <a className='mainSusbstrate-content-mail'>fma@gmail.com</a>
          </div>        
        </div>      
      </div>
      <div className='mainSusbstrate-content-about'>
        
          <p className='mainSubstrate-content-side-p'>Мапа сайту</p>
          <a>Головна сторінка</a>
          <a>Послуги</a>
          <a>Про нас</a>
          <a>Відгуки</a>
          <a>Контакти</a>
        
      </div>
      <div className='mainSusbstrate-content-support'>
      
          <p className='mainSubstrate-content-side-p'>Підтримка</p>
          <a>Написати відгук</a>
          <a>Зателефонувати</a>
          <a onClick={() => setIsOpenTypeError(true)}>Повідомити про проблему</a>
          <a>Є пропозиція</a>
        
      </div>
      <div className='mainSusbstrate-content-social'>
     
          <p className='mainSubstrate-content-side-p'>Соціальні мережі</p>
          <a>Facebook</a>
          <a>Instagram</a>
          <a>Twitter</a>
        
      </div>
      <div className='mainSusbstrate-content-product'>
     
          <p className='mainSubstrate-content-side-p'>Продукти</p>
          <a>Web - Maxima</a>
          <a>Web - Optimal</a>
          <a>Web - amitless</a>
     
      </div>
      </div>

      {isOpenTypeError && (
          <div className='app__review_typereview-blurSubstrate' onClick={() => setIsOpenTypeError(false)}>
            <TypeError />
          </div>  
        )
      }
  </div>

      )
  }

export default Footer;
