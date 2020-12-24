import React, { useEffect, useState } from 'react'
import ItemCard from '../Components/ItemCard';
import styles from '../DesignStylesheets/Products.module.css'
import axios from 'axios'
import { productData } from '../assets/productData';

function Products(props) {   
    console.log(productData);
    const [allItems, setitems] = useState([]);
    const getItems = async () => {
        const productsList = new Promise((res,rej) => {
            setTimeout(()=>res(productData),3000);
        });
        productsList.then(Response => setitems([...Response]));
    }
    const displayAllItems = () => {
        if(allItems.length)
        {
            return allItems.map(item => {
                return (
                    <ItemCard key={item.id} incart="no" cartItems={props.cartItems} decreaseQty={props.decreaseQty} item={item} removefromcart={props.removefromcart} increaseQty={props.increaseQty} addtocart={props.addtocart}/>
                )
            })
        }
        else
        {
            return (
                <div className={styles.spinner}>
                    <i class="fa fa-circle-o-notch fa-spin" style={{fontSize:"40px"}}></i>
                </div>
            )
        }
    }
    useEffect(() => {
        getItems();
    }, [])
    return (
        <div className={styles.dashBoardContent}>
            <div className={styles.displayItems}>
                {displayAllItems()}
            </div>
        </div>
    )
}

export default Products
