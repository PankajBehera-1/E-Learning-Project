import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const lineData = [
  { name: 'Week 1', students: 30 },
  { name: 'Week 2', students: 45 },
  { name: 'Week 3', students: 65 },
  { name: 'Week 4', students: 85 },
];

const barData = [
  { name: 'Courses', value: 50 },
  { name: 'Instructors', value: 15 },
  { name: 'Students', value: 300 },
];

const pieData = [
  { name: 'Completed', value: 80 },
  { name: 'Pending', value: 20 },
];

const COLORS = ['#0088FE', '#FFBB28'];

const DashboardPage = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>
      
      {/* Cards for Quick Metrics */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Students
              </Typography>
              <Typography variant="h5">
                300
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Active Courses
              </Typography>
              <Typography variant="h5">
                50
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Instructors
              </Typography>
              <Typography variant="h5">
                15
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Completed Courses
              </Typography>
              <Typography variant="h5">
                80%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3} style={{ marginTop: '24px' }}>
        {/* Line Chart - Student Growth */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Weekly Student Growth
              </Typography>
              <LineChart width={500} height={300} data={lineData}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#ccc" />
                <Tooltip />
                <Line type="monotone" dataKey="students" stroke="#8884d8" />
              </LineChart>
            </CardContent>
          </Card>
        </Grid>

        {/* Bar Chart - Course Statistics */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Platform Statistics
              </Typography>
              <BarChart width={500} height={300} data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#ccc" />
                <Tooltip />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </div>
  );
};

export default DashboardPage;
