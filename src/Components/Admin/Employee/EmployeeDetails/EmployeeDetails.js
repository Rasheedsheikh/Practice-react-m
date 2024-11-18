import { EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Input, Modal, Space, Table } from 'antd'
import React, { useState } from 'react'
import CustomBreadcrumb from '../../../CustomComponents/CustomBreadCrumb';

const { TextArea } = Input;

const EmployeeDetails = () => {

    const [editModal, setEditModal] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [employeeName, setEmployeeName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [role, setRole] = useState('');
    const [aadhaarNumber, setAadhaarNumber] = useState('');
    const [panNumber, setPanNumber] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');

    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Admin', link: '/admin' }, //  current page
        { label: 'Employee' } //  current page
    ];

    const columns = [
        // {
        //     title: 'Date',
        //     dataIndex: 'date',
        //     key: 'date',
        //     render: (text) => <a>{text}</a>,
        // },
        {
            title: 'Employee Name',
            dataIndex: 'employeeName',
            key: 'employeeName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Mobile Number',
            dataIndex: 'mobileNumber',
            key: 'mobileNumber',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Aadhaar No',
            dataIndex: 'aadhaarNo',
            key: 'aadhaarNo',
        },
        {
            title: 'PAN No',
            dataIndex: 'panNo',
            key: 'panNo',
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
        },
        {
            title: 'District',
            dataIndex: 'district',
            key: 'district',
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <EditOutlined
                        onClick={handleOpenEditModal}
                    />
                    <EyeOutlined
                        onClick={handleOpenViewModal}
                    />
                </Space>
            )
        }
    ];

    const data = [
        {
            employeeName: 'Rasheed',
            email: 'rasheed@email.com',
            mobileNumber: '8621456212',
            role: 'Technician',
            aadhaarNo: '48987512458956',
            panNo: 'ENPND2555O',
            state: 'Tamil Nadu',
            district: 'Coimbatore'
        }
    ]

    const handleOpenEditModal = () => {
        setEditModal(true);
    }

    const handleCancelEdit = () => {
        setEditModal(false);
    }

    const handleOpenViewModal = () => {
        setViewModal(true);
    }


    const handleCancelView = () => {
        setViewModal(false);
    }

    const handleCancelAdd = () => {
        setAddModal(false);
    }
    const handleOpenAddModal = () => {
        setAddModal(true);
    }


    return (
        <div>
            <Modal className='editModalClass' title='Add Employee Detail' open={addModal} onCancel={handleCancelAdd} >
                <p className='modalInputHeadings'>Employee Name</p>
                <Input value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} placeholder='Enter employee name' className='modalInputs' />
                <p className='modalInputHeadings'>Email</p>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email address' className='modalInputs' />
                <p className='modalInputHeadings'>Mobile Number</p>
                <Input value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder='Enter contact name' className='modalInputs' />
                <p className='modalInputHeadings'>Role</p>
                <Input value={role} onChange={(e) => setRole(e.target.value)} placeholder='Enter Role' className='modalInputs' />
                <p className='modalInputHeadings'>Aadhaar Number</p>
                <Input value={aadhaarNumber} onChange={(e) => setAadhaarNumber(e.target.value)} placeholder='Enter brand' className='modalInputs' />
                <p className='modalInputHeadings'>PAN Number</p>
                <TextArea value={panNumber} onChange={(e) => setPanNumber(e.target.value)} placeholder='Enter detailed problem' rows={3} className='modalInputs' />
                <p className='modalInputHeadings'>State</p>
                <Input value={state} onChange={(e) => setState(e.target.value)} placeholder='Enter brand' className='modalInputs' />
                <p className='modalInputHeadings'>District</p>
                <Input value={district} onChange={(e) => setDistrict(e.target.value)} placeholder='Enter brand' className='modalInputs' />
            </Modal>
            <Modal className='editModalClass' title='Edit Employee Detail' open={editModal} onCancel={handleCancelEdit} >
                <p className='modalInputHeadings'>Employee Name</p>
                <Input value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} placeholder='Enter employee name' className='modalInputs' />
                <p className='modalInputHeadings'>Email</p>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email address' className='modalInputs' />
                <p className='modalInputHeadings'>Mobile Number</p>
                <Input value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder='Enter contact name' className='modalInputs' />
                <p className='modalInputHeadings'>Role</p>
                <Input value={role} onChange={(e) => setRole(e.target.value)} placeholder='Enter Role' className='modalInputs' />
                <p className='modalInputHeadings'>Aadhaar Number</p>
                <Input value={aadhaarNumber} onChange={(e) => setAadhaarNumber(e.target.value)} placeholder='Enter brand' className='modalInputs' />
                <p className='modalInputHeadings'>PAN Number</p>
                <TextArea value={panNumber} onChange={(e) => setPanNumber(e.target.value)} placeholder='Enter detailed problem' rows={3} className='modalInputs' />
                <p className='modalInputHeadings'>State</p>
                <Input value={state} onChange={(e) => setState(e.target.value)} placeholder='Enter brand' className='modalInputs' />
                <p className='modalInputHeadings'>District</p>
                <Input value={district} onChange={(e) => setDistrict(e.target.value)} placeholder='Enter brand' className='modalInputs' />
            </Modal>
            <Modal className='editModalClass' title='View Employee Details' open={viewModal} onCancel={handleCancelView} >
                <p className='modalInputHeadings'>Employee Name</p>
                <Input disabled value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} placeholder='Enter employee name' className='modalInputs' />
                <p className='modalInputHeadings'>Email</p>
                <Input disabled value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email address' className='modalInputs' />
                <p className='modalInputHeadings'>Mobile Number</p>
                <Input disabled value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder='Enter contact name' className='modalInputs' />
                <p className='modalInputHeadings'>Role</p>
                <Input disabled value={role} onChange={(e) => setRole(e.target.value)} placeholder='Enter Role' className='modalInputs' />
                <p className='modalInputHeadings'>Aadhaar Number</p>
                <Input disabled value={aadhaarNumber} onChange={(e) => setAadhaarNumber(e.target.value)} placeholder='Enter brand' className='modalInputs' />
                <p className='modalInputHeadings'>PAN Number</p>
                <TextArea disabled value={panNumber} onChange={(e) => setPanNumber(e.target.value)} placeholder='Enter detailed problem' rows={3} className='modalInputs' />
                <p className='modalInputHeadings'>State</p>
                <Input disabled value={state} onChange={(e) => setState(e.target.value)} placeholder='Enter brand' className='modalInputs' />
                <p className='modalInputHeadings'>District</p>
                <Input disabled value={district} onChange={(e) => setDistrict(e.target.value)} placeholder='Enter brand' className='modalInputs' />
            </Modal>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className='headingAndAddItem'>
                <h2 className='contentHeading'>Dashboard</h2>
                <Button className='addItem'
                    onClick={handleOpenAddModal}
                    icon={<PlusOutlined />}>Add Employee</Button>
            </div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default EmployeeDetails