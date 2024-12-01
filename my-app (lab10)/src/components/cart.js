import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../redux/itemSlice";

const Cart = () => {
    const items = useSelector((state) => state.card.items);
    const dispatch = useDispatch()

    const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleIncrement = ( id, type, power ) => {
        dispatch(incrementQuantity({ id, type, power }))
    };
    const handleDecrement = ( id, type, power ) => {
        dispatch(decrementQuantity({ id, type, power }))
    };

    return (<div>
            <h1 className="title-shopping-cart">Shopping Cart</h1>
        <div>
            {items.map((laptop) => (
                <div className="item-container" key={`${laptop._id}-${laptop.type}-${laptop.power}`}>
                    <img className="item-img" src={laptop.img}/>
                    <h2 className="item-title">{laptop.title}</h2>
                    <div className="item-element">
                        <div className="selected-item">
                            <p>Тип процесору: {laptop.type}</p>
                            <p>Оперативна пам'ять: {laptop.power}</p>
                        </div>
                        <div>
                            <Button className="btn-minus" text="-" onClick={() => handleDecrement(laptop._id, laptop.type, laptop.power)}/>
                            <span>{laptop.quantity}</span>
                            <Button className="btn-plus" text="+" onClick={() => handleIncrement(laptop._id, laptop.type, laptop.power)}/>
                        </div>
                        <p className="item-price">{laptop.price * laptop.quantity} грн</p>
                    </div>
                </div>
            ))}
        </div>
        <div>
        <p className="txt-cart">Total amount: {totalAmount}</p>
        </div>
        <div className="buttons">
            <Link className="link" to="/catalog">
                <Button className="back-btn" text="Back to Catalog"/>
            </Link>
            <Button className="add-btn" text="Continue"/>
        </div>
    </div>)
}

export default Cart;