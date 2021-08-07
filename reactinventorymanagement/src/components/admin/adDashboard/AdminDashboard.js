import React from "react";
import './Admindashboarddes.css';
import './Common.css';
export default function AdminDashboard() {
  console.warn("Inside Dashboard");
  return (
    <div>
    <div>
      <div className="area"></div>
      <nav className="main-menu">
        <ul>
          <li>
            <a href="/admindashboard">
              <i className="fa fa-home fa-2x"></i>
              <span className="nav-text">Dashboard</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="/requestgoods">
              <i className="fa fa-laptop fa-2x"></i>
              <span className="nav-text">Order Request</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="/warehouse">
              <i className="fa fa-list fa-2x"></i>
              <span className="nav-text">Warehouse</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="/addcredentials">
              <i className="fa fa-folder-open fa-2x"></i>
              <span className="nav-text">Add User Credentials</span>
            </a>
          </li>
          <li>
            <a href="/adminalerts">
              <i className="fa fa-bar-chart-o fa-2x"></i>
              <span className="nav-text">Notification</span>
            </a>
          </li>
          <li>
            <a href="/orderhistory">
              <i className="fa fa-bar-chart-o fa-2x"></i>
              <span className="nav-text">Order History</span>
            </a>
          </li>
        </ul>

        <ul className="logout">
          <li>
            <a href="/landingpage">
              <i className="fa fa-power-off fa-2x"></i>
              <span className="nav-text">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="imgbox">
      <img src="https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?size=626&ext=jpg" alt="admindashbgimg"/>
    </div>
    </div>
    {/* nav bar end */}
    
    
    
    </div>
  );
}
