import { useEffect, useState } from 'react';
import style from './Slider.module.css';

const Slider = ({ images }) => {
  const [current, setCurrent] = useState(0)

  const sliderPrev = () => {
    const firstSlider = current === 0;
    const newCurrent = firstSlider ? images.length - 1 : current - 1;
    setCurrent(newCurrent);
  }

  const sliderNext = () => {
    const lastSlider = current === images.length - 1;
    const newCurrent = lastSlider ? 0 : current + 1;
    setCurrent(newCurrent)
  }

  const goToSlider = (index) => {
    setCurrent(index)
  }

  useEffect(() => {
    const interval = setInterval(sliderNext, 3000)

    return () => clearInterval(interval)
  }, [current, images.length])

  return (
    <div className={style.slider}>
      <div className={style.sliderContent}>
          {images.map((result, index) => (
            <a href={result.link} target='_blank'>
              <img 
              key={index} 
              src={result.url} 
              className={`${style.sliderImage} ${index === current ? style.active  : ''}`}
              alt={result.alt}
            />
            </a>
          ))}
      </div>

      <button onClick={sliderPrev} className={`${style.sliderButton} ${style.left}`}>
        &#10094;
      </button>

      <button onClick={sliderNext} className={`${style.sliderButton} ${style.right}`}>
        &#10095;
      </button>

      <div className={style.sliderIndicatorBar}>
        {images.map((element, index) =>
          <span 
            key={index} 
            className={`${style.sliderIndicator} ${current === index ? style.active : ''}`}
            onClick={() => goToSlider(index)}
          >
          </span>)}
      </div>
    </div>
  )
}

export default Slider;