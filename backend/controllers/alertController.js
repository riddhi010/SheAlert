const User = require('../models/User');
const {Vonage} = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET
});

exports.sendAlert = async (req, res) => {
  const { location } = req.body;

  try {
    const user = await User.findById(req.user.id);
    const message = `SheAlert!! ${user.username} is in danger. Help immediately! Location: ${location}`;

    user.contacts.forEach(contact => {
      vonage.message.sendSms("SheAlert", contact, message, (err, responseData) => {
        if (err) console.log(err);
        else if (responseData.messages[0].status !== "0")
          console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
      });
    });

    res.status(200).json({ message: 'Alerts sent successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
