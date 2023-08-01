import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router(); 

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

const post = new Router();
posts.get('/:id',postsCtrl.checkObjectId, postsCtrl.read);

posts.delete('/',checkLoggedIn, postsCtrl.remove);
posts.patch('/',checkLoggedIn, postsCtrl.update);

posts.use('/:id' , postsCtrl.checkObjectId, post.routes());

export default posts;