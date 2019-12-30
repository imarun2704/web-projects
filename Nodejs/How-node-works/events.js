const EvenEmitter = require("events");

const http = require('http');

class Sales extends EvenEmitter {
    constructor() {
        super();
    }
}


const myEmitter = new Sales();

myEmitter.on("newSale", () => {
    console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
    console.log("constumer : Arun");
});

myEmitter.on("newSale", stock => {
    console.log(`constumer : ${stock} Arun`);
});


myEmitter.emit('newSale', 9);



//////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
    console.log("req received");
    console.log(req.url);
    res.end("req received")
});


server.on('request', (req, res) => {

    console.log("Anothr received");
});

server.on('close', () => {
    console.log("server closed");

});

server.listen(8000, "127.0.0.1", () => {
    console.log("waiting for requests...");
});




