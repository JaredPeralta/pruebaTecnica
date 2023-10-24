const express = require('express')
const router = express.Router()

router.get('/votos', (req, res) => {
    res.send('Hello World!')
})

module.exports = router