const router = require('express').Router();
const htmlRoutes = require('./html/html-routes');
const apiRoutes = require('./api');

router.use('/', htmlRoutes);
// add previx of /api to all the api routes imported
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});


module.exports = router;
