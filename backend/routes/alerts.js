const express = require('express');
const router = express.Router();
const { sendAlert } = require('../controllers/alertController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.post('/', sendAlert);

module.exports = router;
