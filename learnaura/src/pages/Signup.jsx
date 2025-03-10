import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Signup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      gender: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      gender: Yup.string().required("Gender is required"),
    }),
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      try {
        const response = await fetch("http://localhost:5000/api/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        setStatus(data.message);
      } catch (error) {
        setStatus("Signup failed. Please try again.");
      }
      setSubmitting(false);
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
      <form onSubmit={formik.handleSubmit} className="bg-white p-10 rounded-lg shadow-2xl w-96 text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-6">Join the Learning Community</h2>
        {formik.status && <p className="text-red-500 mb-4 text-center">{formik.status}</p>}

        <input
          className="border border-gray-300 p-3 w-full mb-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
          type="text"
          name="name"
          placeholder="Full Name"
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-sm mb-2">{formik.errors.name}</p>
        )}

        <input
          className="border border-gray-300 p-3 w-full mb-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
          type="email"
          name="email"
          placeholder="Email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm mb-2">{formik.errors.email}</p>
        )}

        <input
          className="border border-gray-300 p-3 w-full mb-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
          type="password"
          name="password"
          placeholder="Password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-sm mb-2">{formik.errors.password}</p>
        )}

        <select
          className="border border-gray-300 p-3 w-full mb-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
          name="gender"
          {...formik.getFieldProps("gender")}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {formik.touched.gender && formik.errors.gender && (
          <p className="text-red-500 text-sm mb-2">{formik.errors.gender}</p>
        )}

        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 w-full rounded-lg text-lg font-bold hover:opacity-90 transition duration-300"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Signing Up..." : "Sign Up"}
        </button>
        <p className="mt-4 text-center text-gray-700">
          Already have an account? <a href="/login" className="text-indigo-600 font-bold hover:underline">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
