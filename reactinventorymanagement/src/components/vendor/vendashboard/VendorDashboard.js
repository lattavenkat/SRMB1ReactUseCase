import React from "react";
import "./VendorDashboarddes.css";

export default function VendorDashboard() {
  return (
    <div className="vendordashbody">
      {/* {console.warn("Vendor Dashboard")} */}
      {/* NAV BAR */}
      <nav class="vendor-nav">
        <input
          class="vendor-nav__trigger-input"
          type="checkbox"
          id="trigger"
          aria-label="open the navigation"
        />
        <label class="vendor-nav__trigger-finger" for="trigger">
          <span></span>
        </label>
        <ul class="vendor-nav__list">
          {/* <li class="vendor-nav__item">
            <a href="/requestaction" class="vendor-nav__link">
              <span class="vendor-nav__text">Goods Request</span>
            </a>
          </li>
          <li class="vendor-nav__item">
            <a href="/viewdamaged" class="vendor-nav__link">
              <span class="vendor-nav__text">View Damaged</span>
            </a>
            <input
              class="vendor-nav__submenu-trigger-input"
              type="checkbox"
              id="submenu-trigger"
            />
            <label
              class="vendor-nav__submenu-trigger-finger"
              for="submenu-trigger"
            ></label>
            <ul class="vendor-nav__list-child">
              <li class="vendor-nav__item">
                <a href="#hoi" class="vendor-nav__link">
                  <span class="vendor-nav__text">About me</span>
                </a>
              </li>
              <li class="vendor-nav__item">
                <a href="#hoi" class="vendor-nav__link">
                  <span class="vendor-nav__text">About meerkats</span>
                </a>
              </li>
            </ul>
          </li> */}
          <li class="vendor-nav__item">
            <a href="/requestaction" class="vendor-nav__link">
              <span class="vendor-nav__text1">View Requested Goods</span>
            </a>
          </li>
          <li class="vendor-nav__item">
            <a href="/viewdamaged" class="vendor-nav__link">
              <span class="vendor-nav__text2">View Damaged Goods</span>
            </a>
          </li>
        </ul>
      </nav>

      
    </div>
  );
}
