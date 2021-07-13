import React, { useState} from 'react';
import './Item.css';

const Item = props => {

    const [received, setReceived] = useState(props);

    return(
    <div class="block">
        <img src={received.name} onClick={()=>received.run(received)}/>
        <div class="bottomText">{received.title}</div>
        <div class="num">Current Price: <span style={{color:"red"}}>{received.price}</span> BTC</div>
    </div>
    );
}

export default Item;