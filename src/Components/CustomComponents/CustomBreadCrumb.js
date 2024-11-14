// src/components/CustomBreadcrumb.js
import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const CustomBreadcrumb = ({ items }) => {
    return (
        <Breadcrumb>
            {items.map((item, index) => (
                <Breadcrumb.Item key={index}>
                    {item.link ? (
                        <Link to={item.link}>{item.label}</Link>
                    ) : (
                        item.label
                    )}
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
};

export default CustomBreadcrumb;
