import React from 'react'
import { useState } from 'react';
import list from '../images/icon-list.svg';
import SignUpFrom from './SignUpFrom';
const Confirmation = ({ email }) => {

    const [isDismiss, setIsDismiss] = useState(false)

    const handleDismiss = () => {
        setIsDismiss(true);
    }

    return (
        <>
            {isDismiss ? (
                <SignUpFrom />
            ) : (
                <div className="success-wrapper">
                    <div className="thank-you-wrapper">
                        <img src={list} aria-hidden="true" alt=""></img>
                        <h1>Thanks for subscribing!</h1>
                        <p>A confirmation email has been seen to <span>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
                    </div>
                    <div className='btn-wrapper'>
                        <button onClick={handleDismiss}>Dismiss message</button>
                    </div>
                </div>
            )}

        </>
    )
}

export default Confirmation