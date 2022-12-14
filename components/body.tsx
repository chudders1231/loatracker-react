import * as React from 'react';
import '../style/main.css';

import BlogPost from './blog-post';

export default function Body() {
  return (
    <div className="body">
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </div>
  );
}
