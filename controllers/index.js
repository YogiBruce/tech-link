//Supporting files
const router = require('express').Router();

const apir

//Default for unspecifiec route
router.use((req, res) => {
    res.send('<h1>Wrong Route!</h1>');
});

module.exports = router;