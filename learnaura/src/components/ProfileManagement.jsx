import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiEdit3, FiUpload } from "react-icons/fi";

const ProfileSchema = Yup.object().shape({
  name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  bio: Yup.string().max(200, "Bio can't exceed 200 characters"),
});

export default function ProfileManagement() {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setFieldValue("profilePic", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 p-6">
      <motion.div 
        className="max-w-lg mx-auto p-6 bg-white bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-4 text-blue-700">Edit Profile</h2>
        
        <Formik
          initialValues={{ name: "", email: "", bio: "", profilePic: "" }}
          validationSchema={ProfileSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("Profile Updated:", values);
            alert("Profile updated successfully!");
            resetForm();
            setPreview(null);
            setSubmitting(false);
          }}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form className="space-y-4">
              {/* Profile Picture Upload */}
              <div className="text-center">
                {preview ? (
                  <motion.img
                    src={preview}
                    alt="Profile Preview"
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto flex items-center justify-center">
                    <FiUser size={40} className="text-gray-400" />
                  </div>
                )}

                <label className="cursor-pointer mt-3 inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  <FiUpload size={16} />
                  <span>Upload</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, setFieldValue)}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Input Fields */}
              <div className="relative">
                <FiUser className="absolute left-3 top-3 text-gray-400" />
                <Field
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="relative">
                <FiMail className="absolute left-3 top-3 text-gray-400" />
                <Field
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="relative">
                <FiEdit3 className="absolute left-3 top-3 text-gray-400" />
                <Field
                  as="textarea"
                  name="bio"
                  placeholder="Short Bio"
                  className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
                <ErrorMessage name="bio" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Save Button */}
              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2"
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                <FiEdit3 />
                <span>{isSubmitting ? "Saving..." : "Save Changes"}</span>
              </motion.button>
            </Form>
          )}
        </Formik>
      </motion.div>
    </div>
  );
}
