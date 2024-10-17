import React, { useState } from 'react';
import { Container, Row, Col, Form, Table, Button } from 'react-bootstrap';

const ReportsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Sample report data
  const reports = [
    { id: 1, title: 'Course Completion', date: '2024-10-01', status: 'Completed' },
    { id: 2, title: 'User Engagement', date: '2024-10-05', status: 'Pending' },
    { id: 3, title: 'Feedback Summary', date: '2024-10-10', status: 'In Progress' },
    { id: 4, title: 'Sales Report', date: '2024-10-12', status: 'Completed' },
  ];

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>Reports</h1>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Control
            type="text"
            placeholder="Search Reports..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </Col>
        <Col>
          <Button variant="primary">Generate Report</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {reports
                .filter(report => 
                  report.title.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map(report => (
                  <tr key={report.id}>
                    <td>{report.id}</td>
                    <td>{report.title}</td>
                    <td>{report.date}</td>
                    <td>{report.status}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ReportsPage;
