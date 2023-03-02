import React from 'react';
import styled from 'styled-components';
const ThemeBtnStyl = styled.div`
button{
      font-family: 'RobotoMono Regular';
      border-radius: 50px;
      padding: auto;
      margin: auto 30px;
      width: 4em;
      font-size: 15px;
      color: ${(props) => props.theme.text};
      outline: none;
      background-color: ${(props) => props.theme.secondary};
}
    
  @media only screen and (max-width: 768px) {
     #theme-btn{
      display:none
    }
  }
`

export default function ThemeBtn(props) {
    console.log(props.props)

    return (
        <ThemeBtnStyl>
            <button id="theme-btn" onClick={() => { props.themeToggler() }}>Theme</button>  
        </ThemeBtnStyl>

    );
}
