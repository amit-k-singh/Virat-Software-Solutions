"use client";

import { useState, useEffect } from "react";
import { Modal, ModalBody, Form, FormGroup, Input, Button } from "reactstrap";
import { RiCloseLine } from "react-icons/ri";

export default function StayWithUsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
  });

  // Open modal after 5 minutes (300000 ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 6000); // 6 seconds for faster visibility during browsing

    return () => clearTimeout(timer);
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to API)
    console.log("Form submitted:", formData);
    // Close modal after successful submission
    setIsOpen(false);
    setFormData({ name: "", email: "", phone: "", requirements: "" });
  };

  return (
    <Modal isOpen={isOpen} centered size="xl" className="stayWithUsModal">
      <ModalBody className="stayWithUsBody">
        <div className="stayWithUsHeader">
          <h2 className="stayWithUsTitle">Stay With Us</h2>
          <RiCloseLine className="stayWithUsClose" onClick={toggle} />
        </div>
        
        <div className="stayWithUsContent">
          <div className="benefitsList">
            <p className="stayWithUsSubtitle">
              Are you looking for the perfect partner for your next software project?
            </p>
            <div className="benefitItem">
              <span className="checkmark">✓</span>
              <div>
                <strong>IP Rights, Security & NDA</strong>
                <p className="benefitCopy">
                  Full ownership and confidentiality with robust security guaranteed.
                </p>
              </div>
            </div>

            <div className="benefitItem">
              <span className="checkmark">✓</span>
              <div>
                <strong>Flexible Contracts & Transparency</strong>
                <p className="benefitCopy">Tailored contracts with clear and flexible processes.</p>
              </div>
            </div>

            <div className="benefitItem">
              <span className="checkmark">✓</span>
              <div>
                <strong>Free Trial & Quick Setup</strong>
                <p className="benefitCopy">No-risk trial and swift onboarding process.</p>
              </div>
            </div>
          </div>

          <Form onSubmit={handleSubmit} className="stayWithUsForm">
            <FormGroup>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <div className="formRow">
              <FormGroup className="formCol">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup className="formCol">
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Contact Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </div>

            <FormGroup>
              <Input
                type="textarea"
                name="requirements"
                id="requirements"
                placeholder="Describe your Requirements"
                rows="3"
                value={formData.requirements}
                onChange={handleInputChange}
              />
            </FormGroup>

            <Button type="submit" className="bookConsultationBtn">
              Book a Free Consultation
            </Button>
          </Form>
        </div>
      </ModalBody>
    </Modal>
  );
}
