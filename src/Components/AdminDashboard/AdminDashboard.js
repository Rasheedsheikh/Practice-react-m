import { Button, Card } from 'antd'
import React from 'react'
import './AdminDashboard.css'

const AdminDashboard = () => {
    return (
        <>
            <h2 className='contentHeading'>Dashboard</h2>
            <div className='dashboardContents'>
                <Card className='dashboardContentCard'>
                    <div className='headerAndImage'>
                        <h3>Washing Machine</h3>
                        <img src='/Assets/washing-machine.png' alt='washing machine' width={70} height={70} />
                    </div>
                    <div className='orderListDiv'>
                        <p>Total orders <b>14</b></p>
                        <p>Pending orders <b>10</b></p>
                    </div>
                    <Button className='serviceViewBtn'>View</Button>
                </Card>
                <Card className='dashboardContentCard'>
                    <div className='headerAndImage'>
                        <h3>Refrigerator</h3>
                        <img src='/Assets/smart-fridge.png' alt='smart-fridge' width={70} height={70} />
                    </div>
                    <div className='orderListDiv'>
                        <p>Total orders <b>14</b></p>
                        <p>Pending orders <b>10</b></p>
                    </div>
                    <Button className='serviceViewBtn'>View</Button>
                </Card>
                <Card className='dashboardContentCard'>
                    <div className='headerAndImage'>
                        <h3>Air Conditioner</h3>
                        <img src='/Assets/air-conditioner.png' alt='air-conditioner' width={70} height={70} />
                    </div>
                    <div className='orderListDiv'>
                        <p>Total orders <b>14</b></p>
                        <p>Pending orders <b>10</b></p>
                    </div>
                    <Button className='serviceViewBtn'>View</Button>
                </Card>
                {/* <Card className='dashboardContentCard'>
                    <div className='headerAndImage'>
                        <h3>Air Conditioner</h3>
                        <img src='/Assets/washing-machine.png' alt='washing machine' width={70} height={70} />
                    </div>
                    <div className='orderListDiv'>
                    <p>Total orders <b>14</b></p>
                        <p>Pending orders <b>10</b></p>
                    </div>
                    <Button className='serviceViewBtn'>View</Button>
                </Card> */}
            </div>
        </>
    )
}

export default AdminDashboard