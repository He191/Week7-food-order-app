import { Link } from "react-router-dom";
import IndProduct from "./IndProduct";
import './HomePage.css';

export default function HomePage(Props){

    return (
        <>
        <p>Dal Bati and Pav Bhaji are freshly prepared from high-quality raw vegetables and grocery products. Please place your orders as early as possible.</p>
        <div id="home-page">
            <Link to="/products/chhole-rice">
                <IndProduct ProdName={Props.ProductArray[0].ProdName} ImgSRC={Props.ProductArray[0].ImgSRC} UnitPrice={Props.ProductArray[0].UnitPrice} />
            </Link>
            <Link to="/products/pav-bhaji">
                <IndProduct ProdName={Props.ProductArray[1].ProdName} ImgSRC={Props.ProductArray[1].ImgSRC} UnitPrice={Props.ProductArray[1].UnitPrice} />
            </Link>
        </div>
        </>
    );
}