import React, { useState } from 'react'
import CustomBreadcrumb from '../../CustomComponents/CustomBreadCrumb'
import { DatePicker, Input, Modal, Select, Space, Table } from 'antd';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import './OrderList.css'


const { TextArea } = Input;

const data = [
    {
        date: "7/10/2024",
        customerName: "Santhosh",
        category: "Washing Machine",
        address: " Veerapandi",
        contactNo: "8883619017",
        type: "Front Load",
        brand: "Samsung",
        technician: "vignesh"
    },
    {
        date: "7/10/2024",
        customerName: "Santhosh",
        category: "Washing Machine",
        address: " Veerapandi",
        contactNo: "8883619017",
        type: "Front Load",
        brand: "Samsung",
        technician: "vignesh"
    },
    {
        date: "7/10/2024",
        customerName: "Santhosh",
        category: "Washing Machine",
        address: " Veerapandi",
        contactNo: "8883619017",
        type: "Front Load",
        brand: "Samsung",
        technician: "vignesh"
    },
    {
        date: "7/10/2024",
        customerName: "Santhosh",
        category: "Washing Machine",
        address: " Veerapandi",
        contactNo: "8883619017",
        type: "Front Load",
        brand: "Samsung",
        technician: "vignesh"
    },
    {
        date: "7/10/2024",
        customerName: "Santhosh",
        category: "Washing Machine",
        address: " Veerapandi",
        contactNo: "8883619017",
        type: "Front Load",
        brand: "Samsung",
        technician: "vignesh"
    },
]

