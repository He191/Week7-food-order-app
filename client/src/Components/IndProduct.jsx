import './IndProduct.css';

export default function IndProduct(Props){
    return (
    <div id="ind-prd">
        <img src={Props.ImgSRC} style={{width:200,height:200}}/>
        <h2>{Props.ProdName}  £{Props.UnitPrice}</h2>
    </div>);
}