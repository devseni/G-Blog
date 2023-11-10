import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    // <footer style={{ marginTop: "5rem" }}>
    <footer style={{ marginTop: "5rem" }}>
      <Typography
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        color="gray"
        padding="1.5rem 0"
        textAlign="center"
      >
        جی بلاگ ، تکنولوژی و اخبار | تمامی حقوق برای بلاگ محفوظ است
      </Typography>
    </footer>
  );
};

export default Footer;
