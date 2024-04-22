import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from "../contexts/AuthProvider"
const title = "Register"
const socialTitle = "Login with Social Media"


const Signup = () => {

    const [errorMessage, setErrorMessage] = useState("")
    const { signUpWithGmail, createUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/login"

    const handleRegister = () => {
        signUpWithGmail().then((result) => {
            const user = result.user;
            navigate(from, { replacez: true })
        }).catch((error) => {
            const errMsg = error.message;
            setErrorMessage("Please enter valid email & password")
        })

    }

    const handleSignup = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        // console.log(email,password,confirmPassword)
        if (password !== confirmPassword) {
            setErrorMessage("Password doesn't match")
        } else {
            setErrorMessage("")
            createUser(email, password).then((userCredential) => {
                const user = userCredential.user
                alert("Account created successfully")
                navigate(from, { replacez: true })
            }).catch((error) => {
                console.log(error.message)
                alert(`${error.message}`)
            })
        }

    }
    return (
        <div className="login-section padding-tb section-bg">
            <div className="container">
                <div className="account-wrapper">
                    <h3 className="title">{title}</h3>
                    <form className='account-form' onSubmit={handleSignup}>
                        <div className="form-group">
                            <input type='name' name='name' id='name' placeholder='Full Name *' required />
                        </div>
                        <div className="form-group">
                            <input type='email' name='email' id='email' placeholder='Email Address *' required />
                        </div>
                        <div className="form-group">
                            <input type='password' name='password' id='password' placeholder='Password *' required />
                        </div>
                        <div className="form-group">
                            <input type='password' name='confirmPassword' id='confirmPassword' placeholder='Confirm Password *' required />
                        </div>
                        {/* showing error message */}
                        <div>
                            {
                                errorMessage && (
                                    < div className="error-message text-danger mb-1">
                                        {errorMessage}
                                    </div>
                                )
                            }
                        </div>

                        <div className="form-group">
                            <button className='d-block lab-btn'>
                                <span>Sign up</span>
                            </button>
                        </div>
                    </form>
                    {/* account bottom */}
                    <div className="account-bottom">
                        <span className='d-block cate pt-10'>
                            Already have an account?<Link to="/login">Log In</Link>
                        </span>
                        <span className="or">
                            <span>or</span>
                        </span>

                        {/* social icons */}
                        <h5 className="subtitle">Login With Social Media</h5>
                        <ul className="lab-ul social-icons justify-content-center">
                            <li>
                                <button className='github' onClick={handleRegister}><i className="icofont-github"></i></button>
                            </li>
                            <li>
                                <a href='/' className='facebook'><i className="icofont-facebook"></i></a>
                            </li>
                            <li>
                                <a href='/' className='twitter'><i className="icofont-twitter"></i></a>
                            </li>
                            <li>
                                <a href='/' className='linkedin'><i className="icofont-linkedin"></i></a>
                            </li>
                            <li>
                                <a href='/' className='instagram'><i className="icofont-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Signup