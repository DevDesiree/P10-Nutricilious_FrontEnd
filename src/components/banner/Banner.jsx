import React, { useEffect, useRef } from 'react';
import { data } from '../../assets/data';
import './Banner.css';

export const Banner = ({ currentIndex, setCurrentIndex }) => {
  const listRef = useRef();

  useEffect(() => {
    const listNode = listRef.current;
    listNode.scrollTo({
      left: currentIndex * listNode.offsetWidth,
      behavior: 'smooth',
    });
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'prev') {
        return prevIndex > 0 ? prevIndex - 1 : data.length - 1;
      } else {
        return prevIndex < data.length - 1 ? prevIndex + 1 : 0;
      }
    });
  };

  return (
    <div className="main-container">
      <div className="slider-container">
        <div className="leftArrow" onClick={() => scrollToImage('prev')}>
          &#10092;
        </div>
        <div className="rightArrow" onClick={() => scrollToImage('next')}>
          &#10093;
        </div>
        <div className="container-images" ref={listRef}>
          <ul>
            {data.map((item, idx) => (
              <li key={item.id} className={idx === currentIndex ? 'active' : ''}>
                <img
                  src={item.imgUrl}
                  alt={item.alt}
                  width={500}
                  height={280}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="dots-container">
          {data.map((_, idx) => (
            <div
              key={idx}
              className={`dot-container-item ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            >
              &#9865;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
