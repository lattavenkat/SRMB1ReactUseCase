import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./RequestGoodsdes.css";
import ReqOrdErrorMessage from "./ReqOrdErrorMessage";
import "./Common.css";

export default function RequestGoods() {
  const history = useHistory();
  const date = new Date();
  const initialValues = {
    ordercode: "",
    productcode: "",
    productcatg: "",
    productname: "",
    productqty: "",
    productprice: "",
    requestDate: date.toISOString(),
    vendorId: "",
    vendorName: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [Data, setData] = useState(0);
  //onformsubmit
  const handleDoSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));

    console.log("===" + Object.entries(formErrors).length);

    setSubmitted(true);
    // console.log("Form has been Submitted sucessfully ");
    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    };

    fetch("http://localhost:8080/api/requestgoods", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log("saved");
        alert("successfully submitted");
        console.log(data.id);
        setData(data.id);
      });
    // alert("submitted successfully");
  };

  //onchangeevent
  const handleOnChange = (event) => {
    const isInternalExternal = event.target.type === "checkbox";

    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: isInternalExternal ? event.target.checked : value,
      };
    });
  };
  const validate = (values) => {
    let errors = {};
    console.log(values);
    const onlystr = /^[a-zA-Z]+$/;

    if (!values.productcode) {
      errors.productcode = "*Product code cannot be empty";
    }
    if (!values.productcatg) {
      errors.productcatg = "*Product category cannot be empty";
    } else if (!onlystr.test(values.productcatg)) {
      errors.productcatg = "*Only alphabets are Permitted";
    }
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.productname) {
      errors.productname = "*Product Name cannot be blank";
    } else if (!onlystr.test(values.productname)) {
      errors.productname = "*Only alphabets are Permitted";
    }

    if (!values.productqty) {
      errors.productqty = "*Quantity cannot be empty";
    }
    if (!values.productprice) {
      errors.productprice = "Price cannot be empty";
    }
    if (!values.requestDate) {
      errors.requestDate = "Request date cannot be empty";
    }
    // if (!values.requestId) {
    //   errors.requestId = "Request cannot be empty";
    // }
    if (!values.vendorId) {
      errors.vendorId = "Vendor cannot be empty";
    }
    if (!values.vendorName) {
      errors.vendorName = "Vendor name cannot be empty";
    }

    return errors;
  };
  return (
    <div>
      <div>
        <div>
          <div class="reqarea"></div>
          <nav class="reqmain-menu">
            <ul>
              <li>
                <a href="/dashboard">
                  <i class="reqfa fa-home fa-2x"></i>
                  <span class="reqnav-text">Dashboard</span>
                </a>
              </li>
              <li class="reqhas-subnav">
                <a href="/requestgoods">
                  <i class="reqfa fa-laptop fa-2x"></i>
                  <span class="reqnav-text">Order Request</span>
                </a>
              </li>
              <li class="reqhas-subnav">
                <a href="/warehouse">
                  <i class="reqfa fa-list fa-2x"></i>
                  <span class="reqnav-text">Warehouse</span>
                </a>
              </li>
              <li class="reqhas-subnav">
                <a href="/addcredentials">
                  <i class="reqfa fa-folder-open fa-2x"></i>
                  <span class="reqnav-text">Add User Credentials</span>
                </a>
              </li>
              <li>
                <a href="/adminalerts">
                  <i class="reqfa fa-bar-chart-o fa-2x"></i>
                  <span class="reqnav-text">Notification</span>
                </a>
              </li>
              <li>
                <a href="/orderhistory">
                  <i class="reqfa fa-bar-chart-o fa-2x"></i>
                  <span class="reqnav-text">Order History</span>
                </a>
              </li>
            </ul>

            <ul class="reqlogout">
              <li>
                <a href="/landingpage">
                  <i class="reqfa fa-power-off fa-2x"></i>
                  <span class="reqnav-text">Logout</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
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
        {/* back button end */}
        {/* formbody */}
        <div>
          <div className="studentbody">
            <div id="mainContainer">
              <div class="aside">
                <div class="cardview">
                  <form className="f1" onSubmit={handleDoSubmit} noValidate>
                    {/* <h2 class="txt">
                STUDENT DETAILS FORM
              </h2> */}

                    <div class="wrapper1">
                      <h1 className="head">REQUEST GOODS</h1>
                    </div>
                    <table class="center" id="studenttable">
                      <tbody>
                        {/* <h2 class="txt">
                  <i>STUDENT DETAILS FORM</i>
                </h2> */}
                        <br />
                        <tr>
                          <td>
                            <label> ORDER CODE:</label>

                            <span class="focus-bg"></span>
                          </td>
                          <td>
                            <div class="col-3">
                              <input
                                class="effect-7"
                                type="text"
                                name="ordercode"
                                maxLength="20"
                                placeholder="Enter Ordercode"
                                value={formValues.ordercode}
                                onChange={handleOnChange}
                              />

                              <span class="focus-border">
                                <i></i>
                              </span>
                            </div>
                          </td>
                          <ReqOrdErrorMessage message={formErrors.ordercode} />
                        </tr>
                        <br />
                        <tr>
                          <td>
                            <label> PRODUCT CODE:</label>

                            <span class="focus-bg"></span>
                          </td>
                          <td>
                            <div class="col-3">
                              <input
                                class="effect-7"
                                type="text"
                                name="productcode"
                                maxLength="20"
                                placeholder="Enter product code"
                                value={formValues.productcode}
                                onChange={handleOnChange}
                              />

                              <span class="focus-border">
                                <i></i>
                              </span>
                            </div>
                          </td>
                          <ReqOrdErrorMessage
                            message={formErrors.productcode}
                          />
                        </tr>

                        <br />
                        <tr>
                          <td>
                            <label> PRODUCT CATEGORY:</label>
                            <span class="focus-bg"></span>
                          </td>
                          <td>
                            {" "}
                            <div class="col-3">
                              <input
                                class="effect-7"
                                type="text"
                                name="productcatg"
                                maxLength="20"
                                placeholder="Enter product category"
                                value={formValues.productcatg}
                                onChange={handleOnChange}
                              />
                              <span class="focus-border">
                                <i></i>
                              </span>
                            </div>
                          </td>
                          <ReqOrdErrorMessage
                            message={formErrors.productcatg}
                          />
                        </tr>
                        <br />
                        <tr>
                          <td>
                            <label> PRODUCT NAME:</label>
                            <span class="focus-bg"></span>
                          </td>
                          <td>
                            {" "}
                            <div class="col-3">
                              <input
                                class="effect-7"
                                type="text"
                                name="productname"
                                maxLength="20"
                                placeholder="Enter product name"
                                value={formValues.productname}
                                onChange={handleOnChange}
                              />
                              <span class="focus-border">
                                <i></i>
                              </span>
                            </div>
                          </td>
                          <ReqOrdErrorMessage
                            message={formErrors.productname}
                          />
                        </tr>
                        <br />
                        <tr>
                          <td>
                            <label> PRODUCT QUANTITY:</label>

                            <span class="focus-bg"></span>
                          </td>
                          <td>
                            <div class="col-3">
                              <input
                                class="effect-7"
                                type="text"
                                name="productqty"
                                maxLength="10"
                                placeholder="Enter quantity .."
                                value={formValues.productqty}
                                onChange={handleOnChange}
                              />
                              <span class="focus-border">
                                <i></i>
                              </span>
                            </div>
                          </td>
                          <ReqOrdErrorMessage message={formErrors.productqty} />
                        </tr>
                        <br />
                        <tr>
                          <td>
                            <label> PRODUCT PRICE:</label>

                            <span class="focus-bg"></span>
                          </td>
                          <td>
                            <div class="col-3">
                              <input
                                class="effect-7"
                                type="text"
                                name="productprice"
                                maxLength="10"
                                placeholder="Enter price .."
                                value={formValues.productprice}
                                onChange={handleOnChange}
                              />
                              <span class="focus-border">
                                <i></i>
                              </span>
                            </div>
                          </td>
                          <ReqOrdErrorMessage
                            message={formErrors.productprice}
                          />
                        </tr>
                        <br />
                        <tr>
                          <td>
                            <label> VENDOR ID:</label>

                            <span class="focus-bg"></span>
                          </td>
                          <td>
                            <div class="col-3">
                              <input
                                class="effect-7"
                                type="text"
                                name="vendorId"
                                maxLength="10"
                                placeholder="Enter vendor ID .."
                                value={formValues.vendorId}
                                onChange={handleOnChange}
                              />
                              <span class="focus-border">
                                <i></i>
                              </span>
                            </div>
                          </td>
                          <ReqOrdErrorMessage message={formErrors.vendorId} />
                        </tr>
                        <br />
                        <tr>
                          <td>
                            <label> VENDOR NAME:</label>

                            <span class="focus-bg"></span>
                          </td>
                          <td>
                            <div class="col-3">
                              <input
                                class="effect-7"
                                type="text"
                                name="vendorName"
                                maxLength="10"
                                placeholder="Enter vendor name .."
                                value={formValues.vendorName}
                                onChange={handleOnChange}
                              />
                              <span class="focus-border">
                                <i></i>
                              </span>
                            </div>
                          </td>
                          <ReqOrdErrorMessage message={formErrors.vendorName} />
                        </tr>
                        <br />
                        <tr>
                          <td></td>
                          <td>
                            <section>
                              <button type="submit" class="overlay">
                                Send to vendor
                              </button>
                            </section>
                          </td>
                        </tr>
                        <br />
                      </tbody>
                    </table>
                    <div>
                      {Object.entries(formErrors).length === 0 && submitted && (
                        //  alert(formValues.productcode+" "+" your form has been submitted sucessfully")
                        <div>
                          <h3 className="subtext">SENT SUCCESSFULLY</h3>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* nav bar end */}
        {/* backbutton */}

        {/* ------------------------------------------------------------------------------------------------------------------------- */}
        {/* FORM */}
      </div>
    </div>
  );
}
