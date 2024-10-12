import React, { useState } from 'react'
import Toast from '../../Common/Toast/Toast';
import { v4 as uuid } from 'uuid';
import './Notification.css'
import { TOAST_MSG } from './Constant';

const ToastNotification = () => {
    const [notificationList, setNotificationList] = useState([]);
    const [toastPosition, setToastPosition] = useState('right-top');

    const handleClickOnButton = (type) => {
        setNotificationList(prev => ([
            ...prev,
            {
                id: uuid(),
                ...TOAST_MSG[type]
            }
        ]))
    }

    const handleChangeToastPos = (e) => {
        setToastPosition(e.target.value)
    }

    return (
        <div className='toast-notification-container' >
            <div className='buttons' >
                <button onClick={() => handleClickOnButton('SUCCESS')} >Success</button>
                <button onClick={() => handleClickOnButton('ERROR')} >Error</button>
                <button onClick={() => handleClickOnButton('WARNING')} >Warning</button>
            </div>

            <div className={`notification-list ${toastPosition}`}>
                {
                    notificationList.length ? (
                        notificationList.map((item) => (
                            <Toast key={item.id} {...item} modifyList={setNotificationList} position={toastPosition} />
                        ))
                    ) : null
                }
            </div>
            <div className='select-toast-position' >
                <select name="select-toast" id="select-toast" onChange={handleChangeToastPos} >
                    <option value="right-top">Right Top</option>
                    <option value="right-bottom">Right Bottom</option>
                </select>
            </div>
        </div>
    )
}

export default ToastNotification