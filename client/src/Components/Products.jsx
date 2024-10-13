import IndProduct from "./IndProduct";
import './Products.css';
import { Link } from 'react-router-dom'

export default function Products(Props){
    return (
    <div id="products">
        <Link to="/products/chhole-rice">
            <IndProduct ProdName={Props.ProductArray[0].ProdName} ImgSRC={Props.ProductArray[0].ImgSRC} UnitPrice={Props.ProductArray[0].UnitPrice} />
        </Link>
        <Link to="/products/pav-bhaji">
            <IndProduct ProdName={Props.ProductArray[1].ProdName} ImgSRC={Props.ProductArray[1].ImgSRC} UnitPrice={Props.ProductArray[1].UnitPrice} />
        </Link>
        <Link to="/products/extra-pav">
            <IndProduct ProdName={Props.ProductArray[2].ProdName} ImgSRC={Props.ProductArray[2].ImgSRC} UnitPrice={Props.ProductArray[2].UnitPrice} />
        </Link>
        <Link to="/products/samosa-chat">
            <IndProduct ProdName={Props.ProductArray[3].ProdName} ImgSRC={Props.ProductArray[3].ImgSRC} UnitPrice={Props.ProductArray[3].UnitPrice} />
        </Link>
        <Link to="/products/dat-bati">
            <IndProduct ProdName={Props.ProductArray[4].ProdName} ImgSRC={Props.ProductArray[4].ImgSRC} UnitPrice={Props.ProductArray[4].UnitPrice} />
        </Link>
    </ div>);
}