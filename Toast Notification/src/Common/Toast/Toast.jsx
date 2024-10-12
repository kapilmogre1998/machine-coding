import React, { useEffect } from 'react';
import { TiTick } from "react-icons/ti";
import { MdError } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import './Toast.css'

const toastIcon = (icon) => {

    switch(icon){
        case 'SUCCESS':
            return <TiTick />
        case 'ERROR':
            return <MdError />
        case 'WARNING':
            return <IoIosWarning />
        default:
            return;
    }
}

const Toast = ({ id, type, message, delay, modifyList, bgClr, position }) => {

    const closeToast = (id) => modifyList(prev => prev.filter(item => item.id !== id))

    useEffect(() => {
        const timerId = setTimeout(() => {
            closeToast(id)
            clearTimeout(timerId)
        }, delay)

        return () => clearTimeout(timerId)
    }, [])

    return (
        <div className={`toast-msg ${position}`} style={{ backgroundColor: bgClr }} >
            <div className='icon' >{toastIcon(type)}</div>
            <div>{type} {id.substring(1, 7)}</div>
            <div>{message}</div>
            <div className='close-btn' onClick={() => closeToast(id)} >
                <RxCross2 />
            </div>
        </div>
    )
}

export default Toast