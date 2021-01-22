import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash/get';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Button,
} from 'antd';

import { Search } from '../../components/Search';
import { CourseInfo } from '../../components/CourseInfo';
import { getCoursesAction } from '../../redux/actions';
import { CONSTANTS } from '../../constants';

const CoursesComponent = ({
  courses = [],
  getCourses,
}) => {
  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <Row justify="space-between">
        <Col>
          <Search />
        </Col>
        <Col>
          <Link to={CONSTANTS.ROUTE.CREATE_COURSE}>
            <Button size="large">Add course</Button>
          </Link>
        </Col>
      </Row>
      {courses.map(course => (
        <CourseInfo
          key={course.id}
          {...course}
        />
      ))}

    </>
  );
};

CoursesComponent.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    duration: PropTypes.string,
    creationDate: PropTypes.string,
    description: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string),
  })),
  getCourses: PropTypes.func.isRequired,
};

export const Courses = connect(
  state => ({ courses: get(state, 'courses.courses', []) }),
  dispatch => ({ getCourses: () => dispatch(getCoursesAction()) }),
)(CoursesComponent);
