var express = require('express');
const { createConversation, getConvo } = require('../api/controllers/conversation');
const { createMessage, getMessage, getAllMessage } = require('../api/controllers/message');
var router = express.Router();

/* POST users listing. */
router.post('/', createConversation);

router.get('/', getConvo)

router.post('/message', createMessage)

router.get('/message/:convoId', getMessage)

router.get('/mess', getAllMessage)

module.exports = router;
