import React, { useEffect, useState } from "react";

import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

import Link from "next/link";
import Image from "next/image";

import { sanityClient } from "../sanityClient";

const BlogPost = (props) => {

  const { title, body, image } = props;

  const [imageUrl, setImageUrl] = useState("");
  
  useEffect(() => {
    const imageBuilder = imageUrlBuilder(sanityClient);
    setImageUrl(imageBuilder.image(image));
  }, [image]);

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {title}
          </li>
        </ol>
      </nav>

      <div className="post-content-wrap">
        <h1>{title}</h1>
        {imageUrl && 
        <img className="img-fluid" src={imageUrl} />}
        
        <BlockContent blocks={body} />
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {

  const pageSlug = context.query.slug;
  console.log(pageSlug);

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}" ]`
  );
  const url = `${process.env.SANITY_URL}query=${query}`;

  const data = await fetch(url).then((res) => res.json());
  const post = data.result[0];
//   console.log(post);

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        title: post.title,
        body: post.body,
        image: post.mainImage,
      },
    };
  }
};

export default BlogPost;