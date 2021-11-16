import React, { useState, useEffect } from "react";
import Navbar from "components/module/Navbar";
import Layout from "components/Layout";
import axios from "utils/axios";
import { useRouter } from "next/router";

export async function getStaticProps(context) {
  console.log("Proses Render Is Running !");
  const response = await axios
    .get("http://jsonplaceholder.typicode.com/users")
    .then((res) => {
      // console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      return [];
    });

  return {
    props: { data: response },
  };
}

export default function SSG(props) {
  const router = useRouter();

  const handleDetailProfile = (id) => {
    router.push(`/rendering/ssg/${id}`);
  };

  return (
    <Layout title="Rendering With SSG">
      <Navbar />
      <h1>Rendering With SSG</h1>
      {props.data.map((item) => (
        <div key={item.id}>
          <button onClick={() => handleDetailProfile(item.id)}>
            {item.name}
          </button>
        </div>
      ))}
    </Layout>
  );
}
