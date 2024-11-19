import React, {useEffect} from "react";
import "./Aboutus.css";
import { Box, Button, IconButton, Grid2,  Modal,
  Typography, } from "@mui/material";
  import AOS from "aos";
import "aos/dist/aos.css";

const Aboutus = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 100, 
    });
  }, []);
  return (
    <div id="aboutus" className="about-us-main"   data-aos="fade-up" // Animation effect
    data-aos-delay={100} >
    <Typography variant="h3" align="center" gutterBottom >
        About Us
      </Typography>
    <div className="about-us-container">


      <div className="about-us-image">
        <img
          src="https://www.cio.com/wp-content/uploads/2024/01/shutterstock_1095953582.jpg?quality=50&strip=all&w=1024"
          alt="About Us"
          className="about-us-img"
        />
      </div>

      <div className="about-us-content">
        <h1 className="about-us-title"> I am Santhosh G</h1>
        <p className="about-us-designation">Chief Executive Officer</p>
        <p className="about-us-description">
          John has over 20 years of experience in the tech industry, leading
          teams to innovate and achieve groundbreaking success. Passionate about
          transforming ideas into impactful solutions.
        </p>
        <button className="about-us-button">Learn More</button>
      </div>
    </div>
    </div>
  );
};

export default Aboutus;
