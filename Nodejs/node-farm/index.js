const fs = require('fs');
const http = require('http');
const url = require('url');

const slugify = require('slugify');

const replaceTemplate = require('./modules/replaceTemplate');


/////////////////////////////////////
// Files

//blocking synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}.\n Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written');

//Non-Block , asynchronous way

// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if(err) return console.log('Error');
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);
//             fs.writeFile(`./txt/final.txt`,`${data2}/n${data3}`, 'utf-8', err => {
//                 console.log('file wriiten :)');
//             });
//         });
//     });
// });
// console.log('will read file');


//////////////////////////////////////////////////////
// SERVER


const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');




const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const slugs = dataObj.map(el => slugify(el.productName, { lower: true }));
console.log(slugs);

const server = http.createServer((req, res) => {
    const pathName = req.url;

    //OVERVIEW PAGE
    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, { 'Content-type': "text/html" });


        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);

        res.end(output);

        //PRODUCT PAGE

    } else if (pathName === '/product') {
        res.end('This is Product');

        //API
    } else if (pathName === '/api') {

        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(data);

        //NOT FOUND    
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1> Page not found! </h1>');
    }


});

server.listen(8000, '127.0.0.1', () => {
    console.log('listening');
});













