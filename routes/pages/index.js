const router = require('express').Router();

const index = require('./home');
const notes = require('./notes');

router.use('/', home);
router.use('/notes', notes);

module.exports = router;
