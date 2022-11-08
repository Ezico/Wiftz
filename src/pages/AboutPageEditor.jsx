import React, { useEffect, useState } from "react";
import AdminContent from "../components/AdminContent";
import AdminHeader from "../components/AdminHeader";
import { db } from "../firebase";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  title1: "",
  subtitle1: "",
  title2: "",
  subtitle2: "",
  email: "",
  phone: "",
  bannerImg: "",
  otherImages: "",
  image1: "",
  image2: "",
  image3: "",
  image4: "",
  heroBannerMobile: "",
};

const AboutPageEditor = ({ user, handleLogout }) => {
  const [form, setForm] = useState(initialState);
  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    title1,
    subtitle1,
    title2,
    subtitle2,
    email,
    phone,
    bannerImg,
    image1,
    image2,
    image3,
    image4,
    heroBannerMobile,
  } = form;

  const id = "Cw1TrtdA382NCnAzNcIu";
  useEffect(() => {
    id && getAboutDetail();
  }, [id]);

  const getAboutDetail = async () => {
    const docRef = doc(db, "AboutDetails", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setForm({ ...snapshot.data() });
    }
  };
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateDoc(doc(db, "AboutDetails", id), {
        ...form,
        timestamp: serverTimestamp(),
        author: user.displayName,
        userId: user.uid,
      });
      toast.success("Post Updated Successfully");
    } catch (err) {
      console.log(err);
    }

    navigate("/admin");
  };
  return (
    <>
      <AdminHeader user={user} handleLogout={handleLogout} />

      <div
        className="wrapper d-flex flex-column flex-row-fluid"
        id="kt_wrapper"
      >
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
            <div className="d-flex flex-center flex-column flex-lg-row-fluid">
              <div className="w-75  p-10">
                <div className="text-center mb-11">
                  <h1 className=" text-light fw-bolder mb-3">About Content</h1>
                </div>

                <form className="" onSubmit={handleSubmit}>
                  <div className="fv-row mb-8 fv-plugins-icon-container">
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <input
                        type="text"
                        placeholder="Header Title"
                        name="title1"
                        autocomplete="off"
                        value={title1}
                        className="form-control"
                        onChange={handleChange}
                      />

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>

                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <input
                        type="text"
                        placeholder="Header sub-title"
                        name="subtitle1"
                        autocomplete="off"
                        value={subtitle1}
                        className="form-control"
                        onChange={handleChange}
                      />

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <input
                        type="text"
                        placeholder="Second Title"
                        name="title2"
                        autocomplete="off"
                        value={title2}
                        className="form-control"
                        onChange={handleChange}
                      />

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <input
                        type="text"
                        placeholder="second sub-title"
                        name="subtitle2"
                        autocomplete="off"
                        value={subtitle2}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <input
                        type="text"
                        placeholder="Company Email Address"
                        name="email"
                        autocomplete="off"
                        value={email}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <input
                        type="text"
                        placeholder="Company Phone Number"
                        name="phone"
                        autocomplete="off"
                        value={phone}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div class="mb-10">
                    {bannerImg ? <img className="w-100" src={bannerImg} /> : ""}
                    <input
                      type="text"
                      placeholder="Hero Banner Image"
                      name="bannerImg"
                      autocomplete="off"
                      value={bannerImg}
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div class="fv-row mb-8 fv-plugins-icon-container">
                    <div class="mb-10">
                      {heroBannerMobile ? (
                        <img className="w-100" src={heroBannerMobile} />
                      ) : (
                        ""
                      )}
                      <label>Hero Banner (Mobile)</label>
                      <input
                        type="text"
                        placeholder="Hero Banner"
                        name="heroBannerMobile"
                        autocomplete="off"
                        value={heroBannerMobile}
                        className="form-control bg-transparent"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row mb-8 fv-plugins-icon-container">
                    <div class="col-4 mb-8 fv-plugins-icon-container">
                      <div class="mb-10">
                        {image1 ? (
                          <img className="previewThumbnail" src={image1} />
                        ) : (
                          ""
                        )}
                        <input
                          type="text"
                          placeholder="Image 1"
                          name="image1"
                          autocomplete="off"
                          value={image1}
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="col-4 mb-8 fv-plugins-icon-container">
                      <div class="mb-10">
                        {image2 ? (
                          <img className="previewThumbnail" src={image2} />
                        ) : (
                          ""
                        )}
                        <input
                          type="text"
                          placeholder="Image Two"
                          name="image2"
                          autocomplete="off"
                          value={image2}
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="col-4 mb-8 fv-plugins-icon-container">
                      <div class="mb-10">
                        {image3 ? (
                          <img className="previewThumbnail" src={image3} />
                        ) : (
                          ""
                        )}
                        <input
                          type="text"
                          placeholder="image Three"
                          name="image3"
                          autocomplete="off"
                          value={image3}
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="col-4 mb-8 fv-plugins-icon-container">
                      <div class="mb-10">
                        {image4 ? (
                          <img className="previewThumbnail" src={image4} />
                        ) : (
                          ""
                        )}
                        <input
                          type="text"
                          placeholder="image Four"
                          name="image4"
                          autocomplete="off"
                          value={image4}
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="d-grid mb-10">
                    <button
                      type="submit"
                      id="kt_sign_in_submit"
                      className="btn btn-primary"
                    >
                      {/* <!--begin::Indicator label--> */}
                      <span className="indicator-label">Update</span>
                      {/* <!--end::Indicator label--> */}
                      {/* <!--begin::Indicator progress--> */}

                      {/* <!--end::Indicator progress--> */}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdminContent user={user} />
    </>
  );
};

export default AboutPageEditor;
