import React from "react";
import "./Why_Gucci.css";
import { FaHandHoldingUsd, FaMapMarked } from "react-icons/fa";
import { GiDevilMask } from "react-icons/gi";
import logo from "../Assests/new_logo.png";

export default function Why_Gucci() {
  return (
    <div className="main_why_gucci" id="about">
      <div className="container">
        <div className="why_gucci_about">
          <h1 className="font_f"> Why Gucci</h1>
          <p>
            A community-driven Meme Token for entertainment only. The community
            will be involved in every decision
          </p>
          {/* <p>
            {" "}
            Fugit laboriosam quisquam dicta, odit modi doloremque, laborum iure,
            quam molestias neque earum.
          </p> */}
        </div>
        <div className="row mt-5 justify-content-around">
          <div className="col-md-3">
            <div className="y_gucci_box text-start">
              <FaHandHoldingUsd className="icon_y" />
              {/* <h5>10% Fee</h5> */}
              <h5> 3% buy tax and 8% sell tax</h5>
              <p>
                There are 3% buy tax on the $GUCCIX (1% to liquidity and 2% to
                marketing. 8% will be collected as Sell tax and 2% to Liquidity
                and 6% for future marketing and any developments.
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-3 mt-md-0">
            <div className="y_gucci_box text-start">
              <GiDevilMask className="icon_y" />
              {/* <h5>5% Fee</h5> */}
              <h5> Stealth Launch Opening MC 2000 Only</h5>
              <p>
                It will be a stealth launch with an opening market cap of $2000.
                This gives a chance for everyone to join and hopefully make some
                money
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-3 mt-md-0">
            <div className="y_gucci_box text-start">
              <FaMapMarked className="icon_y" />
              {/* <h5>5% Fee</h5> */}
              <h5> Transparent Team</h5>
              <p>
                The team behind this project is well-known in the industry for
                their transparency. Based dev with multiple current projects.
                This token was made and deployed for complete entertainment
                purposes only.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <img src={logo} className="w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
