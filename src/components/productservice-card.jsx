import React from 'react'
import "../pages/Home.css"

const ProductServicCard=({data})=>{
    return(
    <div className="prodCard">
        <div className="prodimg">
            <img src ={data.img} />
        </div>
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
        <div className='pt2-tags'>
            <span>{data.tag1}</span>
            <span>{data.tag1}</span>
            <span> {data.tag1}</span>
        </div>
 

    </div>
    )
}
export default ProductServicCard 