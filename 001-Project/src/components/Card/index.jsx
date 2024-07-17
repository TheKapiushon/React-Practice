/* eslint-disable no-unused-vars */
import './index.css'
import PRODUCTS from '../../API/products.json'

function Card() {

    return (
        <div className="card--container">
            {PRODUCTS.map(item => (
                <div style={item.discount > 0 ? { background: '#ae4f4f' } : {}} key={item.title} className='card-content--container'>
                    <div className="card-img--container">
                        <img src={item.image} className="img--self" />
                    </div>
                    <h2 className='card-head--container'>{item.title}</h2>
                    <span className='card-rate--container'>Rate: {item.rating.rate}</span>
                    <p className="card-des--container">{item.description}</p>
                    <p className='card-price--container'>{item.price} $</p>
                    {item.discount > 0 && <p className='card-discount--container'>Discount: {item.discount} %</p>}
                    <button style={item.freeShipping ? {background: '#646cff'} : {}} className='card-btn--container'>Add To Cart</button>
                </div>
            ))}
        </div>
    )
}

export default Card;