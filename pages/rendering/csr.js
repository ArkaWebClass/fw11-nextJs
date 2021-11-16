import React, { useState, useEffect } from "react";
import Navbar from "components/module/Navbar";
import Layout from "components/Layout";
import axios from "utils/axios";

export default function CSR(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataUser();
  }, []);

  const getDataUser = () => {
    axios
      .get("/user?page=1&limit=2&search=&sort=")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <Layout title="Rendering With CSR">
      <Navbar />
      <h1>Rendering With CSR</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.firstName}</h3>
          <hr />
        </div>
      ))}
    </Layout>
  );
}
