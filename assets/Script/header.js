header = `
<header class="header border-bottom border-gray-200 header-fixed">
    <div class="container-fluid px-0">
        <div class="header-body px-3 px-xxl-5 py-3 py-lg-4">
            <div class="row align-items-center">
                <div class="col d-flex align-items-center">
                    <a href="javascript:void(0);" class="back-arrow bg-white circle circle-sm shadow border border-gray-200 rounded mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16">
                            <g data-name="icons/tabler/chevrons-left" transform="translate(0)">
                                <rect data-name="Icons/Tabler/Chevrons Left background" width="16" height="16" fill="none" />
                                <path d="M14.468,14.531l-.107-.093-6.4-6.4a.961.961,0,0,1-.094-1.25l.094-.107,6.4-6.4a.96.96,0,0,1,1.451,1.25l-.094.108L10,7.36l5.72,5.721a.961.961,0,0,1,.094,1.25l-.094.107a.96.96,0,0,1-1.25.093Zm-7.68,0-.107-.093-6.4-6.4a.961.961,0,0,1-.093-1.25l.093-.107,6.4-6.4a.96.96,0,0,1,1.45,1.25l-.093.108L2.318,7.36l5.72,5.721a.96.96,0,0,1,.093,1.25l-.093.107a.96.96,0,0,1-1.25.093Z" transform="translate(0 1)" fill="#6C757D" />
                            </g>
                        </svg>
                    </a>
                </div>
                <div class="col-auto d-flex flex-wrap align-items-center icon-blue-hover ps-0">

    <main>
      <div class="switch-lang">
        <button id="btn-ar" class="notranslate" onclick="changeLanguage('ar')">
          AR
        </button>
        ||
        <button id="btn-en" class="notranslate" onclick="changeLanguage('en')">
          EN
        </button>
      </div>

      <div id="google_element"></div>


      
    
    </main>

<div class="muze-hamburger d-block d-lg-none col-auto">
  <!-- أيقونة همبورجر (قبل الضغط) -->
  <svg id="icons_tabler_hamburger" data-name="icons/tabler/hamburger" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" class="hamburger-icon">
    <rect id="Icons_Tabler_Hamburger_background" data-name="Icons/Tabler/Hamburger background" width="16" height="16" fill="none"/>
    <path id="Color" d="M15.314,8H.686A.661.661,0,0,1,0,7.368a.653.653,0,0,1,.593-.625l.093-.006H15.314A.661.661,0,0,1,16,7.368a.653.653,0,0,1-.593.626Zm0-6.737H.686A.661.661,0,0,1,0,.632.654.654,0,0,1,.593.005L.686,0H15.314A.661.661,0,0,1,16,.632a.653.653,0,0,1-.593.625Z" transform="translate(0 4)" fill="#ffffff"/>
  </svg>

  <!-- أيقونة إغلاق (بعد الضغط) -->
  <svg id="icons_tabler_close" data-name="icons/tabler/close" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" style="width:20px;" class="close-icon">
    <rect id="Icons_Tabler_Close_background" data-name="Icons/Tabler/Close background" width="16" height="16" fill="none"/>
    <path id="Color" d="M.82.1l.058.05L6,5.272,11.122.151A.514.514,0,0,1,11.9.82l-.05.058L6.728,6l5.122,5.122a.514.514,0,0,1-.67.777l-.058-.05L6,6.728.878,11.849A.514.514,0,0,1,.1,11.18l.05-.058L5.272,6,.151.878A.514.514,0,0,1,.75.057Z" transform="translate(2 2)" fill="#ffffff"/>
  </svg>
</div>


 
    


                    <div class="dropdown grid-option">
                        <a href="#" class="text-dark ms-4 ms-xxl-5 mb-0 notification" data-bs-toggle="dropdown" aria-expanded="false" id="notification">
                            <svg id="Icons_tabler_notification" data-name="Icons/tabler/notification" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <rect id="Icons_Tabler_Notification_background" data-name="Icons/Tabler/Notification background" width="24" height="24" fill="none" />
                                <path d="M6.162,19.63l-.005-.246v-.308H.926A.923.923,0,0,1,.471,17.35a4,4,0,0,0,1.956-2.66l.036-.229V10.726A9.492,9.492,0,0,1,7.292,2.873l.147-.08,0-.018A3.369,3.369,0,0,1,10.566.007L10.771,0a3.379,3.379,0,0,1,3.287,2.573l.045.22.147.08a9.556,9.556,0,0,1,4.806,7.541l.023.355-.007,3.582a4.016,4.016,0,0,0,2,3,.924.924,0,0,1-.329,1.719l-.126.008H15.387v.308a4.616,4.616,0,0,1-9.225.246ZM8,19.385a2.769,2.769,0,0,0,5.532.189l.007-.189v-.308H8ZM9.242,3.228l-.012.238-.005.045L9.2,3.63l-.039.113-.054.107-.035.055L9,4l-.036.038-.05.046-.1.074L8.7,4.219A7.7,7.7,0,0,0,4.332,10.46l-.022.309-.007,3.8a5.875,5.875,0,0,1-.94,2.541l-.084.119H18.266l-.007-.012a6.007,6.007,0,0,1-.983-2.452l-.043-.306V10.812a7.674,7.674,0,0,0-4.4-6.593.919.919,0,0,1-.518-.7l-.009-.132a1.538,1.538,0,0,0-3.069-.157Z" transform="translate(1.499)" fill="#1e1e1e" />
                            </svg>
                            <sup class="status bg-warning">&nbsp;</sup>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end py-0" aria-labelledby="notification">
                            <div class="dropdown-header d-flex align-items-center px-4 py-2 border-bottom border-gray-200">
                                <span class="fs-16 Montserrat-font font-weight-semibold text-black-600">Messages</span>
                            </div>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="Inbox" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="dropdown-body" data-simplebar>
                                        <a href="#" class="dropdown-item text-wrap">
                                            <div class="media">
                                              
                                                <div class="media-body ps-1">
                                                    <div class="d-flex align-items-center">
                                                        <span class="fs-16 font-weight-semibold dropdown-title">John Wick</span>
                                                        <span class="font-weight-semibold tiny text-gray-600 ms-auto">Just now</span>
                                                    </div>
                                                    <span class="d-block small text-gray-600 mt-1 dropdown-content">Hey, I just found out what’s causing the server to crash!</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown grid-option">
                        <div class="dropdown-menu dropdown-menu-end py-0" aria-labelledby="chat">
                            <div class="dropdown-body" data-simplebar>
                                <a href="#" class="dropdown-item text-wrap">
                                    <div class="media">
                                        <span class="d-flex align-items-center">
                                            <span class="avatar-status avatar-sm-status avatar-offline position-relative me-2 end-0 bottom-0">&nbsp;</span>
                                            <span class="avatar avatar-xs shadow-sm rounded-circle me-2 d-flex align-items-center justify-content-center bg-white">
                                            </span>
                                        </span>
                                        <div class="media-body ps-1">
                                            <div class="d-flex align-items-center">
                                                <span class="fs-16 font-weight-semibold dropdown-title">Google</span>
                                                <span class="font-weight-semibold tiny text-gray-600 ms-auto">Just now</span>
                                            </div>
                                            <span class="d-block small text-gray-600 mt-1 dropdown-content">Hey, I just found out what’s causing the server to crash!</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
`;

