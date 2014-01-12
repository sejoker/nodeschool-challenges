var web = require('websocket-stream');
var stream = web('ws://localhost:8000');
stream.end('hello\n');