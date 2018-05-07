var request = require('request');

var remote = process.env.REMOTE || "backend";

var sendData = () => {
    var reading = { sensor: Math.random()*100 };
    console.log(`Sending: ${JSON.stringify(reading)}`)

    request.post({
        url: `http://${remote}:8080/data`,
        json: reading,
    }, (error, request, response) => {
        if (error) {
            console.log(error);
        }
    });

    // repeat
    setTimeout(sendData, 2000);
};

setTimeout(sendData, 2000);
