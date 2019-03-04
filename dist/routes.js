"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const router = new Router();
router.get('/', async (ctx) => {
    ctx.body = 'Hello World!';
});
exports.routes = router.routes();
//# sourceMappingURL=routes.js.map