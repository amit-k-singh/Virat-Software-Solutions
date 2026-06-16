"use client";

import { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";

function FormField({ label, children, className = "" }) {
  return (
    <label className={`fieldGroup ${className}`.trim()}>
      <span>{label}</span>
      {children}
    </label>
  );
}

export default function LeadFormShell({
  title,
  description,
  buttonLabel,
  fieldLabels,
  options = [],
  compact = false,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      project: String(formData.get("project") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Unable to send your request right now.");
      }

      setStatus({
        type: "success",
        message: result?.message || "Your request has been sent successfully.",
      });
      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong while sending your request.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={`leadForm ${compact ? "leadFormCompact" : ""}`} onSubmit={handleSubmit}>
      <fieldset className="leadFormFieldset" disabled={isSubmitting}>
        <div className="leadFormHeading">
          <p className="leadFormTag">Project Brief</p>
          {title ? <h3>{title}</h3> : null}
          {description ? <p>{description}</p> : null}
        </div>

        <div className="leadFormGrid">
          <FormField label={fieldLabels.name}>
            <input type="text" name="name" placeholder="Your full name" autoComplete="name" required />
          </FormField>

          <FormField label={fieldLabels.email}>
            <input type="email" name="email" placeholder="you@company.com" autoComplete="email" required />
          </FormField>

          <FormField label={fieldLabels.phone}>
            <input type="tel" name="phone" placeholder="+1 555 555 5555" autoComplete="tel" />
          </FormField>

          <FormField label={fieldLabels.project}>
            <select name="project" defaultValue="" required>
              <option value="" disabled>
                Select an option
              </option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </FormField>

          <FormField label={fieldLabels.message} className="fieldWide">
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your project goals, timeline, and budget range"
              required
            />
          </FormField>
        </div>

        <div className="leadFormActions">
          <button className="primaryButton" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : buttonLabel}
            <RiArrowRightLine aria-hidden="true" />
          </button>
          {status.message ? (
            <p className={`leadFormStatus leadFormStatus${status.type === "success" ? "Success" : "Error"}`} role="status">
              {status.message}
            </p>
          ) : null}
        </div>
      </fieldset>
    </form>
  );
}
