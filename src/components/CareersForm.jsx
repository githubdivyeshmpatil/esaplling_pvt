import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";

const CareersForm = () => {
   useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",     // 🔁 Replace with your EmailJS Service ID
        "your_template_id",    // 🔁 Replace with your Template ID
        form.current,
        "your_public_key"      // 🔁 Replace with your Public Key (API key)
      )
      .then(
        (result) => {
          alert("Form submitted successfully!");
          e.target.reset(); // Clear the form after success
        },
        (error) => {
          alert("An error occurred: " + error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="space-y-4 p-4 max-w-md mx-auto bg-white shadow-md rounded-md mt-10"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Careers Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        className="w-full p-2 border border-gray-300 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="w-full p-2 border border-gray-300 rounded"
      />

      <input
        type="text"
        name="position"
        placeholder="Position Applying For"
        required
        className="w-full p-2 border border-gray-300 rounded"
      />

      <textarea
        name="message"
        placeholder="Cover Letter / Message"
        rows="4"
        className="w-full p-2 border border-gray-300 rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Sub
        
      </button>
    </form>
  );
};

export default CareersForm;
