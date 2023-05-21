import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import logo from '../img/logo.png';
function Navbar() {

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        //cuando esta true lo pasa a false y vice versa
        setClicked(!clicked)
    }
    return (
        <>
            <NavContainer>
                <div>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ width: '35px', height: '35px', cursor: 'pointer' }}
                        onClick={handleClick}
                    />
                </div>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <a onClick={handleClick} href="#h">Inicio</a>
                    <a onClick={handleClick} href="#h">informacion</a>
                    <a onClick={handleClick} href="#h">Contacto</a>
                    <a onClick={handleClick} href="#h">iniciar sesion</a>
                </div>
                <div className='burguer'>
                    <BurguerButton clicked={clicked} handleClick={handleClick} />
                </div>
                <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
            </NavContainer>
        </>
    )
}

export default Navbar

const NavContainer = styled.nav`
  h2{
    color: white;
    
    font-weight: 400;
    span{
      font-weight: bold;
      
    }
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: fixed;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: fixed;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -11;
  transition: all .9s ease ;
  
  &.active{
    border-radius: 0 0 100% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`