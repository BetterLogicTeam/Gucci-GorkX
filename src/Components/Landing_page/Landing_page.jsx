import React from "react";
import "./Landing_page.css";
import ether from "../Assests/Ethereum.png";

export default function Landing_page() {
  return (
    <div className="main_landing_page">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="gucci_left">
              <h1 className="main_heading">Gucci GorkX ($GUCCIX)</h1>
              <p>
                Gucci Grok X  <strong>(“$GUCCIX”)</strong> is a digital token compatible with the
                ERC-20 token standard. MEME has no functions, no utility, and no
                intrinsic value, no promise or expectation of any financial
                return, profit, interest, or dividend.
              </p>

              <a
                href="https://heyzine.com/flip-book/0b1074c8aa.html"
                className="text-decoration-none"
                target="_blank"
              >
                {" "}
                <button className="but_GUcci_btn font_f mt-3">
                  White Paper
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-6 mt-3 mt-md-0">
            <video autoplay muted loop controls autoPlay className="my_intro">
              <source src="intro.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
