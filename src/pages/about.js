import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>This is the About Page</h1>
    <p>This is the About Page</p>
    <Link to="/">Head back to Home Page</Link>
  </Layout>
)