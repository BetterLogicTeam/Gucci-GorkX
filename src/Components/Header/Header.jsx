import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { TiHome } from "react-icons/ti";
import { SiGoogledocs } from "react-icons/si";
import { FaPlus, FaTelegramPlane } from "react-icons/fa";
import logo from "../Assests/new_logo.png";
import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross2 } from 'react-icons/rx'

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="main_nav_bar_bg">
        <Container>
          <Navbar.Brand href="#home" className="text-white main_logo">
            <img src={logo} alt="" />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          <span className="d-block d-lg-none" onClick={()=>setShow(!show)} >
        {
        
          show ? <><RxCross2 className='text-white fs-1' /> </>:<><AiOutlineMenu className='text-white fs-1'/></>
        }
        

        </span>
          <Navbar.Collapse id="responsive-navbar-nav" className={show ? "show":""}>
            <Nav className="m-auto">
              <Nav.Link href="#about" className="main_header_links">
                <span className="text_part"> About </span>
              </Nav.Link>
              <Nav.Link href="#Tokenomics" className="main_header_links">
              
                <span className="text_part">Tokenomics</span>
              </Nav.Link>
              <Nav.Link href="#HowToBuy" className="main_header_links">
                {" "}
               
                <span className="text_part">How to buy</span>
              </Nav.Link>
              <Nav.Link href="#Roadmap" className="main_header_links">
                {" "}
                <span className="text_part">Roadmap</span>
              
              </Nav.Link>
            </Nav>
            <Nav className="ma-auto">
             
           <a href="https://bscscan.com/address/0x47eecd2164b216111ce5a2045e6cf11abe10c667#code" className="text-decoration-none " target="_blank">     <button className="connect_wallet mt-3 mt-md-0"> Buy Gucci</button></a>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}