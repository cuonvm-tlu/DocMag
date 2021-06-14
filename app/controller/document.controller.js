const fs = require("fs");
const db = require('../config/db.config.js');
const Document = db.document;
const Assigned = db.assigned;
const Employee = db.employees;
const Role = db.role;
const Sender = db.sender;
const DocType = db.docType
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

// So luong theo loai van ban
exports.toltalByType = async (req, res) => {
	const document = await Sequelize.query("SELECT COUNT(`documents`.`id`) AS NumberOfType, `documents`.`docTypeId` FROM `documents` GROUP BY `documents`.`docTypeId`;", {
		type: QueryTypes.SELECT 
	});
	
	res.status(200).json(document)
};

// So luong theo loai van ban
exports.toltalByType = async (req, res) => {
	const document = await Sequelize.query("SELECT COUNT(`documents`.`id`) AS NumberOfType, `documents`.`docTypeId` FROM `documents` GROUP BY `documents`.`docTypeId`;", {
		type: QueryTypes.SELECT 
	});
	
	res.status(200).json(document)
};

// So luong theo nguoi gui
exports.toltalBySender = async (req, res) => {
	const document = await Sequelize.query("SELECT COUNT(`documents`.`id`) AS NumberOfSender, `documents`.`senderId` FROM `documents` GROUP BY `documents`.`senderId`;", {
		type: QueryTypes.SELECT 
	});
	
	res.status(200).json(document)
};

// So luong theo phong ban
exports.toltalBySender = async (req, res) => {
	const document = await Sequelize.query("SELECT COUNT(`documents`.`id`) AS NumberOfDepartment, `documents`.`departmentId` FROM `documents` GROUP BY `documents`.`departmentId`;", {
		type: QueryTypes.SELECT 
	});
	
	res.status(200).json(document)
};

// So luong theo tinh trang
exports.toltalBySender = async (req, res) => {
	const document = await Sequelize.query("SELECT COUNT(`documents`.`id`) AS NumberOfStatus, `documents`.`status` FROM `documents` GROUP BY `documents`.`status`;", {
		type: QueryTypes.SELECT 
	});
	
	res.status(200).json(document)
};

// Thay doi trang thai theo ID
exports.changeStatus = async (req, res) => {
	const id = req.params.id;
	Document.update( { 
        status: req.body.status,
        }, 
			{ where: {id: req.params.id} }
		).then(() => {
			res.status(200).send("updated successfully a Document with id = " + id);
		});
};