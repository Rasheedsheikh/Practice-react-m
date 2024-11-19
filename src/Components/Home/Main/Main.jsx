import React from 'react';
import { Carousel } from 'antd';
import './Main.css'; // Include a CSS file for custom styles

const contentStyle = {
  position: 'relative',
  height: '200px',
  textAlign: 'center',

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    textAlign: "center",
    padding: 4,
    transition: "opacity 0.5s ease-in-out",

};

const textOverlayStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#fff',
  // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '18px',
};

const Main = () => (
  <>
    <Carousel autoplay autoplaySpeed={5000} arrows infinite={false}>
      <div style={contentStyle}>
        <img
          style={{ width: '100%', height: '100%', borderRadius: '10px', objectFit: 'cover' }}
          src="https://media.istockphoto.com/id/1279259535/photo/male-repair-air-conditioner-at-room-he-is-air-technician-mechanic-engineer-maintenance-air.jpg?s=612x612&w=0&k=20&c=gdzBCQUgoRP5cRVnJrsHzNR12n7Ta04pW4adItm5u8Y="
          alt=""
        />
        <div style={textOverlayStyle}>Expert Air Conditioning Repair</div>
      </div>
      <div style={contentStyle}>
        <img
          style={{ width: '100%', height: '100%', borderRadius: '10px', objectFit: 'cover' }}
          src="https://media.istockphoto.com/id/1279259535/photo/male-repair-air-conditioner-at-room-he-is-air-technician-mechanic-engineer-maintenance-air.jpg?s=612x612&w=0&k=20&c=gdzBCQUgoRP5cRVnJrsHzNR12n7Ta04pW4adItm5u8Y="
          alt=""
        />
        {/* <div style={textOverlayStyle}>Professional Maintenance Services</div> */}
      </div>
      <div style={contentStyle}>
        <img
          style={{ width: '100%', height: '100%', borderRadius: '10px', objectFit: 'cover' }}
          src="https://media.istockphoto.com/id/1279259535/photo/male-repair-air-conditioner-at-room-he-is-air-technician-mechanic-engineer-maintenance-air.jpg?s=612x612&w=0&k=20&c=gdzBCQUgoRP5cRVnJrsHzNR12n7Ta04pW4adItm5u8Y="
          alt=""
        />
        {/* <div style={textOverlayStyle}>Quality Assurance Guaranteed</div> */}
      </div>
      <div style={contentStyle}>
        <img
          style={{ width: '100%', height: '100%', borderRadius: '10px', objectFit: 'cover' }}
          src="https://media.istockphoto.com/id/1279259535/photo/male-repair-air-conditioner-at-room-he-is-air-technician-mechanic-engineer-maintenance-air.jpg?s=612x612&w=0&k=20&c=gdzBCQUgoRP5cRVnJrsHzNR12n7Ta04pW4adItm5u8Y="
          alt=""
        />
        <div style={textOverlayStyle}>24/7 Customer Support</div>
      </div>
    </Carousel>
  </>
);

export default Main;
