import React from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import styles from '../DesignStylesheets/Menu.module.css'

function Menu(props) {
    return (
        <div className={styles.navigationBar}>
            <div className={styles.sidebarElements}>
                <Link to="/"><i className="fa fa-server" style={{fontSize:"20px"}}></i></Link>
            </div>
            <div className={styles.sidebarElements}>
                <Link to="/cart"><i className="fa fa-cart-arrow-down" style={{fontSize:"20px"}}></i></Link><sup className={styles.quantity}>{props.numberOfItems.length}</sup>
            </div>
        </div>
    )
}

export default Menu
