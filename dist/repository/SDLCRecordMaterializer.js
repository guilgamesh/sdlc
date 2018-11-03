"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Solution_1 = require("../model/Solution");
class SDLCRecordMaterializer {
    buildSolutions(records) {
        var solutions = [];
        for (let record of records) {
            var solution = new Solution_1.Solution();
            solution.id = record.id;
            solution.name = record.name;
            solutions.push(solution);
        }
        return solutions;
    }
    constructor() {
    }
}
exports.SDLCRecordMaterializer = SDLCRecordMaterializer;
//# sourceMappingURL=SDLCRecordMaterializer.js.map