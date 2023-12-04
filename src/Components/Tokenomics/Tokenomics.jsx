import React from 'react'
import "./Tokenomics.css"
import logo from "../Assests/white_logo.png"

export default function Tokenomics() {
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
                <h6>Open Liquidity Pool 25%:</h6>
                <h4>25,000,000,000</h4>

                </div>
                <div className='about_token mt-4'>
                <h6>Reserve Locked for future 10%:</h6>
                <h4>10,000,000,000</h4>

                </div>
                 <div className='about_token mt-4'>
                <h6>BURNT 65%:</h6>
                <h4>65,000,000,000</h4>

                </div> 
                <div className='about_token mt-4'>
                <h1 className='font_f text-white'>Tax</h1>
                <p className='font_f text-white'>Buy:  3% (1% to liquidity and 2% to marketing)</p>
                <p className='font_f text-white'>Sell: 8% (2% to liquidity and 6% to marketing)</p>

                </div> 
            </div>
            <div className="col-md-5">
                <img src={logo} className='w-100' alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}
