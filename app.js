const koa = require('koa')
const Router = require('koa-router');
const router = require('./routes')

const port = 3000;
const app = new koa();

app.use(router.routes());
app.listen(port, () => console.log('listening at http://localhost:' + port));