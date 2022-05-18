const koa = require('koa')
const Router = require('koa-router')

const router = new Router({prefix: '/regions'});

router.get('/', (ctx, next) => {
    ctx.body = 'api/regions';
});

router.get('/all-regions', (ctx, next) => {
    ctx.body = 'api/regions/all-regions';
});

module.exports = router;