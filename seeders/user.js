'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users',[
      {
        "user_name": "admin",
        "email": "admin@gmail.com",
        "role": "admin",
        "token": "123456789123456789"
      },
      {
        "user_name": "nick2",
        "email": "nick2@gmail.com",
        "role": "cli",
        "token": "123456789123456789"
      }
    ] , {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
