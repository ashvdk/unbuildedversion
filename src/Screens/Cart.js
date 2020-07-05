import React, { useState } from 'react'
import styles from '../DesignStylesheets/Cart.module.css'
import ItemCard from '../Components/ItemCard'
import { Link } from 'react-router-dom'
import Modal from '../Modal'

function Cart(props) {
    const [modalOpen, setmodalOpen] = useState(false)
    const showAllItems = () => {
        return props.cartItems.map(item => <ItemCard incart="yes" cartItems={props.cartItems} decreaseQty={props.decreaseQty} item={item} removefromcart={props.removefromcart} increaseQty={props.increaseQty} addtocart={props.addtocart}/>)
    }
    const calculateSubTotal = () => {
        let subTotal = 0
        props.cartItems.map(item => {
            let price = Number(item.price) * item.cartQuantity
            subTotal = subTotal + price;
        })
        return subTotal;
    }
    const checkout = () => {
        setmodalOpen(!modalOpen);
    }
    const billingDetails = () => {
        return (
            <div className={styles.billingDetailsBox}>
                <div className={styles.billingDetailsBoxHeading}>Billing Details</div>
                <table style={{width: "100%"}}>
                    <tr>
                        <td>Sub Total</td>
                        <td>Rs {calculateSubTotal()}</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>Rs 30</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>Rs 30</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>Rs {calculateSubTotal() + 30 + 30}</td>
                    </tr>
                </table>
                <div className={styles.checkoutButton} onClick={checkout}>
                    CHECKOUT
                </div>
            </div>
        )
    }
    return (
        <div className={styles.dashBoardContent}>
            <div style={{width: "80%",padding: "7% 0%"}}>
                <div className={styles.orderHeading}>ORDER</div>
                <br />
                <div className={styles.orderDetails}>
                    <div className={styles.cartItems}>
                        {!props.cartItems.length ? "No Items in cart" : showAllItems()}
                    </div>
                    <div className={styles.billingArea}>
                        {!props.cartItems.length ? "" : billingDetails()}
                    </div>
                </div>
            </div>
            {modalOpen ? <Modal checkout={checkout} totalAmount={calculateSubTotal() + 30 + 30}/> : ""}
        </div>
    )
}

export default Cart
