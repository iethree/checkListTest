'use strict';

module.exports = {
  up: (queryInterface) => queryInterface.sequelize.query(`
    CREATE TABLE platypuses
      id int(11)
    );
	`),
	down: (queryInterface) => queryInterface.sequelize.query(`
		DROP TABLE platypuses;
	`),
};
