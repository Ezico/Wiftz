import ReactTagInput from "@pathofdev/react-tag-input";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import { Link, useNavigate } from "react-router-dom";
import AdminContent from "../components/AdminContent";
import AdminHeader from "../components/AdminHeader";
import "react-quill/dist/quill.snow.css";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
const initialState = {
  title: "",
  FeaturedImage: "",
  Category: "",
  timestamp: "",
  list: [],
};

const CreateResource = ({ user, handleLogout }) => {
  const [form, setForm] = useState(initialState);
  const [progress, setProgress] = useState(null);
  const [descriptionvalue, setDescriptionValue] = useState();
  const { title, FeaturedImage, Category, Description, timestamp, list } = form;
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTags = (tags) => {
    setForm({ ...form, tags });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formatedDescrition = "<div>" + descriptionvalue + "</div>";
    var urlspc = title
      .replace(/[&\/\\ #,+()$~%.'":*?<>{}]/g, "-")
      .toLowerCase();
    var nospc = urlspc.replace(/[|&\/\\#,+()$~%.'":*?<>{}]/g, "").toLowerCase();
    var url = nospc.replaceAll(/--/g, "-");
    let newDoc = {
      ...form,
      description: formatedDescrition,
    };
    console.log(newDoc);
    if (Category && title && FeaturedImage) {
      try {
        await addDoc(collection(db, "Resources"), {
          ...newDoc,
          url: url,
          timestamp: timestamp,
          author: user.displayName,
          userId: user.uid,
          date: serverTimestamp(),
        });
        toast.success("Post Created Successfully");
      } catch (err) {
        console.log(err);
      }
    }
    navigate("/admin/resources");
  };
  return (
    <>
      <AdminHeader user={user} handleLogout={handleLogout} />
      <div class="wrapperx d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <div class="d-flex flex-column flex-lg-row flex-column-fluid">
          <div class="w-lg-75 pt-5" style={{ margin: "0 auto" }}>
            <div class="card card-custom">
              <form className="" onSubmit={handleSubmit}>
                <div class="card-header">
                  <div class="card-title">
                    <h1 class="fw-bolder mb-3">Create Resource</h1>
                  </div>
                  <div class="card-toolbar">
                    <a href="/admin">
                      <button type="button" class="btn btn-sm btn-primary">
                        CANCEL
                      </button>
                    </a>
                  </div>
                </div>
                <div class="card-scroll">
                  <div class="d-flex flex-center flex-column flex-lg-row-fluid">
                    <div class="" style={{ width: "95%" }}>
                      <div class="fv-row mb-8 fv-plugins-icon-container">
                        <label class="text-gray-500" for="title">
                          Resource Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          autocomplete="off"
                          class="form-control bg-transparent"
                          value={title}
                          onChange={handleChange}
                        />
                        <div class="fv-plugins-message-container invalid-feedback"></div>
                      </div>

                      <div class="fv-row mb-8 fv-plugins-icon-container">
                        <label class="text-gray-500" for="title">
                          Description
                        </label>
                        <ReactQuill
                          type="text"
                          value={descriptionvalue}
                          onChange={setDescriptionValue}
                          name="Description"
                          autocomplete="off"
                          class="form-control bg-transparent"
                        />
                        <div class="fv-plugins-message-container invalid-feedback"></div>
                      </div>

                      <div class="fv-row mb-8 fv-plugins-icon-container">
                        <div className="row">
                          <div className="col">
                            <label class="text-gray-500" for="title">
                              Resource Category
                            </label>
                            <input
                              type="text"
                              name="Category"
                              autocomplete="off"
                              class="form-control bg-transparent"
                              value={Category}
                              onChange={handleChange}
                              style={{ width: "80%" }}
                            />
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                          </div>
                          <div className="col">
                            <label class="text-gray-500" for="title">
                              Date
                            </label>
                            <input
                              type="text"
                              name="timestamp"
                              autocomplete="off"
                              class="form-control bg-transparent"
                              value={timestamp}
                              onChange={handleChange}
                              style={{ width: "80%" }}
                            />
                            <div class="fv-plugins-message-container invalid-feedback"></div>
                          </div>
                        </div>
                      </div>
                      <div class="fv-row mb-8 fv-plugins-icon-container">
                        <label class="text-gray-500" for="title">
                          Featured Image
                        </label>
                        <input
                          type="text"
                          name="FeaturedImage"
                          autocomplete="off"
                          class="form-control bg-transparent"
                          value={FeaturedImage}
                          onChange={handleChange}
                          style={{ width: "33%" }}
                        />
                        <div class="fv-plugins-message-container invalid-feedback"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="d-grid mb-10">
                    <button
                      type="submit"
                      id="kt_sign_in_submit"
                      className="btn btn-dark"
                    >
                      {/* <!--begin::Indicator label--> */}
                      <span className="indicator-label">Create</span>
                      {/* <!--end::Indicator label--> */}
                      {/* <!--begin::Indicator progress--> */}
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                      {/* <!--end::Indicator progress--> */}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <AdminContent user={user} />
    </>
  );
};

export default CreateResource;
