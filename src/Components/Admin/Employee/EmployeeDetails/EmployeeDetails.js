import { EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Input, Modal, Space, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import CustomBreadcrumb from '../../../CustomComponents/CustomBreadCrumb';
import axios from 'axios';
import { BaseUrl } from '../../../Constants/Constant';
import NotificationProvider from '../../../CustomComponents/CustomNotificationProvider';

const { TextArea } = Input;

const EmployeeDetails = () => {

    const [editModal, setEditModal] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [employeeId, setEmployeeId] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [role, setRole] = useState('');
    const [aadhaarNumber, setAadhaarNumber] = useState('');
    const [panNumber, setPanNumber] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [pincode, setPincode] = useState('');
    const [modalBtnLoading, setModalBtnLoading] = useState(false);
    const [allEmployeeDetails, setAllEmployeeDetails] = useState([]);

    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Admin', link: '/admin' }, //  current page
        { label: 'Employee' } //  current page
    ];

    useEffect(() => {
        getAllEmployeeDetails();
    }, [])

    const columns = [
        // {
        //     title: 'Date',
        //     dataIndex: 'date',
        //     key: 'date',
        //     render: (text) => <a>{text}</a>,
        // },
        {
            title: 'Employee Name',
            dataIndex: 'employee_name',
            key: 'employee_name',
        },
        {
            title: 'Email',
            dataIndex: 'employee_email',
            key: 'employee_email',
        },
        {
            title: 'Mobile Number',
            dataIndex: 'employee_mobile_number',
            key: 'employee_mobile_number',
        },
        {
            title: 'Role',
            dataIndex: 'employee_role',
            key: 'employee_role',
        },
        {
            title: 'Aadhaar No',
            dataIndex: 'employee_aadhaar_number',
            key: 'employee_aadhaar_number',
        },
        {
            title: 'PAN No',
            dataIndex: 'employee_pan_number',
            key: 'employee_pan_number',
        },
        {
            title: 'Address',
            dataIndex: 'employee_address',
            key: 'employee_address',
        },
        {
            title: 'State',
            dataIndex: 'employee_State',
            key: 'employee_State',
        },
        {
            title: 'District',
            dataIndex: 'employee_district',
            key: 'employee_district',
        },
        {
            title: 'Pincode',
            dataIndex: 'employee_pincode',
            key: 'employee_pincode',
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <EditOutlined
                        onClick={() => handleOpenEditModal(record)}
                    />
                    <EyeOutlined
                        onClick={() => handleOpenViewModal(record)}
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

    const handleOpenEditModal = (e) => {
        setEditModal(true);
        setEmployeeId(e.employee_id);
        setEmployeeName(e.employee_name);
        setEmail(e.employee_email);
        setMobileNumber(e.employee_mobile_number);
        setRole(e.employee_role);
        setAadhaarNumber(e.employee_aadhaar_number);
        setPanNumber(e.employee_pan_number);
        setAddress(e.employee_address);
        setState(e.employee_State);
        setDistrict(e.employee_district);
        setPincode(e.employee_pincode);
    }

    const handleCancelEdit = () => {
        setEditModal(false);
    }

    const handleOpenViewModal = (e) => {
        setViewModal(true);
        setEmployeeId(e.employee_id);
        setEmployeeName(e.employee_name);
        setEmail(e.employee_email);
        setMobileNumber(e.employee_mobile_number);
        setRole(e.employee_role);
        setAadhaarNumber(e.employee_aadhaar_number);
        setPanNumber(e.employee_pan_number);
        setAddress(e.employee_address);
        setState(e.employee_State);
        setDistrict(e.employee_district);
        setPincode(e.employee_pincode);
    }


    const handleCancelView = () => {
        setViewModal(false);
    }

    const handleCancelAdd = () => {
        setAddModal(false);
        setEmployeeName("");
        setEmail("");
        setMobileNumber("");
        setRole("");
        setAadhaarNumber("");
        setPanNumber("");
        setAddress("");
        setState("");
        setDistrict("");
        setPincode("");
    }
    const handleOpenAddModal = () => {
        setAddModal(true);
    }

    const addNewEmployees = () => {
        setModalBtnLoading(true);
        let body = {
            employeeName: employeeName,
            employeeEmail: email,
            employeeMobileNumber: mobileNumber,
            employeeRole: role,
            employeeAadhaarNumber: aadhaarNumber,
            employeePanNumber: panNumber,
            employeeAddress: address,
            employeeState: state,
            employeeDistrict: district,
            employeePincode: pincode,
            created_by: ""
        }
        axios.post(`${BaseUrl}/employee-details/createEmployeeDetails`, body)
            .then((res) => {
                setModalBtnLoading(false);
                console.log(res.data, 'employeeResponse');
                if (res.data.statuscode === 200) {
                    NotificationProvider.showSuccess('Success!', 'Employee details added successfully!')
                } else {
                    NotificationProvider.showError('Oops!', 'Please try again after some time.')
                }
            })
            .catch(err => {
                NotificationProvider.showError('Oops!', err.message);
            })
            .finally(() => {
                handleCancelAdd()
                setModalBtnLoading(false);
            })
    }

    const getAllEmployeeDetails = () => {
        axios.get(`${BaseUrl}/employee-details/findAllEmployeeDetails`)
            .then((res) => {
                console.log(res.data, 'allEmployeeDetails');
                if (res.data.statuscode === 200) {
                    setAllEmployeeDetails(res.data.data);
                } else {
                    setAllEmployeeDetails([]);
                }
            })
            .catch(err => {
                console.log(err.message);
            })
    }


    return (
        <div>
            <Modal className='editModalClass' title='Add Employee Detail' open={addModal} onCancel={handleCancelAdd} footer={null} >
                <p className='modalInputHeadings'>Employee Name</p>
                <Input value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} placeholder='Enter employee name' className='modalInputs' />
                <p className='modalInputHeadings'>Email</p>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email address' className='modalInputs' />
                <p className='modalInputHeadings'>Mobile Number</p>
                <Input value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder='Enter contact name' className='modalInputs' />
                <p className='modalInputHeadings'>Role</p>
                <Input value={role} onChange={(e) => setRole(e.target.value)} placeholder='Enter Role' className='modalInputs' />
                <p className='modalInputHeadings'>Aadhaar Number</p>
                <Input value={aadhaarNumber} onChange={(e) => setAadhaarNumber(e.target.value)} placeholder='Enter Aadhaar number' className='modalInputs' />
                <p className='modalInputHeadings'>PAN Number</p>
                <Input value={panNumber} onChange={(e) => setPanNumber(e.target.value)} placeholder='Enter PAN number' rows={3} className='modalInputs' />
                <p className='modalInputHeadings'>Address</p>
                <Input value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter state' className='modalInputs' />
                <p className='modalInputHeadings'>District</p>
                <Input value={district} onChange={(e) => setDistrict(e.target.value)} placeholder='Enter brand' className='modalInputs' />
                <p className='modalInputHeadings'>State</p>
                <Input value={state} onChange={(e) => setState(e.target.value)} placeholder='Enter state' className='modalInputs' />
                <p className='modalInputHeadings'>Pincode</p>
                <Input value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder='Enter brand' className='modalInputs' />
                <div className='modalButtonDiv'>
                    <Button loading={modalBtnLoading} onClick={addNewEmployees} className='modalSubmit'>Submit</Button>
                </div>
            </Modal>
            <Modal className='editModalClass' title='Edit Employee Detail' open={editModal} onCancel={handleCancelEdit} footer={null} >
                <p className='modalInputHeadings'>Employee Name</p>
                <Input value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} placeholder='Enter employee name' className='modalInputs' />
                <p className='modalInputHeadings'>Email</p>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email address' className='modalInputs' />
                <p className='modalInputHeadings'>Mobile Number</p>
                <Input value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder='Enter contact name' className='modalInputs' />
                <p className='modalInputHeadings'>Role</p>
                <Input value={role} onChange={(e) => setRole(e.target.value)} placeholder='Enter Role' className='modalInputs' />
                <p className='modalInputHeadings'>Aadhaar Number</p>
                <Input value={aadhaarNumber} onChange={(e) => setAadhaarNumber(e.target.value)} placeholder='Enter Aadhaar number' className='modalInputs' />
                <p className='modalInputHeadings'>PAN Number</p>
                <TextArea value={panNumber} onChange={(e) => setPanNumber(e.target.value)} placeholder='Enter PAN number' rows={3} className='modalInputs' />
                <p className='modalInputHeadings'>Address</p>
                <Input value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter state' className='modalInputs' />
                <p className='modalInputHeadings'>District</p>
                <Input value={district} onChange={(e) => setDistrict(e.target.value)} placeholder='Enter brand' className='modalInputs' />
                <p className='modalInputHeadings'>State</p>
                <Input value={state} onChange={(e) => setState(e.target.value)} placeholder='Enter state' className='modalInputs' />
                <p className='modalInputHeadings'>Pincode</p>
                <Input value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder='Enter brand' className='modalInputs' />
                <div className='modalButtonDiv'>
                    <Button loading={modalBtnLoading} onClick={addNewEmployees} className='modalSubmit'>Update</Button>
                </div>
            </Modal>
            <Modal className='editModalClass' title='View Employee Details' open={viewModal} onCancel={handleCancelView} footer={null} >
                <p className='modalInputHeadings'>Employee Name</p>
                <Input disabled value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} placeholder='Enter employee name' className='modalInputs' />
                <p className='modalInputHeadings'>Email</p>
                <Input disabled value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email address' className='modalInputs' />
                <p className='modalInputHeadings'>Mobile Number</p>
                <Input disabled value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder='Enter contact name' className='modalInputs' />
                <p className='modalInputHeadings'>Role</p>
                <Input disabled value={role} onChange={(e) => setRole(e.target.value)} placeholder='Enter Role' className='modalInputs' />
                <p className='modalInputHeadings'>Aadhaar Number</p>
                <Input disabled value={aadhaarNumber} onChange={(e) => setAadhaarNumber(e.target.value)} placeholder='Enter Aadhaar number' className='modalInputs' />
                <p className='modalInputHeadings'>PAN Number</p>
                <TextArea disabled value={panNumber} onChange={(e) => setPanNumber(e.target.value)} placeholder='Enter PAN number' rows={3} className='modalInputs' />
                <p className='modalInputHeadings'>Address</p>
                <Input disabled value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter state' className='modalInputs' />
                <p className='modalInputHeadings'>District</p>
                <Input disabled value={district} onChange={(e) => setDistrict(e.target.value)} placeholder='Enter brand' className='modalInputs' />
                <p className='modalInputHeadings'>State</p>
                <Input disabled value={state} onChange={(e) => setState(e.target.value)} placeholder='Enter state' className='modalInputs' />
                <p className='modalInputHeadings'>Pincode</p>
                <Input disabled value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder='Enter brand' className='modalInputs' />
            </Modal>
            <CustomBreadcrumb items={breadcrumbItems} />
            <div className='headingAndAddItem'>
                <h2 className='contentHeading'>Dashboard</h2>
                <Button className='addItem'
                    onClick={handleOpenAddModal}
                    icon={<PlusOutlined />}>Add Employee</Button>
            </div>
            <Table columns={columns} dataSource={allEmployeeDetails} />
        </div>
    )
}

export default EmployeeDetails