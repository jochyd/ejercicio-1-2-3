import React from 'react';
import { useState } from 'react';

const Hello = (props) => {
    let [claveMensaje, setClaveMensaje] = useState('');
    return (
        <div>
            <h2>Hello : {props.saludo}</h2>
            <h2>{claveMensaje}</h2>
            <button onClick={()=> setClaveMensaje('(from changed state)')} className="btn-green">Click Me</button>
            <button onClick={()=> setClaveMensaje('')} className="btn-green">Restart</button>
        </div>
    );
};

export default Hello;