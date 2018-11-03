"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NavigationProperty_1 = require("./../../repository/NavigationProperty");
describe('Navigation Property', () => {
    var spec = "Projects";
    it('Construct it and assign properties correctly', () => {
        var prop = new NavigationProperty_1.NavigationProperty(spec);
        console.log('entityType:', prop.entityType);
        console.log('foreignKey:', prop.foreignKey);
    });
});
//# sourceMappingURL=NavigationPropertyTest.js.map