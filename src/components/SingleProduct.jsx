import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function SingleProduct() {

    const { singleProduct } = useSelector(state => state.productStore);

    console.log(singleProduct)




    return (
        <div>SingleProduct PAGE</div>
    )
}

export default SingleProduct