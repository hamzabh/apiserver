'use strict';
module.exports = function(app) {
  var control = require('../controllers/bookController');
  
  app.get("/api",control.list_all_Books);

  app.post('/api/books', control.add_Books);
  
  app.post('/api/files', control.add_path);

  app.delete('/api/:sbn', control.del_book);

  app.get('/api/:sbn', control.get_book_sbn);

  app.put('/api/:sbn', control.put_book_sbn);



};