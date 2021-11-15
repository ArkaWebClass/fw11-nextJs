import React from "react";
import Navbar from "components/module/Navbar";
import Layout from "components/Layout";

export default function Profile() {
  return (
    <Layout title="Profile">
      <Navbar />
      <h1>Page Profile</h1>
      <h3>Link Backend : {process.env.URL_BACKEND}</h3>
      <button className="btn btn-primary">Click Me !</button>
    </Layout>
  );
}
