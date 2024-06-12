var http = require('http');
var request = require('request');
var B;

http.createServer(function (req, res) {
 // res.writeHead(200, {'Content-Type': 'text/html'});
 // res.end('Hello World!');

    // lav et http request til en anden server
    // med url: "https://eu-central-1.aws.data.mongodb-api.com/app/data-rxqfkyr/endpoint/data/v1/action/findOne"
    // og med
    // headers = [
    //        "Content-Type: application/json",
    //        "Access-Control-Request-Headers: *",
    //        "Access-Control-Allow-Origin': *",
    //        "api-key: 5nJUA1TZ4rltsEWIhydGzCutWo9xqguyddEJdFL9sUdANu1p2jUXnAKFgWEgA1V8"
    //        ]
    // og data der skal sendes er 
    // data_to_send = {
	//"dataSource": "Cluster0",
	//"database": "Personer",
	//"collection": "Familie"
	//}


    const options = {
        url: "https://eu-central-1.aws.data.mongodb-api.com/app/data-rxqfkyr/endpoint/data/v1/action/findOne",
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "api-key": "5nJUA1TZ4rltsEWIhydGzCutWo9xqguyddEJdFL9sUdANu1p2jUXnAKFgWEgA1V8"
        },
        json: {
            "dataSource": "Cluster0",
            "database": "Personer",
            "collection": "Familie"
        }
    };
    
    request(options, (error, response, body) => {
        if (error) {
            console.error('Error:', error);
        } else {
            console.log('Status Code:', response && response.statusCode);
            console.log('Response Body:', body);
            // udskriv body til skærmen med html
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('Hello World! ' + JSON.stringify(body['document']['navn']));


        }
    });


}).listen(8080);