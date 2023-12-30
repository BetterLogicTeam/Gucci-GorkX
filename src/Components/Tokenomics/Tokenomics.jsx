import React, { useContext } from 'react'
import "./Tokenomics.css"
import logo from "../Assests/white_logo.png"
import ggxWhite from '../Assests/ggxWhite.png'
import { AppContext } from '../../helper/context';

export default function Tokenomics() {
  const {chainSwitch} = useContext(AppContext);
  return (
    <div className='main_tokenomics' id='Tokenomics'>
    <div className="container">
        <h1 className='main_heading text-center'>Tokenomics</h1>
        <div className="row align-items-center justify-content-center mt-4">
            <div className="col-md-5 ">
                <div className='about_token'>
                <h6>Total Supply:</h6>
                <h4>100,000,000,000</h4>

                </div>
                <div className='about_token mt-4'>
                <h6>Open Liquidity Pool {chainSwitch ? "10%":"25%"}:</h6>
                <h4>{chainSwitch ? "10,000,000,000":"25,000,000,000"} </h4>

                </div>
                <div className='about_token mt-4'>
                <h6>Reserve Locked for future {!chainSwitch ? "10%":"10%"}:</h6>
                <h4>{chainSwitch ? "10,000,000,000":"10,000,000,000"} </h4>

                </div>
                 <div className='about_token mt-4'>
                <h6>BURNT {chainSwitch ? "80%":"65%"}:</h6>
                <h4>{chainSwitch ? "80,000,000,000":"65,000,000,000"}</h4>

                </div>
                <div className='about_token mt-4'>
                <h1 className='font_f text-white'>Tax</h1>
                <p className='font_f text-white'>Buy:  {chainSwitch ? "5%":"5%"} ({chainSwitch ? "3%":"2%"} to liquidity and {chainSwitch ? "2%":"3%"} to marketing)</p>
                <p className='font_f text-white'>Sell: {chainSwitch ? "5%":"5%"} ({chainSwitch ? "3%":"2%"} to liquidity and {chainSwitch ? "2%":"3%"} to marketing)</p>

                <h1 className='font_f text-white'>{chainSwitch ? "Anti Jet Anti Sniper system in place for 24 hours":""}</h1>
                <p className='font_f text-white'>{chainSwitch ? "Buy 10% = 7% to liquidity and 3% to marketing":""}</p>
                <p className='font_f text-white'>{chainSwitch ? "Sell 20% = 17% to liquidity and 3% to marketing":""}</p>

                

                </div>
            </div>
            <div className="col-md-5">
              {
                chainSwitch ?  <img src={ggxWhite} className='w-100' alt="" />:<img src={logo} className='w-100' alt="" />
              }

            </div>
        </div>
    </div>
    </div>
  )
}
