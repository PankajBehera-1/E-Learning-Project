import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Grid } from '@mui/material';
import style from "./course.module.css"

const CreateCourses = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    duration: '',
    price: '',
    category: '',
    instructor: '',
    enrolledPersons: '',
    image: '',
    lastUpdated: '',
    language: '',
  });

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle course creation logic here (e.g., API call)
    console.log(courseData);
  };

  return (
    <Container className="mainCon mt-3">
      <h3>Create Course</h3>
      <Form onSubmit={handleSubmit} style={{marginLeft:"0px"}}>
        <Row> 
          <Col md={6}>
            <Form.Group controlId="formTitle">
              <Form.Label>Course Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter course title"
                value={courseData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formDuration">
              <Form.Label>Course Duration (hours)</Form.Label>
              <Form.Control
                type="number"
                name="duration"
                placeholder="Enter course duration"
                value={courseData.duration}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Group controlId="formDescription">
              <Form.Label>Course Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                placeholder="Enter course description"
                value={courseData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formPrice">
              <Form.Label>Course Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Enter course price"
                value={courseData.price}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                placeholder="Enter course category"
                value={courseData.category}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formInstructor">
              <Form.Label>Instructor</Form.Label>
              <Form.Control
                type="text"
                name="instructor"
                placeholder="Enter instructor name"
                value={courseData.instructor}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEnrolledPersons">
              <Form.Label>Enrolled Persons</Form.Label>
              <Form.Control
                type="number"
                name="enrolledPersons"
                placeholder="Enter number of enrolled persons"
                value={courseData.enrolledPersons}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Group controlId="formImage">
              <Form.Label>Course Image URL</Form.Label>
              <Form.Control
                type="url"
                name="image"
                placeholder="Enter course image URL"
                value={courseData.image}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formLastUpdated">
              <Form.Label>Last Updated On</Form.Label>
              <Form.Control
                type="date"
                name="lastUpdated"
                value={courseData.lastUpdated}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formLanguage">
              <Form.Label>Language</Form.Label>
              <Form.Control
                type="text"
                name="language"
                placeholder="Enter course language"
                value={courseData.language}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Grid container justifyContent="flex-end" style={{ marginTop: '20px' }}>
            <Button type="submit" className={style.Btn}>
              Create Course
            </Button>
          </Grid>

      </Form>
    </Container>
  );
};

export default CreateCourses;
