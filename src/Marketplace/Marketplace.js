import React, { useState} from 'react';
import './Marketplace.css';

function Marketplace () {
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
           </div>
        </div>
    );
}

export default Marketplace;