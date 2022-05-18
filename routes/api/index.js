const koa = require('koa')
const Router = require('koa-router')

const regionRouter = require('./region')
const branchRouter = require('./branch')

const router = new Router({prefix: '/api'});

router.use(
    regionRouter.routes(),
    branchRouter.routes()
);

module.exports = router;