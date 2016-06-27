const exec = require('child_process').exec;
const async = require('async');

const urlProjectBuilds = 'https://ln0e9d.homedepot.com:9443/job/Pro-MyProDeskUI-Deploy/api/json?pretty=true';
var data;

function callServer(urlServer) {
    const command = 'curl -k ' + urlServer;
    child = exec(command, function(error, stdout){
        data = JSON.parse(stdout);
    });
}

function getProjectBuilds() {
    return callServer(urlProjectBuilds);
}

// async.series([
//     function (cb) {
//         data = callServer(urlProjectBuilds);
//         cb();
//     },
//     function (cb) {
//         console.log(data);
//         cb();
//     }
// ]);

var urls = {
    callServer: callServer,
    getProjectBuilds: getProjectBuilds
};

module.exports = urls;
