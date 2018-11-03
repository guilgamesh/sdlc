"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NavigationProperty {
    constructor(spec) {
        var regex = /(\w+)(\((\w+)(\[\])?\))?/;
        var matches = regex.exec(spec);
        if (matches.length === 0)
            this.throwInvalidNavigationSpec(spec);
        this.entityType = matches[1];
        if (matches.length >= 4)
            this.foreignKey = matches[3];
        else
            this.foreignKey = this.foreignKeyName(this.entityType);
        if (matches.length === 5)
            this.isArray = true;
        else
            this.isArray = false;
    }
    foreignKeyName(entityType) {
        return entityType.toLowerCase + "_id";
    }
    throwInvalidNavigationSpec(spec) {
    }
}
exports.NavigationProperty = NavigationProperty;
//# sourceMappingURL=NavigationProperty.js.map