import React, { useState } from 'react';
import './Bundles.css';

function Bundles () {
    const [text, setText] = useState('default');
    const def = "Crypto Bundles are groups of cryptocurrencies with similar risk levels. Here at Investec we have made 2 bundle groups namely high and low risk. These bundles will be made up of the coins in their respective risk category. Each bundle will comprise different percentages of the coins which will total the initial investment allocated to it.";
    const low = "A low risk investment is an investment in which there is thought to be just a small chance of losing some or all of your money. Typically, a 'low risk investment' has a low amount of upside."; 
    const high = "A high risk investment has a high amount of risk and usually a high potential reward.";
    return(
        <div class="body">
            <div class="bundles">
                <div class="lowRisk">
                    <div class="LRBT">LOW RISK BUNDLE</div>
                    <div class="LRST">Bitcoin, Ethereum 
                        <div class="LRB">
                            <button onClick={()=>{setText('LR')}}>MORE INFO</button>
                            <button>INVEST</button>
                        </div>
                    </div>
                </div>
                <div class="highRisk">
                    <div class="HRBT">HIGH RISK BUNDLE</div>
                    <div class="HRST">Ripple, Litecoin, Monero, Zcash, Stellar, Dogecoin
                    <div class="HRB">
                            <button onClick={()=>{setText('HR')}}>MORE INFO</button>
                            <button>INVEST</button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="textBlock">
                  {text == 'default' ? def : text == 'LR' ? low : text == 'HR' ? high : def}  
            </div>
        </div>
    );
}

export default Bundles;