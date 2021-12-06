import * as React from "react";
import "./slider.css"
import {SliderData} from "./sliderData";
import "../../styles/css/all.min.css";

type Props = {
    slides: Array<{image: string}>
}

const Slider:React.FC<Props> = ({slides}) => {

  const [current, setCurrent] = React.useState(0)
  const length = slides.length
    
    const NextSlide = () => {
      setCurrent(current === length-1 ? 0 : current+1)
    }
    
    const LastSlide = () => {
      setCurrent(current === 0 ? length-1 : current-1)
    }

      if (!Array.isArray(slides) || length<=0) {
        return null
      }

  return (
      <section className='slider'>
          <i onClick={LastSlide} className="fas fa-arrow-circle-left"/>
        {SliderData.map((slide,index)=>{
          return(
              <div className={index === current ? 'slideActive' : 'slide'} key={index}>
                  {index === current && (<img src={slide.image} className='image'/>)}
              </div>
          )
        })}
          <i onClick={NextSlide} className="fas fa-arrow-circle-right"/>
      </section>
  )
}

export default Slider