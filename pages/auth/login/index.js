import React, { useState } from "react";
import Layout from "components/Layout";
import axios from "utils/axios";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import { getDataCookie } from "middleware/authorizationPage";
import { connect } from "react-redux";
import { loginUser } from "stores/action/auth";

export async function getServerSideProps(context) {
  const dataCookie = await getDataCookie(context);
  if (dataCookie.isLogin) {
    return {
      redirect: {
        destination: "/main/home",
        permanent: false,
      },
    };
  }
  return { props: {} };
}

function Login(props) {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // INPUT
    // console.log(form);
    // {
    //   email: "...",
    //   password: "..."
    // }
    // PROSES
    // menjalankan proses axios
    // axios
    //   .post("/auth/login", form)
    //   .then((res) => {
    //     // OUTPUT
    //     console.log(res);
    //     Cookie.set("token", res.data.data.token);
    //     Cookie.set("id", res.data.data.id);
    //     // if (res.data.data.pin) {
    //     //   ...
    //     // } else {
    //     //   ...
    //     // }
    //     router.push("/main/home");
    //   })
    //   .catch((err) => {
    //     // OUTPUT
    //     console.log(err);
    //   });
    props.loginUser(form);
  };

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // email : "bagustri15@gmail.com"
  };

  // console.log(props.auth);
  return (
    <Layout title="Login">
      <div className="container">
        <h1>Login Page</h1>
        <button onClick={() => props.addToCart("DATA")}>Add To Cart</button>
        <hr />
        <div className="mt-2">
          <form className="card p-5">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChangeText}
            />
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChangeText}
            />
            <button className="btn btn-primary mt-3" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

// const mapDispatchToProps = { loginUser };

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data) => dispatch({ type: "ADDCART", data: data }),
  loginUser: (data) => dispatch(loginUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
