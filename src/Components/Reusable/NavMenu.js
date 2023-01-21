import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import WhatsIcon from './whatsIcon'
const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 8em;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.theme.bg_2
  };
  p{
    margin-left: 10px;
    color: ${(props) => props.theme.text};
    font-size: 2rem
  }
  ul {
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 90%;
    text-align: center;
    border: solid 2px ${(props) => props.theme.secondary};
    li {
      margin: 0 10px;
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: ${(props) => props.theme.secondary};
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: ${(props) => props.theme.text};
      outline: none;
    }
    button{
      margin-left: auto;
      background-color:  #BCB4B4;
    }
    .active {
      color: ${(props) => props.theme.text};
    }
  }

  .mobile-menu-icon {
    position: absolute;
    color: ${(props) => props.theme.secondary};
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    } 
  }
  .navItems .closeNavIcon {
    display: none;
  }
  .container {
    display:flex;
  }
  .container button{
      font-family: 'RobotoMono Regular';
      width: 5em;
      border-radius: 20px;
      padding: 1rem 2rem;
      font-size: 2rem;
      color: ${(props) => props.theme.text};
      outline: none;
     background-color: ${(props) => props.theme.secondary};
      margin-left: 10em;
      /* background-color:  #BCB4B4; */
      margin-left: 5em;
    }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: ${(props) => props.theme.bg};
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        color: ${(props) => props.theme.secondary};
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
    #chat_txt{
      display: none
    }
    #theme-btn{
      display:none
    }
  }
`;

export default function NavMenu(props) {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <div className='container'>

      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            exact
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Contact
          </NavLink>
        </li>  
      </ul>
        <WhatsIcon className={!showNav ? 'navItems hide-item' : 'navItems'} />
        <p id="chat_txt">Chat with me!</p>
        <button id="theme-btn" onClick={() => { props.themeToggler() }}>Theme</button>  
     
      </div>
    </NavStyles>
  );
}
