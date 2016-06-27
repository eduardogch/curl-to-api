/**
 * Module dependencies.
 */
const express    = require('express');
const bodyParser = require('body-parser');
const logger     = require('morgan');
const errorHandler = require('errorhandler');
const urls = require('./urls.js');

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Primary app routes.
 */
app.get('/', (req, res) => {
    res.json({ message: 'hooray! welcome to our api!' });
});

/**
 * Primary app routes.
 */
app.get('/api', (req, res) => {
    var t = urls.getProjectBuilds();
    res.json(t);
});

/**
 * Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;
