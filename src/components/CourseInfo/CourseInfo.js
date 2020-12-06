import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Badge,
} from 'antd';
import {
  CalendarOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const CourseInfo = ({
  title,
  creationDate,
  duration,
  description,
  id,
}) => {
  return (
    <Badge.Ribbon
      text={duration}
      color="lime"
    >
      <Card
        title={title}
        actions={[
          <Link to={`/courses/${id}`}><EditOutlined key="edit" /></Link>,

          <DeleteOutlined key="remove" />,
        ]}
        style={{ marginTop: 20 }}
      >
        {description}
        <div>
          <CalendarOutlined /> {creationDate}
        </div>
      </Card>
    </Badge.Ribbon>
  );
};

CourseInfo.propTypes = {
  title: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
