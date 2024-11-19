// NotificationProvider.js
import { notification } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const NotificationProvider = {
    showError: (message, description) => {
        notification.error({
            message: message || 'Error',
            description: description || 'Something went wrong!',
            icon: <CloseCircleOutlined style={{ color: '#ff4d4f' }} />,
        });
    },
    showSuccess: (message, description) => {
        notification.success({
            message: message || 'Success',
            description: description || 'Operation completed successfully!',
            icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
        });
    },
    showWarning: (message, description) => {
        notification.warning({
            message: message || 'Warning',
            description: description || 'Please check your input.',
            icon: <ExclamationCircleOutlined style={{ color: '#faad14' }} />,
        });
    },
};

export default NotificationProvider;