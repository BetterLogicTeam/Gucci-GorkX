import React, { useEffect, useState } from 'react'
import "./How_to_buy.css"
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";

export default function How_to_buy() {
    const [copy, setCopy] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  }, [copy]);
  return (
    <div className='main_htb' id='HowToBuy'>
    <div className="container">
        <h1 className="main_heading text-center">HOW TO BUY GUCCI</h1>
        <div className="row justify-content-around align-items-center mt-5">
            <div className="col-md-5">
                <div className="htb_cotent">
                    <div className='d-flex   align-items-center gap-2 pro_htb'>
                        <h1>1</h1>
                        <h6>Connect Your wallet</h6>
                    </div>
                    <div className='d-flex   align-items-center gap-2 pro_htb'>
                        <h1>2</h1>
                        <h6>Adding GUCCI TO EXCHANGE</h6>
                    </div>
                    <div className='d-flex   align-items-center gap-2 pro_htb'>
                        <h1>3</h1>
                        <h6>SETTING  SLIPPAGE TOLERANCE (25%)</h6>
                    </div>
                    <div className='d-flex   align-items-center gap-2 pro_htb'>
                        <h1>4</h1>
                        <h6>FINALIZING SWAP </h6>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="butn_htb text-center    ">
                <h3 >BUY GUCCI ON UNISWAP</h3>
               <div className='d-flex gap-2'>
                <p className="text-white mb-0    text-truncate">
                      0x47eecd2164b216111ce5a2045e6cf11abe10c667  {" "}
                    </p>
                <CopyToClipboard
                        className=""
                        text={"0x47eecd2164b216111ce5a2045e6cf11abe10c667 "}
                        onCopy={() => setCopy(true)}
                      >
                        <span className="d-flex justify-content-center align-items-center gap-2">
                          {" "}
                          <MdContentCopy
                            className=""
                            style={{ color: "white" }}
                          />
                          {copy ? (
                            <span style={{ color: "white" }}>Copied</span>
                          ) : null}
                        </span>
                      </CopyToClipboard>
                        {/* <button>Copy to clipboard with button</button> */}
                      </div>

              <a className='text-decoration-none' href="https://pancakeswap.finance/swap?outputCurrency=0x47eecd2164B216111cE5A2045e6CF11Abe10C667" target='_blank'>  <button className='but_GUcci_btn mt-4'>BUY GUCCI</button></a>


                </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}
