"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
const props = require("../config/SDLCProperties");
class SDLCConnectionPool {
    constructor() {
        this.pool = mysql.createPool({
            host: props.props.getDatabaseHost(),
            user: props.props.getDatabaseUser(),
            password: props.props.getDatabasePassword(),
            database: props.props.getDatabaseName()
        });
    }
}
exports.default = new SDLCConnectionPool().pool;
//# sourceMappingURL=SDLCConnectionPool.js.map