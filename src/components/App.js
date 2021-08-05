import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import '../styles/Layout.css'
import { useState, useEffect } from "react";
import Footer from "./Footer";
function App() {
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
  //const [cart,updateCart]=useState([])
  return (
    <div>
      <Banner />
      <div className='pc-layout-inner '>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} /> 
      </div>
      <Footer/>
    </div>
  );
}

export default App;
