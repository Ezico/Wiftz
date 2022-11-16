import React from "react";

const AboutText = ({ data }) => {
  console.log(data);
  return (
    <section
      style={{ backgroundImage: `url(${data?.bannerBImg})` }}
      className="buttom-banner"
    >
      <div className="wrapper pt-90 pb-90">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <div className="content">
              <div
                className="text-content"
                dangerouslySetInnerHTML={{
                  __html: data?.bannerB,
                }}
              />

              <br />
              <a className="pt-10 fom" href="/">
                Find out More
              </a>
            </div>
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutText;
