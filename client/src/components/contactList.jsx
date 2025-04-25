// src/components/ContactList.jsx
import React, { useState } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState([""]);
  const token = localStorage.getItem("token");

  const handleChange = (index, value) => {
    const updatedContacts = [...contacts];
    updatedContacts[index] = value;
    setContacts(updatedContacts);
  };

  const handleAdd = () => {
    if (contacts.length < 5) {
      setContacts([...contacts, ""]);
    }
  };

  const handleRemove = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  const handleSave = async () => {
    // Validate all numbers are 10-digit
    for (let number of contacts) {
      if (!/^\d{10}$/.test(number)) {
        alert("Each contact must be a 10-digit number.");
        return;
      }
    }

    try {
      const response = await fetch("http://localhost:5000/save-contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ contacts }),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Contacts saved successfully!");
      } else {
        alert(result.message || "Failed to save contacts");
      }
    } catch (err) {
      console.error("Save error:", err);
      alert("Something went wrong while saving contacts.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Emergency Contacts</h2>
      {contacts.map((contact, index) => (
        <div key={index} style={{ marginBottom: "10px", display: "flex" }}>
          <input
            type="text"
            value={contact}
            placeholder="Enter 10-digit phone number"
            onChange={(e) => handleChange(index, e.target.value)}
            style={{ flex: 1, padding: "8px" }}
          />
          {contacts.length > 1 && (
            <button
              onClick={() => handleRemove(index)}
              style={{
                marginLeft: "10px",
                backgroundColor: "#ff4d4d",
                color: "#fff",
                border: "none",
                padding: "8px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      {contacts.length < 5 && (
        <button onClick={handleAdd} style={{ marginTop: "10px" }}>
          Add Contact
        </button>
      )}
      <button onClick={handleSave} style={{ display: "block", marginTop: "20px" }}>
        Save Contacts
      </button>
    </div>
  );
};

export default ContactList;
