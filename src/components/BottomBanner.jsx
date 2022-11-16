import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "./Skeleton";

const BottomBanner = ({ data, loading }) => {
  if (loading) {
    return <Skeleton />;
  }
  return (
    <section
      style={{ backgroundImage: `url(${data?.midPageBanner})` }}
      className="buttom-banner"
    >
      <div className="wrapper pt-90 pb-90">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <div className="content">
              <div
                className="text-content"
                dangerouslySetInnerHTML={{
                  __html: data?.bannerText,
                }}
              />

              <br />
              <Link className="pt-10 fom" to="/">
                Find out More
              </Link>
            </div>
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;
