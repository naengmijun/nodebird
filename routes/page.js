const express = require('express');
const router = express.Router();
const { renderJoin, renderMain, renderProfile } = require('../controllers/page');

router.get('/profile', renderProfile);
router.get('/join', renderJoin);
router.get('/', renderMain);

module.exports = router;