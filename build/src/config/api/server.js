"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const UserRoutes_1 = __importDefault(require("../../routes/UserRoutes"));
const PropertyRoutes_1 = __importDefault(require("../../routes/PropertyRoutes"));
const NeighborhoodRoutes_1 = __importDefault(require("../../routes/NeighborhoodRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.startSetting();
        this.activateRoutes();
    }
    startSetting() {
        this.app.set("PORT", 3123);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    activateRoutes() {
        this.app.use('/api/user', UserRoutes_1.default);
        this.app.use('/api/property', PropertyRoutes_1.default);
        this.app.use('/api/neighbor', NeighborhoodRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("Server on port", this.app.get("PORT"));
        });
    }
}
exports.default = Server;
