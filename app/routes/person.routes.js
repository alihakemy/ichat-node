const personController = require("../controllers/person.controller");
module.exports = app => {
    const personController = require('../controllers/person.controller')

    app.route('/users/:page')
        .post(personController.create)
        .get(personController.pagnation)

    app.route('/person/:id')
        .put(personController.update)
        .delete(personController.delete)
        .get(personController.readById)


    app.get('/', function(req, res) {
        res.send("<!DOCTYPE html>\n" +
            "<form action=\"/upload\" method=\"POST\" enctype=\"multipart/form-data\">\n" +
            "    <input type=\"file\" name=\"image\" />\n" +
            "    <button type=\"submit\">Upload</button>\n" +
            "</form>");
    });



}
//https://pqina.nl/blog/upload-image-with-nodejs/