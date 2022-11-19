const apiRouters = require('express').Router();
const postRouter = require('./post-routes');
const commentRouter = require('./comment-routes');

apiRouters.use('./post-routes', postRouter);
apiRouters.use('/comment-routes', commentRouter);

module.exports = apiRouters;