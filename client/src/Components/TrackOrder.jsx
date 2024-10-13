import { useState ,useEffect } from "react";

export default function TrackOrder(){
    
    const [orderid, setOrderID] = useState('');
    const [queryData, setQueryData] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [grandTotal, setGrandTotal] = useState(null);
    const [noDataError, setNoDataError] = useState(null);
      
      async function fetchData(oid) {
      
      try{  
        //fetch data async await
        const response = await fetch(`http://localhost:8080/track?orderid=${oid}`);
        //turn the data into json
        const data = await response.json();
      
        if(data.length>0){
              setQueryData(data);
              setFirstName(data[0].firstname);
              setGrandTotal(data[0].ordertotal);
              setNoDataError(null);
        }
        else {setNoDataError(`Order ID ${orderid} doesn't exist, please check!`);}

      } catch (error) {
        console.error('Error fetching data:', error);
      }

      }

      async function handleSubmit(event) {
        event.preventDefault();
        console.log("The order ID is", orderid);
        
        const op = await fetchData(orderid);
      }
    
      function handleInputChange(event) {
        setOrderID(event.target.value);
      }

    return (<>
    { !firstName && <h2>Please enter your Order ID to track order</h2> }
    <div id="track-form">
          {!firstName &&
          <form onSubmit={handleSubmit}>
              <label htmlFor="orderid">Order ID</label>
              <input type="text" id="orderid" name="orderid"
              value={orderid} onChange={handleInputChange} // connect the handler to the onChange event
              />
              <button type="submit">Track Now</button>
          </form>
          }
          {firstName && <h2>Hello {firstName}, please check your order details below</h2>}
          <ul>
            {queryData && queryData.map((item) => (
              <li key={item.itemname}>{item.quantity} {item.itemname} for £{item.itemprice} each. Total = £{item.totalprice}</li>
            ))}
          </ul>
          {grandTotal && <h2>Order Id : {orderid} Grand Total = £{grandTotal}</h2>}
          {noDataError && <h2>{noDataError}</h2>}
      </div>
    </>);
}