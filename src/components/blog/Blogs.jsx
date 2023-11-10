import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import { Grid } from "@mui/material";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

const Blogs = () => {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);

  if (loading) return <Loader/>;
  if (error) return <h3>Something went wrong!</h3>;

  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid item key={post.id} xs={12} sm={6} md={4}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Blogs;
