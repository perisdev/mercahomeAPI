'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users',[
      {
        "user_name": "nick1",
        "email": "nick1@gmail.com",
        "role": "nick1@gmail.com",
        "token": "123456789123456789",
        "fk_city": 1
      },
      {
        "user_name": "nick2",
        "email": "nick2@gmail.com",
        "role": "nick2@gmail.com",
        "token": "123456789123456789",
        "fk_city": 2
      }
    ] , {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
