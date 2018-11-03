"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const SDLCRepository_1 = require("./repository/SDLCRepository");
const port = process.env.PORT || 3000;
App_1.default.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    // ready to use the pool
    SDLCRepository_1.default.getAllSolutions((error, solutions) => {
        if (error)
            console.log('Error:' + error);
        else
            console.log('Result:' + solutions);
    });
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map