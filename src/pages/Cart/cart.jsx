import React, { useState } from 'react'
import styles from '../../css/cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCart, incrementCart } from '../../app/features/cartSlice';
import { useNavigate } from 'react-router-dom';


function Cart({selectedProduct, setselectedProduct}) {
    const {title, price, immge} = selectedProduct;
  const [count, setCount] = useState(1);
  const [itemAdded, setItemAdded] = useState([]);
  const [itemRemoved, setItemRemoved] = useState([]);
  const [openPanel, setOpenPanel] = useState(false);

  const {cart:cart, tempCart} = useSelector((state) => state.cart);
//   const {quantity: cartValue} = useSelector((state) => state.cart);
//   let {totalPrice} = useSelector((state) => state.cart);
  let totalPrice = 0;

    const navigate = useNavigate();

  const dispatch = useDispatch();

    function addProduct(item) {
        // let itemAdded = [];
        // itemAdded.push(item);
        dispatch(incrementCart(item));
        // const addedProduct = selectedProduct.filter((item)=>{
        //     return item.id === id;
        // });
        // setItemAdded((prevState) => [...prevState, addedProduct].length);
    }
    function removeProduct(item) {
        // let itemRemoved = [];
        // itemRemoved.push(item);
        dispatch(decrementCart(item));
        // const arr = selectedProduct.filter((item)=>{
        //     return item.id !== id;
        // });
        // setItemRemoved(arr.length);
    }
    return (    
        <div className={styles.cart_slide}>
            <div className={styles.cart_style}>
                {
                        cart.length > 0 ? cart.map(prod => {
                            const producPrice = prod.price * prod.quantity;
                            totalPrice += producPrice;
                            
                            return (
                                
                                <>
                                    <div key={prod.id} style={{width: '100%', textAlign: 'center'}}>
                                        <img style={{width: '100px'}} src={prod.images[0]}/>
                                        <div>{prod.title}</div><br/>
                                        <div>${prod.price * prod.quantity}</div><br/> 
                                        <div>
                                            <button onClick={() => removeProduct(prod)}>-</button>&nbsp;&nbsp;
                                                {prod.quantity}
                                            &nbsp;&nbsp; <button onClick={() => addProduct(prod)}>+</button>
                                        </div><br/>
                                        <hr/>
                                    </div>
                                </>
                            )
                        }) : 
                        0
                }
                {
                    <div style={{width: '100%', textAlign: 'center'}}>
                        <br/><br/>
                        <b style={{fontSize: '18px'}}>TOTAL PRICE: ${totalPrice.toFixed(2) } </b>
                        <br/><br/>
                        <button className={styles.continue_shopping_btn} onClick={() => navigate('/home')}>CONTINUE SHOPPING</button>
                    </div>
                }
                
            </div>
        </div>
  )
}

export default Cart 
