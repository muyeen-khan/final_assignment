import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="px-6 py-5">{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;
