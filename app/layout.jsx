"use client";
import Nav from "@components/Nav";
import "@styles/globals.css";

import regeneratorRuntime from "regenerator-runtime";
export const metadata = {
  title: "LingoMentor",
  description:
    "Your Personal Language Learning Companion for Fluent Communication",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
