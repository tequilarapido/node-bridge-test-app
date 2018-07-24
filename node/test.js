var helpers = require('./helpers')

helpers.readPipe(function(pipe){

    var result = {
        "pipe": pipe
    }

    helpers.dumpJson(result);
})
