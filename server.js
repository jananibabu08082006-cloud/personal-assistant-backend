const http = require("http");
require("dotenv").config();

const utils = require("./utils");

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "Personal Assistant";

console.log("Utility test:", utils.add(10, 5));

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.method === "GET" && req.url === "/health") {
        res.end(JSON.stringify({
            status: "UP"
        }));
        return;
    }

    if (req.method === "GET" && req.url === "/about") {
        res.end(JSON.stringify({
            application: APP_NAME,
            version: "1.0"
        }));
        return;
    }

    res.end(JSON.stringify({
        message: "Welcome to " + APP_NAME
    }));
});

server.listen(PORT, () => {
    console.log(`${APP_NAME} server running on port ${PORT}`);
});