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

    // Thong ke so luong theo loai van ban
    app.get('/api/countbytype/', documents.toltalByType);

    // Thong ke so luong theo nguoi gui
    app.get('/api/countbysender/', documents.toltalBySender);

    // Thay doi status theo ID
    app.put('/api/documents/changestatus/:id', documents.changeStatus);

// --------------------------- Xu ly van ban thong bao------------------------------//

}
