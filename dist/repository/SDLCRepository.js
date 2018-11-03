"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SQLCommandsCatalogue_1 = require("./SQLCommandsCatalogue");
const SDLCRecordMaterializer_1 = require("./SDLCRecordMaterializer");
const SDLCConnectionPool_1 = require("./SDLCConnectionPool");
class SDLCRepository {
    constructor() {
        this.pool = SDLCConnectionPool_1.default;
    }
    getAllSolutions(callback) {
        let matlzr = new SDLCRecordMaterializer_1.SDLCRecordMaterializer();
        SDLCConnectionPool_1.default.query(SQLCommandsCatalogue_1.SQLCommandsCatalogue.SelectAllSolutions, function (error, results, field) {
            if (error) {
                callback(error);
            }
            else {
                callback(null, matlzr.buildSolutions(results));
            }
        });
    }
}
exports.SDLCRepository = SDLCRepository;
exports.default = new SDLCRepository();
//# sourceMappingURL=SDLCRepository.js.map