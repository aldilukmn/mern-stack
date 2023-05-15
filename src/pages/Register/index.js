import { React } from "react";
import "./register.scss";
import { registerBg } from "../../assets";
import {  Form, Gap, Link } from "../../components";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="main-page">
        <div className="left">
          <img src={registerBg} className="bg-image" alt="image-regiter" />
        </div>
        <div className="right">
          <p className="title">Register</p>
          <Form/>
          <Gap height={60} />
          <Link title={`Back to Login`} onClick={() => navigate("/login")} />
        </div>
      </main>
    </>
  );
};

export default Register;
