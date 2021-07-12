import React, { useState } from 'react';
import './Home.css';
import NFT from '../Assets/nft.jpeg';
import Crypto from '../Assets/crypto.jpg';

const Home = props => {

    const [func, setFunc] = useState(props);

    return (
        <div class="Home">
          <div class="nftImage" onClick={()=> {func.func('NFT')}}>
            <img src={NFT} class="nftPicture" />
            <div class="nftText">NFT MARKETPLACE</div>
            <div class="nftHidden">An NFT is a crypto asset which records ownership of a digital item, such as an image, video or text, on blockchain. While anyone can view or download it, only the buyer can claim ownership.</div>
          </div>
          <div class="cryptoImage" onClick={()=> {func.func('CB')}}>
            <img src={Crypto} class="cryptoPicture"/>
            <div class="cryptoText">CRYPTO BUNDLES</div>
            <div class="cryptoHidden">A cryptocurrency (or “crypto”) is a digital currency that can be used to buy goods and services, but uses an online ledger with strong cryptography to secure online transactions.</div>
          </div>
        </div>
    );
}

export default Home;
