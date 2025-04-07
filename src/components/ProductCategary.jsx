import React from "react";
function   ProductCategary(props) {
    console.log(props)
    const { categariesArr, productdetails } = props;
const style = {
    width : "18rem"
}
    return (
        <>
           {/* <h2>categariesArr</h2>
            <ul>
            <li>{props.categariesArr[0]}</li>
            <li>{props.categariesArr[1]}</li>
            <li>{props.categariesArr[3]}</li>
       
            <ul>
                {categariesArr.map((el, index) => (
                    <li key={index}>{el}</li>
                ))}
                <li>{categariesArr[0]}</li>
            </ul>
            </ul>*/}

            {/*<hr />*/}

            <div className="card" style={style}>
            < img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS65IZR3veFPUjBiMm10eXpOeBhv8Cknrbj34n_IvKqfMcTBXnalkl6YSmi41sXQUHBm-E&usqp=CAU" />
                <div className="card-body">
                <h5 className="card-title">{productdetails.productName}</h5>
            <p className="card-text">{productdetails.price}</p >

                    </div >
            </div >
        
                <h2>productName:{productdetails.productName}</h2>
                <p>price:{productdetails.price}</p>
                <p>Available:{productdetails.isAvailable ? 'Yes' : 'No'}</p>
              {/*<div>
            <button type="button"className="btn btn-primary">Primary</button>
            <button type="button"className="btn btn-secondary">Secondary</button>
</div>*/}

        </>

    )
}
export default  ProductCategary