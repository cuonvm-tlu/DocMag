const fs = require("fs");
const db = require('../config/db.config.js');
const Document = db.document;
const Assigned = db.assigned;
const Employee = db.employees;
const Role = db.role;
const Sender = db.sender;
const Sequelize = db.sequelize
const { QueryTypes } = require('sequelize');

// --------------------------- Xu ly van ban thong bao ------------------------------//

// Tạo mới
exports.create = async (req, res) => {	
    await Document.create({  
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        code: req.body.code, 
        status: req.body.status,
		signature: req.body.signature,
		date: req.body.date,
        departmentId: req.body.departmentId,
        employeeId: req.body.employeeId,
        docTypeId:  req.body.docTypeId,
        senderId:  req.body.senderId,
        }).then(document => {		
            // Send created customer to client
            res.send(document);
        });
};
 
// Hiển thị tất cả
exports.findAll = (req, res) => {
	Document.findAll({
	}).then(document => {
	  // Send all customers to Client
	  res.send(document);
	});
};

// Xoá
exports.delete = (req, res) => {
	const id = req.params.id;
	Document.destroy({
	}).then(() => {
	  res.status(200).send('deleted successfully a Document with id = ' + id);
	});
};


//  Tìm theo ID
exports.findById = (req, res) => {	
	Document.findById(req.params.id).then(document => {
		res.send(document);
	})
};
 
// Cập nhật
exports.update = (req, res) => {
	const id = req.params.id;
	Document.update( { 
        name: req.body.name,
        description: req.body.description,
        code: req.body.code, 
        status: req.body.status,
		signature: req.body.signature,
		date: req.body.date,
        departmentId: req.body.departmentId,
        employeeId: req.body.employeeId,
        docTypeId:  req.body.docTypeId,
        senderId:  req.body.senderId,
        }, 
					 { where: {id: req.params.id} }
				   ).then(() => {
					 res.status(200).send("updated successfully a Document with id = " + id);
				   });

};

// Tìm theo bộ phận
exports.findByDep = (req, res) => {
	Document.findAll({
		where: {
			departmentId: req.params.id
		}
	}).then(document => {
	  // Send all customers to Client
	  res.send(document);
	});
};

// Tìm theo phan cong
exports.findByAssign = async (req, res) => {
	const document = await Sequelize.query("SELECT * FROM `assigneds` INNER JOIN `documents` ON `documents`.`id` = `assigneds`.`documentId` INNER JOIN `roles` ON `roles`.`id` = `assigneds`.`roleId`  WHERE `assigneds`.`employeeId` = ?;", {
		replacements: [req.params.id],
		type: QueryTypes.SELECT 
	});
	
	res.status(200).json(document)
};
