const {request} = require('http');

request({
    host: 'localhost',
    path: process.argv[2],
    port: 8000,
    method: 'GET'
}, (response) => {
    let str = "";

    response.on('data', chunk => {
        str += chunk;
    });

    response.on('end', () => {
        process.stdout.write(str);
        console.log(`\nstatus-code: ${response.statusCode}`);
        console.log(`type: ${response.headers['content-type']}`);
    });
}).end();