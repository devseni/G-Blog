import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

// a helper function to shortened long title string
const titleShortened = (title) => {
  const words = title.split(" ");
  const shortenedWords = words.slice(0, 3);
  const shortenedTitle = shortenedWords.join(" ");
  return `${shortenedTitle}...`;
};

const CardEL = ({ title, slug, coverPhoto, author }) => {
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.2) 0px 4px 12px", borderRadius: ".7rem" }}>
      {author && (
        <CardHeader
          avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
          title={
            <Typography component="p" color="text.primary" fontWeight={700} fontSize="1rem">
              {author.name}
            </Typography>
          }
        />
      )}

      <CardMedia component="img" height="194" image={coverPhoto.url} alt={slug} />
      <CardContent>
        <Typography component="h3" variant="h6" color="text.primary" fontWeight={600}>
          {titleShortened(title)}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/blogs/${slug}`} style={{ textDecoration: "none", width: "100%" }}>
          <Button variant="outlined" size="small" sx={{ width: "100%", borderRadius: 3 }}>
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardEL;
