import React from "react";
import Header from "./Header";
import MainContents from "./mainContents";
import TeenSection from "./TeenSection";
import KidSection from "./KidSection";
import { BlogData } from "./shared/BlogData";
import BlogPost from "./BlogPost";
import Footer from "./Footer";

function Index(props) {
  return (
    <div>
      <Header />
      <MainContents blogs={BlogData} />
      <TeenSection />
      {/* <KidSection /> */}
      <BlogPost blogs={BlogData} />
      <Footer />
    </div>
  );
}

export default Index;