const OrderList = () => {


    const [editModal, setEditModal] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [customerName, setCustomerName] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [typeLoad, setTypeLoad] = useState('');
    const [brandName, setBrandName] = useState('');
    const [problems, setProblems] = useState("");
    const [dateOfService, setDateDateOfService] = useState('');
    const [followDate, setFollowDate] = useState('');
    const [technician, setTechnician] = useState(null);
    const [paymentDetails, setPaymentDetails] = useState(null);
    const [completeDetails, setCompleteDetails] = useState('');
    const [inspectDate, setIspectDate] = useState('');
    const [spareValue, setSpareValue] = useState('');
    const [totalBill, setTotalBill] = useState('');
    const [inTime, setIntime] = useState('');
    const [outTime, setOuttime] = useState('');
    const [review, setReview] = useState('');

    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Admin', link: '/admin' },
        { label: 'Orders' } //  current page
    ];

    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Customer Name',
            dataIndex: 'customerName',
            key: 'customerName',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Contact No',
            dataIndex: 'contactNo',
            key: 'contactNo',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
        },
        {
            title: 'Technician',
            dataIndex: 'technician',
            key: 'technician',
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <EditOutlined onClick={handleOpenEditModal} />
                    <EyeOutlined onClick={handleOpenViewModal} />
                </Space>
            )
        }
    ];



    const handleOpenEditModal = () => {
        setEditModal(true)
    }

    const handleCancelEdit = () => {
        setEditModal(false);
    }

    const handleOpenViewModal = () => {
        setViewModal(true)
    }

    const handleCancelView = () => {
        setViewModal(false);
    }



    return (
        <div>
            <Modal className='editModalClass' title='Edit Repairs' open={editModal} onCancel={handleCancelEdit} >
                <p className='modalInputHeadings'>Customer Name</p>
                <Input value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder='Enter customer name' className='modalInputs' />
                <p className='modalInputHeadings'>Address</p>
                <Input value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter address' className='modalInputs' />
                <p className='modalInputHeadings'>Contact Number</p>
                <Input value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} placeholder='Enter contact name' className='modalInputs' />
                <p className='modalInputHeadings'>Type</p>
                <Input value={typeLoad} onChange={(e) => setTypeLoad(e.target.value)} placeholder='Enter type' className='modalInputs' />
                <p className='modalInputHeadings'>Brand</p>
                <Input value={brandName} onChange={(e) => setBrandName(e.target.value)} placeholder='Enter brand' className='modalInputs' />
                <p className='modalInputHeadings'>Problems</p>
                <TextArea value={problems} onChange={(e) => setProblems(e.target.value)} placeholder='Enter detailed problem' rows={3} className='modalInputs' />
                <p className='modalInputHeadings'>Date Of Service</p>
                <DatePicker className='modalDatepickerClass' />
                <p className='modalInputHeadings'>Follow Date</p>
                <DatePicker className='modalDatepickerClass' />
                <p className='modalInputHeadings'>Technician</p>
                <Select
                    value={technician}
                    onChange={(val) => setTechnician(val)}
                    className='modalSelectClass'
                    placeholder="Select technician"
                    options={[
                        {
                            value: 'rasheed',
                            label: 'Rasheed'
                        },
                        {
                            value: 'kat',
                            label: 'KaT'
                        }
                    ]} />
                <p className='modalInputHeadings'>Payment Details</p>
                <Select
                    value={paymentDetails}
                    onChange={(val) => setPaymentDetails(val)}
                    className='modalSelectClass'
                    placeholder="Select payment details"
                    options={[
                        {
                            value: 'done',
                            label: 'Done'
                        },
                        {
                            value: 'pending',
                            label: 'Pending'
                        }
                    ]} />
                <p className='modalInputHeadings'>Complete Details</p>
                <TextArea value={completeDetails} onChange={(e) => setCompleteDetails(e.target.value)} placeholder='Enter complete details' rows={3} className='modalInputs' />
                <p className='modalInputHeadings'>Inspect Date</p>
                <DatePicker className='modalDatepickerClass' />
                <p className='modalInputHeadings'>Spare value</p>
                <Input value={spareValue} onChange={(e) => setSpareValue(e.target.value)} placeholder='Enter spare value' className='modalInputs' />
                <p className='modalInputHeadings'>Total Bill</p>
                <Input value={totalBill} onChange={(e) => setTotalBill(e.target.value)} placeholder='Enter total bill value' className='modalInputs' />
                <p className='modalInputHeadings'>In Time</p>
                <Input value={inTime} onChange={(e) => setIntime(e.target.value)} className='modalInputs' placeholder='Enter in-time' />
                <p className='modalInputHeadings'>Out Time</p>
                <Input value={outTime} onChange={(e) => setOuttime(e.target.value)} className='modalInputs' placeholder='Enter out-time' />
                <p className='modalInputHeadings'>Review</p>
                <TextArea value={review} onChange={(e) => setReview(e.target.value)} rows={3} className='modalInputs' placeholder='Enter review' />
            </Modal>
            <Modal className='editModalClass' title='View Repairs' open={viewModal} onCancel={handleCancelView} >
                <p className='modalInputHeadings'>Customer Name</p>
                <Input defaultValue={customerName} value={customerName} disabled onChange={(e) => setCustomerName(e.target.value)} placeholder='Enter customer name' className='modalInputs' />
                <p className='modalInputHeadings'>Address</p>
                <Input disabled value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter address' className='modalInputs' />
                <p className='modalInputHeadings'>Contact Number</p>
                <Input disabled value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} placeholder='Enter contact name' className='modalInputs' />
                <p className='modalInputHeadings'>Type</p>
                <Input disabled value={typeLoad} onChange={(e) => setTypeLoad(e.target.value)} placeholder='Enter type' className='modalInputs' />
                <p className='modalInputHeadings'>Brand</p>
                <Input disabled value={brandName} onChange={(e) => setBrandName(e.target.value)} placeholder='Enter brand' className='modalInputs' />
                <p className='modalInputHeadings'>Problems</p>
                <TextArea disabled value={problems} onChange={(e) => setProblems(e.target.value)} placeholder='Enter detailed problem' rows={3} className='modalInputs' />
                <p className='modalInputHeadings'>Date Of Service</p>
                <DatePicker className='modalDatepickerClass' />
                <p className='modalInputHeadings'>Follow Date</p>
                <DatePicker className='modalDatepickerClass' />
                <p className='modalInputHeadings'>Technician</p>
                <Select
                    value={technician}
                    onChange={(val) => setTechnician(val)}
                    className='modalSelectClass'
                    placeholder="Select technician"
                    options={[
                        {
                            value: 'rasheed',
                            label: 'Rasheed'
                        },
                        {
                            value: 'kat',
                            label: 'KaT'
                        }
                    ]} />
                <p className='modalInputHeadings'>Payment Details</p>
                <Select
                    value={paymentDetails}
                    onChange={(val) => setPaymentDetails(val)}
                    className='modalSelectClass'
                    placeholder="Select payment details"
                    options={[
                        {
                            value: 'done',
                            label: 'Done'
                        },
                        {
                            value: 'pending',
                            label: 'Pending'
                        }
                    ]} />
                <p className='modalInputHeadings'>Complete Details</p>
                <TextArea disabled value={completeDetails} onChange={(e) => setCompleteDetails(e.target.value)} placeholder='Enter complete details' rows={3} className='modalInputs' />
                <p className='modalInputHeadings'>Inspect Date</p>
                <DatePicker className='modalDatepickerClass' />
                <p className='modalInputHeadings'>Spare value</p>
                <Input disabled value={spareValue} onChange={(e) => setSpareValue(e.target.value)} placeholder='Enter spare value' className='modalInputs' />
                <p className='modalInputHeadings'>Total Bill</p>
                <Input disabled value={totalBill} onChange={(e) => setTotalBill(e.target.value)} placeholder='Enter total bill value' className='modalInputs' />
                <p className='modalInputHeadings'>In Time</p>
                <Input disabled value={inTime} onChange={(e) => setIntime(e.target.value)} className='modalInputs' placeholder='Enter in-time' />
                <p className='modalInputHeadings'>Out Time</p>
                <Input disabled value={outTime} onChange={(e) => setOuttime(e.target.value)} className='modalInputs' placeholder='Enter out-time' />
                <p className='modalInputHeadings'>Review</p>
                <TextArea disabled value={review} onChange={(e) => setReview(e.target.value)} rows={3} className='modalInputs' placeholder='Enter review' />
            </Modal>
            <CustomBreadcrumb items={breadcrumbItems} />
            <h2 className='contentHeading'>Orders</h2>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default OrderList