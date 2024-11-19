import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, IconButton, Grid2,  Modal,
  Typography, } from "@mui/material";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Slides.css";
import Main from "../Main/Main";
import Aboutus from "../Aboutus/Aboutus";
import Testimonial from "../Testimonial/Testimonial";
// import { Navbar } from "./Header/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};


const slides = [
    {
      image: "https://www.shutterstock.com/image-photo/air-conditioner-service-indoors-cleaning-600nw-2291045833.jpg",
      title: "Professional AC Repair Services",
      description: "Keep your home cool and comfortable with our expert AC repair solutions.",
      cta: "Schedule Service",
    },
    {
      image: "https://cooltechservice.co.in/assets/images/wash-banner.jpg",
      title: "",
      description: "",
      cta: "Call Now",
    },
    {
      image: "https://i.pinimg.com/736x/08/e2/18/08e218e665c29d3127ec673d3a9f1a65.jpg",
      title: "",
      description: "",
      cta: "Learn More",
    },
  ];
  
  const service = [
    { label: "Washing Machine", image: 'https://i.pinimg.com/736x/08/e2/18/08e218e665c29d3127ec673d3a9f1a65.jpg' },
    { label: "AC", image: 'https://i.pinimg.com/736x/08/e2/18/08e218e665c29d3127ec673d3a9f1a65.jpg' },
    { label: "Fridge", image: 'https://i.pinimg.com/736x/08/e2/18/08e218e665c29d3127ec673d3a9f1a65.jpg' },
    { label: "TV", image: 'https://i.pinimg.com/736x/08/e2/18/08e218e665c29d3127ec673d3a9f1a65.jpg' },
  ];

const services = [
  {
    image: "https://media.istockphoto.com/id/1279259535/photo/male-repair-air-conditioner-at-room-he-is-air-technician-mechanic-engineer-maintenance-air.jpg?s=612x612&w=0&k=20&c=gdzBCQUgoRP5cRVnJrsHzNR12n7Ta04pW4adItm5u8Y=", // Replace with actual image URL
    title: "AC Repair",
    description: "Expert AC repair services to keep you cool.",
  },
  {
    image: "https://www.shutterstock.com/image-photo/male-technician-repairing-washing-machine-260nw-2467637193.jpg", // Replace with actual image URL
    title: "Washing Machine Repair",
    description: "Professional repair services for your washing machine.",
  },
  {
    image: "https://img.freepik.com/premium-photo/refrigerator-with-malfunctioning-ice-maker-being-repaired_1283887-12123.jpg", // Replace with actual image URL
    title: "Refrigerator Repair",
    description: "Keep your refrigerator running efficiently with our help.",
  },
];

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false); // State for form visibility
 const navigate= useNavigate()
  const handleViewMoreClick = () => {
    setIsFormOpen(true); // Open the registration form
  };

  const handleRegistration=()=>{
    navigate("/registration")
  }

  const handleCloseForm = () => {
    setIsFormOpen(false); // Close the registration form
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset from the original trigger point
    });
  }, []);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <>
      {/* <Navbar /> */}




      <div className="main-section">
        <div className="caption">
          <h2>Expert Appliance Repair at Your Doorstep!</h2>
          <p>
            Get your washing machine, AC, and fridge repaired by certified professionals.
            Reliable and affordable services just a call away.
          </p>
          <div className="services">
            {services.map((service, index) => (
              <div key={index} className="service-box">
                <img src={service.image} alt={service.label} />
                <span>{service.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="image-container">
          <img src='Assets/wallpapernew.webp' alt="Technician with tools" />
        </div>
      </div>
  
  {/* <Main/> */}

      {/* Service Grid */}
      <Box sx={{ padding: 4}} id="service">
      <Typography variant="h4" align="center" gutterBottom className="heading">
        Our Features & Services
      </Typography>
      <Grid2 container spacing={4} sx={{justifyContent:"center",textAlign:"center",borderRadius:"10px"}} >
        {services.map((service, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}   data-aos="fade-up" // Animation effect
          data-aos-delay={index * 100} >
            <Box
              sx={{
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "200px", // Fixed height for the image
                  objectFit: "cover",
                }}
              />
              <Box padding={2}>
                <Typography variant="h6">{service.title}</Typography>
                <Typography variant="body2" paragraph>
                  {service.description}
                </Typography>
                <Button variant="contained" color="primary" onClick={handleOpen}>
                  View More
                </Button>
              </Box>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>


  
         <Modal open={open} onClose={handleClose}>
         <Box sx={style}>
           {/* <IconButton
             aria-label="close"
             onClick={handleClose}
             sx={{ position: 'absolute', right: 16, top: 16 }}
           >
             <CloseIcon />
           </IconButton> */}
           <Typography variant="h6" component="h2" gutterBottom>
             Washing Machine & AC Services
           </Typography>
           <img
             src="https://img.freepik.com/free-vector/home-renomation-flat-composition-with-plumber-fixing-pipes-vector-illustration_1284-80776.jpg" // Replace with your image URL
             alt="Washing Machine and AC Services"
             style={{ width: '100%', height: 'auto', marginBottom: 16 }}
           />
           <Typography variant="body1" paragraph>
             We offer comprehensive services for washing machines and air conditioners. 
             Our expert technicians are equipped to handle all types of repairs and maintenance 
             to ensure your appliances run smoothly. Whether it’s a minor issue or a major breakdown, 
             we are here to help you. We pride ourselves on our quick response times and customer satisfaction.
             Book our services today and enjoy the comfort of fully functioning appliances!
           </Typography>
           <Button variant="contained" color="primary" onClick={handleRegistration}>
             Register Now
           </Button>
         </Box>
       </Modal>
    
<Aboutus/>
<Testimonial/>
    {/* <TestimonialsSlider/>
    <Contact/>
    <Footer/> */}
     
    </>
  );
};

export default Slides;
