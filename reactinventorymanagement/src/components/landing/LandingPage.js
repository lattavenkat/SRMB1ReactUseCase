import React from "react";
// import "./Landing.css";
import "./landingcss.css";
// import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    // <div>

    //  <div className="homebody">
    //      <section className="lan-sec">

    //       {/* circular nav bar */}
    //       <nav className="land-menu">
    //         <ul>
    //           <li>
    //             <a  to="/adminlogin"  className="navlnk">Admin</a>
    //           </li>
    //           <li>
    //             <a  to="/managerlogin"  className="navlnk">Manager</a>
    //           </li>
    //           <li>
    //             <a  to="/checkerlogin" className="navlnk">Checker</a>
    //           </li>
    //           <li>
    //             <a  to="/vendorlogin"  className="navlnk">Vendor</a>
    //           </li>
    //         </ul>
    //            </nav>

    //       <div class="bannerText">
    //         <h2>INVENTORY MANAGEMENT </h2>
    //         <br />
    //         <h3>E-MART GROCERY SHOP</h3>
    //         <p>
    //           Real-time Inventory Visibilty Enjoy real-time detailed visibilty
    //           into key inventory control and supply chain management measures,
    //           Including inventory trends, stock on orderand supplier on-time
    //           performce.
    //         </p>

    //       </div>

    //     </section>
    //    </div>
    // <img src="projimages/invenorygif1.gif" class="myimg" />
    // </div>
    <div>
      <div className="lanbody">
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/adminlogin">Admin</a>
            </li>
            <li>
              <a className="center" href="/managerlogin">
                Manager
              </a>
            </li>
            <li>
              <a className="upward" href="/checkerlogin">
                Checker
              </a>
            </li>
            <li>
              <a className="forward" href="/vendorlogin">
                Vendor
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="bannerText">
        <h2>INVENTORY MANAGEMENT </h2>
        <br />
        <h3>E-MART GROCERY SHOP</h3>
        <p>
          Real-time Inventory Visibilty Enjoy real-time detailed visibilty into
          key inventory control and supply chain management measures, Including
          inventory trends, stock on orderand supplier on-time performce.
        </p>
      </div>

      <img src="projimages/invenorygif1.gif" class="myimg" />
    </div>
  );
}
