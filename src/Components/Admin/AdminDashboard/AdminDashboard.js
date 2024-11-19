import { Button, Card, Input, Modal, Upload } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import './AdminDashboard.css'
import { useNavigate } from 'react-router-dom'
import CustomBreadcrumb from '../../CustomComponents/CustomBreadCrumb'
import { DeleteOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons'
import axios from 'axios'
import { BaseUrl } from '../../Constants/Constant'
import NotificationProvider from '../../CustomComponents/CustomNotificationProvider'

const AdminDashboard = () => {

    const navigate = useNavigate();
    const fileInputRef = useRef(null);


    const [addModal, setAddModal] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [itemName, setItemName] = useState('');
    const [modalBtnLoading, setModalBtnLoading] = useState(false);
    const [serviceItems, setServiceItems] = useState([]);

    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Admin' } //  current page
    ];  


    useEffect(() => {
        getAllServiceItems();
    }, [])


    const createServiceItem = () => {
        if (itemName != '') {
            setModalBtnLoading(true);
            let body = {
                itemName: itemName,
                itemImg: null
            }
            axios.post(`${BaseUrl}/service-items/createServiceItem`, body)
                .then((res) => {
                    if (res.data.statuscode === 200) {
                        NotificationProvider.showSuccess('Success!', 'Item created successfully!')
                    } else {
                        NotificationProvider.showError('Oops!', 'Please try after some time.')
                    }
                })
                .catch(err => {
                    console.log(err.message);
                    NotificationProvider.showError('Oops!', err.message)
                })
                .finally(() => {
                    setAddModal(false);
                    setModalBtnLoading(false);
                    setItemName('');
                })
        } else {
            NotificationProvider.showWarning('Warning!', 'Please fill all the fields!');
        }
    }

    const getAllServiceItems = () => {
        axios.get(`${BaseUrl}/service-items/findAllServiceItems`)
            .then((res) => {
                if (res.data.statuscode === 200) {
                    setServiceItems(res.data.data);
                } else {
                    setServiceItems([]);
                }
            })
            .catch(err => {
                NotificationProvider.showError('Oops!', err.message);
            })
    }

    const handleUploadRef = () => {
        fileInputRef.current.click();
    }

    const handleViewOrders = (e) => {
        navigate(`/admin/order/${e}`)
    }

    const handleOpenAddModal = () => {
        setAddModal(true);
    }

    const handleCancelAddModal = () => {
        setAddModal(false);
        setItemName('');
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
            <Modal title='Add Modal' open={addModal} onCancel={handleCancelAddModal} footer={null} >
                <p className='modalInputHeadings'>Item Name</p>
                <Input value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder='Enter item name' className='modalInputs' />
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
                <div className='modalButtonDiv'>
                    <Button loading={modalBtnLoading} onClick={createServiceItem} className='modalSubmit'>Submit</Button>
                </div>
            </Modal>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className='headingAndAddItem'>
                <h2 className='contentHeading'>Dashboard</h2>
                <Button className='addItem' onClick={handleOpenAddModal} icon={<PlusOutlined />}>Add Item</Button>
            </div>
            <div className='dashboardContents'>
                {
                    serviceItems.length !== 0 ?
                        serviceItems.map(item => (
                            <>
                                <Card className='dashboardContentCard' key={item.item_id}>
                                    <div className='headerAndImage'>
                                        <h3>{item.item_name}</h3>
                                        <img src={item.item_img !== null ? item.item_img : `/assets/customer-service.png`} alt='item image' width={70} height={70} />
                                    </div>
                                    <div className='orderListDiv'>
                                        <p>Total orders <b>14</b></p>
                                        <p>Pending orders <b>10</b></p>
                                    </div>
                                    <Button onClick={() => handleViewOrders(item.item_id)} className='serviceViewBtn'>View orders</Button>
                                </Card></>
                        ))
                        :
                        <>
                            <div style={{ width: '100%', textAlign: 'center' }}>
                                <h3>No Items</h3>
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default AdminDashboard