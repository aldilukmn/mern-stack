import { React, useState } from "react";
import "./register.scss";
import { registerBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = "Full Name is required!";
    }

    if (!email.trim()) {
      validationErrors.email = "Email is required!";
    }

    if (!password.trim()) {
      validationErrors.password = "Password is required!";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await axios.post("http://localhost:3001/v1/auth/register", { name, email, password });
      alert("Registration completed! Now login.");
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.data.message === "Email already exists!") {
        setErrors({ email: "Email already exists!" });
      } else {
        console.log("Err : ", err);
      }
    }
  };

  return (
    <>
      <main className="main-page">
        <div className="left">
          <img src={registerBg} className="bg-image" alt="image-regiter" />
        </div>
        <div className="right">
          <p className="title">Register</p>
          <Input label={`Full Name`} placeholder="Full Name" onChange={(e) => setName(e.target.value)} value={name} />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          <Gap height={10} />
          <Input label={`Email`} placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          {errors.emailR && <p style={{ color: "red" }}>{errors.emailR}</p>}
          <Gap height={10} />
          <Input label={`Password`} placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          <Gap height={30} />
          <Button title={`Register`} onClick={onSubmit} />
          <Gap height={60} />
          <Link title={`Back to Login`} onClick={() => navigate("/login")} />
        </div>
      </main>
    </>
  );
};

export default Register;
