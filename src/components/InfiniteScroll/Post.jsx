import React, { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Post = ({ data, setPageNo, loading, hasMore }) => {
  useEffect(() => {
    if (!hasMore) return; // stop observer if no more data

    const posts = document.querySelectorAll(".post");
    const lastPost = posts[posts.length - 1];
    console.log(lastPost, "last post");

    const observer = new IntersectionObserver(
      (param) => {
        console.log(param, "param");
        if (param[0].isIntersecting) {
          observer.unobserve(param[0].target);
          setPageNo((pageNo) => pageNo + 1);
        }
      },
      { threshold: 0.1 }
    );
    if (lastPost) observer.observe(lastPost);

    return () => {
      if (lastPost) {
        observer.unobserve(lastPost);
      }
      observer.disconnect();
    };
  }, [data]);

  return (
    <div>
      {data.map((elem, i) => {
        return (
          <div
            className="post"
            key={i}
            style={{
              border: "2px solid red",
              marginBottom: "20px",
              padding: "10px",
            }}
          >
            {elem.id}: {elem.title}
            <p> {elem.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
