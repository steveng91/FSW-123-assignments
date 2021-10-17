import React from "react";
import '../App.css'
import CartCard from './CartCard'



const Cart = (props) => {
    const content = (
        <>
        <h1>Pokemon Requested</h1>
        <div className = {"shop-container"}>
            {props.cart.map((cartItem)=>(
                <CartCard
                key  = {cartItem.item.id}
                item = {cartItem.item}
                num  = {cartItem.amount}
                handleCartAdd = {props.handleCartAdd}
                />
            ))}
        </div>
        </>
    )
    return content
}

export default Cart