const User = require('../models/User');

exports.updateContacts = async (req, res) => {
  const { contacts } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { contacts: contacts.slice(0, 5) },
      { new: true }
    );
    res.status(200).json({ contacts: user.contacts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({ contacts: user.contacts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
