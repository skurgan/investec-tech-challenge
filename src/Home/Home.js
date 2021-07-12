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
            <div class="nftHidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nem</div>
          </div>
          <div class="cryptoImage" onClick={()=> {func.func('CB')}}>
            <img src={Crypto} class="cryptoPicture"/>
            <div class="cryptoText">CRYPTO BUNDLES</div>
            <div class="cryptoHidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nem</div>
          </div>
        </div>
    );
}

export default Home;
