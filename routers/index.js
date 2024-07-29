const quoteApi = require('@neoxr/quote-api')
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
