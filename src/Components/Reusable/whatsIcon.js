import React from 'react';
import styled from 'styled-components';
import WhatsAppImagge from '../../assets/images/WhatsApp.svg.webp';

const SectionTitleStyle = styled.div`
  img {
  width:30px;
  height: 30px;
  margin: 20px 0 20px 0; 
  }
  @media only screen and (max-width: 768px) {
#whats_link{
  margin: 10px 0 20px 0; 
   position: absolute;
   top: 0px;    
   left: 20px;
 
}
  }
`;



export default function WhatsIcon() {
    return (
        <SectionTitleStyle>
                <a target="blank" href="https://api.whatsapp.com/send?phone=34695650070">
                    <img id="whats_link"src={WhatsAppImagge} alt="img" /></a>
        </SectionTitleStyle>

    );
}
