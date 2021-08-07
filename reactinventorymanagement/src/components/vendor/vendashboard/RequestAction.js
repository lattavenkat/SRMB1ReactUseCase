import React, { useEffect, useState } from "react";
import "./RequestActiondes.css";

export default function RequestAction() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("Hello this use effect... ");
    //axios.get();

    fetch("http://localhost:8080/api/requestgoods")
      .then((res) => res.json())
      .then((goods) => {
        console.log(goods);
        setData(goods);
      })
      .catch((e) => {
        console.error("ERR in request data");
        console.error(e);
      })
      .finally(() => {
        console.log("I am in finally block!!!!");
      });
  }, []);

  return (
    <div>
      <h1>Goods request List From Admin </h1>
      <div>
        <div class="container">
          <table className="responsive-table">
            <thead>
              <th>Id</th>
              <th>Product Code</th>
              <th>Product Category</th>
              <th>Product Name</th>
              <th>Quantity</th>
            </thead>
            <tbody>
              {data &&
                data.map((x) => {
                  return (
                    <tr>
                      <td>{x.id}</td>
                      <td>{x.pcode}</td>
                      <td>{x.pcate}</td>
                      <td>{x.pname}</td>
                      <td>{x.qty}</td>
                      <td>
                        <button className="button1">DENY</button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
