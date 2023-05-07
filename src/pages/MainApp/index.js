import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";
import { Footer, Header } from "../../components";
import "./mainApp.scss"

const MainApp = () => {
  return (
    <div className="main-app-wrapper"> 
      <div class="header-wrapper">
        <Header/>
      </div>
      <main className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/detail-blog" element={<DetailBlog />} />
        </Routes>
      </main>
      <div class="footer-wrapper">
        <Footer/>
      </div>
    </div>
  );
};

export default MainApp;
