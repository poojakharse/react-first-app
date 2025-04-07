import React from "react"
import ProductDetails from "./productDetails"

 const ProductList = () => {
const products=[
 {
     id:1,
     name:"Laptop",
     price:40000,
     image:"https://m.media-amazon.com/images/I/61khNUOxptL._SX569_.jpg",
     description:"Lenovo IdeaPad 1 AMD Ryzen 3 7320U 15.6 HD Thin and Light Laptop "
    },
    {
        id:2,
        name:"Smartphone",
        price:80000,
        image:"https://m.media-amazon.com/images/I/61DjMd76QnL._AC_UY327_FMwebp_QL65_.jpg",
        description:"iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Pink"
    }
];
const heading = {
    color: 'black'
};

function handleAddToCart(name){
    alert( `Product ${name} added to cart `);
}
    return(
        <>
        <div className="container">
            <h2 style={heading} ><b>Product List</b></h2>
            {products.map((product)=>(
                < ProductDetails productObj={product} addToCart={handleAddToCart} />
            ))}
        </div>
        </>
    );
   
};

export default ProductList