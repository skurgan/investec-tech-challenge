import React, { useState } from 'react';
import './Marketplace.css';
import Item from './Item.js';
import one from '../Assets/NFTs/1.jpg';
import two from '../Assets/NFTs/2.jpg';
import three from '../Assets/NFTs/3.jpeg';
import four from '../Assets/NFTs/4.jpg';
import five from '../Assets/NFTs/5.png';
import six from '../Assets/NFTs/6.jpg';
import seven from '../Assets/NFTs/7.jpg';
import eight from '../Assets/NFTs/8.jpg';
import nine from '../Assets/NFTs/9.jpg';

function Marketplace () {

    
    const [bid, setBid] = useState(false);
    const [bidValue, setBidValue] = useState(0);
    const [details, setDetails] = useState(["", "", ""]);

    const getDetailsFunction = (data) => {
        const temp = ["", "", ""];
        temp[0] = data.name;
        temp[1] = data.title;
        temp[2] = data.price;
        setDetails(temp);
        setBid(true);
      }

    const images = [[one, "mountain lady", 0.1234], [two, "robo-head", 0.2312], [three, "egg or the man?", 0.2134]
    , [four, "doggie", 0.8273], [five, "cave dwelling", 0.4577], [six, "half a woman", 0.7623]
    , [seven, "splooooosh", 0.0237], [eight, "scenic planet", 0.7283], [nine, "crypto kitty", 0.2386]];

    //mapping the images onto custom Item component
    const gallery = images.map((index) =>
        <Item name={index[0]} title={index[1]} price={index[2]} run={getDetailsFunction}/>
    );

    //handles the bid button click
    const bidHandler = (name, title, price) => {
        if (bidValue <= price || isNaN(bidValue)) {
            alert('That bid is too low or is not numerical');
        } else {
            alert('bid placed successfully!')
        let i = 0;
            for (i; i < images.length; i++) { 
                if (images[i][1] == title) {
                    images[i] = [name, title, bidValue];
                    setDetails([name, title, bidValue]);
                    break;
                }
              }
        }
    }

    return(
        <>
        {/* pop up */}
        <div class={bid ? "backdrop" : "backdropHidden"} onClick={()=>setBid(false)}/>
            <div class={bid ? "details" : "backdropHidden"}>
                <div class="showcase">
                    <img src={details[0]}/>
                </div>
                <div class="bidArea">
                    <h2>{details[1]}</h2>
                    <div>14h left...</div>
                    <div style={{marginTop:"50px"}}>Current price : <span style={{color:"red"}}>{details[2]}</span></div>
                    <div><input placeholder="Enter Bid" onChange={(event)=>setBidValue(event.target.value)}/></div>
                    <button onClick={()=>bidHandler(details[0],details[1], details[2])}>PLACE BID</button>
                </div>
            </div>
        {/* pop up */}
        <div class="area">
           <div class = "filters">
                <div class="bigText"> Filter by </div>
                <div class="price">
                    <div style={{display:"flex", flexDirection:"row"}}>
                        Price
                        <div class="priceCombo">
                        <select>
                        <option selected disabled>Currency</option>
                        <option value="1">Bitcoin</option>
                        <option value="2">Etheruem</option>
                        </select>
                        </div>
                    </div>
                    <div class="priceInput">
                        <input class="priceEnter"/>
                        to
                        <input class="priceEnter"/>
                    </div>
                </div>
           </div>

           <div class = "rhs">
                <div class="comboBoxContainer">
                    <div class="comboBox">
                        <select>
                            <option selected disabled>Sort by</option>
                            <option value="1">Alphabetical (Desc)</option>
                            <option value="2">Alphabetical (Asc)</option>
                            <option value="3">Date Created (Desc)</option>
                            <option value="4">Date Created (Asc)</option>
                            <option value="5">Price (Desc)</option>
                            <option value="6">Price (Asc)</option>
                        </select>
                    </div>
                    <button>My Gallery</button>
                </div>
            <div class="gallery">
                {gallery}
            </div>
           </div>
        </div>
        </>
    );
}

export default Marketplace;