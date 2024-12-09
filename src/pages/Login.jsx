import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { validationSchemas } from "../activity/validationSchemas";
import TextInput from "../component/TextInput";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "user@gmail.com", password: "123456" },
    validationSchema: validationSchemas.login,
    onSubmit: (values) => {
      navigate("/");
      toast.success("Login Successful");
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to Trend Bazaar
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <TextInput label="Email" id="email" type="email" formik={formik} />

          <div className="relative">
            <TextInput
              label="Password"
              id="password"
              type={showPassword ? "text" : "password"}
              formik={formik}
            />
            <div
              className="absolute top-[2.7rem] right-4 cursor-pointer text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-500 hover:underline"
            >
              Sign up
            </button>
          </p>
          <p className="text-gray-600 mt-2">
            <button
              onClick={() => navigate("/forgot-password")}
              className="text-blue-500 hover:underline"
            >
              Forgot password?
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
