import React, { useState, useEffect } from "react";
import Navbar from "components/module/Navbar";
import Layout from "components/Layout";
import axios from "utils/axios";

export async function getStaticPaths() {
  const listUser = await axios
    .get("http://jsonplaceholder.typicode.com/users")
    .then((res) => {
      // console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      return [];
    });

  const listPath = listUser.map((item) => ({
    params: {
      id: `${item.id}`,
    },
  }));
  // console.log(listUser);
  // console.log(listPath);
  return {
    paths: listPath,
    fallback: "blocking",
    // false akan direct ke page 404
    // true akan dapat menampilkan halaman tetapi bisa terjadi error jika data tidak ditemukan
    // blocking akan menampilkan halaman tetapi beberapa element yang tidak memiliki data akan dihilangkan secara otomatis
  };
}

export async function getStaticProps(context) {
  const response = await axios
    .get(`http://jsonplaceholder.typicode.com/users/${context.params.id}`)
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
  return (
    <Layout title="Rendering With SSG Detail">
      <Navbar />
      <h1>Rendering With SSG Detail</h1>
      <hr />
      <h5>{props.data.name}</h5>
      <h5>{props.data.email}</h5>
    </Layout>
  );
}
