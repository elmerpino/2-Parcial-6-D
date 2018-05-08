const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=174%20pablo%20neruda%20colima%2028050',
    json: true
}, (error, response, body) =>{
    // Es el primero que hicimos console.log(body);
    // Es el segundo que hicimos console.log(JSON.stringify(body, undefined, 2));
    // Es el tercero que hicimos console.log(JSON.stringify(response, undefined, 2));
    // Es el cuarto que hicimos console.log(JSON.stringify(error, undefined, 2));
    console.log(`Address: ${body.results[0].formatted_address}`);
});
