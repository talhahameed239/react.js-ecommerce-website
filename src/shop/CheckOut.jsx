import React, { useState } from 'react'
import { Alert, Button, Modal } from 'react-bootstrap'
import Visa from "../assets/visa.png"
import Paypal from "../assets/paypal.png"
import "../components/Modal.css"
import { useLocation, useNavigate } from 'react-router-dom'

const CheckOut = () => {
    const [show, setShow] = useState(false)
    const [activeTab, setActiveTab] = useState("visa")

    // handle tab change
    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)


    // direct to home page
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    const handleOrderConfirm = () => {
        alert("Your order is placed successfully")
        localStorage.removeItem("cart")
        navigate(from, { replace: true })
    }





    return (
        <div className='modalCard'>
            <Button variant='primary' className='py-2' onClick={handleShow}>Proceed to Checkout</Button>

            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                className='modal fade'
                centered
            >
                <div className="modal-dialog">
                    <h5 className="px-3 mb-3">Select Your Payment Method</h5>
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="tabs mt-3">
                                <ul className='nav nav-tabs' id="myTab" role='tablist'>
                                    <li className='nav-item' role='presentation'>
                                        <a href="#visa" className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                                            id='visa-tab'
                                            data-toggle="tab"
                                            role='tab'
                                            aria-controls='visa'
                                            aria-selected={activeTab === "visa"}
                                            onClick={() => handleTabChange("visa")}
                                        >
                                            <img src={Visa} alt='' width="80" />
                                        </a>
                                    </li>
                                    <li className='nav-item' role='presentation'>
                                        <a href="#visa" className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
                                            id='paypal-tab'
                                            data-toggle="tab"
                                            role='tab'
                                            aria-controls='paypal'
                                            aria-selected={activeTab === "paypal"}
                                            onClick={() => handleTabChange("paypal")}
                                        >
                                            <img src={Paypal} alt='' width="60" />
                                        </a>
                                    </li>
                                </ul>
                                {/* content */}
                                <div className="tab-content" id='myTabContent'>
                                    {/* visa content */}
                                    <div
                                        className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                                        id='visa'
                                        role='tabpanel'
                                        aria-labelledby='visa-tab'
                                    >
                                        <div className="mt-3 mx-4">
                                            <div className="text-center">
                                                <h5>Credit card</h5>
                                            </div>
                                            <div className="form mt-3">
                                                <div className="inputbox">
                                                    <input type='text' name='name' id='name' className='form-control' required />
                                                    <span>Cardholder Name</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input type='text' min="1" max="999" name='number' id='number' className='form-control' required />
                                                    <span>Card Number </span><i className="fa fa-eye"></i>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <div className="inputbox">
                                                        <input type='text' min="1" max="999" name='number' id='number' className='form-control' required />
                                                        <span>Expiration Date</span>
                                                    </div>
                                                    <div className="inputbox">
                                                        <input type='text' min="1" max="999" name='number' id='number' className='form-control' required />
                                                        <span>CVV</span>
                                                    </div>
                                                </div>
                                                <div className="px-5 pay">
                                                    <Button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Order Now</Button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>




                                    {/* paypal content */}
                                    <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                                        id='paypal'
                                        role='tabpanel'
                                        aria-labelledby='paypal-tab'
                                    >
                                        <div className="mt-3 mx-4">
                                            <div className="text-center">
                                                <h5>Paypal Account Info</h5>
                                            </div>
                                            <div className="form mt-3">
                                                <div className="inputbox">
                                                    <input type='email' name='email' id='email' className='form-control' required />
                                                    <span>Email Name</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input type='text' name='name' id='name' className='form-control' required />
                                                    <span>Your Name</span>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <div className="inputbox">
                                                        <input type='text' name='number' id='number' className='form-control' required />
                                                        <span>Extra Info</span>
                                                    </div>
                                                    <div className="inputbox">
                                                        <input type='text' min="1" max="999" name='number' id='number' className='form-control' required />
                                                        <span></span>
                                                    </div>
                                                </div>
                                                <div className="px-5 pay">
                                                    <Button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Add Paypal</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* payment disclaimer */}
                                <p className='mt-3 px-4 p-Disclaimer'><em>Payment Dislcaimer:</em>In no event shall payment or partial payment by Owner for any material or service</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>
        </div>

    )
}

export default CheckOut