import koa from 'koa';
import router from 'koa-router';
import serve from 'koa-static';
import send from 'koa-send';
import webpack from 'webpack';
import config from './webpack.config.dev';

const compiler = webpack(config);
const app = koa();

/*
  Middleware:
    npm i -D koa-webpack-dev-middleware
    npm i -D koa-webpack-hot-middleware
*/
/*****************************************************************************/
const middleware = require('koa-webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
});
app.use(middleware);
app.use(require('koa-webpack-hot-middleware')(compiler));
/*****************************************************************************/

//Static files
app.use(serve('./static'));

//Route
const r = router();
r.get('/', index);
app.use(r.routes());

//Send index.html
function *index() {
  yield send(this, './static/index.html');
}

export default app
