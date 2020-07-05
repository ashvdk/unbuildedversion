import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Screens/Products';
import Cart from './Screens/Cart';
import { BrowserRouter, HashRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Menu from './Screens/Menu';
import Checkout from './Screens/Checkout';
import Footer from './Screens/Footer';

function App() {
  const [cartItems, setcartItems] = useState([]);

  const addToCart = (item) => {
    let cartitems = [...cartItems];
    cartitems.push({...item,cartQuantity: 1});
    setcartItems([...cartitems]);
  }
  const removeFromCart = (removeItem) => {
    let cartitems = [...cartItems];
    setcartItems([...cartitems.filter(item => item.id!=removeItem.id)]);
  }
  const increaseQty = (increaseItemQty) => {
    let cartitems = [...cartItems];
    let index = cartitems.findIndex(item => item.id==increaseItemQty.id);
    cartitems[index].cartQuantity = cartitems[index].cartQuantity + 1;
    setcartItems([...cartitems])
  }
  const decreaseQty = (decreaseItemQty) => {
    let cartitems = [...cartItems];
    let index = cartitems.findIndex(item => item.id==decreaseItemQty.id);
    cartitems[index].cartQuantity = cartitems[index].cartQuantity - 1;
    setcartItems([...cartitems])
  }
  console.log(cartItems)
  return (
    <div className="App"> 
      <HashRouter>
        <Switch>
          <div style={{width:"100%",height:"100%"}}>
            <div className="displayProperty">
              <Menu numberOfItems={cartItems}/>
              <Route exact path="/">
                <Products cartItems={cartItems} addtocart={addToCart} removefromcart={removeFromCart} increaseQty={increaseQty} decreaseQty={decreaseQty}/>
              </Route>
              <Route exact path="/cart">
                <Cart cartItems={cartItems} addtocart={addToCart} removefromcart={removeFromCart} increaseQty={increaseQty} decreaseQty={decreaseQty}/>
              </Route>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
            </div>
            <Footer />
          </div>
        </Switch>      
      </HashRouter>
    </div>
  );
}

export default App;
