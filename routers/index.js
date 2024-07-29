const quoteApi = require('@neoxr/quote-api')
const app = express();
const path = require('path');
const port = 3000;
const fs = require('fs');
exports.routes = {
   category: 'main',
   path: '/',
   method: 'get',
   execution: async (req, res, next) => {
     /*res.json({
         creator: global.creator,
         msg: {
            message: 'LO KONTOL!'
         }
      })*/
       if (req.method === 'GET') {
        if (req.url === '/') {
            // Serve the HTML file
            const filePath = path.join(__dirname, './lib/index.html');
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    res.status(500).send('Internal Server Error');
                } else {
                    res.setHeader('Content-Type', 'text/html');
                    res.send(data);
                }
            });
        } else if (req.url === '/api/quote') {
            // Serve the API response
            res.setHeader('Content-Type', 'application/json');
            res.json({
                creator: global.creator,
                msg: {
                    message: 'LO KONTOL!'
                }
            });
        } else {
            res.status(404).send('Not Found');
        }
    } else {
        res.status(405).send('Method Not Allowed');
    }
   },
   error: false
}
