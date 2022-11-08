import { React, useEffect } from "react";

import "../admin-style.css";
import AdminHeader from "../components/AdminHeader";
import AdminContent from "../components/AdminContent";

const AdminHome = ({ user, handleLogout }) => {
  // push to top page after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AdminHeader user={user} handleLogout={handleLogout} />
      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <div class="d-flex flex-column flex-lg-row flex-column-fluid">
          <div class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
            <div class="d-flex flex-center flex-column flex-lg-row-fluid">
              <div class="w-lg-500px p-10">
                <div class="text-center mb-11">
                  <h1 class=" text-light fw-bolder mb-3">Create Podcast</h1>
                  <div class="text-gray-500 fw-semibold fs-6">
                    Your Social Campaigns
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdminContent user={user} />
    </>
  );
};

export default AdminHome;
