import React from "react"


const ProductDetails = (props) => {
    console.log(props);
  
    const styles = {
        width: '18rem'
    }

    const product = props.productObj;
    console.log(props.addToCart);
    
         return (
    <>

        <div className="card" style = {styles} >
            <img src={product.image} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price:{product.price}</p>
                <button className="btn btn-primary" onClick={() => props.addToCart(product.name)}>Add To Cart</button>
            </div>
        </div>

    </>

)
}

export default ProductDetails