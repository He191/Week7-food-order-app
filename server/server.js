import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL
})


// your routes will go here...
app.listen(8080, () => {
  console.log("Server is listening on port 8080...");
});

app.get("/", (req, res) => {
    res.json({ message: "Hello, World!" });
  });

app.get("/track", async (req, res) => {
    const { orderid } = req.query;
    // console.log(orderid);

    const queryResponse = await db.query(`SELECT customer.firstname,
                                                customer.lastname,
                                                customer.email,
                                                customerorder.orderid,
                                                customerorder.customerid,
                                                customerorder.ordertotal,
                                                orderitem.orderitemid,
                                                orderitem.itemname,
                                                orderitem.quantity,
                                                orderitem.totalprice,
                                                orderitem.itemprice,
                                                orderitem.orderid
                                            FROM customer
                                            JOIN customerorder ON customer.customerid=customerorder.customerid
                                            JOIN orderitem ON customerorder.orderid = orderitem.orderid
                                            WHERE customerorder.orderid = ${orderid}`);
    res.json(queryResponse.rows);
}
);

app.post("/cart", async (req, res) => {
    // console.log(req.body.Props.ProductArray);
    // console.log(req.body.formValues);

    const ordertotal = req.body.Props.ProductArray[0].TotalPrice + req.body.Props.ProductArray[1].TotalPrice
                        +req.body.Props.ProductArray[2].TotalPrice +req.body.Props.ProductArray[3].TotalPrice + req.body.Props.ProductArray[4].TotalPrice;

    // console.log(ordertotal);
    
    const customerInsert = await db.query(`INSERT INTO customer (firstname, lastname, email) VALUES ($1, $2, $3) RETURNING *`,
            [req.body.formValues.firstName, req.body.formValues.lastName, req.body.formValues.email]);

    // console.log(customerInsert.rows[0].customerid);

    const customerorderInsert = await db.query(`INSERT INTO customerorder (customerid, ordertotal) VALUES ($1, $2) RETURNING *`,
        [customerInsert.rows[0].customerid, ordertotal]);

    // console.log(customerorderInsert.rows[0].orderid);

    req.body.Props.ProductArray.forEach(function (item, index) {
        
        if(item.Quantity>0){
            db.query(`INSERT INTO orderitem (itemname, itemprice, quantity, totalprice, orderid) 
                VALUES ($1, $2, $3, $4, $5) RETURNING *`,
                [item.ProdName, 
                    item.UnitPrice,
                    item.Quantity,
                    item.TotalPrice,
                customerorderInsert.rows[0].orderid]);
        }
      });

      res.json(customerorderInsert.rows[0].orderid);
    
  });