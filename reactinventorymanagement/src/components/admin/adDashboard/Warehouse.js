import React, { useEffect, useState } from "react";
import "./Warehousedes.css";
import { useHistory } from "react-router-dom";
import "./Common.css";
import axios from "axios";
import { WarehouseEdit } from "./WarehouseEdit";

export default function Warehouse() {
  const history = useHistory();

  const [grocery, setgrocery] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/wgrocery")
      .then((res) => {
        setgrocery(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return (
    <div>
      <div>
        <div class="warearea"></div>
        <nav class="waremain-menu">
          <ul>
            <li>
              <a href="/dashboard">
                <i class="warefa fa-home fa-2x"></i>
                <span class="warenav-text">Dashboard</span>
              </a>
            </li>
            <li class="warehas-subnav">
              <a href="/requestgoods">
                <i class="warefa fa-laptop fa-2x"></i>
                <span class="warenav-text">Order Request</span>
              </a>
            </li>
            <li class="warehas-subnav">
              <a href="/warehouse">
                <i class="warefa fa-list fa-2x"></i>
                <span class="warenav-text">Warehouse</span>
              </a>
            </li>
            <li class="warehas-subnav">
              <a href="/addcredentials">
                <i class="warefa fa-folder-open fa-2x"></i>
                <span class="warenav-text">Add User Credentials</span>
              </a>
            </li>
            <li>
              <a href="/adminalerts">
                <i class="warefa fa-bar-chart-o fa-2x"></i>
                <span class="warenav-text">Notification</span>
              </a>
            </li>
            <li>
              <a href="/orderhistory">
                <i class="warefa fa-bar-chart-o fa-2x"></i>
                <span class="warenav-text">Order History</span>
              </a>
            </li>
          </ul>

          <ul class="warelogout">
            <li>
              <a href="/landingpage">
                <i class="warefa fa-power-off fa-2x"></i>
                <span class="warenav-text">Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* nav bar end */}
      {/* backbutton */}
      <div className="btnpos">
        <div class="button-container-1">
          <span class="mas">GO BACK</span>
          <button
            id="work"
            className="bckbtn"
            name="Hover"
            onClick={() => {
              history.goBack();
            }}
          >
            Go Back
          </button>
        </div>
      </div>
      {/* table-start */}
      <div>
        <table class="table-container">
          <thead>
            <tr>
              <th>
                <h1>ProductCode</h1>
              </th>
              <th>
                <h1>ProductName</h1>
              </th>
              <th>
                <h1>ProductDescription</h1>
              </th>
              <th>
                <h1>Productcategory</h1>
              </th>
              <th>
                <h1>ManuDate</h1>
              </th>
              <th>
                <h1>ExpDate</h1>
              </th>
              <th>
                <h1>ProductPrice</h1>
              </th>
              <th>
                <h1>ProductQty</h1>
              </th>
              <th>
                <h1>Order Code</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            {grocery.map((x) => {
              return (
                <>
                  <tr key={x.id}>
                    <td>{x.pcode}</td>
                    <td>{x.pname}</td>
                    <td>{x.pdesc}</td>
                    <td>{x.pcatg}</td>
                    <td>{x.manuDate}</td>
                    <td>{x.expDate}</td>
                    <td>{x.pprice}</td>
                    <td>{x.pqty}</td>
                    <td>{x.gordercode}</td>
                    <td>{<WarehouseEdit edit={x}>Edit</WarehouseEdit>}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* table-end */}

      {/* bg-image */}
      <div class="imgbox">
        <img
          src="https://media.istockphoto.com/vectors/warehouse-workers-are-storing-boxes-on-the-rack-vector-id965959650?k=6&m=965959650&s=612x612&w=0&h=djRQQrn6bNKg2WSFMrLD0mzJpvWZcY_4nz3c1xRYefs="
          alt="warehouseimg"
        />
      </div>
    </div>
  );
}

// <tr>
//               <td>Google</td>
//               <td>9518</td>
//               <td>6369</td>
//               <td>01:32:50</td>
//             </tr>
//             <tr>
//               <td>Twitter</td>
//               <td>7326</td>
//               <td>10437</td>
//               <td>00:51:22</td>
//             </tr>
//             <tr>
//               <td>Amazon</td>
//               <td>4162</td>
//               <td>5327</td>
//               <td>00:24:34</td>
//             </tr>
//             <tr>
//               <td>LinkedIn</td>
//               <td>365;'4</td>
//               <td>2961</td>
//               <td>00:12:10</td>
//             </tr>
//             <tr>
//               <td>CodePen</td>
//               <td>2002</td>
//               <td>4135</td>
//               <td>00:46:19</td>
//             </tr>
//             <tr>
//               <td>GitHub</td>
//               <td>4623</td>
//               <td>3486</td>
//               <td>00:31:52</td>
//             </tr>
