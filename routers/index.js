const quoteApi = require('@neoxr/quote-api')
const app = express();
const path = require('path');
const port = 3000;
exports.routes = {
   category: 'main',
   path: '/',
   method: 'get',
   execution: async (req, res, next) => {
      res.sendFile(path.join(__dirname, './lib/index.html'));
     /*res.json({
         creator: global.creator,
         msg: {
            message: 'LO KONTOL!'
         }
      })*/
   },
   error: false
}
