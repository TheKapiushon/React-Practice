import { useState } from 'react'
import './index.css'

const RanColor = () => {

    const Color1 = Math.floor(Math.random() * 255)
    const Color2 = Math.floor(Math.random() * 255)
    const Color3 = Math.floor(Math.random() * 255)

    const [state, setState] = useState("white")
    const handleColor = () => {
        setState(`rgb(${Color1}, ${Color2}, ${Color3})`)
    }

    return (
        <div onClick={handleColor} style={{background: `${state}`}} className="color-box--container"></div>
    )
}

export default RanColor