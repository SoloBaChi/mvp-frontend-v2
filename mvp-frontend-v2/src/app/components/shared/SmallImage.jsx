"use client"
import React from "react";
import "../../styles/MainContents.css";

const SmallImage = ({ src, alt }) => {
  return (
    <div className="rounded-image" style={{ position: "absolute" }}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default SmallImage;
