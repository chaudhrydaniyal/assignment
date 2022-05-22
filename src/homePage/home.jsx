import React from "react";
import BlogsSection from "../components/blogsSection/blogsSection";
import Header from "../components/header/header";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <BlogsSection />
    </React.Fragment>
  );
}
