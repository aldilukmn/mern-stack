import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";

const MainApp = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/detail-blog" element={<DetailBlog />} />
        </Routes>
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default MainApp;
