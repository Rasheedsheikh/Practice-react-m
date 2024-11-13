import { Button, Card } from 'antd'
import React from 'react'
import './AdminDashboard.css'

const AdminDashboard = () => {
    return (
        <>
            <h2 className='contentHeading'>Dashboard</h2>
            <div className='dashboardContents'>
                <Card style={{ width: '400px' }}>
                    <div className='headerAndImage'>
                        <h3>Washing Machine</h3>
                        <img src='/Assets/washing-machine.png' alt='washing machine' width={70} height={70} />
                    </div>
                    <Button>View</Button>
                </Card>
            </div>
        </>
    )
}

export default AdminDashboard