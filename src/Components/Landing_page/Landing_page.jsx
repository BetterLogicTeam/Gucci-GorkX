import React, { useContext, useEffect, useRef } from "react";
import "./Landing_page.css";
import ether from "../Assests/Ethereum.png";
import { AppContext } from "../../helper/context";
import Ether from "../Assests/Ether.mp4";
import intro from "../Assests/intro.mp4";

export default function Landing_page() {
  const { chainSwitch } = useContext(AppContext);

  const videoRef = useRef(null);

  useEffect(() => {
    // Use the videoRef to access and control the video element
    const videoElement = videoRef.current;

    // Change video source and play when videoUrl changes
    videoElement.src =  chainSwitch ?'./Ether.mp4' :`./intro.mp4`;
    // videoElement.play();
  }, [chainSwitch]);
  return (
    <div className="main_landing_page">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="gucci_left">
              <h1 className="main_heading">Gucci GorkX ($GUCCIX)</h1>
              <p>
                Gucci Grok X <strong>(“$GUCCIX”)</strong> is a digital token
                compatible with the evm compatible token standard. MEME has no
                functions, no utility, and no intrinsic value, no promise or
                expectation of any financial return, profit, interest, or
                dividend.
              </p>

              <a
                href={
                  chainSwitch
                    ? "https://heyzine.com/flip-book/48a5b45bd5.html"
                    : "https://heyzine.com/flip-book/0b1074c8aa.html"
                }
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
          <video
                  autoplay
                  muted
                  loop
                  controls
                  autoPlay
                  className="my_intro"
                  ref={videoRef}
                >
                  {/* <source src={Ether} type="video/mp4"></source> */}
                </video>
            {/* {chainSwitch ? (
              <>
                <video
                  autoplay
                  muted
                  loop
                  controls
                  autoPlay
                  className="my_intro"
                >
                  <source src={Ether} type="video/mp4"></source>
                </video>
              </>
            ) : (
              <>

                <video
                  autoplay
                  muted
                  loop
                  controls
                  autoPlay
                  className="my_intro"
                >
                  <source src={intro} type="video/mp4"></source>
                </video>
              </>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
