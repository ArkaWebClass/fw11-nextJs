import React from "react";
import Navbar from "components/module/Navbar";
import Layout from "components/Layout";
import { useRouter } from "next/router";

export default function Product(props) {
  const router = useRouter();
  console.log(router.query);
  return (
    <Layout title="Product Detail With Slug">
      <Navbar />
      <h1>Page Detail Product With Slug</h1>
    </Layout>
  );
}
