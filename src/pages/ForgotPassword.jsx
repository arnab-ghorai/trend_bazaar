import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { validationSchemas } from "../activity/validationSchemas";
import TextInput from "../component/TextInput";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: validationSchemas.forgotPassword,
    onSubmit: (values) => {
      navigate("/");
      toast.success("Reset Instructions Send");
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Forgot Your Password?
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          Enter your email address below, and we'll send you instructions to
          reset your password.
        </p>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <TextInput label="Email" id="email" type="email" formik={formik} />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Reset Instructions
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
