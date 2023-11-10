import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POST_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";

const BlogPage = () => {
  const { slug } = useParams();

  // Define a navigate for arrow icon to go to previous route
  const navigate = useNavigate();

  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <h3>Something went wrong!</h3>;

  return (
    <Container maxWidth="lg">
      <Grid container>
        {/* Title & back icon */}
        <Grid
          item
          xs={12}
          mt={9}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            component="h2"
            variant="h5"
            color="primary"
            fontWeight={700}
          >
            {data.post.title}
          </Typography>
          <ArrowBackRoundedIcon
            color="primary"
            onClick={() => navigate(-1)}
            sx={{ cursor: "pointer" }}
          />
        </Grid>

        {/* Cover Photo */}
        <Grid item xs={12} mt={5}>
          <img
            src={data.post.coverPhoto.url}
            alt={data.post.slug}
            width="100%"
            style={{
              borderRadius: "1rem",
              height: "400px",
              objectFit: "cover",
            }}
          />
        </Grid>

        {/* Author info */}
        <Grid item xs={12} mt={5} display="flex" alignItems="center">
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h6" fontWeight={700}>
              {data.post.author.name}
            </Typography>
            <Typography
              component="p"
              variant="p"
              fontWeight={500}
              color="text.secondary"
            >
              {data.post.author.field}
            </Typography>
          </Box>
        </Grid>

        {/* Post content */}
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.post.content.html),
            }}
          ></div>
        </Grid>
      </Grid>

      {/* Comment form */}
      <Grid item xs={12}>
        <CommentForm slug={slug} />
      </Grid>

      {/* Showing Comment */}
      <Grid item xs={12}>
        <Comments slug={slug} />
      </Grid>
    </Container>
  );
};

export default BlogPage;
