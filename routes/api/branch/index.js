const koa = require('koa')
const Router = require('koa-router')

const router = new Router({prefix: '/branches'});

router.get('/', (ctx, next) => {
    ctx.body = 'api/branches';
});

router.get('/all-branches', (ctx, next) => {
    ctx.body = 'api/regions/all-branches';
});

module.exports = router;