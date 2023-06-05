import React from 'react'
import { useState } from 'react';
import mainImg from '../images/illustration-sign-up-mobile.svg'
import deskMainImg from '../images/illustration-sign-up-desktop.svg';
import list from '../images/icon-list.svg';
import Confirmation from './Confirmation';
import '../styles/index.css'


const SignUpFrom = () => {

    const [isSubmit, setIsSubmit] = useState(false)
    const [isValid, setIsValid] = useState(true)
    const [email, setEmail] = useState('')

    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(email)

        setIsValid(isValidEmail)

        if (isValidEmail) {
            setIsSubmit(true)
        }
    }



    return (
        <>


            {isSubmit ? (
                <Confirmation
                    email={email}
                />
            )

                : (<div className="sign-up-wrapper">
                    <div className='image-wrapper'>
                        <img className='mobileImg' src={mainImg} alt="" aria-hidden="true"></img>
                        <img className='deskImg' src={deskMainImg} alt="" aria-hidden="true"></img>
                    </div>

                    <div className="bottom-wrapper">
                        <div className='message-wrapper'>
                            <h1>Stay updated!</h1>
                            <p>Join 60,000+ product managers receiving monthly updates on:</p>

                            <div className='list-wrapper'>
                                <p><img src={list}></img> Product discovery and building what matters</p>
                                <p><img src={list}></img> Measuring to ensure updates are a success</p>
                                <p><img src={list}></img> And much more!</p>
                            </div>
                        </div>

                        <form className="form-wrapper" onSubmit={handleSubmit}>
                            <div className="label-wrapper">
                                <label>Email address</label>
                                {!isValid && (
                                    <span className="msg">Valid email is required</span>
                                )}
                            </div>
                            <input type="text" placeholder="email@company.com" value={email} onChange={handleChange} className={isValid ? 'valid' : 'invalid'}></input>

                            <button>Subscribe to monthly newsletter</button>
                        </form>
                    </div>
                </div >
                )}
        </>
    )
}

export default SignUpFrom