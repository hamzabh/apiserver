'use strict';
var fs = require("fs");

var obj;
fs.readFile('books.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});
function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
exports.list_all_Books = function(req, res) {

   res.send(obj);
};

exports.add_Books = function(request, response, next) {
     	const SBN = request.body.SBN;
     	const nom = request.body.nom;
     	const categorie = request.body.categorie;
     	obj.book[SBN]={nom , categorie};
   		  console.log("isJson Post "+isJson(obj))
      fs.writeFile('books.json', JSON.stringify(obj) , 'utf-8');
     	response.send(obj);    
};

exports.put_book_sbn  = function(request, response, next) {
      const SBN = request.params.sbn;
      const nom = request.body.nom;
      const categorie = request.body.categorie;
      obj.book[SBN]={nom , categorie};
      fs.writeFile('books.json', JSON.stringify(obj) , 'utf-8');
      response.send(obj);    
};

exports.add_path = function(request, response, next) {
      const path = request.body;
      path.forEach(function (file){
        console.log(file);
      })
      response.send(obj);
};

exports.del_book = function(request, response) {
      let SBN = request.params.sbn
      console.log(SBN);
      delete obj.book[SBN];
      fs.writeFile('books.json', JSON.stringify(obj) , 'utf-8');
      response.send(obj);
};

exports.get_book_sbn = function (request, response) {
    let sbn = request.params.sbn;
    console.log(sbn)
    let data_book = obj.book[sbn];
    if (data_book != undefined) {
        console.log(data_book)
        response.send(data_book);
    } else {
        response.sendStatus(404);
    }
  }
