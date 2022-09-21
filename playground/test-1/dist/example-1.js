"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const ins = axios_1.default.create({
    baseURL: "http://localhost:5500",
    data: {
        firstName: "Maly",
        lastName: "Jacob",
    },
    timeout: 10000,
});
async function get(url) {
    try {
        let { data } = await ins.get(url);
        console.log("Succeed");
        console.log(data);
        return data;
    }
    catch (error) {
        console.log("Failed");
        console.log(error);
    }
}
get("/birds");
