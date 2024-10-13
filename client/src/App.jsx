import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import AboutPage from './Components/AboutPage'
import HomePage from './Components/HomePage'
import Products from './Components/Products';
import Cart from './Components/Cart';
import IndBigProduct from './Components/IndBigProduct';
import { useState } from 'react';
import TrackOrder from './Components/TrackOrder';

function App() {

// storing all product detail in below array, tried puttin as a state but it worked without it
let productArray = [{ProdName:"Chhole Rice",
                          ImgSRC:"https://cdn.uengage.io/uploads/28289/image-6JAJA6-1696400355.jpg",
                          UnitPrice:4,
                          TotalPrice:0,
                          setTotalPrice: function(p){
                            this.TotalPrice=p;
                          },
                          Desc:"Chhole Rice is a popular North Indian dish, combining spicy chickpea curry (chhole) with steamed rice. The chickpeas are simmered in a rich, flavorful gravy made with tomatoes, onions, garlic, and an array of aromatic spices like cumin, coriander, and garam masala. Paired with rice, this hearty and wholesome meal is loved for its robust flavors and satisfying texture. Often served with pickles and salad, it's a comforting and nutritious dish enjoyed across India.",
                          Quantity:0,
                          setQuantity: function(q){
                            this.Quantity=q;
                          }
                        },
                        {ProdName:"Pav Bhaji",
                          ImgSRC:"https://shwetainthekitchen.com/wp-content/uploads/2022/07/Pav-bhaji-500x500.jpg",
                          UnitPrice:5,
                          TotalPrice:0,
                          setTotalPrice: function(p){
                            this.TotalPrice=p;
                          },
                          Desc:"Pav Bhaji is a popular Indian street food originating from Mumbai, consisting of a spicy vegetable mash (bhaji) served with soft buttered bread rolls (pav). The bhaji is made from a mix of mashed vegetables like potatoes, peas, and tomatoes, cooked with a rich blend of spices and topped with a generous amount of butter. Garnished with chopped onions, coriander, and a squeeze of lemon, it's a flavorful and hearty dish enjoyed by people of all ages. Often paired with a side of pickles or yogurt, it's a comfort food favorite!",
                          Quantity:0,
                          setQuantity: function(q){
                            this.Quantity=q;
                          }
                        },
                        {ProdName:"Extra Pav",
                          ImgSRC:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWdUakSfDgvB3N7zqQxRwF_Tp-eKp4N00yw&s",
                          UnitPrice:1,
                          TotalPrice:0,
                          setTotalPrice: function(p){
                            this.TotalPrice=p;
                          },
                          Desc: "Please add extra Pav if you need",
                          Quantity:0,
                          setQuantity: function(q){
                            this.Quantity=q;
                          }
                        },
                        {ProdName:"Samosa Chat",
                          ImgSRC:"https://spicecravings.com/wp-content/uploads/2021/03/Samosa-Chaat-Featured-1.jpg",
                          UnitPrice:4,
                          TotalPrice:0,
                          setTotalPrice: function(p){
                            this.TotalPrice=p;
                          },
                          Desc: "Samosa Chaat is a delicious Indian street food that combines crispy samosas with a medley of flavorful toppings. The samosas, stuffed with spiced potatoes and peas, are crushed and topped with tangy tamarind chutney, spicy green chutney, yogurt, and a sprinkle of chaat masala. Garnished with fresh coriander, sev (crispy noodles), and pomegranate seeds, this dish offers a delightful mix of textures and flavors—sweet, spicy, and tangy in every bite. It's a popular snack enjoyed as a savory treat across India.",
                          Quantity:0,
                          setQuantity: function(q){
                            this.Quantity=q;
                          }
                        },
                        {ProdName:"Dal Bati",
                          ImgSRC:"https://static.toiimg.com/thumb/55130267.cms?imgsize=208968&width=800&height=800",
                          UnitPrice:6,
                          TotalPrice:0,
                          setTotalPrice: function(p){
                            this.TotalPrice=p;
                          },
                          Desc: "Himmatnagar-style dal bati is a hearty and flavorful dish known for its unique blend of spices that give the dal a rich, aromatic taste. The bati, made from whole wheat flour, is traditionally roasted to a perfect crisp and then drenched in ghee, complementing the savoury dal. This dish, a staple in dhabas near Himmatnagar, offers a delightful combination of textures and flavours that are both comforting and satisfying.",
                          Quantity:0,
                          setQuantity: function(q){
                            this.Quantity=q;
                          }
                        }];

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hetal's Home Kitchen</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/track-order">Track Order</Link> | <Link to="/about">About</Link> | <Link to="/cart">Cart</Link>
        </nav>
        <Routes>
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/track-order" element={<TrackOrder/>} />
          <Route path="/" element={<HomePage ProductArray={productArray}/>} />
          <Route path='/products' element={<Products ProductArray={productArray}/>} />
            <Route path='/products/chhole-rice' element={<IndBigProduct ProductArray={productArray[0]} />}/>
            <Route path='/products/pav-bhaji' element={<IndBigProduct ProductArray={productArray[1]}/>} />
            <Route path='/products/extra-pav' element={<IndBigProduct ProductArray={productArray[2]}/>} />
            <Route path='/products/samosa-chat' element={<IndBigProduct ProductArray={productArray[3]}/>} />
            <Route path='/products/dat-bati' element={<IndBigProduct ProductArray={productArray[4]}/>} />
          <Route path='/cart' element={<Cart ProductArray={productArray}/>} />
        </Routes>
      </div>
  </BrowserRouter>
  );
}

export default App
