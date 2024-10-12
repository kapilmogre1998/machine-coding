import React, { useState } from 'react'
import Toast from '../../Common/Toast/Toast';
import { v4 as uuid } from 'uuid';
import './Notification.css'
import { TOAST_MSG } from './Constant';

const ToastNotification = () => {
    const [notificationList, setNotificationList] = useState([]);
    const position = 'top-right'

    const handleClickOnButton = (type) => {
        setNotificationList(prev => ([
            ...prev,
            {
                id: uuid(),
                ...TOAST_MSG[type]
            }
        ]))
    }

    return (
        <div className='toast-notification-container' >
            <div className='buttons' >
                <button onClick={() => handleClickOnButton('SUCCESS')} >Success</button>
                <button onClick={() => handleClickOnButton('ERROR')} >Error</button>
                <button onClick={() => handleClickOnButton('WARNING')} >Warning</button>
            </div>

            <div className={`${position} notification-list`}>
                {
                    notificationList.length ? (
                        notificationList.map((item) => (
                            <Toast key={item.id} {...item} modifyList={setNotificationList} position={position} />
                        ))
                    ) : null
                }
            </div>
        </div>
    )
}

export default ToastNotification