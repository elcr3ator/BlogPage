import React from 'react'
import { useRef, useEffect, useState } from "react";
import images from '../../constants/images';
import ReviewForm from '../../constants/userReview';
import TypeReview from './Type Review/TypeReview';

import './Review.css';


export function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 5,
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}



const Review = () => {
  
  const scrollRef = useHorizontalScroll();
  const [ isOpen, setIsOpen] = useState(false);


  return(
    
    <div className='app__review' id='reviews'>
      <div className='app__review-content'>
        <div className='topbar'>
          <button className='topbar-createreview' onClick={() => setIsOpen(true)}>Написати відгук</button>
          <p className='topbar-reviewsign'>Відгуки</p>
          <img src={images.starrate} alt="Star rate" />
          <p className='topbar-rate'>4</p>
        </div>
        <div className='Reviews' ref={scrollRef}> 
        <ReviewForm 
          Name="Олександр"
          PositionSign="Co-Ceo" 
          NameOfCompany="Feed Motion ADS" 
          Stars="5"
          Review="Були проведені чудові роботи. Налаштували оптимізували та підказалиБули проведені чудові роботи. Налаштували оптимізували та підказалиБули проведені чудові роботи. Налаштували оптимізували та підказалиБули проведені чудові роботи. Налаштували оптимізували та підказалиБули проведені чудові роботи. Налаштували оптимізували та підказалиegegegegerggerger"
        />
        <ReviewForm 
          Name="Олександр"
          PositionSign="Co-Ceo" 
          NameOfCompany="Feed Motion ADS" 
          Stars="2"
          Review="Були проведені чудові роботи. Налаштували оптимізували та підказали"
        />
        <ReviewForm 
          Name="Олександр"
          PositionSign="Co-Ceo" 
          NameOfCompany="Feed Motion ADS" 
          Stars="2"
          Review="Були проведені чудові роботи. Налаштували оптимізували та підказали"
        />
        <ReviewForm 
          Name="Олександр"
          PositionSign="Co-Ceo" 
          NameOfCompany="Feed Motion ADS" 
          Stars="2"
          Review="Були проведені чудові роботи. Налаштували оптимізували та підказали"
        />
        <ReviewForm 
          Name="Олександр"
          PositionSign="Co-Ceo" 
          NameOfCompany="Feed Motion ADS" 
          Stars="2"
          Review="Були проведені чудові роботи. Налаштували оптимізували та підказали"
        />
        <ReviewForm 
          Name="Олександр"
          PositionSign="Co-Ceo" 
          NameOfCompany="Feed Motion ADS" 
          Stars="2"
          Review="Були проведені чудові роботи. Налаштували оптимізували та підказали"
        />
        </div>
      </div>
      <div className='Arrowsix'>
        <img src={images.arrowsix} alt="Arrow six" />
      </div>
      
      {isOpen && (
        <div className='app__review_typereview-blurSubstrate' onClick={() => setIsOpen(false)}>
          <TypeReview />
        </div>  
      )
      }
    </div>
      )
    }

export default Review