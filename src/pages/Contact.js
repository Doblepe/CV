import React from 'react';
import Map from '../Components/About/Map';
import SectionTitle from '../Components/Reusable/SectionTitle';

import styled from 'styled-components';
export default function Contact() {
  const ContactSectionStyle = styled.div`
 background-color: ${(props) =>
      props.theme.bg
    };
  color: ${(props) =>
      props.theme.text
    }; }
  padding: 10rem 0;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
        a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      font-size: 2rem;
      color: ${(props) => props.theme.text};
      outline: none;
        }
   p{
    font-size: 2rem;
   } 
   ul {
        border: solid 2px ${(props) => props.theme.secondary};
        width: fit-width;
        justify-content: space-between;
        align-items:center;

   }   
   li{
      font-size: 2rem;
      padding: 1rem;
      margin: 0 10px;
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: ${(props) => props.theme.secondary};
      }
   } 
`
  return (
    <ContactSectionStyle>
      <SectionTitle heading="contact" subheading="get in touch" />
      <div className="container">
        <p>There is some ways to contact me. I'll try to answer you as soon as possible. </p>
        <ul>
          <li>
            Phone number: +34 695 650 070
          </li>
          <li>
            Email: vicdobleperez@gmail.com
          </li>
          <li>
            Linkedin -- <a target="blank" href='https://www.linkedin.com/in/victor-perez-perez-programacion-web-development/'>(Here)</a>
          </li>
          <li>
            WhatsApp -- <a target="blank" href="https://api.whatsapp.com/send?phone=34695650070">(Here)</a>
          </li>
        </ul>



        <Map />
      </div>
    </ContactSectionStyle>
  );
}