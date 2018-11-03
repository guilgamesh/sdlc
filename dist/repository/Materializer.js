"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RecordsMap_1 = require("./RecordsMap");
class Materializer {
    materialize(entityType, entityPaths, id) {
        var record = this.recordsMap.getRecordById(entityType, id);
        for (let i = 0; i < entityPaths.length; i++) {
        }
        return record;
    }
    consturctor(entityType, paths, recordsMap) {
        var entityTypes = this.parseEntityTypes();
        this.recordsMap = new RecordsMap_1.RecordsMap(entityTypes);
        this.recordsMap = recordsMap;
    }
    parseEntityTypes() {
        var typesMap = { [this.entityType]: true };
        for (let path of this.paths) {
            for (let entityType of path.split(".")) {
                typesMap[entityType] = true;
            }
        }
        return Object.keys(typesMap);
    }
}
exports.Materializer = Materializer;
//# sourceMappingURL=Materializer.js.map