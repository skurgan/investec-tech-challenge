import React, { useState} from 'react';
import './Item.css';

const Item = props => {

    const [received, setReceived] = useState(props);
    console.log(received.price);
    return(
    <div class="block">
        <img src={received.name}/>
        <div class="bottomText">{received.title}</div>
        <div class="num">Current Price: <span style={{color:"red"}}>{received.price}</span> BTC</div>
    </div>
    );
}

export default Item;