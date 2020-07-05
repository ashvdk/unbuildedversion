import React, { useState, useEffect } from 'react'
import styles from '../DesignStylesheets/ItemCard.module.css'
import Image from './Image'
import QuantityControlller from './QuantityControlller'

function ItemCard(props) {
    const [qty, setqty] = useState(0)
    useEffect(() => {
        let foundItem = props.cartItems.find(item => item.id==props.item.id) || []
        setqty(foundItem.cartQuantity)
    }, [props.cartItems])
    const addToCart = () => {
        props.addtocart(props.item)
    }
    const increaseCartQty =  () => {
        props.increaseQty(props.item);
    }
    const decreaseCartQty = () => {
        let decreasingQty = qty;
        decreasingQty -= 1;
        if(decreasingQty)
        {
            props.decreaseQty(props.item)
        }
        else
        {
            props.removefromcart(props.item);
        }
    }
    return (
        <div key={props.item.id} className={styles.itemcard}>
            <div className={styles.ItemImageHeight}>
                {/* <img src={props.item.imageUrl} style={{maxHeight: '200px'}}/> */}
                <Image src={props.item.imageUrl}/>
            </div>
            <div className={styles.ItemDescription}>
                <div className={styles.ItemDescriptionBrandName}>{props.item.brandName}</div>
                <div>{props.item.productName}</div>
            </div>
            <div className={styles.ItemOperation}>
                <div className={styles.ItemOperationQuantity}>{props.item.quantity}</div>
                <div className={styles.ItemOperationPrice}>
                    Rs {props.incart=="yes" ? props.item.price * props.item.cartQuantity : props.item.price}
                </div>
                <div className={styles.cartQty}>
                    {!qty ? <div>
                        <i className="fa fa-cart-plus" style={{fontSize: "23px",color: "#1667f2"}} onClick={addToCart}></i>
                    </div> : "" }
                    {qty ? <QuantityControlller qty={qty} decreaseCartQty={decreaseCartQty} increaseCartQty={increaseCartQty}/> : ""}
                </div>

            </div>
        </div>
    )
}

export default ItemCard
