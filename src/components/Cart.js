import React, {useState,useEffect} from 'react'
import "../styles/Cart.css"

function Cart({cart,updateCart}){
    const [isOPen, setIsOpen]=useState(true)
    const total = cart.reduce(
        (acc,plantType)=> acc+plantType.amount*plantType.price,
        0
    )
    return isOPen? (
        <div className="pl-cart">
            <button className="pl-cart-button" onClick={()=>setIsOpen(false)}
            >Fermer
            </button>
            <h2>Pannier</h2>
            <ul>
                {cart.map(({name,price,amount},index)=>
                amount > 0 ?(
                    <li key={`${name}-${index}`}> {amount} {name} {price}€ </li> ):null
                )}
            </ul>
            <h3>Total:{total} €</h3>
            <button className='pl-cart-button-vider' onClick={()=>updateCart([])} >vider le panier</button>
        </div>
    ):(<span onClick={()=>setIsOpen(true)}>Ouvrir le pannier</span>);
}

export default Cart;