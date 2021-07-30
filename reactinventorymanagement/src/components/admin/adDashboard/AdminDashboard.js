import React from "react";
import "./Admindashboarddes.css";

export default function AdminDashboard() {
  console.warn("Inside Dahboard");
  return (
    <div>
    <div>
      <div class="area"></div>
      <nav class="main-menu">
        <ul>
          <li>
            <a href="/admindashboard">
              <i class="fa fa-home fa-2x"></i>
              <span class="nav-text">Dashboard</span>
            </a>
          </li>
          <li class="has-subnav">
            <a href="/requestgoods">
              <i class="fa fa-laptop fa-2x"></i>
              <span class="nav-text">Order Request</span>
            </a>
          </li>
          <li class="has-subnav">
            <a href="/warehouse">
              <i class="fa fa-list fa-2x"></i>
              <span class="nav-text">Warehouse</span>
            </a>
          </li>
          <li class="has-subnav">
            <a href="/addcredentials">
              <i class="fa fa-folder-open fa-2x"></i>
              <span class="nav-text">Add User Credentials</span>
            </a>
          </li>
          <li>
            <a href="/adminalerts">
              <i class="fa fa-bar-chart-o fa-2x"></i>
              <span class="nav-text">Notification</span>
            </a>
          </li>
          <li>
            <a href="/orderhistory">
              <i class="fa fa-bar-chart-o fa-2x"></i>
              <span class="nav-text">Order History</span>
            </a>
          </li>
        </ul>

        <ul class="logout">
          <li>
            <a href="/landingpage">
              <i class="fa fa-power-off fa-2x"></i>
              <span class="nav-text">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    {/* nav bar end */}
    
    <div class="imgbox">
      <img src="https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?size=626&ext=jpg"/>
    </div>
    
    </div>
  );
}
