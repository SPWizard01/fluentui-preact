import index from "./showcase/index.html";
const bunServer = Bun.serve({
    development: true,
    routes: {
        "/": index,
    },
    port: 44301,
    tls: {
        rejectUnauthorized: false,
        key: Bun.file("./serve_key.pem"),
        cert: Bun.file("./serve_cert.pem"),
    }
})
console.log("Server started at", bunServer.url.href);