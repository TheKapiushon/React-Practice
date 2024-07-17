import { useState } from 'react'
import './index.css'

const RanImg = () => {


    const IMAGES = [
        { "RanImg1" : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png' },
        { "RanImg2" : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png' },
        { "RanImg3" : 'https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp' },
        { "RanImg4" : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png' },
        { "RanImg5" : 'https://d502jbuhuh9wk.cloudfront.net/courses/65b09ffce4b015c21896589c/65b09ffce4b015c21896589c_scaled_cover.jpg?v=1' }
    ]
    
    const [state, setState] = useState(RanImg1)
    const handleImage = () => {
        setState()
    }

    return (
        <div className="main--container">
            <img src={state} className="main-img--container" />
            <div className="random-img--container">
                <img onClick={handleImage} src={IMAGES[0].RanImg1} className="alternative-img--container" />
                <img onClick={handleImage} src={IMAGES[1].RanImg2} className="alternative-img--container" />
                <img onClick={handleImage} src={IMAGES[2].RanImg3} className="alternative-img--container" />
                <img onClick={handleImage} src={IMAGES[3].RanImg4} className="alternative-img--container" />
                <img onClick={handleImage} src={IMAGES[4].RanImg5} className="alternative-img--container" />
            </div>
        </div>
    )

}

export default RanImg