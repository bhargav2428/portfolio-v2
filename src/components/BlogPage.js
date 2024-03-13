import React, { useState } from 'react';
import styled from 'styled-components';
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import BigTitle from "../subComponents/BigTitlte";
import { motion } from "framer-motion";

const MainContainer = styled(motion.div)`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`



const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height:auto;

position: relative;
padding-bottom: 5rem;
  width: 80%;
  max-width: 800px;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #fff;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const DownloadButton = styled.a`
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: #28a745;
  color: #fff;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 1rem;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

const ConfirmationBox = styled.div`
  background-color: #28a745;
  color: #fff;
  padding: 1rem;
  border-radius: 5px;
  font-size: 16px;
`;

const ContactMePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <MainContainer>
      <Overlay>
        <Container>
          <LogoComponent />
          <PowerButton />
          <SocialIcons />
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name:</Label>
              <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email:</Label>
              <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message:</Label>
              <TextArea id="message" name="message" value={formData.message} onChange={handleChange} required />
            </FormGroup>
            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
          <DownloadButton href="https://drive.google.com/uc?export=download&id=1DCc5_eUa_dxsv-rwYBDblm0PwOMaAw4Y
" download>Download Resume</DownloadButton>
          {submitted && <ConfirmationBox>Message sent successfully!</ConfirmationBox>}
        </Container>
      </Overlay>
    </MainContainer>
  );
};

export default ContactMePage;
