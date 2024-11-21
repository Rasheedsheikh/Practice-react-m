import React, { useEffect, useState } from 'react'
import CustomBreadcrumb from '../../CustomComponents/CustomBreadCrumb'
import { Button, Col, DatePicker, Input, Modal, Row, Select, Space, Table } from 'antd';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import './OrderList.css'
import axios from 'axios';
import { BaseUrl } from '../../Constants/Constant';
import { useParams } from 'react-router-dom';
import NotificationProvider from '../../CustomComponents/CustomNotificationProvider';
import moment from 'moment';


const { TextArea } = Input;

const AllOrdersList = () => {

    const [editModal, setEditModal] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [tableItems, setTableItems] = useState([]);
    const [customerFirstName, setCustomerFirstName] = useState('');
    const [customerLastName, setCustomerLastName] = useState('');
    const [doorNumber, setDoorNumber] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [pincode, setPincode] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [category, setCategory] = useState('');
    const [typeLoad, setTypeLoad] = useState('');
    const [brandName, setBrandName] = useState('');
    const [problems, setProblems] = useState("");
    const [dateOfService, setDateOfService] = useState(null);
    const [followDate, setFollowDate] = useState(null);
    const [technician, setTechnician] = useState(null);
    const [technicianName, setTechnicianName] = useState(null);
    const [paymentDetails, setPaymentDetails] = useState(null);
    const [completeDetails, setCompleteDetails] = useState('');
    const [inspectDate, setInspectDate] = useState(null);
    const [spareValue, setSpareValue] = useState('');
    const [totalBill, setTotalBill] = useState('');
    const [inTime, setIntime] = useState('');
    const [outTime, setOuttime] = useState('');
    const [review, setReview] = useState('');
    const [modalBtnLoading, setModalBtnLoading] = useState(false);
    const [employeesList, setEmployeesList] = useState([]);
    const [technicianFilter, setTechnicianFilter] = useState('');
    const [pinCodeFilter, setPincodeFilter] = useState('');
    const [dateFilter, setDateFilter] = useState(null);
    const [filterBy, setFilterBy] = useState(null);
    const [filteredData, setFilteredData] = useState([]);

    console.log(technician, 'allEMployeeList')

    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Admin', link: '/admin' },
        { label: 'Orders' } //  current page
    ];

    const columns = [
        {
            title: 'Date',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (text) => {
                const splittedText = text.split('T')[0];
                console.log(splittedText, 'splittedText');
                return (
                    <>
                        <p>{moment(splittedText).format('DD-MM-YYYY')}</p>
                    </>
                )
            },
        },
        {
            title: 'Customer First Name',
            dataIndex: 'customer_first_name',
            key: 'customer_first_name',
        },
        {
            title: 'Customer Last Name',
            dataIndex: 'customer_last_name',
            key: 'customer_last_name',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Street',
            dataIndex: 'street',
            key: 'street',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Pincode',
            dataIndex: 'pincode',
            key: 'pincode',
        },
        {
            title: 'Contact No',
            dataIndex: 'contact_number',
            key: 'contact_number',
        },
        {
            title: 'Type',
            dataIndex: 'type_load',
            key: 'type_load',
        },
        {
            title: 'Brand',
            dataIndex: 'brand_name',
            key: 'brand_name',
        },
        {
            title: 'Technician',
            dataIndex: 'technician_name',
            key: 'technician_name',
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => {
                console.log(record, 'tableRecords')
                return (
                    <Space size="middle">
                        <EditOutlined onClick={() => handleOpenEditModal(record)} />
                        <EyeOutlined onClick={() => handleOpenViewModal(record)} />
                    </Space>
                )
            }
        }
    ];

    useEffect(() => {
        getOrders();
        getAllEMployees();
    }, []);

    const getAllEMployees = () => {
        axios.get(`${BaseUrl}/employee-details/findAllEmployeeDetails`)
            .then((res) => {
                console.log(res.data, 'allEMployeeList');
                if (res.data.statuscode === 200) {
                    let arr = [];
                    for (let i = 0; i < res.data.data.length; i++) {
                        let obj = {
                            value: res.data.data[i].employee_id,
                            label: res.data.data[i].employee_name
                        }
                        arr.push(obj);
                    }
                    console.log(arr, 'allEMployeeList')
                    setEmployeesList(arr);
                }
            })
            .catch(err => {
                console.log(err.message);
            })
    }


    const getOrders = () => {
        axios.get(`${BaseUrl}/order-details/findAllOrders`)
            .then((res) => {
                console.log(res.data, 'responseData');
                if (res.data.statuscode === 200) {
                    setTableItems(res.data.data);
                } else {
                    setTableItems([]);
                }
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    const handleUpdateOrder = () => {
        setModalBtnLoading(true);
        let body = {
            orderId: orderId,
            category: category,
            typeLoad: typeLoad,
            brandName: brandName,
            problems: problems,
            dateOfService: dateOfService,
            followDate: followDate,
            technicianId: technician,
            technicianName: technicianName,
            paymentDetails: paymentDetails,
            completeDetails: completeDetails,
            inspectDate: inspectDate,
            spareValue: spareValue,
            totalBill: totalBill,
            inTime: inTime,
            outTime: outTime,
            Review: review,
            updatedBy: null
        }

        axios.post(`${BaseUrl}/order-details/updateOrderDetails`, body)
            .then((res) => {
                console.log(res.data, 'updateResponse');
                if (res.data.statuscode === 200) {
                    NotificationProvider.showSuccess('Updated!', 'Details updated successfully!');
                    getOrders();
                    setEditModal(false);
                } else {
                    NotificationProvider.showError('Oops!', 'Error updating details!');
                    setEditModal(false);
                }
            })
            .catch(err => {
                console.log(err.message);
                NotificationProvider.showError('Oops!', err.message);
            })
            .finally(() => {
                setModalBtnLoading(false);
                setEditModal(false);
            })
    }


    const handleOpenEditModal = (e) => {
        setEditModal(true);
        setOrderId(e.order_id);
        setCustomerFirstName(e.customer_first_name);
        setCustomerLastName(e.customer_last_name);
        setDoorNumber(e.door_number);
        setStreet(e.street);
        setCity(e.city);
        setDistrict(e.district);
        setPincode(e.pincode);
        setContactNumber(e.contact_number);
        setCategory(e.category);
        setTypeLoad(e.type_load);
        setBrandName(e.brand_name);
        setProblems(e.problems);
        setDateOfService(e.date_of_service);
        setFollowDate(e.follow_date !== '' ? e.follow_date : null);
        setTechnician(e.technician_id);
        setPaymentDetails(e.payment_details);
        setCompleteDetails(e.complete_details);
        setInspectDate(e.inspect_date);
        setSpareValue(e.spare_value);
        setTotalBill(e.total_bill);
        setIntime(e.in_time);
        setOuttime(e.out_time);
        setReview(e.review);
        console.log(e.follow_date, 'modalRecords');
    }

    const handleCancelEdit = () => {
        setEditModal(false);
    }

    const handleOpenViewModal = (e) => {
        setViewModal(true);
        setCustomerFirstName(e.customer_first_name);
        setCustomerLastName(e.customer_last_name);
        setDoorNumber(e.door_number);
        setStreet(e.street);
        setCity(e.city);
        setDistrict(e.district);
        setPincode(e.pincode);
        setContactNumber(e.contact_number);
        setCategory(e.category);
        setTypeLoad(e.type_load);
        setBrandName(e.brand_name);
        setProblems(e.problems);
        setDateOfService(e.date_of_service);
        setFollowDate(e.follow_date);
        setTechnician(e.technician_id);
        setPaymentDetails(e.payment_details);
        setCompleteDetails(e.complete_details);
        setInspectDate(e.inspect_date);
        setSpareValue(e.spare_value);
        setTotalBill(e.total_bill);
        setIntime(e.in_time);
        setOuttime(e.out_time);
        setReview(e.review);
    }

    const handleCancelView = () => {
        setViewModal(false);
    }


    const handlePincodeFilters = (e) => {
        setPincodeFilter(e);
        const pinCodeInput = e;
        const filtered = tableItems.filter((item) => {
            const matchesPincode = item.pincode.toLowerCase().includes(pinCodeInput.toString().toLowerCase());
            return matchesPincode;
        })
        setFilteredData(filtered);
    }

    const handleTechnicianFilters = (e) => {
        setTechnicianFilter(e);
        const technicianInput = e.toString().toLowerCase();
        const filtered = tableItems.filter((item) => {
            const technicianName = item.technician_name ? item.technician_name.toLowerCase() : '';
            return technicianName.includes(technicianInput);
        });
        setFilteredData(filtered);
    };

    const handleDateFilter = (date, dateString) => {
        if (!date) {
            setFilteredData(tableItems);
            setDateFilter(null);
            return;
        }

        setDateFilter(date);

        const filtered = tableItems.filter((item) => {
            const correctDateString = item.created_at.split('T')[0];
            return (
                moment(correctDateString).format('DD-MM-YYYY') === dateString
            )
        }
        );

        setFilteredData(filtered);
    }

    const handleClearFilter = () => {
        setFilterBy(null);
        setPincodeFilter('');
        setTechnicianFilter('');
        setDateFilter(null);
    }





    return (
        <div>
            <Modal className='editModalClass' title='Edit Repairs' open={editModal} onCancel={handleCancelEdit} footer={null} >
                <p className='modalInputHeadings'>Customer First Name</p>
                <Input disabled value={customerFirstName} onChange={(e) => setCustomerFirstName(e.target.value)} placeholder='Enter customer first name' className='modalInputs' />
                <p className='modalInputHeadings'>Customer Last Name</p>
                <Input disabled value={customerLastName} onChange={(e) => setCustomerLastName(e.target.value)} placeholder='Enter customer last name' className='modalInputs' />
                <p className='modalInputHeadings'>Door Number</p>
                <Input disabled value={doorNumber} onChange={(e) => setDoorNumber(e.target.value)} placeholder='Enter door number' className='modalInputs' />
                <p className='modalInputHeadings'>Street</p>
                <Input disabled value={street} onChange={(e) => setStreet(e.target.value)} placeholder='Enter street' className='modalInputs' />
                <p className='modalInputHeadings'>City</p>
                <Input disabled value={city} onChange={(e) => setCity(e.target.value)} placeholder='Enter city' className='modalInputs' />
                <p className='modalInputHeadings'>District</p>
                <Input disabled value={district} onChange={(e) => setDistrict(e.target.value)} placeholder='Enter district' className='modalInputs' />
                <p className='modalInputHeadings'>Pincode</p>
                <Input disabled value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder='Enter pincode' className='modalInputs' />
                <p className='modalInputHeadings'>Contact Number</p>
                <Input value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} placeholder='Enter contact number' className='modalInputs' />
                <p className='modalInputHeadings'>Category</p>
                <Input disabled value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Enter category' className='modalInputs' />
                <p className='modalInputHeadings'>Type</p>
                <Input value={typeLoad} onChange={(e) => setTypeLoad(e.target.value)} placeholder='Enter type' className='modalInputs' />
                <p className='modalInputHeadings'>Brand</p>
                <Input value={brandName} onChange={(e) => setBrandName(e.target.value)} placeholder='Enter brand' className='modalInputs' />
                <p className='modalInputHeadings'>Problems</p>
                <TextArea value={problems} onChange={(e) => setProblems(e.target.value)} placeholder='Enter detailed problem' rows={3} className='modalInputs' />
                <p className='modalInputHeadings'>Date Of Service</p>
                <DatePicker
                    className='modalDatepickerClass'
                    value={dateOfService !== null ? moment(dateOfService, 'DD-MM-YYYY') : null}
                    onChange={(date, dateString) => {
                        if (date) {
                            const formattedDate = moment(dateString).format('DD-MM-YYYY');
                            setDateOfService(formattedDate);
                        } else {
                            setDateOfService(null);
                        }

                    }}
                />
                <p className='modalInputHeadings'>Follow Date</p>
                <DatePicker className='modalDatepickerClass'
                    value={followDate !== null ? moment(followDate, 'DD-MM-YYYY') : null}
                    onChange={(date, dateString) => {
                        if (date) {
                            const formattedDate = moment(dateString).format('DD-MM-YYYY');
                            setFollowDate(formattedDate);
                        } else {
                            setFollowDate(null);
                        }

                    }}
                />
                <p className='modalInputHeadings'>Technician</p>
                <Select
                    value={technician}
                    onChange={(val, e) => {
                        console.log(val, 'selectVal', e.label);
                        setTechnicianName(e.label);
                        setTechnician(val);
                    }}
                    className='modalSelectClass'
                    placeholder="Select technician"
                    options={employeesList} />
                <p className='modalInputHeadings'>Payment Details</p>
                <Select
                    value={paymentDetails}
                    onChange={(val) => setPaymentDetails(val)}
                    className='modalSelectClass'
                    placeholder="Select payment details"
                    options={[
                        {
                            value: 'Done',
                            label: 'Done'
                        },
                        {
                            value: 'Pending',
                            label: 'Pending'
                        }
                    ]} />
                <p className='modalInputHeadings'>Complete Details</p>
                <TextArea value={completeDetails} onChange={(e) => setCompleteDetails(e.target.value)} placeholder='Enter complete details' rows={3} className='modalInputs' />
                <p className='modalInputHeadings'>Inspect Date</p>
                <DatePicker className='modalDatepickerClass'
                    value={inspectDate !== null ? moment(inspectDate, 'DD-MM-YYYY') : null}
                    onChange={(date, dateString) => {
                        if (date) {
                            const formattedDate = moment(dateString).format('DD-MM-YYYY');
                            setInspectDate(formattedDate);
                        } else {
                            setInspectDate(null);
                        }

                    }}
                />
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
                <div className='modalButtonDiv'>
                    <Button loading={modalBtnLoading} onClick={handleUpdateOrder} className='modalSubmit'>Update</Button>
                </div>
            </Modal>
            <Modal className='editModalClass' title='View Repairs' open={viewModal} onCancel={handleCancelView} footer={null} >
                <p className='modalInputHeadings'>Customer First Name</p>
                <Input disabled value={customerFirstName} onChange={(e) => setCustomerFirstName(e.target.value)} placeholder='Enter customer first name' className='modalInputs' />
                <p className='modalInputHeadings'>Customer Last Name</p>
                <Input disabled value={customerLastName} onChange={(e) => setCustomerLastName(e.target.value)} placeholder='Enter customer last name' className='modalInputs' />
                <p className='modalInputHeadings'>Door Number</p>
                <Input disabled value={doorNumber} onChange={(e) => setDoorNumber(e.target.value)} placeholder='Enter door number' className='modalInputs' />
                <p className='modalInputHeadings'>Street</p>
                <Input disabled value={street} onChange={(e) => setStreet(e.target.value)} placeholder='Enter street' className='modalInputs' />
                <p className='modalInputHeadings'>City</p>
                <Input disabled value={city} onChange={(e) => setCity(e.target.value)} placeholder='Enter city' className='modalInputs' />
                <p className='modalInputHeadings'>District</p>
                <Input disabled value={district} onChange={(e) => setDistrict(e.target.value)} placeholder='Enter district' className='modalInputs' />
                <p className='modalInputHeadings'>Pincode</p>
                <Input disabled value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder='Enter pincode' className='modalInputs' />
                <p className='modalInputHeadings'>Contact Number</p>
                <Input disabled value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} placeholder='Enter contact number' className='modalInputs' />
                <p className='modalInputHeadings'>Category</p>
                <Input disabled value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Enter category' className='modalInputs' />
                <p className='modalInputHeadings'>Type</p>
                <Input disabled value={typeLoad} onChange={(e) => setTypeLoad(e.target.value)} placeholder='Enter type' className='modalInputs' />
                <p className='modalInputHeadings'>Brand</p>
                <Input disabled value={brandName} onChange={(e) => setBrandName(e.target.value)} placeholder='Enter brand' className='modalInputs' />
                <p className='modalInputHeadings'>Problems</p>
                <TextArea disabled value={problems} onChange={(e) => setProblems(e.target.value)} placeholder='Enter detailed problem' rows={3} className='modalInputs' />
                <p className='modalInputHeadings'>Date Of Service</p>
                <DatePicker disabled className='modalDatepickerClass' />
                <p className='modalInputHeadings'>Follow Date</p>
                <DatePicker disabled className='modalDatepickerClass' />
                <p className='modalInputHeadings'>Technician</p>
                <Select disabled
                    value={technician}
                    className='modalSelectClass'
                    placeholder="Select technician" />
                <p className='modalInputHeadings'>Payment Details</p>
                <Select disabled
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
                <DatePicker disabled className='modalDatepickerClass' />
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
            <h2 className='contentHeading'>All Orders</h2>
            <Row>
                <Col span={5}>
                    <Select style={{ width: '100%', height: '40px', marginBottom: '20px' }}
                        placeholder='Filter by'
                        value={filterBy}
                        options={[
                            {
                                label: 'Filter by Pincode',
                                value: 'pincode'
                            },
                            {
                                label: 'Filter by Date',
                                value: 'date'
                            },
                            {
                                label: 'Filter by Technician',
                                value: 'technician'
                            }
                        ]}
                        onChange={(val) => {
                            setFilteredData(tableItems);
                            setFilterBy(val)
                        }}
                    />
                </Col>
                {
                    filterBy === 'pincode' ?
                        <Col offset={1} span={6}>
                            <Input placeholder='Filter by Pincode' className='modalInputs'
                                onChange={(e) => handlePincodeFilters(e.target.value)}
                            />
                        </Col>
                        :
                        <></>
                }
                {
                    filterBy === 'date' ?
                        <Col offset={1} span={6}>
                            <DatePicker format={'DD-MM-YYYY'} onChange={handleDateFilter} placeholder='Filter by Date' className='filterDatePicker' />
                        </Col>
                        :
                        <></>
                }
                {
                    filterBy === 'technician' ?
                        <Col offset={1} span={6}>
                            <Input placeholder='Filter by Technician' className='modalInputs'
                                onChange={(e) => handleTechnicianFilters(e.target.value)}
                            />
                        </Col>
                        :
                        <></>
                }
                {
                    filterBy &&
                    <Col offset={1} span={4}>
                        <Button className='filterBtn' onClick={handleClearFilter}>Clear Filters</Button>
                    </Col>
                }

            </Row>
            <Table columns={columns} dataSource={pinCodeFilter || technicianFilter || dateFilter ? filteredData : tableItems} />
        </div>
    )
}

export default AllOrdersList