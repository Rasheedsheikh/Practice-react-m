import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import person2 from '../../assets/image/p2.jpg'
// import person3 from '../../assets/image/p3.png'
// import person4 from '../../assets/image/p4.png'
import { useEffect } from 'react';
import './Testimonial.css'
import { faQuoteLeft,faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { Carousel } from '../Carosel/Carousel';
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial=()=>{
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset from the original trigger point
    });
  }, []);

    return (
      <div className='testimonial-cont'   data-aos="fade-up" // Animation effect
      data-aos-delay={100} >
    <div id='testimonial' className='testimonials'>
        <h2 className='title'>What People Say About Us</h2>
        <div className='testimonial'>

    <Carousel itemCount={5} itemSize={280}>
    <div className='card'>
                 <FontAwesomeIcon className='left-quote' icon={faQuoteLeft}> </FontAwesomeIcon>
                 <p className='comment'>For decades i have been trying to break through my barriers to have a global customer of my products. For the first time I'm genuinely excited for being able to pass this barrier with you guys. I am greateful for your service</p>
                 <FontAwesomeIcon className='right-quote' icon={faQuoteRight}> </FontAwesomeIcon>
                 <div className='personal-info'>
                    <img src="https://rawcdn.githack.com/zeamanual/tech-company-landing-page-UI-design/42bc9b7f08980107320ac25670387ca63a93086e/src/assets/image/p2.jpg" alt='person one'></img>
                    <h2 className='name'>Alex</h2>
                    <p className='origin'>Graphic Designer</p>
                 </div>
            </div>
            <div className='card'>
                 <FontAwesomeIcon className='left-quote' icon={faQuoteLeft}> </FontAwesomeIcon>
                 <p className='comment'>For decades i have been trying to break through my barriers to have a global customer of my products. For the first time I'm genuinely excited for being able to pass this barrier with you guys. I am greateful for your service</p>
                 <FontAwesomeIcon className='right-quote' icon={faQuoteRight}> </FontAwesomeIcon>
                 <div className='personal-info'>
                    <img src="https://rawcdn.githack.com/zeamanual/tech-company-landing-page-UI-design/42bc9b7f08980107320ac25670387ca63a93086e/src/assets/image/p2.jpg" alt='person two'></img>
                    <h2 className='name'>Simon</h2>
                    <p className='origin'>Content Writer</p>
                 </div>
            </div>
            <div className='card'>
                 <FontAwesomeIcon className='left-quote' icon={faQuoteLeft}> </FontAwesomeIcon>
                 <p className='comment'>For decades i have been trying to break through my barriers to have a global customer of my products. For the first time I'm genuinely excited for being able to pass this barrier with you guys. I am greateful for your service</p>
                 <FontAwesomeIcon className='right-quote' icon={faQuoteRight}> </FontAwesomeIcon>
                 <div className='personal-info'>
                    <img src="https://rawcdn.githack.com/zeamanual/tech-company-landing-page-UI-design/42bc9b7f08980107320ac25670387ca63a93086e/src/assets/image/p2.jpg" alt='person three'></img>
                    <h2 className='name'>John</h2>
                    <p className='origin'>Store Owner</p>
                 </div>
            </div>
            <div className='card'>
                 <FontAwesomeIcon className='left-quote' icon={faQuoteLeft}> </FontAwesomeIcon>
                 <p className='comment'>For decades i have been trying to break through my barriers to have a global customer of my products. For the first time I'm genuinely excited for being able to pass this barrier with you guys. I am greateful for your service</p>
                 <FontAwesomeIcon className='right-quote' icon={faQuoteRight}> </FontAwesomeIcon>
                 <div className='personal-info'>
                    <img src="https://rawcdn.githack.com/zeamanual/tech-company-landing-page-UI-design/42bc9b7f08980107320ac25670387ca63a93086e/src/assets/image/p2.jpg" alt='person two'></img>
                    <h2 className='name'>Simon</h2>
                    <p className='origin'>Content Writer</p>
                 </div>
            </div>
            <div className='card'>
                 <FontAwesomeIcon className='left-quote' icon={faQuoteLeft}> </FontAwesomeIcon>
                 <p className='comment'>For decades i have been trying to break through my barriers to have a global customer of my products. For the first time I'm genuinely excited for being able to pass this barrier with you guys. I am greateful for your service</p>
                 <FontAwesomeIcon className='right-quote' icon={faQuoteRight}> </FontAwesomeIcon>
                 <div className='personal-info'>
                    <img src="https://rawcdn.githack.com/zeamanual/tech-company-landing-page-UI-design/42bc9b7f08980107320ac25670387ca63a93086e/src/assets/image/p2.jpg" alt='person three'></img>
                    <h2 className='name'>John</h2>
                    <p className='origin'>Store Owner</p>
                 </div>
            </div>
    </Carousel>
      

        </div>
    </div>
    </div>
    )
}

export default Testimonial