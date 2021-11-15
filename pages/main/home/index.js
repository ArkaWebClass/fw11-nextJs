import React, { useState, useEffect } from "react";
import Navbar from "components/module/Navbar";
import Layout from "components/Layout";
import axios from "utils/axios";
import { getDataCookie } from "middleware/authorizationPage";

// Server Side Rendering
export async function getServerSideProps(context) {
  const dataCookie = await getDataCookie(context);
  if (!dataCookie.isLogin) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  const response = await axios
    .get("/user?page=1&limit=2&search=&sort=", {
      headers: {
        Authorization: `Bearer ${dataCookie.token}`,
      },
    })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      return [];
    });
  return {
    props: { data: response },
  };
}

export default function Home(props) {
  // Client Side Rendering
  const [data, setData] = useState(props.data);
  // useEffect(() => {
  //   getDataUser();
  // }, []);
  const getDataUser = () => {
    axios
      .get("/user?page=1&limit=2&search=&sort=")
      .then((res) => {
        // console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  // =========
  // Server Side Rendering
  // console.log(props);

  return (
    <Layout title="Home">
      <Navbar />
      <h1>Home Page</h1>
      {props.data.map((item) => (
        <div key={item.id}>
          <h3>{item.firstName}</h3>
          <hr />
        </div>
      ))}
    </Layout>
  );
}
