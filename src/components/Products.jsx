import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProductAction } from '../store/productSlice';


function Products() {

    const { allProducts, isLoading } = useSelector((state) => state.productStore);
    const dispatch = useDispatch();

    const handleProduct = () => {
        dispatch(getSingleProductAction({ name: 'Tihomir', age: 24, adresa: 'Donja Rasovaca' }));
    }

    return (
        <div>
            {/* {isLoading ? <h2>Loading...</h2> : allProducts.map((product, index) => {
                return <h2>{product.title}</h2>
            })} */}
            <h1>product</h1>
            <button onClick={handleProduct}>Get Single Product</button>
        </div>
    )
}

export default Products