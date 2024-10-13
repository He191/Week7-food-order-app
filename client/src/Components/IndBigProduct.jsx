import { useState } from 'react';
import './IndBigProduct.css';

export default function IndBigProduct(Props){

    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(null);

    function handleSubmit(event){
        event.preventDefault();
        Props.ProductArray.setQuantity(quantity);
        Props.ProductArray.setTotalPrice(quantity*Props.ProductArray.UnitPrice);
        setAddedToCart(1);
    }

    // handle form input field value being changed by user
    function handleInputChange(event) {
        setQuantity(event.target.value);
    }

    return (
        <div id="ind-big-prd">
            <img src={Props.ProductArray.ImgSRC} style={{width:500,height:500}}/>
            <div id="prd-text">
                <h2>{Props.ProductArray.ProdName}  £{Props.ProductArray.UnitPrice}</h2>
                <p>{Props.ProductArray.Desc}</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="quantity">QUANTITY</label>
                    <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="0" max="9"
                    value={quantity}
                    onChange={handleInputChange} // connect the handler to the onChange event
                    />
                    <button type="submit">Add to Cart</button>
                </form>
                {addedToCart && <h2>Added to Cart Successfully!</h2>}
            </div>
        </div>);
}