let head = document.getElementById("header");

head.innerHTML = header;

document
  .querySelector(".muze-hamburger")
  .addEventListener("click", function () {
    this.classList.toggle("menu-active");
  });

var muzeNavItem = document
  .querySelectorAll(".navbar-vertical .nav-item")
  .forEach((muzeNavItem) => {
    muzeNavItem.addEventListener("mouseover", (e) => {
      var muzePosition = muzeNavItem.getBoundingClientRect();
      muzeNavItem.style.top = muzePosition.top + "px";
    });

    muzeNavItem.addEventListener("mouseout", (e) => {
      muzeNavItem.style.top = ""; // إعادة الوضع إلى الحالة الأصلية عند إيقاف التمرير
    });
  });

document.querySelectorAll(".muze-hamburger").forEach((muzeHamburger) => {
  muzeHamburger.addEventListener("click", (e) => {
    document.querySelector("body").classList.toggle("sidebar-menu");
  });
});

document
  .querySelectorAll(".dropdown-menu, .dropdown-toggle")
  .forEach((dropdownMenu) => {
    dropdownMenu.addEventListener("click", (e) => {
      e.stopPropagation(); // إيقاف انتشار النقر لتجنب تأثيره على باقي الصفحة
    });
  });

document
  .querySelectorAll(".customize-btn, .customize-close")
  .forEach((muzeCustomizerToggle) => {
    muzeCustomizerToggle.addEventListener("click", (e) => {
      e.stopPropagation(); // إيقاف انتشار الحدث
      document.querySelector("body").classList.toggle("customize-box"); // فتح أو غلق صندوق التخصيص
    });
  });
