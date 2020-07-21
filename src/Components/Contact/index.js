import React from "react";
import {
  ContactSection,
  ContactTitle,
  Span,
  Form,
  FormInput,
  InputText,
  InputEmail,
  InputExp,
  TextArea,
  InputSubmit,
} from "./style.js";
import SocialMedia from "./../SocialMedia";
import Footer from "./../Footer";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for submitting");
  };
  return (
    <React.Fragment>
      <ContactSection>
        <div className="container">
          <ContactTitle>
            <Span>Drop </Span>Me A line
          </ContactTitle>
          <Form onSubmit={handleSubmit}>
            <FormInput>
              <InputText type="text" placeholder="Your Name" />
              <InputEmail type="email" placeholder="Your Email" />
            </FormInput>
            <InputExp type="text" class="sub" placeholder="Your Subject" />
            <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
            <InputSubmit type="submit" value="Send Message" />
          </Form>
        </div>
      </ContactSection>
      <SocialMedia />
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
