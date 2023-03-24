import React, { useState } from 'react';
import './District.css'

const District = (props) => {
    const [count, setCount] = useState(1);
    const increaseNumber = () => {
        const newCount = count * 2;
        setCount(newCount)
    }
    return (
        <div className='single-district'>
            <h2>Name: {props.name}</h2>
            <p>Specialty: {props.specialty}</p>
            <h4>Power: {count}</h4>
            <button onClick={increaseNumber}>Increase</button>

        </div>
    );
};

export default District;