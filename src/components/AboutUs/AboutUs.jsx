import React from "react";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import Loader from "../shared/Loader";
import aboutImg from "../../assets/about-img.jpeg";

const AboutUs = () => {
  return (
    <Container maxWidth="lg">
      <Grid container mt={8} style={{ display: "flex" }}>
        {/* Author photo & titles */}
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography
            component="h3"
            variant="h5"
            mt={4}
            fontSize={60}
            fontWeight={800}
          >
            جی تاک
          </Typography>
          <Typography
            component="p"
            variant="h5"
            color="text.secondary"
            mt={2}
            mb={2}
          >
            تکنولوژی و اخبار
          </Typography>
        </Grid>

        <Grid item xs={12} mt={5}>
          <img
            src={aboutImg}
            alt="image"
            width="100%"
            style={{
              borderRadius: "1rem",
              height: "400px",
              objectFit: "cover",
            }}
          />
        </Grid>

        <Grid item xs={12} mt={5}>
          <Typography component="p" variant="p">
            ما به دنبال ارائه‌ی محتوای تازه و جذاب در حوزه‌هایی همچون تازه‌ترین
            اخبار فناوری، مقالات تحلیلی درباره‌ی رویدادها و توسعه‌های جدید در
            عرصه‌ی تکنولوژی هستیم. ما تمرکز داریم تا خوانندگان خود را با آخرین
            تغییرات و نوآوری‌ها در دنیای فناوری آشنا کرده و آن‌ها را درک بهتری
            از این عرصه فراهم کنیم. وبلاگ ما به عنوان یک منبع معتبر اخباری و
            اطلاعاتی در حوزه‌ی تکنولوژی مطالبی را منتشر می‌کند که هدفشان
            آگاهی‌بخشی و آموزش است. ما اعتقاد داریم که فناوری نقش حیاتی در زندگی
            روزمره دارد و به اشتراک گذاری دانش و اطلاعات در این زمینه می‌تواند
            به ارتقای دانش و توانمندی افراد کمک کند. هدف ما از این وبسایت ارتقاء
            دانش فناوری، ارائه نقد و تحلیل‌های مفید و ترویج استفاده مسئولانه از
            فناوری است. اینجا جایی است که تلاش می‌کنیم تا با ارائه محتواهای
            تنوع‌بخش و جذاب، خوانندگان را به جریانات فناوری همراهی کنیم و آن‌ها
            را در مسیری از اطلاعات و دانش قرار دهیم.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
