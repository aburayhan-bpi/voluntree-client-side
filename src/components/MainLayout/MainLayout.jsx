import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    // className="bg-cover bg-center bg-[url('https://i.ibb.co/xM5qkdy/mainBg.png')]"
    <div>
      <div className="min-h-screen">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="max-w-7xl mx-auto px-4 pt-24">
          <Outlet></Outlet>
        </main>
      </div>
      <footer className="">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
