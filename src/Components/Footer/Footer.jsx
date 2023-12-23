import React, { useContext } from "react";
import "./Footer.css";
import logo from "../Assests/new_logo.png";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ggxWhite from '../Assests/ggxWhite.png'
import { AppContext } from "../../helper/context";

export default function Footer() {
  const {chainSwitch} = useContext(AppContext);
  return (
    <div className="main_footer">
      <div className="container">
        <div className="row ">
          <div className="col-md-4">
            <div className="text-start">
            {
                chainSwitch ?   <img src={ggxWhite} className="w-50 footer_logo" alt="" />: <img src={logo} className="w-50 footer_logo" alt="" />
              }
              {/* <img src={logo} className="w-50 footer_logo" alt="" /> */}
              <div className="d-flex gap-3">
             <a href="https://t.me/Gucci_GrokX" target="_blank">   <FaTelegramPlane className="soical_icons" /> </a>
             <a href="https://x.com/GucciGrokX" target="_blank">   <FaTwitter className="soical_icons" /></a>
             {/* <a href="guccigrokx@gmail.com" target="_blank"> <MdEmail  className="soical_icons" /></a>     */}
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="footer_links">
              <h5>Quick Links</h5>
              <div className="mt-4">
              <a className="text-decoration-none" href="#about" target="_blank">  <p>About</p></a>
              <a className="text-decoration-none" href="roadmap" target="_blank">  <p>roadmap</p></a>
               <a className="text-decoration-none" href="tokenomics" target="_blank"> <p>tokenomics</p></a>
               <a className="text-decoration-none" href="howtobuy" target="_blank"> <p>how to buy</p></a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="footer_links">
              <h5 className="subs">subscribe</h5>
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="footer_email"
                />
                <button className="send_btn">Send</button>
              </div>


              <p className="text-white font_f mt-3">Email: <span className="me-lg-2 fw-bold">guccigrokx@gmail.com</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
