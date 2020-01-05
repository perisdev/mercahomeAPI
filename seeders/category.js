'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Categories', [
      {
        "category": "agua"
      },
      {
        "category": "aperitivos"
      },
      {
        "category": "arroz"
      },
      {
        "category": "azúcar"
      },
      {
        "category": "bebé"
      },
      {
        "category": "bodega"
      },
      {
        "category": "café"
      },
      {
        "category": "carne"
      },
      {
        "category": "cereales"
      },
      {
        "category": "charcutería"
      },
      {
        "category": "congelados"
      },
      {
        "category": "conservas"
      },
      {
        "category": "cuidado del cabello"
      },
      {
        "category": "cuidado facial"
      },
      {
        "category": "fitoterapia"
      },
      {
        "category": "frutas"
      },
      {
        "category": "huevos"
      },
      {
        "category": "limpieza"
      },
      {
        "category": "maquillaje"
      },
      {
        "category": "marisco"
      },
      {
        "category": "mascotas"
      },
      {
        "category": "panadería"
      },
      {
        "category": "pizzas"
      },
      {
        "category": "postres"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
