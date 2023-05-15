import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Gap from "../Gap";
import Validation from "../Validation";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import Email from "../Validation/Email";
// import { useNavigate } from "react-router-dom";

const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [err, setErr] = useState("");

  //   const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/v1/auth/register", data);
      //   alert("Registration completed! Now login.");
      //   navigate("/login");
    } catch (err) {
      if (err.response.status === 409) {
        setErr("Email already exists!");
      }
    }
  };

  const handleCloseError = () => {
    setErr("");
  };

  return (
    <>
      <div className="mx-5">
      {err && <Email error={err} onClose={handleCloseError} />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className={`form-control p-2`}
            placeholder="Full Name"
            {...register("name", {
              required: "Full Name is required!",
              minLength: {
                value: 5,
                message: "Please enter a longer Full Name!",
              },
            })}
          />
          <ErrorMessage errors={errors} name="name" render={({ message }) => <Validation error={message} />} />

          <Gap height={25} />

          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            id="email"
            className={`form-control p-2`}
            placeholder="Email"
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format!"}
            })}
          />
          <ErrorMessage errors={errors} name="email" render={({ message }) => <Validation error={message} />} />

          <Gap height={25} />

          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`form-control p-2`}
            placeholder="Password"
            {...register("password", {
              required: "Password is required!",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message: "Minimum 8 characters with a combination of letters, numbers, and special characters.",
              },
            })}
          />
          <ErrorMessage errors={errors} name="password" render={({ message }) => <Validation error={message} />} />

          <Gap height={40} />

          <button type="submit" className="btn btn-primary p-2">
            Register
          </button>
        </form>
      </div>
      <DevTool control={control} />
    </>
  );
};

export default Form;
