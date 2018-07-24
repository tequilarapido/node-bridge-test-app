var helpers = require('./helpers')
const googleTrends = require('google-trends-api');

helpers.readPipe(function(pipe){
     var arguments = JSON.parse(pipe);




    let date = new Date();
    dateOneWeekAgo = new Date(date.setDate(date.getDate() - 6));

    console.log(dateOneWeekAgo);

    googleTrends.interestOverTime({
        keyword: 'Noublie jamais',
        hl: 'fr',
        timezone:  -120,
        category: 0,
        startTime: dateOneWeekAgo,
        geo: 'FR',
        granularTimeResolution: true
    })
        .then(function(results){
            helpers.dump(results);
        })     
})


/*
const googleTrends = require('google-trends-api');
var fs = require('fs');


let date = new Date();
dateOneWeekAgo = new Date(date.setDate(date.getDate() - 6));

console.log(dateOneWeekAgo);

googleTrends.interestOverTime({
    keyword: 'Noublie jamais',
    hl: 'fr',
    timezone:  -120,
    category: 0,
    startTime: dateOneWeekAgo,
    geo: 'FR',
    granularTimeResolution: true
})
    .then(function(results){
        fs.writeFile("stats.txt", results, err => {
            if(err) {
                return console.log(err);
            }
            console.log('File saved');
        });
    })
    .catch(function(err){
        console.error('Oh no there was an error', err);
    });

*/