const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');


//const lib = require('lib')({token: 'tok_dev_FiLP84Hou3MzABFXLmXmp4ZchLrsdBx8hdHfjCSg5qstYf5ARCLKH2jSnyZJtwDT'});
// make API request
//let result = await lib.keith.pokefusion['@0.2.0']();

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
