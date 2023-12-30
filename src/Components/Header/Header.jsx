import React, { useContext, useState } from "react";
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
import { Switch } from "antd";
import { AppContext } from "../../helper/context";
import ggxWhite from '../Assests/ggxWhite.png'

export default function Header() {
  const [show, setShow] = useState(false);

  const {chainSwitch,setChainSwitch} = useContext(AppContext);

  const handlechange = (value) =>{
    // console.log("value",value);
    setChainSwitch(value)
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="main_nav_bar_bg">
        <Container>
          <Navbar.Brand href="/" className="text-white main_logo">
            {
              chainSwitch ? <img src={ggxWhite} alt="" />:<img src={logo} alt="" />
            }

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
              <Nav.Link className="main_header_links">
              <Switch checkedChildren="BSC V2" unCheckedChildren="BSC" className="mt-3" onChange={handlechange}  />
              </Nav.Link>
            </Nav>
            <Nav className="ma-auto">
           <a href= {chainSwitch ? "https://t.me/guccix_v2":"https://pancakeswap.finance/swap?outputCurrency=0x47eecd2164B216111cE5A2045e6CF11Abe10C667"} className="text-decoration-none " target="_blank">     <button className="connect_wallet mt-3 mt-md-0"> {!chainSwitch ? "Buy $GUCCIX":"Buy GUCCIX2"}</button></a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
