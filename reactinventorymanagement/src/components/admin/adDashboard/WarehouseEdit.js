import React, { useState } from "react";
import ReqOrdErrorMessage from "./ReqOrdErrorMessage";

export const WarehouseEdit = (props) => {
  const init = {
    id: props.id,
    pcode: props.pcode,
    pname: props.pname,
    pdesc: props.pdesc,
    pcatg: props.pcatg,
    manuDate: props.manuDate,
    expDate: props.expDate,
    pprice: props.pprice,
    pqty: props.pqty,
    gordercode: props.gordercode,
  };

  const [formValues, setFormValues] = useState(init);
  const [formErrors, setformErrors] = useState({});

  handleDoSubmit
  return (
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
                                value={formValues.gordercode}
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
  )
};
