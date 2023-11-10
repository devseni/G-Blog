import React from "react";
import Layout from "./components/layout/index";
import HomePage from "./components/home/HomePage";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./components/blog/BlogPage";
import AuthorPage from "./components/authors/AuthorPage";
import ScrollToTop from "./components/shared/ScrollToTop";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Layout>
  );
}

export default App;
