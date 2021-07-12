import logo from './logo.svg';
import './App.css';
import Header from './Header/Header.js';
import Crypto from './Assets/crypto.jpg';
import NFT from './Assets/nft.jpeg';

function App() {
  return (
      <div class="bg">
        <Header/>

        <div class="Home">
          <div class="nftImage">
            <img src={NFT} class="nftPicture" onClick={()=> {console.log('nft clicked')}}/>
            <div class="nftText">NFT MARKETPLACE</div>
            <div class="nftHidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nem</div>
          </div>
          <div class="cryptoImage">
            <img src={Crypto} class="cryptoPicture"/>
            <div class="cryptoText">CRYPTO BUNDLES</div>
            <div class="cryptoHidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nem</div>
          </div>
        </div>

      </div>
  );
}

export default App;