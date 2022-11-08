import { React, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";

const Terms = ({ data }) => {
  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className="content">
        <img
          className="poa"
          src="https://firebasestorage.googleapis.com/v0/b/wiftz-podcasts.appspot.com/o/innerpages.png?alt=media&token=7a6de194-53eb-4057-8810-d2692761ce93"
        />
        <div className="container">
          <div class="pt-90 pb-90">
            <div class="hero-content ">
              <center>
                <h2>Terms of Use</h2>
              </center>
            </div>
          </div>
          <br />
          <div className="innerContent">
            <div
              className="text-light"
              dangerouslySetInnerHTML={{
                __html: data?.terms,
              }}
            />
          </div>
        </div>
      </section>
      <Subscribe />
      <Footer />
    </>
  );
};

export default Terms;
