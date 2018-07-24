exports.readPipe = function (cb) {
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    rl.on('line', function (line) {
        cb(line);
    })
}

exports.dumpJson = function (obj) {
    console.log(JSON.stringify((obj)));
}

exports.dump = function (obj) {
    console.log(obj);
}