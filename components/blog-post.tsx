import * as React from 'react';
import '../style/main.css';
import '../style/blog.css';

export default function BlogPost() {
  return (
    <div className="blog-post">
      <div className="timeline-bar"></div>
      <div className="blogContent">
        <div className="timeline-blob"></div>
        <h1>Lost Ark Tracker</h1>
        <h2>To track all the things that needs to be tracked</h2>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <div className="blog-divider"></div>
      </div>
    </div>
  );
}
