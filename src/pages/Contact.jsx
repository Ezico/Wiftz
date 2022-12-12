import React, { useEffect, useState, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import Email from "../assets/images/email.png";
import emailjs from "@emailjs/browser";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import Skeleton from "../components/Skeleton";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = ({ loading }) => {
  const [data, setData] = useState();
  const [active, setActive] = useState(null);
  const [passed, setPassed] = useState(false);
  const id = "Cw1TrtdA382NCnAzNcIu";

  const onChange = () => {
    setPassed(true);
  };
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
  //email function

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u82ttiw",
        "template_vuly37i",
        form.current,
        "b4I2DIDCQLNVOeFQC"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!");
          e.target.reset();
        },
        (error) => {
          toast.error("Message Not Sent!");
          e.target.reset();
        }
      );
  };
  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header active={active} />
      <div className="container-fluid pt-90">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-6 ">
              <div className="contant">
                <p style={{ color: "#585AA8" }}>CONTACT US</p>
                <h2 className="podcast-title">{data?.contactTitle}</h2>
                <p className="text-light">{data?.contactSubTitle}</p>
                <br />
                {/* <button class="secondary btn large">
                  <span>
                    <img className="ico-contact" src={Call} alt="" />
                  </span>
                  {data?.phone}
                </button>
                <br />
                <br /> */}
                <button
                  style={{
                    border: "solid",
                    border: "solid 1px #F5F5F5",
                    color: "white",
                    fontWeight: "500",
                  }}
                  className="secondary btn large"
                  disabled
                >
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
                  <form ref={form} onSubmit={sendEmail}>
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
                      <label htmlFor="email">Full Name</label>
                      <input
                        type="text"
                        name="Full Name"
                        placeholder="Enter Name"
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
                    <div className="form">
                      <ReCAPTCHA
                        theme="dark"
                        sitekey="6LdggGkjAAAAAByp0Ygr2NMCsntqHZT5nE9BpyPQ"
                        onChange={onChange}
                        style={{
                          marginLeft: "11px",
                        }}
                      />
                    </div>

                    <button
                      style={{ float: "right", marginTop: "35px" }}
                      className="primary btn large"
                      type="submit"
                      disabled={!passed}
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
