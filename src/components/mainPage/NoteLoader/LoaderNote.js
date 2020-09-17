import React from "react";
import ContentLoader from "react-content-loader";

const LoaderNote = () => {
  return (
    <ContentLoader
      className="preloader-content notes-item"
      speed={2}
      width={282}
      height={350}
      viewBox="0 0 282 350"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="-75" y="-81" rx="0" ry="0" width="420" height="503" />
    </ContentLoader>
  );
};

export default LoaderNote;
