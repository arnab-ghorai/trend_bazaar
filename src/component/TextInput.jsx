import React from "react";

const TextInput = ({ label, id, type, formik }) => {
  const error = formik.touched[id] && formik.errors[id];
  return (
    <div>
      <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...formik.getFieldProps(id)}
        className={`w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none ${
          error ? "border-red-500" : "focus:ring-blue-500"
        }`}
      />
      {error && <p className="text-red-500 text-sm">{formik.errors[id]}</p>}
    </div>
  );
};

export default TextInput;
