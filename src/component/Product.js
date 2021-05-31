import React from 'react';
import '../style/Product.css';

function Product(values) {
    return (
        <div className="Product">
            <h2 className="Product-h6">this is product page</h2>
            <button onClick={values.goToPrice}> go to price</button>
            <button onClick={values.backToHome}>Back to home</button>
        </div>
    );
}

export default Product;