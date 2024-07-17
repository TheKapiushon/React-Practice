import { useState } from 'react';
import './index.css'

const RanNum = () => {

    const Random = Math.floor(Math.random() * 101);

    const [state, setState] = useState("Do Your Best!")
    const handleClick = () => {
        setState(Random)
    }

    const getColor = () => {

        if (state >= 70) {
            return "green"
        }
        if (state < 70 && state >= 50) {
            return "yellow"
        }
        if (state < 50) {
            return "red"
        }
    }

    return (
        <div className="number-box--container">
            <h1 className='Head--container'>I Will Give You A Chance</h1>
            <h3 className="number--container" style={{ color: getColor() }}>{state}</h3>
            <button className='btn--container' onClick={handleClick}>Try Your Luck!</button>
        </div>
    )

}

export default RanNum;