const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand:true,
            alias:'address',
            describe:'Address to fetch weather for',
            string:true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

    var encodeAddress = encodeURIComponent(argv.address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
    json: true
}, (error, response, body) => {
    if(error){
        console.log('Unable to connect to Google servers.');
    } else if(body.status === 'ZERO_RESULTS'){
        console.log('Unable to find that address.');
    } else if (body.status === 'OK'){
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Address: ${body.results[0].geometry.location.lat}`);
        console.log(`Address: ${body.results[0].geometry.location.lng}`);
    }
});