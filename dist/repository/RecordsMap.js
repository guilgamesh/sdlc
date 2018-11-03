"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
class RecordsMap {
    constructor(recordTypes) {
        this.map = {};
    }
    addRecords(recordType, records) {
        var recordMap = this.map[recordType];
        if (util_1.isUndefined(recordMap)) {
            this.map[recordType] = {};
            recordMap = this[recordType];
        }
        for (let record of records) {
            recordMap[record.id.toString()] = record;
        }
    }
    getRecordById(recordType, id) {
        var record = null;
        var recordMap = this.map[recordType];
        if (!util_1.isUndefined(recordMap)) {
            record = recordMap[id];
        }
        return record;
    }
    getRecordsWithFK(recordType, fkName, fkValue) {
        var records = [];
        var recordMap = this.map[recordType];
        for (let id in recordMap) {
            var record = recordMap[id.toString()];
            if (record[fkName] === fkValue) {
                records.push(record);
            }
        }
        return records;
    }
}
exports.RecordsMap = RecordsMap;
//# sourceMappingURL=RecordsMap.js.map