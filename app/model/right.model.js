module.exports = (sequelize, Sequelize) => {
	const Right = sequelize.define('right', {
	id: {
		type: Sequelize.STRING,
		primaryKey: true,
		unique:true,
	},
	name: {
		type: Sequelize.ENUM,
		values: ['Quản lý người tài khoản', 'Quản lý phòng ban', 'Quản lý nhân viên', 'Xem danh sách phòng ban', 'Xem danh sách người dùng', 'Xem danh sách nhân viên', 'Quản lý quy trình văn bản', 'Quản lý văn bản'],
		},
	});
	return Right;
}