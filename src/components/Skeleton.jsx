import React from "react";

export default function Skeleton({ type }) {
  const HeroSkeleton = () => (
    <div className="heroSk">
      <div className="container">
        <div className="row">
          <div className="pd-introSk col-md-6 col-sm-12">
            <div className="hero-contentSk">
              <h2></h2>
              <h2></h2>
              <h2></h2>
              <h2></h2>
              <h2></h2>
              <h2></h2>
              <h2></h2> <h2></h2>
            </div>
            <p></p>
            <div className="row btn-container">
              {/* <div className="col-4">
                <button className="primarySk btn large mw-110"></button>
              </div>
              <div className="col-8">
                <button className="secondary btn large"></button>
              </div> */}
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="imageLoaderBgSk"></div>
          </div>
        </div>
      </div>
    </div>
  );
  return <HeroSkeleton />;
}
