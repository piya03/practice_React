import React, { useState, useEffect } from "react";
import Post from "./Post";

function InfiniteScrollIntersectionObserver() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  console.log(loading, "loading");

  async function apiCall({ pageNo }) {
    setLoading(true);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNo}`
    );
    const data = await res.json();
    console.log("🚀 ~ apiCall ~ data:", data);
    if (data.length === 0 || data.length < 10) {
      setHasMore(false);
    }
    setData((prevData) => {
      return [...prevData, ...data];
    });

    setLoading(false);
  }

  useEffect(() => {
    if (hasMore) {
      apiCall({ pageNo });
    }
  }, [pageNo]);

  return (
    <div>
      <Post
        data={data}
        setPageNo={setPageNo}
        loading={loading}
        hasMore={hasMore}
      />
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default InfiniteScrollIntersectionObserver;
