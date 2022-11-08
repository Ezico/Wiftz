import React from "react";

const AdminContent = ({ user }) => {
  const username = user?.displayName;
  const email = user?.email;
  return (
    <>
      <div class="page d-flex flex-row flex-column-fluid">
        {/* <!--begin::Aside--> */}
        <div
          id="kt_aside"
          class="aside"
          data-kt-drawer="true"
          data-kt-drawer-name="aside"
          data-kt-drawer-activate="{default: true, lg: false}"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'200px', '300px': '250px'}"
          data-kt-drawer-direction="start"
          data-kt-drawer-toggle="#kt_aside_mobile_toggle"
        >
          {/* <!--begin::Aside Toolbarl--> */}
          <div class="aside-toolbar flex-column-auto" id="kt_aside_toolbar">
            {/* <!--begin::Aside user--> */}
            {/* <!--begin::User--> */}
            <div class="aside-user d-flex align-items-sm-center justify-content-center py-5">
              {/* <!--begin::Symbol--> */}
              <div class="symbol symbol-50px">
                <img
                  src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
                  alt=""
                />
              </div>
              {/* <!--end::Symbol--> */}
              {/* <!--begin::Wrapper--> */}
              <div class="aside-user-info flex-row-fluid flex-wrap ms-5">
                {/* <!--begin::Section--> */}
                <div class="d-flex">
                  {/* <!--begin::Info--> */}
                  <div class="flex-grow-1 me-2">
                    {/* <!--begin::Username--> */}
                    <a class="text-white text-hover-primary fs-6 fw-bold">
                      {username}
                    </a>
                    {/* <!--end::Username--> */}
                    {/* <!--begin::Description--> */}
                    <span class="text-gray-600 fw-semibold d-block fs-8 mb-1">
                      {email}
                    </span>
                    {/* <!--end::Description--> */}
                    {/* <!--begin::Label--> */}
                    <div class="d-flex align-items-center text-success fs-9">
                      <span class="bullet bullet-dot bg-success me-1"></span>
                      online
                    </div>
                    {/* <!--end::Label--> */}
                  </div>
                  {/* <!--end::Info--> */}
                  {/* <!--begin::User menu--> */}
                  <div class="me-n2">
                    {/* <!--begin::Action--> */}
                    <a
                      href="#"
                      class="btn btn-icon btn-sm btn-active-color-primary mt-n2"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-start"
                      data-kt-menu-overflow="true"
                    >
                      {/* <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg--> */}
                      <span class="svg-icon svg-icon-muted svg-icon-1"></span>
                      {/* <!--end::Svg Icon--> */}
                    </a>

                    {/* <!--end::Action--> */}
                  </div>
                  {/* <!--end::User menu--> */}
                </div>
                {/* <!--end::Section--> */}
              </div>
              {/* <!--end::Wrapper--> */}
            </div>
            {/* <!--end::User--> */}

            {/* <!--end::Aside user-->  */}
          </div>
          {/* <!--end::Aside Toolbarl-->
					<!--begin::Aside menu--> */}
          <div class="aside-menu flex-column-fluid">
            {/* <!--begin::Aside Menu--> */}
            <div
              class="hover-scroll-overlay-y px-2 my-5 my-lg-5"
              id="kt_aside_menu_wrapper"
              data-kt-scroll="true"
              data-kt-scroll-height="auto"
              data-kt-scroll-dependencies="{default: '#kt_aside_toolbar, #kt_aside_footer', lg: '#kt_header, #kt_aside_toolbar, #kt_aside_footer'}"
              data-kt-scroll-wrappers="#kt_aside_menu"
              data-kt-scroll-offset="5px"
            >
              {/* <!--Podcast::Menu--> */}
              <div
                class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"
                id="#kt_aside_menu"
                data-kt-menu="true"
              >
                {/* <!--begin:Menu item--> */}

                {/* <!--end:Menu item--> */}
                {/* <!--begin:Menu item--> */}
                <div class="menu-item pt-5">
                  {/* <!--begin:Menu content--> */}
                  <div class="menu-content">
                    <span class="menu-heading fw-bold text-uppercase fs-7">
                      PODCASTS
                    </span>
                  </div>
                  {/* <!--end:Menu content--> */}
                </div>
                {/* <!--end:Menu item-->
								<!--begin:Menu item--> */}
                <div
                  style={{ display: "none" }}
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion"
                >
                  <span class="menu-link">
                    <span class="menu-icon">
                      <span class="svg-icon svg-icon-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.3"
                            d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <a href="/admin/create?podcast-new">
                      <span class="menu-title">Create Podcasts</span>
                    </a>
                  </span>
                </div>

                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion"
                >
                  <span class="menu-link">
                    <span class="menu-icon">
                      <span class="svg-icon svg-icon-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.3"
                            d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.3"
                            d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <a href="/admin/create-podcast?podcast-new">
                      <span class="menu-title">Create Podcast</span>
                    </a>
                  </span>

                  {/* <!--end:Menu sub--> */}
                </div>
                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion"
                >
                  <span class="menu-link">
                    <span class="menu-icon">
                      <span class="svg-icon svg-icon-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.3"
                            d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.3"
                            d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <a href="/admin/podcasts">
                      <span class="menu-title">All Podcasts</span>
                    </a>
                  </span>

                  {/* <!--end:Menu sub--> */}
                </div>
                {/* <!--end:Menu item-->
								<!--begin:Menu item--> */}
              </div>

              {/* <!--Podcast::Menu--> */}

              {/* <!--Podcast::Menu--> */}
              <div
                class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"
                id="#kt_aside_menu"
                data-kt-menu="true"
              >
                {/* <!--begin:Menu item--> */}

                {/* <!--end:Menu item--> */}
                {/* <!--begin:Menu item--> */}
                <div class="menu-item pt-5">
                  {/* <!--begin:Menu content--> */}
                  <div class="menu-content">
                    <span class="menu-heading fw-bold text-uppercase fs-7">
                      BLOG
                    </span>
                  </div>
                  {/* <!--end:Menu content--> */}
                </div>
                {/* <!--end:Menu item-->
								<!--begin:Menu item--> */}
                <div
                  style={{ display: "none" }}
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion"
                >
                  <span class="menu-link">
                    <span class="menu-icon">
                      <span class="svg-icon svg-icon-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.3"
                            d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <a href="admin/create-blog?blog-new">
                      <span class="menu-title">Create Blog</span>
                    </a>
                  </span>
                </div>

                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion"
                >
                  <span class="menu-link">
                    <span class="menu-icon">
                      <span class="svg-icon svg-icon-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.3"
                            d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.3"
                            d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <a href="/admin/create-blog?blog-new">
                      <span class="menu-title">Create Blog</span>
                    </a>
                  </span>

                  {/* <!--end:Menu sub--> */}
                </div>
                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion"
                >
                  <span class="menu-link">
                    <span class="menu-icon">
                      <span class="svg-icon svg-icon-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.3"
                            d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.3"
                            d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <a href="/admin/blogs">
                      <span class="menu-title">All Posts</span>
                    </a>
                  </span>

                  {/* <!--end:Menu sub--> */}
                </div>
                {/* <!--end:Menu item-->
								<!--begin:Menu item--> */}
              </div>

              {/* <!--Podcast::Menu--> */}

              <div
                class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"
                id="#kt_aside_menu"
                data-kt-menu="true"
              >
                {/* <!--begin:Menu item--> */}

                {/* <!--end:Menu item--> */}
                {/* <!--begin:Menu item--> */}
                <div class="menu-item pt-5">
                  {/* <!--begin:Menu content--> */}
                  <div class="menu-content">
                    <span class="menu-heading fw-bold text-uppercase fs-7">
                      Edit Pages
                    </span>
                  </div>
                  {/* <!--end:Menu content--> */}
                </div>
                {/* <!--end:Menu item-->
								<!--begin:Menu item--> */}
                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion"
                >
                  <span class="menu-link">
                    <span class="menu-icon">
                      <span class="svg-icon svg-icon-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.3"
                            d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <a href="/admin/homepage/editor">
                      <span class="menu-title">Homepage</span>
                    </a>
                  </span>
                </div>

                <div
                  data-kt-menu-trigger="click"
                  class="menu-item menu-accordion"
                >
                  <span class="menu-link">
                    <span class="menu-icon">
                      <span class="svg-icon svg-icon-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.3"
                            d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.3"
                            d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </span>
                    <a href="/admin/podcasts/editor">
                      <span class="menu-title">Podcast & Blog Page</span>
                    </a>
                  </span>

                  {/* <!--end:Menu sub--> */}
                </div>

                <div class="menu-item">
                  {/* <!--begin:Menu link--> */}
                  <a class="menu-link" href="/admin/about/editor">
                    <span class="menu-icon">
                      {/* <!--begin::Svg Icon | path: icons/duotune/general/gen014.svg--> */}
                      <span class="svg-icon svg-icon-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      {/* <!--end::Svg Icon--> */}
                    </span>
                    <a href="/admin/about/editor">
                      <span class="menu-title">About & contact Page</span>
                    </a>
                  </a>
                  {/* <!--end:Menu link--> */}
                </div>
                <div class="menu-item">
                  {/* <!--begin:Menu link--> */}
                  <a
                    class="menu-link"
                    href="/metronic8/demo8/../demo8/apps/calendar.html"
                  >
                    <span class="menu-icon">
                      {/* <!--begin::Svg Icon | path: icons/duotune/general/gen014.svg--> */}
                      <span class="svg-icon svg-icon-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      {/* <!--end::Svg Icon--> */}
                    </span>
                    <a href="/admin/legal/editor">
                      <span class="menu-title">Legal Page</span>
                    </a>
                  </a>
                  {/* <!--end:Menu link--> */}
                </div>
              </div>
              {/* <!--end::Menu--> */}
            </div>
            {/* <!--end::Aside Menu--> */}
          </div>
          {/* <!--end::Aside menu--> */}
        </div>
      </div>
    </>
  );
};

export default AdminContent;
