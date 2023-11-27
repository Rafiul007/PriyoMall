import React from 'react'
import './Popular.css'
import Item from '../Item/Item'
import data_product from '../../assets/data'
function Popular() {
    return (
        <div className='popular'>
            <h1>Popular in Woman</h1>
            <hr />
            <div className="popular-item">
                {/* map through the array of products */}
                {data_product.map((item, index) => {
                    return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}

            </div>
        </div>
    )
}

export default Popular