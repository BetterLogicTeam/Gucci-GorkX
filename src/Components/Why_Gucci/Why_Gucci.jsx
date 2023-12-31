import React, { useContext } from "react";
import "./Why_Gucci.css";
import { FaHandHoldingUsd, FaMapMarked } from "react-icons/fa";
import { GiDevilMask } from "react-icons/gi";
import logo from "../Assests/new_logo.png";
import { AppContext } from "../../helper/context";
import ggxWhite from '../Assests/ggxWhite.png'

export default function Why_Gucci() {
  const {chainSwitch} = useContext(AppContext);
  return (
    <div className="main_why_gucci" id="about">
      <div className="container">
        <div className="why_gucci_about">
          <h1 className="font_f"> Why {!chainSwitch ? "$GUCCIX":"GucciX2"}</h1>
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
              <h5> {chainSwitch ? "5%":"5%"} buy tax and  {chainSwitch ? "5%":"5%"} sell tax</h5>
              <p>
                There are {chainSwitch ? "5%":"5%"} buy tax on the {!chainSwitch ? "$GUCCIX":"GucciX2"} ({chainSwitch ? "3%":"2%"} to liquidity and {chainSwitch ? "2%":"3%"} to
                marketing. {chainSwitch ? "5%":"5%"} will be collected as Sell tax and {chainSwitch ? "3%":"2%"} to Liquidity
                and  {chainSwitch ? "2%":"3%"}  for future marketing and any developments.
              </p>
            </div>
          </div>
          <div className="col-md-3 mt-3 mt-md-0">
            <div className="y_gucci_box text-start">
              <GiDevilMask className="icon_y" />
              {/* <h5>5% Fee</h5> */}
              <h5> Stealth Launch Opening MC  {!chainSwitch ? "$2000":"$10000"} Only</h5>
              <p>
                It will be a stealth launch with an opening market cap of { !chainSwitch ? "$2000":"$10000"}.
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
            {
              chainSwitch ? <img src={ggxWhite} className="w-100" alt="" /> :<img src={logo} className="w-100" alt="" />

            }

          </div>
        </div>
      </div>
    </div>
  );
}
