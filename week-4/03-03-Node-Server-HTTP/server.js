const httpApi = require('http');
const webServer = httpApi.createServer(
    (request, response) => {
        console.log(request.url);
        if (request.url === '/') {
            response.write('startseite');
            response.end();
        } else if (request.url === '/wasanderes') {
            response.write('anderer inhalt');
            response.end();
        } else {
            response.statusCode = 404;
            response.write('404 Page');
            response.end();
        }
    }
);
webServer.listen(3000);
console.log('server listening on port 3000');