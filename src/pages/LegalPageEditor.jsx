import React, { useEffect, useState } from "react";
import AdminContent from "../components/AdminContent";
import AdminHeader from "../components/AdminHeader";
import { db } from "../firebase";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const initialState = {
  cookies: "",
  policy: "",
  terms: "",
  Pop: "",
};

const LegalPageEditor = ({ user, handleLogout }) => {
  const [form, setForm] = useState(initialState);
  const [policyvalue, setPolicyValue] = useState("");
  const [cookiesvalue, setCookiesValue] = useState("");
  const [termsvalue, setTermsValue] = useState("");
  const [cookiesPop, setPopValue] = useState("");

  const { cookies, policy, terms, Pop } = form;

  const id = "m0Yce9AiqSl8y0WGCuu1";
  useEffect(() => {
    id && getPolicyDetails();
  }, [id]);

  const getPolicyDetails = async () => {
    const docRef = doc(db, "LegalContents", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setPolicyValue(snapshot.data().policy);
      setCookiesValue(snapshot.data().cookies);
      setTermsValue(snapshot.data().terms);
      setPopValue(snapshot.data().Pop);
    }
  };

  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateDoc(doc(db, "LegalContents", id), {
        cookies: cookiesvalue,
        terms: termsvalue,
        Pop: cookiesPop,
        policy: policyvalue,
        timestamp: serverTimestamp(),
        author: user.displayName,
        userId: user.uid,
      });
      toast.success("Post Updated Successfully");
    } catch (err) {
      console.log(err);
    }

    navigate("/admin/legal/editor");
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
              <div className="w-100  p-5">
                <div className="text-center mb-11">
                  <h1 className=" text-light fw-bolder mb-3">
                    Legal Pages Content
                  </h1>
                </div>

                <form className="" onSubmit={handleSubmit}>
                  <div className="fv-row mb-8 fv-plugins-icon-container">
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <h3>Terms</h3>
                      <ReactQuill
                        // name="terms"
                        theme="snow"
                        value={termsvalue}
                        onChange={setTermsValue}
                      />

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <h3>Cookies</h3>
                      <ReactQuill
                        theme="snow"
                        // name="cookies"
                        value={cookiesvalue}
                        onChange={setCookiesValue}
                      />

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <h3>Policy</h3>
                      <ReactQuill
                        // name="policy"
                        theme="snow"
                        value={policyvalue}
                        onChange={setPolicyValue}
                      />

                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <h3>Cookies Popup</h3>
                      <ReactQuill
                        // name="policy"
                        theme="snow"
                        value={cookiesPop}
                        onChange={setPopValue}
                      />

                      <div className="fv-plugins-message-container invalid-feedback"></div>
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

export default LegalPageEditor;
