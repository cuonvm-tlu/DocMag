module.exports = (sequelize, Sequelize) => {
	const Right = sequelize.define('right', {
	id: {
		type: Sequelize.STRING,
		primaryKey: true,
		unique:true,
	},
	name: {
		type: Sequelize.ENUM,
		values: ['Quản lý người tài khoản', 'Quản lý phòng ban', 'Quản lý nhân viên', 'Xem danh sách phòng ban', 'Xem danh sách người dùng', 'Xem danh sách nhân viên', 'Quản lý văn bản phân công công việc', 'Xem văn bản phân công công việc', 'Quản lý văn bản đến', 'Xem văn bản đến', 'Quản lý văn bản gửi lên cấp trên', 'Xem văn bản gửi lên cấp trên'],
		},
	url: {
		type: Sequelize.ENUM,
		values: ['user', 'organizational', 'employees', 'organizational-w', 'user-w', 'employees-w', 'document-process', 'document'],
		},	
	});
	return Right;
}