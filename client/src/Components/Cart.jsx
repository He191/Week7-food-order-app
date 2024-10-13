import './Cart.css';
import { useEffect, useState } from "react";

export default function Cart(Props){
    
    const [orderPlaced, setOrderPlaced] = useState(0);
    const [queryData, setQueryData] = useState(null);

    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
      });
      
      async function handleSubmit(event) {
        event.preventDefault();
        // console.log("The form values are", formValues);
        
        try {
          const response = await fetch("https://week7-food-order-app.onrender.com/cart", {
            method: "POST", // This is where we set the POST HTTP verb
            headers: {
                "Content-Type": "application/json", // This tells the server we're sending stringified JSON data
            },
            body: JSON.stringify({ Props , formValues }),
            });

          const data = await response.json();
          // console.log(data);
          setQueryData(data);

         setOrderPlaced(1);
        
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    
      function handleInputChange(event) {
        setFormValues({
          ...formValues, // the spread operator will add all existing values
          [event.target.name]: event.target.value, // then we add the new value using the form field "name" attribute and the value
        });
      }

    return (
    <div id="cart-master">
    <div id="cart">
        {orderPlaced===0 ? <h2>Yummy dishes in the cart</h2> : <h2> Order Placed Successfully!</h2>}
        
        {Props.ProductArray[0].Quantity+Props.ProductArray[1].Quantity
            +Props.ProductArray[2].Quantity+Props.ProductArray[3].Quantity
            +Props.ProductArray[4].Quantity === 0 ? <h2>Your cart is empty</h2> : null}

        {Props.ProductArray[0].Quantity>0 ? <h2>Chhole Rice £{Props.ProductArray[0].UnitPrice} Quantity: {Props.ProductArray[0].Quantity} Total: £{Props.ProductArray[0].TotalPrice}</h2> : null }
        {Props.ProductArray[1].Quantity>0 ? <h2>Pav Bhaji £{Props.ProductArray[1].UnitPrice} Quantity: {Props.ProductArray[1].Quantity} Total: £{Props.ProductArray[1].TotalPrice}</h2> : null }
        {Props.ProductArray[2].Quantity>0 ? <h2>Extra Pav £{Props.ProductArray[2].UnitPrice} Quantity: {Props.ProductArray[2].Quantity} Total: £{Props.ProductArray[2].TotalPrice}</h2> : null }
        {Props.ProductArray[3].Quantity>0 ? <h2>Samosa Chat £{Props.ProductArray[3].UnitPrice} Quantity: {Props.ProductArray[3].Quantity} Total: £{Props.ProductArray[3].TotalPrice}</h2> : null }
        {Props.ProductArray[4].Quantity>0 ? <h2>Dal Bati £{Props.ProductArray[4].UnitPrice} Quantity: {Props.ProductArray[4].Quantity} Total: £{Props.ProductArray[4].TotalPrice}</h2> : null }
        
        {Props.ProductArray[0].Quantity+Props.ProductArray[1].Quantity
            +Props.ProductArray[2].Quantity+Props.ProductArray[3].Quantity
            +Props.ProductArray[4].Quantity > 0 ? <h2>Your order total is: £{Props.ProductArray[0].TotalPrice + Props.ProductArray[1].TotalPrice
                                                                                +Props.ProductArray[2].TotalPrice + Props.ProductArray[3].TotalPrice
                                                                                +Props.ProductArray[4].TotalPrice}</h2> : null}

        {queryData &&<h2>Order placed Successfully, please note your Order ID : {queryData} , for tracking!</h2>}
    </div>
    {orderPlaced===0 ? 
      <div id="user-form">
          <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName"
              value={formValues.firstName} onChange={handleInputChange} // connect the handler to the onChange event
              />
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName"
              value={formValues.lastName} onChange={handleInputChange} // connect the handler to the onChange event
              />
              <label htmlFor="email">E mail</label>
              <input type="email" id="email" name="email"
              value={formValues.email} onChange={handleInputChange} // connect the handler to the onChange event
              />
              <button type="submit">Order</button>
          </form>
      </div>
      : 
      null 
      }
    </div>);
}