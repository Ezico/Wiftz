import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import Email from "../assets/images/email.png";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  const [data, setData] = useState();
  const [active, setActive] = useState(null);
  const id = "Cw1TrtdA382NCnAzNcIu";

  useEffect(() => {
    id && getHomeDataFromDB();
    setActive("Contact");
  }, [id]);

  const getHomeDataFromDB = async () => {
    const docRef = doc(db, "AboutDetails", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setData({ ...snapshot.data() });
    }
  };
  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header active={active} />
      <div className="container-fluid pt-90">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="contant">
                <p style={{ color: "#585AA8" }}>CONTACT US</p>
                <h2 className="podcast-title">How can we help you?</h2>
                <p className="text-light">
                  Kindly, fil the form to get in to with us. We promise to
                  respond to your message within the shortest time possible.
                </p>
                <br />
                {/* <button class="secondary btn large">
                  <span>
                    <img className="ico-contact" src={Call} alt="" />
                  </span>
                  {data?.phone}
                </button>
                <br />
                <br /> */}
                <button class="secondary btn large">
                  <span>
                    <img className="ico-contact" src={Email} alt="" />
                  </span>
                  <span> {data?.email}</span>
                </button>
                <br />
                <br />
                {/* <button class="secondary btn large">
                  <span>
                    <img className="ico-contact" src={Web} alt="" />
                  </span>
                  www.wiftzpodcast.com
                </button> */}
                <br />
                <br />
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="form-container">
                <div className="form-content">
                  <form name="contact" method="POST">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="form">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="form">
                      <label htmlFor="Subject">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Enter a subject here"
                      />
                    </div>
                    <div className="form">
                      <label htmlFor="message">Message</label>
                      <textarea
                        style={{ resize: "none" }}
                        type="text"
                        name="message"
                        placeholder="Write here.."
                      ></textarea>
                    </div>

                    <button
                      style={{ float: "right", marginTop: "35px" }}
                      className="primary btn large"
                      type="submit"
                    >
                      Send
                    </button>
                    <br />
                    <br />
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default Contact;
