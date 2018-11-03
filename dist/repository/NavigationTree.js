"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const NavigationProperty_1 = require("./NavigationProperty");
class NavigationTree {
    constructor(spec, paths) {
        this.validateParams(spec, paths);
        this.node = new NavigationProperty_1.NavigationProperty(spec);
        this.children = [];
        var groupMap = this.prefixGroupMap(paths);
        for (let spec in groupMap) {
            this.children.push(new NavigationTree(spec, groupMap[spec]));
        }
    }
    validateParams(spec, paths) {
    }
    prefixGroupMap(paths) {
        var groupMap = {};
        for (let path of paths) {
            var specs = path.split(".");
            if (specs[0].length > 0) {
                if (util_1.isUndefined(groupMap[specs[0]]))
                    groupMap[specs[0]] = [];
                groupMap[specs[0]].push(specs.splice(1).join("."));
            }
        }
        return groupMap;
    }
}
exports.NavigationTree = NavigationTree;
//# sourceMappingURL=NavigationTree.js.map