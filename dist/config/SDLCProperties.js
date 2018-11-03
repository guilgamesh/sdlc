"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropertiesReader = require('properties-reader');
const propertiesFileName = "./app.properties";
class SDLCProperties {
    constructor() {
        this.props = PropertiesReader(propertiesFileName);
    }
    getDatabaseHost() {
        return this.props.get('database.host');
    }
    getDatabaseUser() {
        return this.props.get('database.user');
    }
    getDatabasePassword() {
        return this.props.get('database.password');
    }
    getDatabaseName() {
        return this.props.get('database.name');
    }
}
exports.SDLCProperties = SDLCProperties;
let props = new SDLCProperties();
exports.props = props;
//# sourceMappingURL=SDLCProperties.js.map