import React, { useEffect, useRef, useState } from 'react'
import './LoginOTP.css';

const VERIFY_OTP = '1234'

const LoginOTP = ({ otpCount = 4 }) => {
    const inputRefs = useRef({})
    const [inputValues, setInputValues] = useState(new Array(otpCount).fill(''))

    const onInputChange = (e, inputIndex) => {
        const { value } = e.target;
        setInputValues(prevState => prevState.map((val, id) => id === inputIndex ? value : val))
        if (inputIndex !== otpCount - 1 && inputIndex >= 0) {
            inputRefs.current[inputIndex + 1].focus();
        }
    }

    useEffect(() => {
        inputRefs.current[0].focus();
    }, [])

    const keyDown = (e, index) => {
        if (e.keyCode === 8) { // backspace
            e.preventDefault();
            if (index !== 0) {
                inputRefs.current[index - 1].focus();
            }
            setInputValues(prevState => prevState.map((val, id) => id === index ? '' : val))
        }
    }

    const handleSubmit = () => {
        if (inputValues.join('') === VERIFY_OTP) {
            alert('Otp is verified Successfully')
        } else {
            alert('Invalid OTP')
        }
    }

    return (
        <>
            <div className='login-otp-container' >
                {new Array(otpCount).fill(0).map((_, index) => (
                    <input ref={(el) => inputRefs.current[index] = el} key={index} maxLength={1} type="text" value={inputValues[index]} onChange={(event) => onInputChange(event, index)} onKeyDown={(e) => keyDown(e, index)} />
                ))}
            </div>
            <button className='submit-btn' onClick={handleSubmit} >Submit</button>
        </>
    )
}

export default LoginOTP