module.exports = function(app) {
    const documents = require('../controller/document.controller');
    var multer  = require('multer')
    var upload = multer()

// --------------------------- Xu ly van ban thong bao------------------------------//
    // Create a new Customer
    app.post('/api/documents/', documents.create);
 
    // Retrieve all Customer
    app.get('/api/documents/', documents.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/documents/:id', documents.findById);

    app.get('/api/documents/Dep/:id', documents.findByDep);

    app.get('/api/documents/Assign/:id', documents.findByAssign);
 
    // // Update a Customer with Id
    app.put('/api/documents/:id', documents.update);
 
    // // Delete a Customer with Id
    app.delete('/api/documents/:id', documents.delete);

// --------------------------- Xu ly van ban thong bao------------------------------//

}
