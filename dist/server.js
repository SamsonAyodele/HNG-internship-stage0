"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const port = process.env.PORT || 4000;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = require("mongoose");
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors({
    origin: ["http://localhost:4000"],
    methods: "GET",
    allowedHeaders: "Content-Type,Authorization"
}));
app.use('/', routes_1.default);
app.get('/', (req, res) => {
    try {
        res.status(200).json(`Welcome to my ${process.env.APP_NAME}`);
    }
    catch (error) {
        res.status(500).json({ error: 'App not found' });
    }
});
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server running on port ${port}`);
    try {
        yield (0, mongoose_1.connect)('mongodb://localhost:27017/Public-Api');
        console.log('Connected to database');
    }
    catch (error) {
        console.log(error);
        throw new Error('Error connecting to database');
    }
}));
exports.default = app;
