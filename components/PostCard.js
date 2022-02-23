import React from "react";
import Image from "next/image";

const PostCard = (props) => {
  const post = props.data;
  const slug = post.slug.current;

  return (
    <div className="col-lg-4">
      <div className="card">
        {post.mainImage && (
            <img src={post.mainImage} />
        )}
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">
            {post.excerpt}
          </p>
          <a href={slug} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;