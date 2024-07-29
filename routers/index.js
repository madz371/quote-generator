const quoteApi = require('@neoxr/quote-api')
const app = express();
const path = require('path');
const port = 3000;
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
      res.sendFile(path.join(__dirname, 'index.html'));
   },
   error: false
}
