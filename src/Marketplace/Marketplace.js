import React, { useState} from 'react';
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

    const images = [[one, "mountain lady", 0.1234], [two, "robo-head", 0.2312], [three, "egg or the man?", 0.2134]
    , [four, "doggie", 0.8273], [five, "cave dwelling", 0.4577], [six, "half a woman", 0.7623]
    , [seven, "splooooosh", 0.0237], [eight, "scenic planet", 0.7283], [nine, "crypto kitty", 0.2386]];
    //mapping the images onto custom Item component
    const gallery = images.map((index) =>
        <Item name={index[0]} title={index[1]} price={index[2]}/>
    );

    return(
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
                </div>
            <div class="gallery">
                {gallery}
            </div>
           </div>
        </div>
    );
}

export default Marketplace;