module.exports = function(app) {
    const documents = require('../controller/document.controller');
    var multer  = require('multer')
    var upload = multer()

// --------------------------- Xu ly van ban thong bao------------------------------//
    // Create a new Customer
    app.post('/api/documents/VBTB', documents.createVBTB);
 
    // Retrieve all Customer
    app.get('/api/documents/VBTB', documents.findAllVBTB);
 
    // Retrieve a single Customer by Id
    app.get('/api/documents/VBTB/:id', documents.findByIdVBTB);

    // 
    app.get('/api/documents/VBTB/Dep/:id', documents.findByDepVBTB);
 
    // // Update a Customer with Id
    app.put('/api/documents/VBTB/:id', documents.updateVBTB);
 
    // // Delete a Customer with Id
    app.delete('/api/documents/VBTB/:id', documents.deleteVBTB);

// --------------------------- Xu ly van ban thong bao------------------------------//

// --------------------------- Xu ly van ban phan cong------------------------------//
    app.post('/api/documents/VBPC', documents.createVBPC);
    
    // Retrieve all Customer
    app.get('/api/documents/VBPC', documents.findAllVBPC);

    // Retrieve a single Customer by Id
    app.get('/api/documents/VBPC/:id', documents.findByIdVBPC);

    // 
    app.get('/api/documents/VBPC/Dep/:id', documents.findByDepVBPC);
    app.get('/api/documents/VBPC/Emp/:id', documents.findByEmpVBPC);
    // // Update a Customer with Id
    app.put('/api/documents/VBPC/:id', documents.updateVBPC);

    // // Delete a Customer with Id
    app.delete('/api/documents/VBPC/:id', documents.deleteVBPC);
// --------------------------- Xu ly van ban phan cong------------------------------//
}
