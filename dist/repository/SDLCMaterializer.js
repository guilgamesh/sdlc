"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Solution_1 = require("../model/Solution");
class SDLCMaterializer {
    static buildSolutions(packets) {
        var solutions = [];
        for (let packet of packets) {
            var solution = new Solution_1.Solution();
            for (let prop in packet) {
                solution[prop] = packet[prop];
            }
            solutions.push(solution);
        }
        return solutions;
    }
}
exports.SDLCMaterializer = SDLCMaterializer;
//# sourceMappingURL=SDLCMaterializer.js.map