const fs = require("fs");
const db = require('../config/db.config.js');
const Document = db.document;
const Assigned = db.assigned;
const { Op } = require("sequelize");

// --------------------------- Xu ly van ban thong bao ------------------------------//

// Tạo mới
exports.createVBTB = async (req, res) => {	
    await Document.create({  
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        code: req.body.code, 
        status: req.body.status,
        // data: req.file.buffer, 
        departmentId: req.body.departmentId,
        type:  req.body.type
        }).then(document => {		
            // Send created customer to client
            res.send(document);
        });
};
 
// Hiển thị tất cả
exports.findAllVBTB = (req, res) => {
	Document.findAll({
	  where: { type: 'VBTB' }
	}).then(document => {
	  // Send all customers to Client
	  res.send(document);
	});
};

// Xoá
exports.deleteVBTB = (req, res) => {
	const id = req.params.id;
	Document.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a Document with id = ' + id);
	});
};


//  Tìm theo ID
exports.findByIdVBTB = (req, res) => {	
	Document.findById(req.params.id).then(document => {
		res.send(document);
	})
};
 
// Cập nhật
exports.updateVBTB = (req, res) => {
	const id = req.params.id;
	Document.update( { 
      name: req.body.name,
      description: req.body.description,
      code: req.body.code, 
      status: req.body.status,
      // data: req.file.buffer, 
      departmentId: req.body.departmentId,
      type:  req.body.type
        }, 
					 { where: {id: req.params.id} }
				   ).then(() => {
					 res.status(200).send("updated successfully a Document with id = " + id);
				   });

};

// Tìm theo bộ phận
exports.findByDepVBTB = (req, res) => {	
	Document.findAll({
	  where: { [Op.and]: [
      { departmentId: req.params.id},
      { type: 'VBTB' },
      { status: 'Chấp thuận'}
    ]}
	}).then(document => {
	  // Send all customers to Client
	  res.send(document);
	});
};


// --------------------------- Xu ly van ban thong bao ------------------------------//

// --------------------------- Xu ly van ban phan cong------------------------------//
exports.createVBPC = async (req, res) => {	
  await Document.create({  
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      code: req.body.code, 
      status: req.body.status,
      // data: req.file.buffer, 
      departmentId: req.body.departmentId,
      type:  req.body.type
      }).then(document => {		
          // Send created customer to client
          res.send(document);
      });
};

// Hiển thị tất cả
exports.findAllVBPC = (req, res) => {
Document.findAll({
  where: { type: 'VBPC'}
}).then(document => {
  // Send all customers to Client
  res.send(document);
});
};

// Xoá
exports.deleteVBPC = (req, res) => {
const id = req.params.id;
Document.destroy({
  where: { id: id }
}).then(() => {
  res.status(200).send('deleted successfully a Document with id = ' + id);
});
};


//  Tìm theo ID
exports.findByIdVBPC = (req, res) => {	
Document.findById(req.params.id).then(document => {
  res.send(document);
})
};

// Cập nhật
exports.updateVBPC = (req, res) => {
const id = req.params.id;
Document.update( { 
    name: req.body.name,
    description: req.body.description,
    code: req.body.code, 
    status: req.body.status,
    // data: req.file.buffer, 
    departmentId: req.body.departmentId,
    type:  req.body.type
      }, 
         { where: {id: req.params.id} }
         ).then(() => {
         res.status(200).send("updated successfully a Document with id = " + id);
         });

};

// Tìm theo bộ phận
exports.findByDepVBPC = (req, res) => {	
Document.findAll({
  where: { [Op.and]: [
    { departmentId: req.params.id},
    { type: 'VBPC' }
  ]}
}).then(document => {
  // Send all customers to Client
  res.send(document);
});
};

// Tìm theo cá nhân được phân công

exports.findByEmpVBPC = (req, res) => {	
  Assigned.findAll({
    where: {
      employeeId: req.params.id
    },
    include: Document
  }).then(document => {
    // Send all customers to Client
    res.send(document);
  });
  };

// --------------------------- Xu ly van ban phan cong------------------------------//