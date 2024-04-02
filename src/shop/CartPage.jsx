import React, { useEffect, useState } from 'react'
import PageHeader from "../components/PageHeader"
import { Link } from 'react-router-dom'
import delImgUrl from "../assets/images/shop/del.png"

const CartPage = () => {

    const [cartItems, setcartItems] = useState([])

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || []
        setcartItems(storedCartItems)
    }, [])

    // calculating the total price 
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity
    }

    //Increase the cart items
    const handleIncrease = (item) => {
        item.quantity += 1;
        setcartItems([...cartItems])

        localStorage.setItem("cart", JSON.stringify(cartItems))
    }

    //decrease the cart items
    const handleDecrease = (item) => {
        if (item.quantity >= 1) {
            item.quantity -= 1;
            setcartItems([...cartItems])

            localStorage.setItem("cart", JSON.stringify(cartItems))
        }
    }

    // function to remove items from cart
    const handelRemoveItem = (item) => {
        const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id)
        //update new cart
        setcartItems(updateCart)
        updateLocalStorage(updateCart)
    }

    //update local storage
    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }

    //car sub total
    const cartSubTotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item)
    }, 0)

    //order total
    const orderTotal = cartSubTotal


    return (
        <div>
            <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
            <div className="shop-cart padding-tb">
                <div className="container">
                    <div className="section-wrapper">

                        {/* cart top */}
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>Product</th>
                                        <th className='cat-price'>Price</th>
                                        <th className='cat-quantity'>Quantity</th>
                                        <th className='cat-toprice'>Totalt</th>
                                        <th className='cat-edit'>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems.map((item, index) => (
                                            <tr key={index}>
                                                <td className="product-item cat-product">
                                                    <div className="p-thumb">
                                                        <Link to="/shop"> <img src={item.img} alt='' /></Link>
                                                    </div>
                                                    <div className="p-content">
                                                        <Link to="/shop">{item.name}</Link>
                                                    </div>
                                                </td>

                                                <td className="cat-price">$ {item.price}</td>
                                                <td className="cat-quantity">
                                                    <div className="cart-plus-minus">
                                                        <div className="dec qtybutton" onClick={() => handleDecrease(item)}>-</div>
                                                        <input type='text' className='cart-plus-minus-box' name='qtybutton' value={item.quantity} />
                                                        <div className="inc qtybutton" onClick={() => handleIncrease(item)}>+</div>
                                                    </div>
                                                </td>
                                                <td className='cat-topprice'>
                                                    ${calculateTotalPrice(item)}
                                                </td>
                                                <td className="cat-edit">
                                                    <a href='#' onClick={() => handelRemoveItem(item)}>
                                                        <img src={delImgUrl} alt='' />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        {/* cart bottom */}
                        <div className="cart-bottom">
                            <div className="cart-checkout-box">
                                <form action="" className="coupon">
                                    <input type="text" placeholder='Coupon Code...' name='coupon' id='coupon' className="cart-page-input-text" />
                                    <input type='submit' value="Apply Coupon" />
                                </form>

                                <form action="" className="cart-checkout">
                                    <input type='submit' value="Update Cart.." />
                                    <div>CheckoutPage</div>
                                </form>
                            </div>

                            {/* shiping box */}
                            <div className="shiping-box">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="calculate-shiping">
                                            <h3>Calculate Shipping</h3>
                                            <div className="outline-select">
                                                <select>
                                                    <option value="pak">Pakistan</option>
                                                    <option value="bd">Bangladesh</option>
                                                    <option value="uk">United Kingdom</option>
                                                    <option value="ind">India</option>
                                                    <option value="np">Nepal</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>

                                            <div className="outline-select shipping-select">
                                                <select>
                                                    <option value="pak">Karachi</option>
                                                    <option value="bd">Dhaka</option>
                                                    <option value="uk">New York</option>
                                                    <option value="ind">New Delhi</option>
                                                    <option value="np">Nepal</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>
                                            <input type='text' name='postalCode' id='postalCode' placeholder='Postal Code/ZIP' className='cart-page-input-text' />
                                            <button type='submit'>Update Address</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="cart-overview">
                                            <h3>Cart Total</h3>
                                            <ul className="lab-ul">
                                                <li>
                                                    <span className='pull-left'> Cart Subtotal</span>
                                                    <p className='pull-right'>${cartSubTotal}</p>
                                                </li>

                                                <li>
                                                    <span className='pull-left'> Shipping and Handlings</span>
                                                    <p className='pull-right'>Free Shipping</p>
                                                </li>

                                                <li>
                                                    <span className='pull-left'>Order Total</span>
                                                    <p className='pull-right'>${orderTotal.toFixed(2)}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage