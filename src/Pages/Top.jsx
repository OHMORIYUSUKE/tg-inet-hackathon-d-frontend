import Header from "../components/Header";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import Grid from "@mui/material/Grid";

import axios from "axios";

import React, { useState, useEffect } from "react";

function Top() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:5000/places");
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  console.log(posts);

  return (
    <>
      <Header pageName="トップページ" />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ padding: "0 2em" }}
      >
        {posts.map((data) => (
          <Grid item xs={2} sm={4} md={4}>
            <PostCard
              id={data.id}
              name={data.title}
              image_url={data.image_url}
            />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </>
  );
}

export default Top;
