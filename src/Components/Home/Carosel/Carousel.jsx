import "./Carousel.css"
import { faGreaterThan,faLessThan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {useRef} from 'react'

function Carousel({children,itemCount,itemSize}){

    let innerContainer = useRef(null)
    let position =0
    let carouselShiftSize = itemSize
    let sliderHnadler=(direction)=>{
        if(direction==='LEFT'){
            if(position<0){
                position=position+carouselShiftSize
                innerContainer.current.style.transform = `translate(${position}px)`
            }
        }else if(direction === 'RIGHT'){

            if(position>(-1*(carouselShiftSize*(itemCount-1)))){
                position=position-carouselShiftSize
                innerContainer.current.style.transform = `translate(${position}px)`
       
            }
        
        }
    }

    return (
    <div className="carousel">
        <div className="left-btn carousel-btn">
            <FontAwesomeIcon icon={faLessThan} onClick={()=>{sliderHnadler('LEFT')}} ></FontAwesomeIcon>
        </div>
        <div className="right-btn carousel-btn">
            <FontAwesomeIcon icon={faGreaterThan} onClick={()=>{sliderHnadler('RIGHT')}} ></FontAwesomeIcon>
        </div>
        <div className="inner" ref={innerContainer}>
        {children}
        </div>

    </div>
    )
}

function CarouselItem({children}){
    return <>

    </>
}

export {Carousel,CarouselItem}