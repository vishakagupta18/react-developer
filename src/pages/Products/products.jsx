import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../css/Products.module.css';
import Cart from '../Cart/cart';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTocartList } from '../../app/features/cartSlice';
import { showProducts } from '../../app/features/productSlice';

function Products() {
    const [product, setProduct] = useState([]);
    const [selectedProduct, setselectedProduct] = useState([]);
    const [openPanel, setOpenPanel] = useState(false);
    let catList;

    const dispatch = useDispatch();
    const {product:products} = useSelector((state) => {
        return state.product
        
    });
     const {cart:cart} = useSelector((state) => {
        return state.cart
    });

    useEffect(()=>{
        getProducts();   
    },[])

    let getProducts = async () => {
       await axios.get("https://dummyjson.com/products")
        .then(res=> {
            // setProduct(res.data.products);
            dispatch(showProducts(res.data.products));
        })
        .catch(err => {
            console.log(err)
        })
    };

    catList = Array.from(new Set(cart?.map((item, i) => item.category ))); 

    let selectedCategory;
    let prodList;
    let newProdList = [];
    if(products.length) {
        prodList = products.map((item, i) => {
            selectedCategory = catList.find(x => {
                if( x === item.category) {
                    newProdList.push({"category": item.category, "products": {"image": item.images[0], "title": item.title}});
                }
                
            });
            
            return <div key={i} className={`flex flex-col justify-center bg-gray-100 ${styles.prod_list}`}>
                <div className={`${styles.product_card} w-[1200px]`} >
                    <img className={styles.prod_image_style} src={item.images[0]} /><br/>
                    <div className={styles.category_prod_style} key={i}>{item.title}</div>
                    <div className={styles.prod_price}>${item.price}</div>
                    <button className={styles.addToCart_btn} onClick={() => showCartProduct(item)}>Add to Cart</button>
                </div>
            </div>
        });
    }
    let showCartProduct = (item) => {
        // setselectedProduct([...selectedProduct, item]);
        dispatch(addTocartList(item));
        // this.state.cart
    }

  return (
   

    <>
        <div className={styles.product_nav}>
            <div className={styles.prod_heading}>Products</div>
            <div className={styles.prod_heading_right} onClick={() => setOpenPanel(true)}>
                Cart
                <span style={{marginLeft: "5px", padding: "5px", backgroundColor: "#e8c1c1", borderRadius: "4px"}}>{cart.length ? cart.length : 0 }</span>
            </div>  
            <div className={styles.prod_category_panel}>
                    {
                        prodList
                    }
            </div>
            {
                
            }
            <SlidingPanel
                
                type={'right'}
                isOpen={openPanel}
                size={30}
            >
                
                <div className={styles.panel_style}>
                    <button className={styles.align_cls_btn} onClick={() => setOpenPanel(false)}>X</button>
                    <h2>{cart.length } items in my cart. </h2>
                    <Cart selectedProduct={cart} setselectedProduct={setselectedProduct}></Cart>
                </div>
            </SlidingPanel>
        </div>
    </>
    
  )

  
}

export default Products

