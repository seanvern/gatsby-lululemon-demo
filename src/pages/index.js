import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>Hello lululemons!</h1>
      <Link to="/about">Learn More About Me!</Link>

      <h2>Read My Blog</h2>
      {posts.map(post => (
        <pre>{JSON.stringify(post, null, 2)}</pre>
      ))}
    </Layout>
  )
}
