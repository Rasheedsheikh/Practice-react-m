import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright,faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import logo from '/Assets/mith.png'
// import { faGithub,faFacebook,faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer(){

    return(
    <footer>
        <div className='first-row'>
            <div className='company-information'>
             <a href='#header'>
                <div className='name-logo'>
                    <img src='/Assets/mith.png' alt = 'Company logo'></img>
                    {/* <h2 className='name'> Z-Tech</h2> */}
                </div>
             </a> 
            {/* <p className='info'> <span> Technology Solutions </span>For Your Business</p> */}

            </div>
            <div className='footer-services'>
                <h2 className='title'>Our Services</h2>
                <a href='#service'> <li>Washing Machine</li></a>
                <a href='#service'><li>Ac</li></a>
                <a href='#service'><li>Mobiles</li></a>
               <a href='#service'> <li>Refrigerator</li></a>
               <a href='#service'> <li>Televison</li></a>
              
            </div>
            <div className='footer-services'>
                <h2 className='title'>Quick Navigation</h2>

                {/* <a href='#header'><li>Back To Top</li></a> */}
                <a href='#service'><li>Services</li></a>
                <a href='#about'><li>About Us</li></a>
                <a href='#teams'><li>Teams</li></a>
                <a href='#testimonial'><li>Client FeedBack</li></a>
                <a href='#contact'><li>Contact</li></a>

            </div>
            {/* <div className='links'>
                <h2 className='title'>Stay Connected</h2>
                <div className='icons'>

                <a href='' target={'_blank'} rel="noreferrer"> <FontAwesomeIcon className='icon git' ></FontAwesomeIcon></a>
                <a href='' target={'_blank'} rel="noreferrer"><FontAwesomeIcon className='icon linkedin' ></FontAwesomeIcon></a>
                <a href=''><FontAwesomeIcon className='icon email' ></FontAwesomeIcon></a>
                <a href='https://facebook.com' target={'_blank'} rel="noreferrer"><FontAwesomeIcon className='icon facebook' ></FontAwesomeIcon></a>
                <a href='https://twitter.com' target={'_blank'} rel="noreferrer"><FontAwesomeIcon className='icon twitter'></FontAwesomeIcon></a> 
                </div>
            </div> */}
        </div>
       
    </footer>
    )
}

export default Footer