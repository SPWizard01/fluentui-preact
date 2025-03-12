import index from "./src/index.html";
Bun.serve({
    development: true,
    routes: {
        "/": index,
        
    }
})