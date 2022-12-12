import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminContent from "../components/AdminContent";
import AdminHeader from "../components/AdminHeader";
import { db } from "../firebase";

const initialState = {
  banner: "",
  title: "",
  subtitle: "",
};

const ResourcePageEditor = ({ user, handleLogout }) => {
  const id = "Yo1vL9GrpDHTa4FyZbgd";
  const [form, setForm] = useState(initialState);
  const { banner, title, subtitle } = form;
  useEffect(() => {
    id && getResourceDetail();
  }, [id]);

  const getResourceDetail = async () => {
    const docRef = doc(db, "ResourcesDetails", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setForm({ ...snapshot.data() });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      await updateDoc(doc(db, "ResourcesDetails", id), {
        ...form,
        date: serverTimestamp(),
      });
      toast.success("Page Content Updated Successfully");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <AdminHeader user={user} handleLogout={handleLogout} />
      <div
        className="wrapperx d-flex flex-column flex-row-fluid"
        id="kt_wrapper"
      >
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 pt-10 order-2 order-lg-1">
            <div className="d-flex flex-center flex-column flex-lg-row-fluid">
              <div className="w-100  p-10">
                <form className="" onSubmit={handleSubmit}>
                  <div className="text-center mb-11">
                    <h1 className=" text-light fw-bolder mb-3">
                      Resources Page Content
                    </h1>
                  </div>
                  <div className="fv-row mb-8 fv-plugins-icon-container">
                    <input
                      type="text"
                      placeholder="Header Title"
                      name="title"
                      autocomplete="off"
                      value={title}
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="fv-row mb-8 fv-plugins-icon-container">
                    <textarea
                      type="text"
                      placeholder="Header sub-title"
                      name="subtitle"
                      autocomplete="off"
                      value={subtitle}
                      className="form-control"
                      onChange={handleChange}
                    />

                    <div className="fv-plugins-message-container invalid-feedback"></div>
                  </div>

                  <div class="mb-10">
                    {banner ? <img className="w-100" src={banner} /> : ""}
                    <input
                      type="text"
                      placeholder="Hero Banner Image"
                      name="banner"
                      autocomplete="off"
                      value={banner}
                      className="form-control"
                      onChange={handleChange}
                    />
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

export default ResourcePageEditor;
