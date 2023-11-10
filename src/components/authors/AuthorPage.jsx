import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

const AuthorPage = () => {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <h3>Something went wrong!</h3>;

  // Destructuring author and it's elements from data
  const {
    author: { name, field, avatar, description, posts },
  } = data;

  return (
    <Container maxWidth="lg">
      <Grid container mt={8}>
        {/* Author photo & titles */}
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" mt={4} fontWeight={700}>
            {name}
          </Typography>
          <Typography
            component="p"
            variant="h5"
            color="text.secondary"
            mt={2}
            mb={2}
          >
            {field}
          </Typography>
        </Grid>

        {/* Author description */}
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(description.html),
            }}
          ></div>
        </Grid>

        {/* Author posts */}
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h6" fontWeight={600}>
            مقالات {name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEL
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorPage;
