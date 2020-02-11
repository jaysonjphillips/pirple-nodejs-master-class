const http = require('http');
const url = require('url')
const handlers = require('./lib/handlers');

const app = http.createServer((req, res) => {

    const reqUrl = url.parse(req.url, true);
    const rawPath = reqUrl.pathname;
    const path = rawPath.replace(/^\/+|\/+$/g, '');

    const method = req.method.toLowerCase();
    const headers = req.headers;

    const data = {
        path: path,
        method: method, 
        headers: headers
    }

    handlers[path](data, (status, payload) => {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(status);
        res.end(JSON.stringify(payload));
    });
    
});

app.listen(3333, () => {
    console.log(`Server is running on port 3000`);
})