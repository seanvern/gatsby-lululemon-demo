import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout';

export default () =>
  <Layout>
    <h1>Hello lululemons!</h1>
    <Link to="/about">Learn More About Me!</Link>
  </Layout>;