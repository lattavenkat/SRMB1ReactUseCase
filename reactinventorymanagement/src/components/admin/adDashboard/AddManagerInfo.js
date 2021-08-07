import React, { useState } from "react";
import './AddCredentialsdes.css';
import CredentialsErrorMessage from "./CredentialsErrorMessage";
import './Common.css';
export default function AddManagerInfo() {
  //manager
  const initialValues = {
    managerid:"",
    managerfname: "",
    managerlname: "",
    managerpass:"",
    manageremail: "",
    managermob: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [Data, setData] = useState(0);
  //onformsubmit-manager
  const handleDoSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));

    console.log("===" + Object.entries(formErrors).length);

    setSubmitted(true);
    // console.log("Form has been Submitted sucessfully ");
    const manOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    };

    fetch("http://localhost:8080/api/managerinfo", manOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log("saved");
        alert("successfully submitted");
        console.log(data.id);
        setData(data.id);
      });
  };
  //onchangeevent-manager
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
  // manager
  const validate = (values) => {
    let errors = {};
    console.log(values);
    const onlystr = /^[a-zA-Z]+$/;
    if (!values.managerid) {
      errors.managerid = "*Mandatory";
    }
    else if (!values.managerfname) {
      errors.managerfname = "*First Name cannot be empty";
    } else if (!onlystr.test(values.managerfname)) {
      errors.managerfname = "*Only alphabets are Permitted";
    }
    if (!values.managerlname) {
      errors.managerlname = "*Last Name cannot be empty";
    } else if (!onlystr.test(values.managerlname)) {
      errors.managerlname = "*Only alphabets are Permitted";
    }
    if (!values.managerpass) {
      errors.managerpass = "*Password cannot be empty";
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.manageremail) {
      errors.manageremail = "*Mail cannot be blank";
    } else if (!regex.test(values.manageremail)) {
      errors.manageremail = "*Wrong mail format";
    }
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    if (!values.managermob) {
      errors.managermob = "*Mobile number cannot be empty";
    } else if (!phoneRegExp.test(values.managermob)) {
      errors.managermob = "*Please enter only number.";
    }

    return errors;
  };
  return (
    <>
      <div>
        <form className="f1" onSubmit={handleDoSubmit} noValidate>
          <table class="center" id="credentialstable">
            <tbody>
            <tr>
                <td>
                  <label> MANAGER ID: </label>
                  <span class="xfocus-bg"></span>
                </td>
                <td>
                  <div class="xcol-3">
                    <input
                      class="xeffect-7"
                      type="text"
                      name="managerid"
                      maxLength="20"
                      placeholder="Enter valid id"
                      value={formValues.managerid}
                      onChange={handleOnChange}
                    />

                    <span class="xfocus-border">
                      <i></i>
                    </span>
                  </div>
                </td>
                <CredentialsErrorMessage message={formErrors.managerid} />
              </tr>
              <br />
              
              <tr>
                <td>
                  <label> FIRST NAME: </label>
                  <span class="xfocus-bg"></span>
                </td>
                <td>
                  <div class="xcol-3">
                    <input
                      class="xeffect-7"
                      type="text"
                      name="managerfname"
                      maxLength="20"
                      placeholder="Enter first name"
                      value={formValues.managerfname}
                      onChange={handleOnChange}
                    />

                    <span class="xfocus-border">
                      <i></i>
                    </span>
                  </div>
                </td>
                <CredentialsErrorMessage message={formErrors.managerfname} />
              </tr>
              <br />
              <tr>
                <td>
                  <label> LAST NAME:</label>
                  <span class="xfocus-bg"></span>
                </td>
                <td>
                  {" "}
                  <div class="xcol-3">
                    <input
                      class="xeffect-7"
                      type="text"
                      name="managerlname"
                      maxLength="20"
                      placeholder="Enter last name"
                      value={formValues.managerlname}
                      onChange={handleOnChange}
                    />
                    <span class="xfocus-border">
                      <i></i>
                    </span>
                  </div>
                </td>
                <CredentialsErrorMessage message={formErrors.managerlname} />
              </tr>
              <br />
              <tr>
                <td>
                  <label> MANAGER PASSWORD: </label>
                  <span class="xfocus-bg"></span>
                </td>
                <td>
                  <div class="xcol-3">
                    <input
                      class="xeffect-7"
                      type="text"
                      name="managerpass"
                      maxLength="20"
                      placeholder="Enter password"
                      value={formValues.managerpass}
                      onChange={handleOnChange}
                    />

                    <span class="xfocus-border">
                      <i></i>
                    </span>
                  </div>
                </td>
                <CredentialsErrorMessage message={formErrors.managerpass} />
              </tr>
              <br />
              <tr>
                <td>
                  <label> EMAIL ADDRESS:</label>
                  <span class="xfocus-bg"></span>
                </td>
                <td>
                  {" "}
                  <div class="xcol-3">
                    <input
                      class="xeffect-7"
                      type="text"
                      name="manageremail"
                      maxLength="20"
                      placeholder="Enter email"
                      value={formValues.manageremail}
                      onChange={handleOnChange}
                    />
                    <span class="xfocus-border">
                      <i></i>
                    </span>
                  </div>
                </td>
                <CredentialsErrorMessage message={formErrors.manageremail} />
              </tr>
              <br />
              <tr>
                <td>
                  <label> MOBILE NUMBER:</label>

                  <span class="xfocus-bg"></span>
                </td>
                <td>
                  <div class="xcol-3">
                    <input
                      class="xeffect-7"
                      type="text"
                      name="managermob"
                      maxLength="10"
                      placeholder="Enter mobile number.."
                      value={formValues.managermob}
                      onChange={handleOnChange}
                    />
                    <span class="xfocus-border">
                      <i></i>
                    </span>
                  </div>
                </td>
                <CredentialsErrorMessage message={formErrors.managermob} />
              </tr>
              <tr>
                <div className="wrap1">
                  <button className="addcredbtn1">Submit</button>
                </div>
              </tr>
            </tbody>
            <div>
              {Object.entries(formErrors).length === 0 && submitted && (
                //  alert(formValues.fname+" "+" your form has been submitted sucessfully")
                <div>
                  <br /> <h3 className="prnt1">SUBMITTED SUCCESSFULLY</h3>
                  <br />{" "}
                  <p class="prnt">
                   
                    {/* {formValues.managerfname} */}
                    <b>{formValues.managerfname} 's credentials has been added!</b>
                  </p>
                  {/* <p class="prnt">
                    <b>Last Name: </b> {formValues.managerlname}
                  </p>
                  <p class="prnt">
                    <b>Email Id:</b> {formValues.manageremail}
                  </p>
                  <p class="prnt">
                    <b>Contact Number: </b>
                    {formValues.managermob}
                  </p> */}
                </div>
              )}
            </div>
          </table>
        </form>
      </div>
    </>
  );
}
