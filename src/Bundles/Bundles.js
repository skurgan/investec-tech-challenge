import React, { useState } from 'react';
import './Bundles.css';

function Bundles () {
    const [text, setText] = useState('default');
    const [invest, setInvest] = useState(false);
    const [investValue, setInvestValue] = useState(0);
    const [lowRisk, setLowRisk] = useState(null);

    const def = "Crypto Bundles are groups of cryptocurrencies with similar risk levels. Here at Investec we have made 2 bundle groups namely high and low risk. These bundles will be made up of the coins in their respective risk category. Each bundle will comprise different percentages of the coins which will total the initial investment allocated to it.";
    const low = "A low risk investment is an investment in which there is thought to be just a small chance of losing some or all of your money. Typically, a 'low risk investment' has a low amount of upside."
     + " This bundle consists of: " + "Stable coin: 15%"
      + " , " + "Ethereum: 40%"
      + " , " + "Bitcoin: 25%"
      + " , " + "USD coin: 10%"
      + " , " + "Litecoin: 10%."; 
    const high = "A high risk investment has a high amount of risk and usually a high potential reward." 
    + " This bundles consists of: " + "Ripple: 17%"
    + " , " + "Monero: 29%"
    + " , " + "Zcash: 30%"
    + " , " + "Stellar: 18%"
    + " , " + "Dogecoin: 6%";

    const onInvestHandler = (isInvest) => {
        setLowRisk(isInvest);
        setInvest(true);
    }

    return(
        <>
        {/* pop up */}
        <div class={invest ? "back" : "backHidden"} onClick={()=>setInvest(false)}/>
            <div class={invest ? "dets" : "backHidden"}>
                <div class="investArea">
                    <div class="exitInvest"><span onClick={()=>setInvest(false)}>close</span></div>
                    <h2>{lowRisk ? "Low Risk Bundle" : "High Risk Bundle"}</h2>
                    <div>You are about to invest in a bundle of cryptocurrencies and will be assigned the respective
                        cryptocurrencies in the ratio specified (click 'more info')</div>
                    <div><input placeholder="Enter investment amount (ZAR)" onChange={(event)=>setInvestValue(event.target.value)}/></div>
                    <button onClick={()=>alert('You have successfully purchased a Crypto Bundle!')}>CONFIRM INVESTMENT</button>
                </div>
            </div>
        {/* pop up */}
        <div class="body">
            <div class="bundles">
                <div class="lowRisk">
                    <div class="LRBT">LOW RISK BUNDLE</div>
                    <div class="LRST">Bitcoin, Ethereum, Stable Coin, USDC, Litecoin
                        <div class="LRB">
                            <button onClick={()=>{setText('LR')}}>MORE INFO</button>
                            <button onClick={()=>onInvestHandler(true)}>INVEST</button>
                        </div>
                    </div>
                </div>
                <div class="highRisk">
                    <div class="HRBT">HIGH RISK BUNDLE</div>
                    <div class="HRST">Ripple, Monero, Zcash, Stellar, Dogecoin
                    <div class="HRB">
                            <button onClick={()=>{setText('HR')}}>MORE INFO</button>
                            <button onClick={()=>onInvestHandler(false)}>INVEST</button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="textBlock">
                  {text == 'default' ? def : text == 'LR' ? low : text == 'HR' ? high : def}  
            </div>
        </div>
        </>
    );
}

export default Bundles;