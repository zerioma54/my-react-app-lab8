import React, { useState, useEffect } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState("");

  // Load draft from localStorage
  useEffect(() => {
    const draft = JSON.parse(localStorage.getItem("contactDraft"));
    if (draft) setForm(draft);
  }, []);

  // Save draft to localStorage
  useEffect(() => {
    localStorage.setItem("contactDraft", JSON.stringify(form));
  }, [form]);

  const validate = () => {
    const newErrors = {};
    if (!/^[\p{L}\s'-]+$/u.test(form.name)) newErrors.name = "Invalid name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email.";
    if (!/^[a-zA-Z\s]+$/.test(form.subject)) newErrors.subject = "Subject should be letters only.";
    if (/[<>{}]/.test(form.message)) newErrors.message = "Message contains invalid characters.";
    if (!form.consent) newErrors.consent = "You must agree to be contacted.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length !== 0) return;

    try {
      await axios.post("/.netlify/functions/api/contact", form);
      setFeedback(" Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "", consent: false });
      localStorage.removeItem("contactDraft");
      setErrors({});
    } catch (err) {
      setFeedback(" Failed to send message. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Contact Me</h2>
      {feedback && <p className="mt-2">{feedback}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" name="name" className="form-control" value={form.name} onChange={handleChange} />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" className="form-control" value={form.email} onChange={handleChange} />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>

        <div className="mb-3">
          <label>Subject</label>
          <input type="text" name="subject" className="form-control" value={form.subject} onChange={handleChange} />
          {errors.subject && <small className="text-danger">{errors.subject}</small>}
        </div>

        <div className="mb-3">
          <label>Message</label>
          <textarea name="message" className="form-control" rows="4" value={form.message} onChange={handleChange}></textarea>
          {errors.message && <small className="text-danger">{errors.message}</small>}
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" name="consent" checked={form.consent} onChange={handleChange} />
          <label className="form-check-label">
            I consent to be contacted using the information provided. My data will be stored securely.
          </label>
          {errors.consent && <small className="text-danger d-block">{errors.consent}</small>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact;