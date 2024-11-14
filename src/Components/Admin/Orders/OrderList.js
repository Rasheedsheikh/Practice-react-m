import React from 'react'
import CustomBreadcrumb from '../../CustomComponents/CustomBreadCrumb'
import { Space, Table } from 'antd';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';

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
                    <EditOutlined />
                    <EyeOutlined />
                </Space>
            )
        }
    ];



    return (
        <div>
            <CustomBreadcrumb items={breadcrumbItems} />
            <h2 className='contentHeading'>Orders</h2>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default OrderList