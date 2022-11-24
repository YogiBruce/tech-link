//Supporting files
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/', apiRoutes);
router.use('/', homeRoutes);
router.use('/', dashboardRoutes);

module.exports = router;