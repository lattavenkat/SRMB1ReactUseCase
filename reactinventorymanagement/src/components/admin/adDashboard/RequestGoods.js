import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./RequestGoodsdes.css";
import ReqOrdErrorMessage from "./ReqOrdErrorMessage";
import "./Common.css";

export default function RequestGoods() {
  const history = useHistory();
  const initialValues = {
    pcode: "",
    pcate: "",
    pname: "",
    qty: "",
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

    if (!values.pcode) {
      errors.pcode = "*Product code cannot be empty";
    }
    if (!values.pcate) {
      errors.pcate = "*Product category cannot be empty";
    } else if (!onlystr.test(values.pcate)) {
      errors.pcate = "*Only alphabets are Permitted";
    }
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.pname) {
      errors.pname = "*Product Name cannot be blank";
    } else if (!onlystr.test(values.pname)) {
      errors.pname = "*Only alphabets are Permitted";
    }

    if (!values.qty) {
      errors.qty = "*Quantity cannot be empty";
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
                            <label> PRODUCT CODE:</label>

                            <span class="focus-bg"></span>
                          </td>
                          <td>
                            <div class="col-3">
                              <input
                                class="effect-7"
                                type="text"
                                name="pcode"
                                maxLength="20"
                                placeholder="Enter product code"
                                value={formValues.pcode}
                                onChange={handleOnChange}
                              />

                              <span class="focus-border">
                                <i></i>
                              </span>
                            </div>
                          </td>
                          <ReqOrdErrorMessage message={formErrors.pcode} />
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
                                name="pcate"
                                maxLength="20"
                                placeholder="Enter product category"
                                value={formValues.pcate}
                                onChange={handleOnChange}
                              />
                              <span class="focus-border">
                                <i></i>
                              </span>
                            </div>
                          </td>
                          <ReqOrdErrorMessage message={formErrors.pcate} />
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
                                name="pname"
                                maxLength="20"
                                placeholder="Enter product name"
                                value={formValues.pname}
                                onChange={handleOnChange}
                              />
                              <span class="focus-border">
                                <i></i>
                              </span>
                            </div>
                          </td>
                          <ReqOrdErrorMessage message={formErrors.pname} />
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
                                name="qty"
                                maxLength="10"
                                placeholder="Enter quantity .."
                                value={formValues.qty}
                                onChange={handleOnChange}
                              />
                              <span class="focus-border">
                                <i></i>
                              </span>
                            </div>
                          </td>
                          <ReqOrdErrorMessage message={formErrors.qty} />
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
                        //  alert(formValues.pcode+" "+" your form has been submitted sucessfully")
                        <div>
                          <h3 className="subtext">SENT SUCCESSFULLY</h3>
                          <p class="prnt">
                            <b>Product Code: </b>
                            {formValues.pcode}
                          </p>
                          <p class="prnt">
                            <b>Product Category: </b> {formValues.pcate}
                          </p>
                          <p class="prnt">
                            <b>Product Name:</b> {formValues.pname}
                          </p>
                          <p class="prnt">
                            <b> Quantity: </b>
                            {formValues.qty}
                          </p>
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
