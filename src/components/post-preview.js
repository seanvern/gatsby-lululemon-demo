import React from 'react';
import { css } from '@emotion/core';
import ReadLink from './read-link';

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      margin-top: 0.75rem;
      display: flex;
      margin-top: 0;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <div>
      <ReadLink to={post.slug}>
        <h3>{post.title}</h3>
      </ReadLink>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read this post</ReadLink>
    </div>
  </article>
);

export default PostPreview;
