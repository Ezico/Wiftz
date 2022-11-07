import React from "react";
import { Link } from "react-router-dom";

const BottomBanner = ({ data }) => {
  console.log(data);
  return (
    <section
      style={{ backgroundImage: `url(${data?.midPageBanner})` }}
      className="buttom-banner"
    >
      <div className="container pt-90 pb-90">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <div className="content">
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.bannerText,
                }}
              />

              <br />
              <Link className="pt-10" to="/">
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
