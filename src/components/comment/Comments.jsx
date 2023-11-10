import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POST_COMMENTS } from "../../graphql/queries";
import { Avatar, Box, Grid, Typography } from "@mui/material";

const Comments = ({ slug }) => {
  const { loading, data, error } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });
  if (loading) return null;
  if (error) return <h3>Something went wrong!</h3>;

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.2) 0px 4px 12px",
        borderRadius: ".7rem",
        py: 1,
        mt: 3,
        mb: 3,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          کامنت ها
        </Typography>

        {data.comments.length > 0 ? (
          data.comments.map((comment) => (
            <Grid
              item
              xs={12}
              key={comment.id}
              m={2}
              p={2}
              border="1px solid silver"
              borderRadius={1.5}
            >
              <Box component="div" display="flex" alignItems="center">
                <Avatar>{comment.name[0]}</Avatar>
                <Typography
                  component="span"
                  variant="p"
                  fontWeight={700}
                  mr={1}
                >
                  {comment.name}
                </Typography>
              </Box>
              <Typography component="p" fontSize={13} mt={2}>
                {comment.text}
              </Typography>
            </Grid>
          ))
        ) : (
          <Grid xs={12}>
            <Typography
              component="h4"
              variant="h6"
              style={{
                display: "flex",
                justifyContent: "center",
                color: "silver",
              }}
            >
              هیچ کامنتی ثبت نشده است
            </Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Comments;
