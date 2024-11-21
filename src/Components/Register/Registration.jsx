import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Select, message } from "antd";
import "./Registration.css"; 
import { BaseUrl } from '../../Constants/Constant'

const Registration = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);


  React.useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BaseUrl}/service-items/findAllServiceItems`);
        const data = await response.json();
        setServices(data.data); // Using the 'data' key from the response
      } catch (error) {
        message.error("Failed to fetch services.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const onFinish = async (values) => {

    const body = {
      serviceItemId: values.services, 
      customerFirstName: values.firstName, 
      customerLastName: values.lastName, 
      email: values.email, 
      contactNumber: values.number, 
      doorNumber: values.doorNumber, 
      street: values.street, 
      city: values.city, 
      district: values.district, 
      pinCode: values.pin, 
    };

    console.log("Mapped Body:", body); 


    try {
      const response = await fetch(`${BaseUrl}order-details/createOrder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body), 
      });

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      const responseData = await response.json();
      message.success("Order created successfully!");
    } catch (error) {
      message.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="registration-container">
      <Row className="registration-wrapper">
        {/* Left side with logo */}
        <Col xs={24} md={8} className="logo-container">
          <img src="/Assets/mith.png" alt="Logo" className="logo" />
        </Col>

        {/* Right side with scrollable form */}
        <Col xs={24} md={16} className="form-container">
          <Form layout="vertical" onFinish={onFinish} className="scrollable-form">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[{ required: true, message: "First Name is required" }]}
                >
                  <Input placeholder="Enter first name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[{ required: true, message: "Last Name is required" }]}
                >
                  <Input placeholder="Enter last name" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { type: "email", message: "Enter a valid email" },
                { required: true, message: "Email is required" },
              ]}
            >
              <Input placeholder="Enter email" />
            </Form.Item>

            <Form.Item
              label="Number"
              name="number"
              rules={[{ required: true, message: "Number is required" }]}
            >
              <Input placeholder="Enter phone number" />
            </Form.Item>

            <Form.Item
              label="Street"
              name="street"
              rules={[{ required: true, message: "Street is required" }]}
            >
              <Input placeholder="Enter street" />
            </Form.Item>

            <Form.Item
              label="Door Number"
              name="doorNumber"
              rules={[{ required: true, message: "Door Number is required" }]}
            >
              <Input placeholder="Enter door number" />
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="City"
                  name="city"
                  rules={[{ required: true, message: "City is required" }]}
                >
                  <Input placeholder="Enter city" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Pin"
                  name="pin"
                  rules={[{ required: true, message: "Pin is required" }]}
                >
                  <Input placeholder="Enter pin code" />
                </Form.Item>
              </Col>
            </Row>

      
            <Form.Item
              label="District"
              name="district"
              rules={[{ required: true, message: "District is required" }]}
            >
              <Input placeholder="Enter district" />
            </Form.Item>
        
            <Form.Item
              label="Services"
              name="services"
              rules={[{ required: true, message: "Services are required" }]}
            >
              <Select
                placeholder="Select a service"
                loading={loading}
                disabled={loading || services.length === 0}
              >
                {services.map((service) => (
                  <Select.Option key={service.item_id} value={service.item_id}>
                    {service.item_name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

          
       

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Register
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Registration;
