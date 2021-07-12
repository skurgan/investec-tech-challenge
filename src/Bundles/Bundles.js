import React, { useState } from 'react';
import './Bundles.css';

function Bundles () {
    const [text, setText] = useState('default');
    const def = "Crypto Bundles are groups of cryptocurrencies with similar risk levels. Here at Investec we have made 2 bundle groups namely high and low risk. These bundles will be made up of the coins in their respective risk category. Each bundle will comprise different percentages of the coins which will total the initial investment allocated to it.";
    const low = "Low Risk + n NFT is a crypto asset which records ownership of a digital item, such as an image, video or text, on blockchain. While anyone can view or download it, only the b"; 
    const high = "High Risk + n NFT is a crypto asset which records ownership of a digital item, such as an image, video or text, on blockchain. While anyone can view or download it, only the b";
    return(
        <div class="body">
            <div class="bundles">
                <div class="lowRisk">
                    <div class="LRBT">LOW RISK BUNDLE</div>
                    <div class="LRST">Bitcoin, Ethereum 
                        <div class="LRB">
                            <button onClick={()=>{setText('LR')}}>More info</button>
                            <button>INVEST</button>
                        </div>
                    </div>
                </div>
                <div class="highRisk">
                    <div class="HRBT">HIGH RISK BUNDLE</div>
                    <div class="HRST">Ripple, Litecoin, Monero, Zcash, Stellar, Dogecoin
                    <div class="HRB">
                            <button onClick={()=>{setText('HR')}}>More info</button>
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