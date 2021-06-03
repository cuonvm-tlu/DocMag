module.exports = (sequelize, Sequelize) => {
	const Document = sequelize.define('document', {
	  id: {
		type: Sequelize.STRING,
        primaryKey: true,
		unique:true
	  },
	  code: {
		type: Sequelize.STRING,
		unique:true
	  },
	  name: {
		type: Sequelize.STRING,
	  },
      description: {
		type: Sequelize.STRING,
	  },
      status: {
		type: Sequelize.ENUM,
		values: ['Đang duyệt', 'Tiến hành', 'Chấp thuận', 'Từ chối', 'Đã hoàn thành'],
      },
    //   data: {
    //     type: Sequelize.BLOB("long"),
    //   },
	  type: {
		type: Sequelize.ENUM,
		values: ['VBTB', 'VBPC', 'VBCT'],
      },
	});
	return Document;
}