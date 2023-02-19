import React from 'react';
import styled from 'styled-components';
import WhatsAppImagge from '../../assets/images/WhatsApp.svg.webp';

const SectionTitleStyle = styled.div`

  text-align: center;
  display:flex;
  p {
    font-family: 'RobotoMono Regular';
    font-size: 1.8rem;
    line-height: 1.3em;
    color: ${(props) => props.theme.text};
  }
    img {
  width:60px;
  height: 60px;
  margin-left: 4em; 
  }
  a{
    width:20px
    font-size: 4em
    outline:none
    display: block;
    color: ${(props) => props.theme.text};
  }
  @media only screen and (max-width: 768px) {
#whats_link{
  margin: 10px 0 20px 0; 
   position: absolute;
   top: 0px;    
   left: 20px;
 
}
  a{
    width:20px
    font-size: 1rem
    outline:none
    display: block;
    color: ${(props) => props.theme.text};
  }
    p {
    font-family: 'RobotoMono Regular';
    font-size: 1rem;
    line-height: 1.3em;
    color: ${(props) => props.theme.text};
  }
      img {
  margin-left: 0;
  
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
