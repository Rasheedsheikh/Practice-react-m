import { Button, Card, Input, Modal, Upload } from 'antd'
import React, { useRef, useState } from 'react'
import './AdminDashboard.css'
import { useNavigate } from 'react-router-dom'
import CustomBreadcrumb from '../../CustomComponents/CustomBreadCrumb'
import { DeleteOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons'

const AdminDashboard = () => {

    const navigate = useNavigate();
    const fileInputRef = useRef(null);


    const [addModal, setAddModal] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [itemName, setItemName] = useState('');

    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Admin' } //  current page
    ];


    const handleUploadRef = () => {
        fileInputRef.current.click();
    }

    const handleViewOrders = (e) => {
        navigate(`/admin/${e}`)
    }

    const handleOpenAddModal = () => {
        setAddModal(true);
    }

    const handleCancelAddModal = () => {
        setAddModal(false);
    }

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
    }

    const handleDeleteFile = (index) => {
        setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    return (
        <>
            <Modal title='Add Modal' open={addModal} onCancel={handleCancelAddModal} >
                <p className='modalInputHeadings'>Item Name</p>
                <Input onChange={(e) => setItemName(e.target.value)} placeholder='Enter item name' className='modalInputs' />
                <p className='modalInputHeadings'>Item Image</p>
                <input type='file' id='actual-btn' hidden ref={fileInputRef} onChange={handleFileChange} multiple={false} />
                <div>
                    <div className='uploadBoxDiv' onClick={handleUploadRef}>
                        <div style={{ textAlign: 'center' }}>
                            <UploadOutlined className='uploadIconClass' />
                            <p>Upload image</p>
                        </div>
                    </div>
                    <div className="uploaded-files">
                        <ul>
                            {uploadedFiles.map((file, index) => (
                                <li key={index} className="file-item">
                                    <span>{file.name}</span> - <span>{(file.size / 1024).toFixed(2)} KB</span>
                                    <button onClick={() => handleDeleteFile(index)} className="delete-button">
                                        <DeleteOutlined className='deleteFileIcon' />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Modal>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className='headingAndAddItem'>
                <h2 className='contentHeading'>Dashboard</h2>
                <Button className='addItem' onClick={handleOpenAddModal} icon={<PlusOutlined />}>Add Item</Button>
            </div>
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