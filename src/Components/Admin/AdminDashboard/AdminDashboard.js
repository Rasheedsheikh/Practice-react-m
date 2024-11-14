import { Button, Card } from 'antd'
import React from 'react'
import './AdminDashboard.css'
import { useNavigate } from 'react-router-dom'
import CustomBreadcrumb from '../../CustomComponents/CustomBreadCrumb'

const AdminDashboard = () => {

    const navigate = useNavigate();

    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Admin' } //  current page
    ];

    const handleViewOrders = (e) => {
        navigate(`/admin/${e}`)
    }

    return (
        <>
            <CustomBreadcrumb items={breadcrumbItems} />
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
                    <Button onClick={() => handleViewOrders('1')} className='serviceViewBtn'>View orders</Button>
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
                    <Button onClick={() => handleViewOrders('2')} className='serviceViewBtn'>View orders</Button>
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
                    <Button onClick={() => handleViewOrders('3')} className='serviceViewBtn'>View orders</Button>
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
                    <Button className='serviceViewBtn'>View orders</Button>
                </Card> */}
            </div>
        </>
    )
}

export default AdminDashboard