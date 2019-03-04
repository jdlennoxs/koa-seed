"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const routes_1 = require("./routes");
const config_1 = require("./config");
const logger_1 = require("./logger");
const app = new Koa();
app.use(logger_1.logger);
app.use(routes_1.routes);
app.listen(config_1.config.port);
console.log(`Listening on ${config_1.config.port}`);
//# sourceMappingURL=server.js.map