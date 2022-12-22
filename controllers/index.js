const router = require('express').Router();
const dashRoutes = require('./dashRoutes')
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashRoutes);


module.exports = router;
