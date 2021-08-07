import React from "react";
import './RequestStockRefilldes.css';
import { useHistory } from "react-router";
import { useState, createRef } from "react";
import MErrorMessage1 from "./MErrorMessage1";


export default function RequestStockRefill() {
  
  const history = useHistory();
  
  // typeOfData [stateData, stateUpdateFunction] = useState(initialData)
  let initialValue = [];
  const [products, setProduct] = useState(initialValue);
  const formData = createRef();
  // addproduct handler method
  const add = (event) => {
    event.preventDefault();

    const newProduct = {
      refill_product_name: formData.current.refill_product_name.value,
      refill_category: formData.current.refill_category.value,
      refill_qty: Number(formData.current.refill_qty.value),
    };
   
    // add a new product inside products array
    setProduct([...products, newProduct]);
    //console.log(products);
  };
  //form2

  const initialValues={
    refill_product_name: "",
    refill_category: "",
    refill_qty:""

  }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  //onformsubmit-manager
  const handleDoSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));

    console.log("===" + Object.entries(formErrors).length);

    setSubmitted(true);
    // console.log("Form has been Submitted sucessfully ");
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
  const validate = (values) => {
    let errors = {};
    console.log(values);
    const onlystr = /^[a-zA-Z]+$/;

    if (!values.refill_product_name) {
      errors.refill_product_name = "*Product Name cannot be empty";
    } else if (!onlystr.test(values.refill_product_name)) {
      errors.refill_product_name = "*Only alphabets are Permitted";
    }
    if (!values.refill_category) {
      errors.refill_category = "*Category  cannot be empty";
    } else if (!onlystr.test(values.refill_category)) {
      errors.refill_category = "*Only alphabets are Permitted";
    }
    if (!values.refill_qty) {
      errors.refill_qty = "*Quantity  cannot be empty";
    }
return errors;
  }
  return (
    <div>
      
      <div>
        <nav class="mymenu">
          <ul>
            <li>
              <a href="/managerdashboard">
                <b>Dashboard</b>
              </a>
            </li>
            <li>
              <a href="/requestedgoodslist">
                <b>View Goods</b>
              </a>
            </li>
            <li>
              <a href="/requeststockrefill">
                <b>Request Refill</b>
              </a>
            </li>
            <li>
              <a href="/manageralert">
                <b>Notification</b>
              </a>
            </li>
            <li>
              <a href="/landingpage">
                <b>Logout</b>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="btnposition">
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
       {/* req form-body-start */}
       <div className="reqformbody">
        <form onSubmit={add}  ref={formData}>
          <div className="formBasicProductName">
            <label>Product Name:</label>
            <input
              type="text"
              placeholder="Enter Product Name"
              name="refill_product_name"
              className="reqtxtfield"
              value={formValues.refill_product_name}
              onChange={handleOnChange}
            />
            <MErrorMessage1 message={formErrors.refill_product_name} />
           
          </div>
          <br />
          <div controlId="formBasicPrice">
            <label>Product Category</label>
            <input
              type="text"
              placeholder="Product category"
              name="refill_category"
              className="reqtxtfield2"
              value={formValues.refill_category}
              onChange={handleOnChange}
            />
            <MErrorMessage1 message={formErrors.refill_category} />
           
          </div>
          <br />
          <div controlId="formBasicQty">
            <label>Quantity:</label>
            <input
              type="number"
              placeholder="How many: qty"
              name="refill_qty"
              className="reqtxtfield3"
              value={formValues.refill_qty}
              onChange={handleOnChange}
            />
            <MErrorMessage1 message={formErrors.refill_qty} />
           
          </div>
          <br />
          <button type="submit" className="reqbtnposition" id="view">
            VIEW
          </button>
          
        </form>
        <form onSubmit={handleDoSubmit} noValidate>
          
        <button type="submit" className="reqbtnposition1"  id="refill">
            SEND REQUEST
          </button>
        </form>
        <table>
          <thead>
            <tr className="trposition">
              <br />
              <br />
              <br />
              <br />
              <th>Refill Request Id</th><td></td><td></td>
              <th>Product_Name</th><td></td><td></td>
              
              
              <th>Product_Category</th><td></td><td></td>
              
             
              <th>Qty</th>
             
              {/* <th>Options</th> */}
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
              return (
                <tr key={index}><td></td>
                  <td>{index}</td><td></td><td></td>
                 <td>{item.refill_product_name}</td><td></td><td></td>
                  <td>{item.refill_category}</td><td></td><td></td>
                  <td>{item.refill_qty}</td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
