const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/authMiddleware');

// Save Contacts
// server/routes/contacts.js


const userContacts = {};
router.post('/save-contacts', token, async (req, res) => {
    try {
      const { contacts } = req.body;
      const userId = req.userId; // Get userId from the token (from the middleware)
  
      console.log("Incoming data:", { userId, contacts });
  
      if (!Array.isArray(contacts) || contacts.length === 0) {
        return res.status(400).json({ message: "Contacts must be an array and cannot be empty" });
      }
  
      userContacts[userId] = contacts;
      console.log("Saved contacts:", userContacts);
  
      return res.status(200).json({ message: "Contacts saved successfully" });
  
    } catch (err) {
      console.error("Error in /save-contacts:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
// Get Contacts
router.get('/get-contacts', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({ contacts: user.contacts || [] });
  } catch (err) {
    console.error("Error fetching contacts:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
