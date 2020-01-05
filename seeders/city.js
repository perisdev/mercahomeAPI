'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Cities',[
      {
        "name": "ALAVA"
      },
      {
        "name": "ALBACETE"
      },
      {
        "name": "ALICANTE"
      },
      {
        "name": "ALMERIA"
      },
      {
        "name": "AVILA"
      },
      {
        "name": "BADAJOZ"
      },
      {
        "name": "I. BALEARS"
      },
      {
        "name": "BARCELONA"
      },
      {
        "name": "BURGOS"
      },
      {
        "name": "CACERES"
      },
      {
        "name": "CADIZ"
      },
      {
        "name": "CASTELLON"
      },
      {
        "name": "CIUDAD REAL"
      },
      {
        "name": "CORDOBA"
      },
      {
        "name": "A CORUÑA"
      },
      {
        "name": "CUENCA"
      },
      {
        "name": "GIRONA"
      },
      {
        "name": "GRANADA"
      },
      {
        "name": "GUADALAJARA"
      },
      {
        "name": "GIPUZKOA"
      },
      {
        "name": "HUELVA"
      },
      {
        "name": "HUESCA"
      },
      {
        "name": "JAEN"
      },
      {
        "name": "LEON"
      },
      {
        "name": "LLEIDA"
      },
      {
        "name": "LA RIOJA"
      },
      {
        "name": "LUGO"
      },
      {
        "name": "MADRID"
      },
      {
        "name": "MALAGA"
      },
      {
        "name": "MURCIA"
      },
      {
        "name": "NAVARRA"
      },
      {
        "name": "OURENSE"
      },
      {
        "name": "ASTURIAS"
      },
      {
        "name": "PALENCIA"
      },
      {
        "name": "LAS PALMAS"
      },
      {
        "name": "PONTEVEDRA"
      },
      {
        "name": "SALAMANCA"
      },
      {
        "name": "S.C.TENERIFE"
      },
      {
        "name": "CANTABRIA"
      },
      {
        "name": "SEGOVIA"
      },
      {
        "name": "SEVILLA"
      },
      {
        "name": "SORIA"
      },
      {
        "name": "TARRAGONA"
      },
      {
        "name": "TERUEL"
      },
      {
        "name": "TOLEDO"
      },
      {
        "name": "VALENCIA"
      },
      {
        "name": "VALLADOLID"
      },
      {
        "name": "BIZKAIA"
      },
      {
        "name": "ZAMORA"
      },
      {
        "name": "ZARAGOZA"
      },
      {
        "name": "CEUTA"
      },
      {
        "name": "MELILLA"
      }
    ] , {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cities', null, {});
  }
};
