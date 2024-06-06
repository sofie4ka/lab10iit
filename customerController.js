const express = require('express');
const router = express.Router();

router.get('/index', (req, res) => {
  res.send("haha got you, no customers in this app");
});

module.exports = router;
