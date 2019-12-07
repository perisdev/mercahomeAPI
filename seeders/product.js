'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Products',[
      {
        "image": "https://prod-mercadona.imgix.net/20191203/14/27814/vlc1/27814_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Bronchales grande",
        "ud": "6 botellas x 2 L",
        "price": 2.52,
        "volume": "/pack",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/46/27046/vlc1/27046_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Bronchales grande",
        "ud": "Botella 2 L",
        "price": 0.42,
        "volume": "/ud.",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/91/28491/vlc1/28491_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Bronchales mediana",
        "ud": "6 botellas x 1 L",
        "price": 3.00,
        "volume": "/pack",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/99/28499/vlc1/28499_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Bronchales mediana",
        "ud": "Botella 1 L",
        "price": 0.52,
        "volume": "/ud.",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/61/27061/vlc1/27061_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Bronchales pequeña",
        "ud": "6 botellas x 500 ml",
        "price": 1.50,
        "volume": "/pack",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/54/27054/vlc1/27054_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Bronchales pequeña",
        "ud": "Botella 500 ml",
        "price": 0.30,
        "volume": "/ud.",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/66/28566/vlc1/28566_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Bronchales pequeña tapón infantil",
        "ud": "6 botellas x 330 ml",
        "price": 1.80,
        "volume": "/pack",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/67/28567/vlc1/28567_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Bronchales pequeña tapón infantil",
        "ud": "Botella 330 ml",
        "price": 0.32,
        "volume": "/ud.",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/88/27088/vlc1/27088_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Cortes",
        "ud": "Garrafa 6 L",
        "price": 0.56,
        "volume": "/ud.",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/60/28060/vlc1/28060_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Cortes",
        "ud": "Garrafa 8 L",
        "price": 0.73,
        "volume": "/ud.",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/69/28269/vlc1/28269_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Cortes grande",
        "ud": "6 botellas x 1,5 L",
        "price": 1.26,
        "volume": "/pack",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/70/28270/vlc1/28270_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Cortes grande",
        "ud": "Botella 1,5 L",
        "price": 0.21,
        "volume": "/ud.",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/63/28163/vlc1/28163_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Cortes mediana",
        "ud": "6 botellas x 1 L",
        "price": 1.92,
        "volume": "/pack",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/64/28164/vlc1/28164_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Cortes mediana",
        "ud": "Botella 1 L",
        "price": 0.34,
        "volume": "/ud.",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/76/27076/vlc1/27076_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Cortes pequeña",
        "ud": "6 botellas x 500 ml",
        "price": 0.96,
        "volume": "/pack",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/78/27078/vlc1/27078_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Cortes pequeña",
        "ud": "Botella 500 ml",
        "price": 0.17,
        "volume": "/ud.",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/88/28288/vlc1/28288_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Cortes pequeña tapón infantil",
        "ud": "6 botellas x 330 ml",
        "price": 1.20,
        "volume": "/pack",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/96/28296/vlc1/28296_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Cortes pequeña tapón infantil",
        "ud": "Botella 330 ml",
        "price": 0.20,
        "volume": "/ud.",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/14/27314/vlc1/27314_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Bezoya grande",
        "ud": "6 botellas x 1,5 L",
        "price": 3.54,
        "volume": "/pack",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/30/27230/vlc1/27230_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Bezoya grande",
        "ud": "Botella 1,5 L",
        "price": 0.59,
        "volume": "/ud.",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/52/27052/vlc1/27052_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Nestlé Aquarel",
        "ud": "Garrafa 5 L",
        "price": 1.14,
        "volume": "/ud.",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/99/27099/vlc1/27099_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Nestlé Aquarel grande",
        "ud": "6 botellas x 1,5 L",
        "price": 2.70,
        "volume": "/pack",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/32/27232/vlc1/27232_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Nestlé Aquarel grande",
        "ud": "Botella 1,5 L",
        "price": 0.48,
        "volume": "/ud.",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/50/27350/vlc1/27350_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Font Vella grande",
        "ud": "6 botellas x 1,5 L",
        "price": 3.36,
        "volume": "/pack",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/04/27204/vlc1/27204_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Font Vella grande",
        "ud": "Botella 1,5 L",
        "price": 0.59,
        "volume": "/ud.",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/64/27064/vlc1/27064_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Font Vella pequeña tapón infantil",
        "ud": "6 botellas x 330 ml",
        "price": 2.10,
        "volume": "/pack",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/06/27206/vlc1/27206_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Font Vella pequeña tapón infantil",
        "ud": "Botella 330 ml",
        "price": 0.41,
        "volume": "/ud.",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/27/27327/vlc1/27327_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Solán de Cabras grande",
        "ud": "6 botellas x 1,5 L",
        "price": 4.14,
        "volume": "/pack",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/56/27356/vlc1/27356_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Solán de Cabras grande",
        "ud": "Botella 1,5 L",
        "price": 0.71,
        "volume": "/ud.",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/91/27291/vlc1/27291_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Lanjarón grande",
        "ud": "6 botellas x 1,5 L",
        "price": 3.36,
        "volume": "/pack",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/16/27216/vlc1/27216_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Agua mineral Lanjarón grande",
        "ud": "Botella 1,5 L",
        "price": 0.59,
        "volume": "/ud.",
        "fk_category": 1
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/83/33083/vlc1/33083_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas manzanilla rellenas de anchoa Hacendado",
        "ud": "3 botes x 150 g",
        "price": 1.98,
        "volume": "/pack",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/71/33071/vlc1/33071_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas manzanilla rellenas de anchoa Hacendado",
        "ud": "6 botes x 50 g",
        "price": 2.15,
        "volume": "/pack",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/24/33024/vlc1/33024_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas rellenas de anchoa Hacendado reducido en sal",
        "ud": "Bote 350 g  (150 g  escurrido)",
        "price": 0.84,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/78/33078/vlc1/33078_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas manzanilla rellenas de anchoa Hacendado reducidas en sal",
        "ud": "3 botes x 50 g",
        "price": 1.80,
        "volume": "/pack",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/55/33155/vlc1/33155_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas rellenas de anchoa Hacendado",
        "ud": "Bote 300 g  (130 g  escurrido)",
        "price": 1.15,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/10/33010/vlc1/33010_00_03.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas rellenas de anchoa Hacendado",
        "ud": "Bote 1,46 kg  (600 g  escurrido)",
        "price": 3.10,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/53/33053/vlc1/33053_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas manzanilla Hacendado sin hueso",
        "ud": "Tarro 835 g  (400 g  escurrido)",
        "price": 1.60,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/14/33114/vlc1/33114_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas manzanilla Hacendado sin hueso",
        "ud": "3 paquetes x 75 g",
        "price": 1.30,
        "volume": "/pack",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/94/80094/vlc1/80094_00_03.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas gazpacha Hacendado con hueso",
        "ud": "Tarro 835 g  (500 g  escurrido)",
        "price": 1.90,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/28/33028/vlc1/33028_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas estilo caseras Hacendado partidas aliñadas",
        "ud": "Tarro 940 g  (550 g  escurrido)",
        "price": 2.35,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/16/80016/vlc1/80016_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas manzanilla Hacendado con hueso",
        "ud": "Tarro 835 g  (500 g  escurrido)",
        "price": 1.47,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/69/33169/vlc1/33169_00_03.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas Hacendado en rodajas",
        "ud": "Bote 203 g  (85 g  escurrido)",
        "price": 1.00,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/26/33126/vlc1/33126_00_03.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas rellenas de limón Hacendado",
        "ud": "Bote 350 g  (150 g  escurrido)",
        "price": 1.30,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/15/80015/vlc1/80015_00_03.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas manzanilla sabor anchoa Hacendado con hueso",
        "ud": "Tarro 835 g  (500 g  escurrido)",
        "price": 1.66,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/21/33121/vlc1/33121_00_03.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas manzanilla aliñadas Hacendado sin hueso",
        "ud": "Tarro 420 g  (200 g  escurrido)",
        "price": 1.50,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/68/33168/vlc1/33168_00_03.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas chupadedos Huerta de Barros partidas aliñadas con hueso",
        "ud": "Tarro 980 g  (600 g  escurrido)",
        "price": 2.70,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/32/33132/vlc1/33132_00_03.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas rellenas con pepinillo Hacendado",
        "ud": "Tarro 340 g  (180 g  escurrido)",
        "price": 1.99,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/78/33178/vlc1/33178_00_03.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas rellenas de jalapeño Hacendado",
        "ud": "Bote 350 g  (150 g  escurrido)",
        "price": 1.25,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/41/33041/vlc1/33041_00_03.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas gordales con guindilla Hacendado en vinagre",
        "ud": "Tarro 670 g  (360 g  escurrido)",
        "price": 2.55,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/59/33059/vlc1/33059_00_03.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas aloreña Roldán partida con hueso",
        "ud": "Bote 1,33 kg  (830 g  escurrido)",
        "price": 2.89,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/58/33158/vlc1/33158_00_03.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas gordales con pepinillo Hacendado en vinagre",
        "ud": "Tarro 670 g  (325 g  escurrido)",
        "price": 2.55,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/25/33125/vlc1/33125_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas rellenas de pimiento asado Hacendado",
        "ud": "Bote 350 g  (150 g  escurrido)",
        "price": 0.90,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/33/33133/vlc1/33133_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas rellenas de pimiento Hacendado",
        "ud": "3 botes x 50 g",
        "price": 1.60,
        "volume": "/pack",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/20/33120/vlc1/33120_00_03.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas manzanilla sabor anchoa Hacendado con hueso",
        "ud": "Tarro 935 g  (530 g  escurrido)",
        "price": 2.50,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/05/33205/vlc1/33205_00_03.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas manzanilla sabor anchoa Hacendado con hueso",
        "ud": "Tarro 430 g  (250 g  escurrido)",
        "price": 1.00,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/28/33128/vlc1/33128_00_03.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas aliñadas Hacendado sin hueso",
        "ud": "Tarro 835 g  (400 g  escurrido)",
        "price": 2.40,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/92/33192/vlc1/33192_00_03.jpg?fit=crop&h=300&w=300",
        "name": "Cóctel de aceitunas mix mediterráneo Huerta de Barros con hueso",
        "ud": "Tarro 980 g  (600 g  escurrido)",
        "price": 2.50,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/71/33171/vlc1/33171_00_03.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas gordal Hacendado con hueso",
        "ud": "Tarro 700 g  (400 g  escurrido)",
        "price": 2.10,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/01/33201/vlc1/33201_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas con salsa mojo picón Iruela sin hueso",
        "ud": "Tarro 485 g",
        "price": 3.75,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/11/33211/vlc1/33211_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas aliñadas Artoliva con hueso",
        "ud": "Tarro 1,28 kg  (700 g  escurrido)",
        "price": 3.75,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/99/33199/vlc1/33199_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Aceitunas Madama Oliva con hueso",
        "ud": "Tarrina 150 g",
        "price": 2.25,
        "volume": "/ud.",
        "fk_category": 2
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/44/5044/vlc1/5044_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Arroz redondo Hacendado",
        "ud": "Paquete 1 kg",
        "price": 0.79,
        "volume": "/ud.",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/00/5000/vlc1/5000_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Arroz redondo La Fallera",
        "ud": "Paquete 1 kg",
        "price": 1.35,
        "volume": "/ud.",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/82/5082/vlc1/5082_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Arroz cocido basmati Brillante",
        "ud": "2 vasitos x 125 g",
        "price": 1.15,
        "volume": "/pack",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/83/5083/vlc1/5083_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Arroz cocido integral Brillante",
        "ud": "2 vasitos x 125 g",
        "price": 1.10,
        "volume": "/pack",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/25/5025/vlc1/5025_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Arroz bomba Hacendado",
        "ud": "Paquete 1 kg",
        "price": 2.65,
        "volume": "/ud.",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/07/5007/vlc1/5007_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Arroz cocido redondo Hacendado",
        "ud": "2 vasitos x 125 g",
        "price": 0.99,
        "volume": "/pack",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/31/5031/vlc1/5031_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Quinoa cocida blanca y roja Hacendado",
        "ud": "2 vasitos x 125 g",
        "price": 1.35,
        "volume": "/pack",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/64/5064/vlc1/5064_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Arroz largo Hacendado",
        "ud": "Paquete 2 kg",
        "price": 1.62,
        "volume": "/ud.",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/63/5063/vlc1/5063_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Arroz largo Hacendado",
        "ud": "Paquete 1 kg",
        "price": 0.83,
        "volume": "/ud.",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/42/5042/vlc1/5042_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Arroz redondo J Sendra Hacendado",
        "ud": "Paquete 1 kg",
        "price": 1.00,
        "volume": "/ud.",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/02/5002/vlc1/5002_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Arroz basmati aromático Hacendado",
        "ud": "Paquete 1 kg",
        "price": 2.10,
        "volume": "/ud.",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/95/9395/vlc1/9395_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cous cous mediano Bia",
        "ud": "Caja 1 kg",
        "price": 1.55,
        "volume": "/ud.",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/14/5014/vlc1/5014_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Arroz integral redondo Hacendado",
        "ud": "Paquete 1 kg",
        "price": 1.49,
        "volume": "/ud.",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/30/9430/vlc1/9430_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Quinoa Hacendado",
        "ud": "Paquete 500 g",
        "price": 2.79,
        "volume": "/ud.",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/20/5020/vlc1/5020_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Arroz vaporizado Hacendado",
        "ud": "Paquete 1 kg",
        "price": 1.15,
        "volume": "/ud.",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/30/5030/vlc1/5030_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Arroz redondo vaporizado Hacendado",
        "ud": "Paquete 1 kg",
        "price": 1.37,
        "volume": "/ud.",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/12/5012/vlc1/5012_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Arroz Jazmín aromático Hacendado",
        "ud": "Paquete 1 kg",
        "price": 1.90,
        "volume": "/ud.",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/13/8713/vlc1/8713_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Noodles de arroz Acecook",
        "ud": "Paquete 200 g",
        "price": 1.25,
        "volume": "/ud.",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/26/5026/vlc1/5026_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Arroz arborio especial risotto Hacendado",
        "ud": "Paquete 1 kg",
        "price": 2.16,
        "volume": "/ud.",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/16/5016/vlc1/5016_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Arroz especial ensaladas y guarnición Hacendado",
        "ud": "Paquete 1 kg",
        "price": 2.19,
        "volume": "/ud.",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/37/5037/vlc1/5037_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Arroz especial sushi Hacendado",
        "ud": "Paquete 500 g",
        "price": 1.25,
        "volume": "/ud.",
        "fk_category": 3
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/98/19898/vlc1/19898_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Azúcar blanco",
        "ud": "Paquete 2 kg",
        "price": 1.34,
        "volume": "/ud.",
        "fk_category": 4
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/97/19897/vlc1/19897_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Azúcar blanco",
        "ud": "Paquete 1 kg",
        "price": 0.69,
        "volume": "/ud.",
        "fk_category": 4
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/37/19837/vlc1/19837_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Azúcar blanco en sobres Acor",
        "ud": "Caja 50 sticks (350 g)",
        "price": 1.15,
        "volume": "/ud.",
        "fk_category": 4
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/57/19857/vlc1/19857_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Azúcar moreno de caña Acor",
        "ud": "Caja 1 kg",
        "price": 1.87,
        "volume": "/ud.",
        "fk_category": 4
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/32/19832/vlc1/19832_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Azúcar moreno de caña integral en sobres Acor",
        "ud": "Caja 50 sobres (350 g)",
        "price": 1.30,
        "volume": "/ud.",
        "fk_category": 4
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/59/19859/vlc1/19859_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Panela azúcar moreno de caña integral Nat Sanno",
        "ud": "Paquete 500 g",
        "price": 1.80,
        "volume": "/ud.",
        "fk_category": 4
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/01/19801/vlc1/19801_00_03.jpg?fit=crop&h=300&w=300",
        "name": "Azúcar glas Hacendado",
        "ud": "Bote 300 g",
        "price": 1.19,
        "volume": "/ud.",
        "fk_category": 4
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/31/9031/vlc1/9031_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Preparado lácteo crecimiento sabor a cereales Junior Nestlé",
        "ud": "Brick 1 L",
        "price": 1.50,
        "volume": "/ud.",
        "fk_category": 5
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/49/9049/vlc1/9049_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Preparado lácteo crecimiento Peques 3 Puleva",
        "ud": "6 bricks x 1 L",
        "price": 8.70,
        "volume": "/pack",
        "fk_category": 5
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/40/9040/vlc1/9040_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Preparado lácteo crecimiento Peques 3 Puleva",
        "ud": "Brick 1 L",
        "price": 1.45,
        "volume": "/ud.",
        "fk_category": 5
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/57/9057/vlc1/9057_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Preparado lácteo con cereales crecimiento Peques 3 Puleva",
        "ud": "6 bricks x 1 L",
        "price": 8.70,
        "volume": "/pack",
        "fk_category": 5
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/34/9034/vlc1/9034_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Preparado lácteo con cereales crecimiento Peques 3 Puleva",
        "ud": "Brick 1 L",
        "price": 1.45,
        "volume": "/ud.",
        "fk_category": 5
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/87/9187/vlc1/9187_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Preparado lácteo crecimiento +1 año Hacendado",
        "ud": "6 bricks x 1 L",
        "price": 6.00,
        "volume": "/pack",
        "fk_category": 5
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/88/9188/vlc1/9188_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Preparado lácteo crecimiento +1 año Hacendado",
        "ud": "Brick 1 L",
        "price": 1.05,
        "volume": "/ud.",
        "fk_category": 5
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/89/9189/vlc1/9189_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Preparado lácteo crecimiento +1 año Hacendado",
        "ud": "6 mini bricks x 200 ml",
        "price": 1.55,
        "volume": "/pack",
        "fk_category": 5
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/54/9054/vlc1/9054_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Preparado lácteo cereales al cacao Peques 3 Puleva",
        "ud": "3 mini bricks x 200 ml",
        "price": 1.41,
        "volume": "/pack",
        "fk_category": 5
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/90/9190/vlc1/9190_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Preparado lácteo con cacao y cereales crecimiento Hacendado +1 año",
        "ud": "6 mini bricks x 200 ml",
        "price": 1.75,
        "volume": "/pack",
        "fk_category": 5
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/46/9046/vlc1/9046_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Preparado lácteo crecimiento Junior Nestlé",
        "ud": "4 bricks x 1 L",
        "price": 5.80,
        "volume": "/pack",
        "fk_category": 5
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/41/9041/vlc1/9041_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Preparado lácteo crecimiento Junior Nestlé",
        "ud": "Brick 1 L",
        "price": 1.50,
        "volume": "/ud.",
        "fk_category": 5
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/98/9398/vlc1/9398_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Preparado lácteo con cereales crecimiento Hacendado +1 año",
        "ud": "6 bricks x 1 L",
        "price": 6.60,
        "volume": "/pack",
        "fk_category": 5
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/97/9397/vlc1/9397_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Preparado lácteo con cereales crecimiento Hacendado +1 año",
        "ud": "Brick 1 L",
        "price": 1.15,
        "volume": "/ud.",
        "fk_category": 5
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/04/9004/vlc1/9004_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Leche de continuación Peques 2 Puleva",
        "ud": "6 bricks x 1 L",
        "price": 8.70,
        "volume": "/pack",
        "fk_category": 5
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/19/9419/vlc1/9419_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Leche de continuación Peques 2 Puleva",
        "ud": "Brick 1 L",
        "price": 1.45,
        "volume": "/ud.",
        "fk_category": 5
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/62/66462/vlc1/66462_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza Clásica Steinburg",
        "ud": "12 latas x 330 ml",
        "price": 3.00,
        "volume": "/pack",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/63/66463/vlc1/66463_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza Clásica Steinburg",
        "ud": "Lata 330 ml",
        "price": 0.25,
        "volume": "/ud.",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/79/27679/vlc1/27679_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza Heineken",
        "ud": "8 latas x 330 ml",
        "price": 5.12,
        "volume": "/pack",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/00/27100/vlc1/27100_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza Heineken",
        "ud": "Lata 330 ml",
        "price": 0.64,
        "volume": "/ud.",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/90/67090/vlc1/67090_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza Amstel",
        "ud": "18 latas x 330 ml",
        "price": 9.72,
        "volume": "/pack",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/45/66445/vlc1/66445_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza Amstel",
        "ud": "Lata 330 ml",
        "price": 0.56,
        "volume": "/ud.",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/31/66031/vlc1/66031_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza especial Mahou",
        "ud": "12 latas x 330 ml",
        "price": 7.80,
        "volume": "/pack",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/36/27136/vlc1/27136_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza especial Mahou",
        "ud": "Lata 330 ml",
        "price": 0.65,
        "volume": "/ud.",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/57/28057/vlc1/28057_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza doble malta Voll-Damm",
        "ud": "6 latas x 330 ml",
        "price": 4.68,
        "volume": "/pack",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/37/27137/vlc1/27137_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza doble malta Voll-Damm",
        "ud": "Lata 330 ml",
        "price": 0.78,
        "volume": "/ud.",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/85/66485/vlc1/66485_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza Suave Steinburg",
        "ud": "12 latas x 330 ml",
        "price": 2.64,
        "volume": "/pack",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/86/66486/vlc1/66486_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza Suave Steinburg",
        "ud": "Lata 330 ml",
        "price": 0.22,
        "volume": "/ud.",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/26/66026/vlc1/66026_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza especial San Miguel",
        "ud": "12 latas x 330 ml",
        "price": 6.36,
        "volume": "/pack",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/03/27103/vlc1/27103_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza especial San Miguel",
        "ud": "Lata 330 ml",
        "price": 0.55,
        "volume": "/ud.",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/64/66764/vlc1/66764_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza Especial Steinburg",
        "ud": "12 latas x 330 ml",
        "price": 3.84,
        "volume": "/pack",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/65/66765/vlc1/66765_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza Especial Steinburg",
        "ud": "Lata 330 ml",
        "price": 0.32,
        "volume": "/ud.",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/87/66787/vlc1/66787_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza Pils Krombacher",
        "ud": "Barril 5 L",
        "price": 12.00,
        "volume": "/ud.",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/69/66469/vlc1/66469_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza Pils Krombacher",
        "ud": "6 latas x 330 ml",
        "price": 2.22,
        "volume": "/pack",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/70/66470/vlc1/66470_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza Pils Krombacher",
        "ud": "Lata 330 ml",
        "price": 0.37,
        "volume": "/ud.",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/74/66774/vlc1/66774_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza Tostada 1897",
        "ud": "6 latas x 330 ml",
        "price": 2.76,
        "volume": "/pack",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/75/66775/vlc1/66775_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza Tostada 1897",
        "ud": "Lata 330 ml",
        "price": 0.46,
        "volume": "/ud.",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/32/66432/vlc1/66432_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza doble malta",
        "ud": "6 latas x 330 ml",
        "price": 2.88,
        "volume": "/pack",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/33/66433/vlc1/66433_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza doble malta",
        "ud": "Lata 330 ml",
        "price": 0.48,
        "volume": "/ud.",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/92/66792/vlc1/66792_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza sin gluten Steinburg",
        "ud": "6 latas x 330 ml",
        "price": 2.70,
        "volume": "/pack",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/93/66793/vlc1/66793_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza sin gluten Steinburg",
        "ud": "Lata 330 ml",
        "price": 0.45,
        "volume": "/ud.",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/78/66778/vlc1/66778_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza negra Black 1897",
        "ud": "6 latas x 330 ml",
        "price": 2.70,
        "volume": "/pack",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/79/66779/vlc1/66779_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza negra Black 1897",
        "ud": "Lata 330 ml",
        "price": 0.45,
        "volume": "/ud.",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/93/66593/vlc1/66593_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza Pilsen Sabor a Sur Steinburg",
        "ud": "12 lata x 330 ml",
        "price": 3.48,
        "volume": "/pack",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/94/66594/vlc1/66594_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Cerveza Pilsen Sabor a Sur Steinburg",
        "ud": "Lata 330 ml",
        "price": 0.29,
        "volume": "/ud.",
        "fk_category": 6
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/92/12492/vlc1/12492_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chocolate extrafino negro Hacendado",
        "ud": "Tableta 100 g",
        "price": 1.05,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/31/12531/vlc1/12531_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chocolate negro Hacendado fundir",
        "ud": "Tableta 200 g",
        "price": 0.90,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/95/12495/vlc1/12495_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chocolatinas chocolate extrafino negro Hacendado",
        "ud": "Paquete 200 g",
        "price": 2.00,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/82/12582/vlc1/12582_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chocolate extrafino negro Hacendado",
        "ud": "Tableta 150 g",
        "price": 0.75,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/41/12141/vlc1/12141_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chocolate negro Valor 70% chocolate negro",
        "ud": "Tableta 125 g",
        "price": 1.88,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/96/12496/vlc1/12496_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chocolate extrafino negro Hacendado con pepitas de cacao tostadas",
        "ud": "Tableta 100 g",
        "price": 0.90,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/94/12494/vlc1/12494_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chocolate extrafino negro Hacendado",
        "ud": "Tableta 100 g",
        "price": 0.80,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/81/12481/vlc1/12481_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chocolate negro Hacendado almendras enteras",
        "ud": "Tableta 200 g",
        "price": 1.29,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/26/12126/vlc1/12126_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chocolate negro Valor puro",
        "ud": "Tableta 300 g",
        "price": 2.69,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/30/12130/vlc1/12130_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chocolate negro Valor puro almendras enteras",
        "ud": "Tableta 250 g",
        "price": 3.00,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/23/12523/vlc1/12523_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chocolate extrafino negro Hacendado 0% azúcares añadidos",
        "ud": "Tableta 125 g",
        "price": 1.25,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/60/12460/vlc1/12460_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Mini barritas chocolate negro Hacendado con crujiente de semillas y galleta",
        "ud": "Paquete 12 ud. (130 g)",
        "price": 1.40,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/53/12553/vlc1/12553_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chocolate negro Hacendado mousse",
        "ud": "Tableta 140 g",
        "price": 1.50,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/39/12139/vlc1/12139_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chocolate negro Valor puro almendras enteras",
        "ud": "Tableta 150 g",
        "price": 2.55,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/83/12483/vlc1/12483_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chocolate extrafino negro Hacendado avellanas enteras",
        "ud": "Tableta 100 g",
        "price": 0.90,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/31/12431/vlc1/12431_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Chocolatinas Royal Mints chocolate negro",
        "ud": "Caja 200 g",
        "price": 1.60,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/89/12489/vlc1/12489_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chocolate extrafino negro Hacendado fussion relleno sabor menta",
        "ud": "Tableta 100 g",
        "price": 0.80,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/44/12544/vlc1/12544_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Gotas de chocolate negro para fundir Hacendado",
        "ud": "Paquete 250 g",
        "price": 1.50,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/80/12480/vlc1/12480_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chocolate extrafino negro Hacendado almendras enteras",
        "ud": "Tableta 200 g",
        "price": 1.80,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/97/12497/vlc1/12497_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chocolate extrafino negro Hacendado con arándanos y sésamo",
        "ud": "Tableta 100 g",
        "price": 1.25,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/98/12498/vlc1/12498_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chocolate extrafino negro Hacendado con trozos de naranja",
        "ud": "Tableta 100 g",
        "price": 1.25,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/24/12524/vlc1/12524_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chocolate extrafino negro Hacendado 0% azúcares añadidos",
        "ud": "Tableta 100 g",
        "price": 1.40,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/30/12530/vlc1/12530_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chocolate negro Hacendado fundir 0% azúcares añadidos",
        "ud": "Tableta 200 g",
        "price": 1.50,
        "volume": "/ud.",
        "fk_category": 7
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/97/3497/vlc1/3497_00_07.jpg?fit=crop&h=300&w=300",
        "name": "Arreglo para puchero vacuno, cerdo y pollo",
        "ud": "Bandeja 1 kg aprox.",
        "price": 4.60,
        "volume": "/ud.",
        "fk_category": 8
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/56/3556/vlc1/3556_00_07.jpg?fit=crop&h=300&w=300",
        "name": "Arreglo para arroz al horno",
        "ud": "Bandeja 850 g aprox.",
        "price": 4.93,
        "volume": "/ud.",
        "fk_category": 8
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/16/21216/vlc1/21216_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pelota de cerdo",
        "ud": "Bandeja 215 g",
        "price": 1.35,
        "volume": "/ud.",
        "fk_category": 8
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/07/58307/vlc1/58307_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Hueso garrón Incarlopsa",
        "ud": "290 g aprox.",
        "price": 0.87,
        "volume": "/pack",
        "fk_category": 8
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/96/3496/vlc1/3496_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Hueso vacuno",
        "ud": "Bandeja 250 g aprox.",
        "price": 0.73,
        "volume": "/ud.",
        "fk_category": 8
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/92/2692/vlc1/2692_00_07.jpg?fit=crop&h=300&w=300",
        "name": "Trozo de vacuno para cocido",
        "ud": "Bandeja 300 g aprox.",
        "price": 2.37,
        "volume": "/ud.",
        "fk_category": 8
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/11/53011/vlc1/53011_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Compango asturiano",
        "ud": "Paquete 250 g",
        "price": 2.35,
        "volume": "/ud.",
        "fk_category": 8
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/90/2690/vlc1/2690_00_07.jpg?fit=crop&h=300&w=300",
        "name": "Osobuco de cerdo",
        "ud": "Bandeja 150 g aprox.",
        "price": 0.74,
        "volume": "/ud.",
        "fk_category": 8
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/89/2689/vlc1/2689_00_07.jpg?fit=crop&h=300&w=300",
        "name": "Espinazo de cerdo",
        "ud": "Bandeja 180 g aprox.",
        "price": 0.72,
        "volume": "/ud.",
        "fk_category": 8
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/54/2854/vlc1/2854_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Gallina un cuarto de pieza pesada",
        "ud": "Bandeja 600 g aprox.",
        "price": 2.16,
        "volume": "/ud.",
        "fk_category": 8
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/51/2851/vlc1/2851_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Patas de cerdo",
        "ud": "Bandeja 500 g aprox.",
        "price": 2.13,
        "volume": "/ud.",
        "fk_category": 8
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/99/3499/vlc1/3499_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Costilla de vacuno",
        "ud": "Bandeja 250 g aprox.",
        "price": 1.35,
        "volume": "/ud.",
        "fk_category": 8
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/88/2688/vlc1/2688_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Tocino de cerdo",
        "ud": "Bandeja 150 g aprox.",
        "price": 0.51,
        "volume": "/ud.",
        "fk_category": 8
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/54/59154/vlc1/59154_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chorizo asturiano",
        "ud": "Paquete 250 g",
        "price": 2.25,
        "volume": "/ud.",
        "fk_category": 8
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/92/1892/vlc1/1892_00_07.jpg?fit=crop&h=300&w=300",
        "name": "Hueso blanco de cerdo salado",
        "ud": "Bandeja 550 g aprox.",
        "price": 1.80,
        "volume": "/ud.",
        "fk_category": 8
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/35/2635/vlc1/2635_00_07.jpg?fit=crop&h=300&w=300",
        "name": "Rabo de cerdo",
        "ud": "Bandeja 250 g aprox.",
        "price": 1.02,
        "volume": "/ud.",
        "fk_category": 8
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/97/25997/vlc1/25997_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Arreglo para paella con pollo y conejo",
        "ud": "Bandeja 800 g aprox.",
        "price": 4.52,
        "volume": "/ud.",
        "fk_category": 8
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/64/9264/vlc1/9264_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cereales rellenos de leche Hacendado",
        "ud": "Caja 500 g",
        "price": 1.89,
        "volume": "/ud.",
        "fk_category": 9
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/33/9333/vlc1/9333_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Mini cereales rellenos de leche Hacendado",
        "ud": "Caja 5 bolsitas (175 g)",
        "price": 1.60,
        "volume": "/ud.",
        "fk_category": 9
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/13/14413/vlc1/14413_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cereales Choco Flakes Cuétara",
        "ud": "Caja 550 g",
        "price": 2.45,
        "volume": "/ud.",
        "fk_category": 9
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/77/9377/vlc1/9377_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Cereales rellenos de chocolate y avellana Hacendado",
        "ud": "Paquete 500 g",
        "price": 1.59,
        "volume": "/ud.",
        "fk_category": 9
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/22/9522/vlc1/9522_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Mini cereales rellenos de chocolate y avellanas Hacendado",
        "ud": "Caja 5 bolsitas (175 g)",
        "price": 1.30,
        "volume": "/ud.",
        "fk_category": 9
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/59/9359/vlc1/9359_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Copos de maíz Corn Flakes Hacendado",
        "ud": "Caja 400 g",
        "price": 0.87,
        "volume": "/ud.",
        "fk_category": 9
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/92/9592/vlc1/9592_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cereales de arroz inflado con chocolate Hacendado",
        "ud": "Caja 500 g",
        "price": 1.75,
        "volume": "/ud.",
        "fk_category": 9
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/57/9257/vlc1/9257_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Copos de trigo con chocolate Chocapic original",
        "ud": "Caja 625 g",
        "price": 2.95,
        "volume": "/ud.",
        "fk_category": 9
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/10/9210/vlc1/9210_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Copos de maíz Corn Flakes Kellogg's",
        "ud": "Caja 500 g",
        "price": 2.29,
        "volume": "/ud.",
        "fk_category": 9
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/42/9542/vlc1/9542_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cereales de arroz inflado Choco Krispies Kellogg's",
        "ud": "Caja 550 g",
        "price": 2.85,
        "volume": "/ud.",
        "fk_category": 9
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/37/9537/vlc1/9537_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cereales de trigo inflado con miel Hacendado",
        "ud": "Caja 500 g",
        "price": 1.35,
        "volume": "/ud.",
        "fk_category": 9
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/31/9431/vlc1/9431_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Bolas de maíz con miel Hacendado",
        "ud": "Caja 400 g",
        "price": 1.10,
        "volume": "/ud.",
        "fk_category": 9
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/51/9351/vlc1/9351_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Cereales rellenos de chocolate negro Hacendado",
        "ud": "Paquete 500 g",
        "price": 1.99,
        "volume": "/ud.",
        "fk_category": 9
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/77/9577/vlc1/9577_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Bolas de cereales de chocolate Hacendado",
        "ud": "Caja 500 g",
        "price": 1.29,
        "volume": "/ud.",
        "fk_category": 9
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/13/9513/vlc1/9513_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Anillos de cereales Colors Hacendado sabor a frutas",
        "ud": "Caja 500 g",
        "price": 1.95,
        "volume": "/ud.",
        "fk_category": 9
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/06/9506/vlc1/9506_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Copos de trigo con chocolate Chocodays Hacendado",
        "ud": "Caja 500 g",
        "price": 1.39,
        "volume": "/ud.",
        "fk_category": 9
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/01/9401/vlc1/9401_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Copos de maíz Corn Flakes sin gluten Nicoli",
        "ud": "Caja 375 g",
        "price": 1.90,
        "volume": "/ud.",
        "fk_category": 9
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/47/9547/vlc1/9547_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cereales rellenos de crema de cacao y avellana sin gluten Hacendado",
        "ud": "Paquete 400 g",
        "price": 1.90,
        "volume": "/ud.",
        "fk_category": 9
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/08/55108/vlc1/55108_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Fuet espetec extra Hacendado",
        "ud": "1 ud.",
        "price": 2.05,
        "volume": "/ud.",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/85/59085/vlc1/59085_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Salchichón extra Hacendado lonchas",
        "ud": "4 paquetes x 60 g",
        "price": 1.45,
        "volume": "/pack",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/47/59047/vlc1/59047_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Salchichón de pavo Hacendado lonchas",
        "ud": "2 paquetes x 75 g",
        "price": 1.89,
        "volume": "/pack",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/78/59078/vlc1/59078_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Longaniza Hacendado sticks para picar",
        "ud": "Paquete 50 g",
        "price": 1.00,
        "volume": "/ud.",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/34/55134/vlc1/55134_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Lomo de pavo Hacendado lonchas",
        "ud": "2 paquetes x 50 g",
        "price": 1.89,
        "volume": "/pack",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/16/55116/vlc1/55116_00_07.jpg?fit=crop&h=300&w=300",
        "name": "Longaniza de pavo extra Hacendado lonchas",
        "ud": "2 paquetes x 62,5 g",
        "price": 1.79,
        "volume": "/pack",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/59/59059/vlc1/59059_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Salchichón extra Hacendado lonchas",
        "ud": "2 paquetes x 90 g",
        "price": 1.65,
        "volume": "/pack",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/41/55141/vlc1/55141_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Longaniza de Pascua Hacendado",
        "ud": "2 paquetes x 145 g",
        "price": 2.60,
        "volume": "/pack",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/28/55128/vlc1/55128_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Longaniza de payés Hacendado lonchas",
        "ud": "2 paquetes x 62,5 g",
        "price": 1.50,
        "volume": "/pack",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/90/59090/vlc1/59090_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Salami extra Hacendado lonchas",
        "ud": "4 paquetes x 60 g",
        "price": 1.45,
        "volume": "/pack",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/77/59077/vlc1/59077_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Salchichón extra pimienta Hacendado finas lonchas",
        "ud": "Paquete 100 g",
        "price": 1.38,
        "volume": "/ud.",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/51/58151/vlc1/58151_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Salchichón ibérico La Hacienda del ibérico lonchas",
        "ud": "2 paquetes x 62,5 g",
        "price": 1.95,
        "volume": "/pack",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/05/55105/vlc1/55105_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Longaniza de pavo imperial extra Hacendado",
        "ud": "Pieza 235 g",
        "price": 2.15,
        "volume": "/ud.",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/25/55125/vlc1/55125_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Longaniza clásica extra Hacendado",
        "ud": "1 ud.",
        "price": 2.10,
        "volume": "/ud.",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/43/55143/vlc1/55143_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Longaniza de Pascua Hacendado",
        "ud": "Paquete 145 g",
        "price": 1.35,
        "volume": "/ud.",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/67/58267/vlc1/58267_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Salchichón de cebo ibérico cortado a máquina",
        "ud": "Paquete 90 g aprox.",
        "price": 1.98,
        "volume": "/ud.",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/73/58273/vlc1/58273_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Salchichón de bellota ibérico cortado a máquina",
        "ud": "Paquete 90 g aprox.",
        "price": 2.34,
        "volume": "/ud.",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/30/55130/vlc1/55130_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Longaniza de payés Hacendado",
        "ud": "1 ud.",
        "price": 3.95,
        "volume": "/ud.",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/28/55028/vlc1/55028_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Salami montañés El Pozo",
        "ud": "1 ud.",
        "price": 1.35,
        "volume": "/ud.",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/33/55133/vlc1/55133_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Salchichón supremo extra Hacendado",
        "ud": "1 ud.",
        "price": 3.40,
        "volume": "/ud.",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/59/58159/vlc1/58159_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Salchichón cular ibérico extra La Hacienda del ibérico",
        "ud": "Pieza 500 g aprox.",
        "price": 5.45,
        "volume": "/ud.",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/48/58248/vlc1/58248_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Mini salchichón ibérico extra La Hacienda del ibérico",
        "ud": "Pieza 200 g",
        "price": 1.98,
        "volume": "/ud.",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/66/58266/vlc1/58266_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Salchichón cular ibérico extra La Hacienda del ibérico",
        "ud": "Pieza 820 g aprox.",
        "price": 8.94,
        "volume": "/ud.",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/72/58272/vlc1/58272_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Salchichón de bellota ibérico cular Covap",
        "ud": "Pieza 1 kg aprox.",
        "price": 15.00,
        "volume": "/ud.",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/46/58246/vlc1/58246_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Salchichón de bellota ibérico La Hacienda del ibérico",
        "ud": "Pieza 520 g aprox.",
        "price": 7.80,
        "volume": "/ud.",
        "fk_category": 10
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/91/62191/vlc1/62191_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Filetes de panga ultracongelados",
        "ud": "Paquete 900 g  escurrido",
        "price": 4.70,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/28/62128/vlc1/62128_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Filetes de merluza del cabo sin piel Mascato ultracongelados",
        "ud": "Paquete 580 g  escurrido",
        "price": 3.85,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/45/24345/vlc1/24345_00_07.jpg?fit=crop&h=300&w=300",
        "name": "Rodaja de emperador Hacendado congelado",
        "ud": "Pieza 300 g aprox. escurrido",
        "price": 3.83,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/52/24352/vlc1/24352_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Lomos de atún aleta amarilla Escuris ultracongelados",
        "ud": "Paquete 300 g aprox. escurrido",
        "price": 2.68,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/16/24016/vlc1/24016_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Filetes de bacalao sin espinas Hacendado congelado",
        "ud": "Paquete 375 g  escurrido",
        "price": 4.25,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/31/62131/vlc1/62131_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Medallones de merluza del cabo Hacendado ultracongelados",
        "ud": "Paquete 485 g  escurrido",
        "price": 3.60,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/50/24350/vlc1/24350_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Filete de salmón rosado salvaje con piel Hacendado congelado",
        "ud": "Pieza 300 g aprox. escurrido",
        "price": 2.88,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/45/62145/vlc1/62145_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Rodajas de emperador pequeñas Hacendado ultracongeladas",
        "ud": "Paquete 900 g  escurrido",
        "price": 8.75,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/74/24274/vlc1/24274_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Sepia limpia troceada Hacendado congelada",
        "ud": "Paquete 360 g  escurrido",
        "price": 3.95,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/42/24242/vlc1/24242_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Calamar limpio troceado Profand congelado",
        "ud": "Paquete 475 g  escurrido",
        "price": 3.95,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/13/62113/vlc1/62113_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Lomos y centros de merluza del cabo Hacendado ultracongelados",
        "ud": "Caja 400 g",
        "price": 3.20,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/61/62461/vlc1/62461_00_07.jpg?fit=crop&h=300&w=300",
        "name": "Anguriñas Pescanova ultracongeladas",
        "ud": "Bandeja 260 g",
        "price": 2.19,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/12/62012/vlc1/62012_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Fritura de pescado Hacendado ultracongelada",
        "ud": "Paquete 600 g  escurrido",
        "price": 4.40,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/25/24025/vlc1/24025_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Porciones de bacalao sin espinas y sin piel Hacendado congelado",
        "ud": "Paquete 600 g  escurrido",
        "price": 5.98,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/34/24234/vlc1/24234_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Rodaja de potón del pacífico cocido Hacendado congelado",
        "ud": "Paquete 475 g  escurrido",
        "price": 4.75,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/80/24380/vlc1/24380_00_07.jpg?fit=crop&h=300&w=300",
        "name": "Rodaja de tintorera con piel Hacendado congelada",
        "ud": "Pieza 750 g aprox. escurrido",
        "price": 2.89,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/03/62103/vlc1/62103_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Porciones de merluza del cabo Hacendado ultracongeladas",
        "ud": "Paquete 500 g",
        "price": 3.80,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/06/24206/vlc1/24206_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Sepia limpia pequeña Hacendado congelada",
        "ud": "Paquete 360 g  escurrido",
        "price": 3.95,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/24/24024/vlc1/24024_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Tacos de bacalao sin espinas Hacendado congelado",
        "ud": "Paquete 400 g  escurrido",
        "price": 3.98,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/40/24340/vlc1/24340_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Cola de rape del cabo Hacendado congelada",
        "ud": "Pieza 900 g aprox. escurrido",
        "price": 12.56,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/20/24020/vlc1/24020_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Lomo de bacalao sin espinas Hacendado congelado",
        "ud": "Paquete 390 g  escurrido",
        "price": 5.25,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/59/62159/vlc1/62159_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Filetes de merluza del pacífico sin piel Hacendado ultracongelados",
        "ud": "Paquete 970 g  escurrido",
        "price": 5.40,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/41/24341/vlc1/24341_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Tiras de potón del Pacífico Hacendado congeladas",
        "ud": "Paquete 400 g  escurrido",
        "price": 3.50,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/80/62180/vlc1/62180_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Filetes de abadejo de Alaska sin piel Hacendado ultracongelados",
        "ud": "Paquete 850 g  escurrido",
        "price": 4.95,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/56/24256/vlc1/24256_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Tinta de sepia Nortindal congelada",
        "ud": "Paquete 8 ud. (32 g)",
        "price": 1.20,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/79/62179/vlc1/62179_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Filetes de merluza del cabo grandes sin piel Hacendado ultracongelados",
        "ud": "Paquete 970 g  escurrido",
        "price": 7.25,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/44/24344/vlc1/24344_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Filete de fletán negro Hacendado congelado",
        "ud": "Pieza 300 g aprox. escurrido",
        "price": 4.20,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/24/24324/vlc1/24324_00_07.jpg?fit=crop&h=300&w=300",
        "name": "Merluza del cabo sin cabeza Hacendado congelada",
        "ud": "Pieza 700 g aprox. escurrido",
        "price": 3.74,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/80/62480/vlc1/62480_00_07.jpg?fit=crop&h=300&w=300",
        "name": "Anguriñas Pescanova ultracongeladas",
        "ud": "2 bandejas x 260 g",
        "price": 3.99,
        "volume": "/pack",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/49/24249/vlc1/24249_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Anillas de pota Argentina Hacendado congeladas",
        "ud": "Paquete 360 g  escurrido",
        "price": 4.45,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/08/24208/vlc1/24208_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pulpo crudo grande Hacendado congelado",
        "ud": "Paquete 1,3 kg aprox.",
        "price": 16.84,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/91/24291/vlc1/24291_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Chipirón puntilla Hacendado congelado",
        "ud": "Paquete 450 g  escurrido",
        "price": 3.75,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/66/24266/vlc1/24266_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pulpo cocido troceado Profand congelado",
        "ud": "Paquete 285 g  escurrido",
        "price": 6.95,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/29/62029/vlc1/62029_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Lenguado entero Hacendado ultracongelado",
        "ud": "Paquete 600 g  escurrido",
        "price": 5.90,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/30/24430/vlc1/24430_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Lomos de salmón de Noruega sin piel y sin espinas Hacendado congelado",
        "ud": "Paquete 250 g  escurrido",
        "price": 4.89,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/23/24023/vlc1/24023_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Migas de bacalao sin espinas y sin piel Hacendado congeladas",
        "ud": "Paquete 300 g  escurrido",
        "price": 2.98,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/27/24027/vlc1/24027_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Rodajas de rape del cabo sin piel Mascato congeladas",
        "ud": "Paquete 300 g aprox.",
        "price": 5.85,
        "volume": "/ud.",
        "fk_category": 11
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/86/18086/vlc1/18086_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Atún en aceite de girasol Hacendado",
        "ud": "Lata 900 g  (650 g  escurrido)",
        "price": 5.35,
        "volume": "/ud.",
        "fk_category": 12
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/55/18055/vlc1/18055_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Atún claro en aceite de girasol Hacendado",
        "ud": "6 latas x 56 g",
        "price": 3.50,
        "volume": "/pack",
        "fk_category": 12
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/92/18092/vlc1/18092_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Atún claro en aceite de girasol Hacendado",
        "ud": "3 latas x 56 g",
        "price": 1.79,
        "volume": "/pack",
        "fk_category": 12
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/15/18015/vlc1/18015_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Atún claro en aceite de girasol Hacendado",
        "ud": "Lata 190 g  (143 g  escurrido)",
        "price": 1.74,
        "volume": "/ud.",
        "fk_category": 12
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/02/18002/vlc1/18002_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Atún claro en aceite de oliva Hacendado",
        "ud": "6 latas x 60 g",
        "price": 3.99,
        "volume": "/pack",
        "fk_category": 12
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/27/18027/vlc1/18027_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Atún claro en aceite de oliva Hacendado",
        "ud": "3 latas x 60 g",
        "price": 2.15,
        "volume": "/pack",
        "fk_category": 12
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/30/18030/vlc1/18030_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Atún en aceite de oliva Hacendado",
        "ud": "Lata 900 g  (650 g  escurrido)",
        "price": 6.75,
        "volume": "/ud.",
        "fk_category": 12
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/71/18071/vlc1/18071_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Atún claro en aceite de oliva Hacendado",
        "ud": "Lata 111 g  (82 g  escurrido)",
        "price": 1.31,
        "volume": "/ud.",
        "fk_category": 12
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/08/18008/vlc1/18008_00_07.jpg?fit=crop&h=300&w=300",
        "name": "Atún claro bajo en sal Hacendado en aceite de oliva",
        "ud": "3 latas x 60 g",
        "price": 2.28,
        "volume": "/pack",
        "fk_category": 12
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/18/18018/vlc1/18018_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Atún claro al natural Hacendado",
        "ud": "6 latas x 60 g",
        "price": 3.50,
        "volume": "/pack",
        "fk_category": 12
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/31/18031/vlc1/18031_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Atún claro en escabeche blanco Hacendado",
        "ud": "6 latas (480 g)",
        "price": 3.90,
        "volume": "/ud.",
        "fk_category": 12
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/54/18054/vlc1/18054_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Atún claro en aceite de oliva Hacendado",
        "ud": "Bote 195 g  (140 g  escurrido)",
        "price": 3.35,
        "volume": "/ud.",
        "fk_category": 12
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/37/18037/vlc1/18037_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Atún en salsa de tomate Hacendado",
        "ud": "3 latas x 52 g",
        "price": 1.80,
        "volume": "/pack",
        "fk_category": 12
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/11/18011/vlc1/18011_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Ventresca de atún claro Hacendado en aceite de oliva",
        "ud": "Lata 111 g  (78 g  escurrido)",
        "price": 2.15,
        "volume": "/ud.",
        "fk_category": 12
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/71/46571/vlc1/46571_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Acondicionador suavidad y brillo Deliplus todo tipo de cabello",
        "ud": "Botella 750 ml",
        "price": 0.90,
        "volume": "/ud.",
        "fk_category": 13
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/63/44363/vlc1/44363_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Acondicionador Repair & Nutrition Deliplus cabello seco y dañado",
        "ud": "Bote 300 ml",
        "price": 1.40,
        "volume": "/ud.",
        "fk_category": 13
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/82/44282/vlc1/44282_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Acondicionador Liss Frizz Control Deliplus cabello rebelde",
        "ud": "Bote 300 ml",
        "price": 1.40,
        "volume": "/ud.",
        "fk_category": 13
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/23/44323/vlc1/44323_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Acondicionador Hydra Deliplus cabello normal",
        "ud": "Bote 300 ml",
        "price": 1.40,
        "volume": "/ud.",
        "fk_category": 13
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/21/44321/vlc1/44321_01_02.jpg?fit=crop&h=300&w=300",
        "name": "Acondicionador instantáneo Kids Deliplus",
        "ud": "Bote 250 ml",
        "price": 1.70,
        "volume": "/ud.",
        "fk_category": 13
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/26/44326/vlc1/44326_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Acondicionador instantáneo Repair & Nutrition Deliplus cabello seco y dañado",
        "ud": "Botella 400 ml",
        "price": 2.50,
        "volume": "/ud.",
        "fk_category": 13
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/66/78566/vlc1/78566_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Acondicionador repara & protege Pantene",
        "ud": "Bote 230 ml",
        "price": 2.99,
        "volume": "/ud.",
        "fk_category": 13
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/65/78565/vlc1/78565_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Acondicionador rizos definidos Pantene",
        "ud": "Bote 230 ml",
        "price": 2.99,
        "volume": "/ud.",
        "fk_category": 13
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/85/44285/vlc1/44285_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Acondicionador instantáneo Volumen Deliplus cabello fino y sin volumen",
        "ud": "Botella 400 ml",
        "price": 2.50,
        "volume": "/ud.",
        "fk_category": 13
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/54/44954/vlc1/44954_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Acondicionador hidratación intensa TRESemmé cabello seco o dañado",
        "ud": "Bote 810 ml",
        "price": 4.65,
        "volume": "/ud.",
        "fk_category": 13
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/55/44955/vlc1/44955_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Acondicionador liso keratina TRESemmé",
        "ud": "Bote 625 ml",
        "price": 4.65,
        "volume": "/ud.",
        "fk_category": 13
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/32/75532/vlc1/75532_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Acondicionador protector color vive Elvive cabello teñido",
        "ud": "Bote 250 ml",
        "price": 2.79,
        "volume": "/ud.",
        "fk_category": 13
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/99/75599/vlc1/75599_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Acondicionador total repair Elvive",
        "ud": "Bote 250 ml",
        "price": 2.79,
        "volume": "/ud.",
        "fk_category": 13
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/84/73984/vlc1/73984_00_03.jpg?fit=crop&h=300&w=300",
        "name": "Crema cara, cuerpo y manos Nivea Men",
        "ud": "Lata 150 ml",
        "price": 3.70,
        "volume": "/ud.",
        "fk_category": 14
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/00/75600/vlc1/75600_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Crema facial antiarrugas y antiedad 9.60 hombre",
        "ud": "Bote 50 ml",
        "price": 3.95,
        "volume": "/ud.",
        "fk_category": 14
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/17/74817/vlc1/74817_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cuidado hidratante anti-fatiga 24H L'Oréal men expert Hydra energetic",
        "ud": "Bote 50 ml",
        "price": 7.95,
        "volume": "/ud.",
        "fk_category": 14
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/47/78947/vlc1/78947_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Crema facial hidratante 24H Vído hombre",
        "ud": "Tarro 50 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 14
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/02/75602/vlc1/75602_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Crema facial hidratante protectora 9.60 hombre",
        "ud": "Bote 100 ml",
        "price": 4.00,
        "volume": "/ud.",
        "fk_category": 14
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/03/75603/vlc1/75603_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Gel limpiador facial 9.60 hombre",
        "ud": "Bote 150 ml",
        "price": 2.95,
        "volume": "/ud.",
        "fk_category": 14
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/48/78948/vlc1/78948_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Sérum anti-edad Vído hombre",
        "ud": "Bote 50 ml",
        "price": 6.50,
        "volume": "/ud.",
        "fk_category": 14
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/46/78946/vlc1/78946_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Roll-on contorno de ojos Vído hombre",
        "ud": "10 ml",
        "price": 4.00,
        "volume": "/ud.",
        "fk_category": 14
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/21/79021/vlc1/79021_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Crema facial anti-edad integral L'Oréal men expert Vita lift 5 acciones",
        "ud": "Bote 50 ml",
        "price": 10.95,
        "volume": "/ud.",
        "fk_category": 14
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/18/74818/vlc1/74818_00_10.jpg?fit=crop&h=300&w=300",
        "name": "Crema facial hidratante stop arrugas L'Oréal men expert",
        "ud": "Bote 50 ml",
        "price": 9.95,
        "volume": "/ud.",
        "fk_category": 14
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/01/75601/vlc1/75601_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Crema contorno de ojos 9.60 hombre",
        "ud": "Bote 15 ml",
        "price": 3.50,
        "volume": "/ud.",
        "fk_category": 14
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/19/74819/vlc1/74819_00_10.jpg?fit=crop&h=300&w=300",
        "name": "Roll-on ojos anti-bolsas y ojeras L'Oréal men expert Hydra energetic",
        "ud": "10 ml",
        "price": 11.00,
        "volume": "/ud.",
        "fk_category": 14
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/11/79411/vlc1/79411_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Gel de ducha taurina hydra energetic L'Oréal men expert",
        "ud": "Bote 300 ml",
        "price": 2.95,
        "volume": "/ud.",
        "fk_category": 14
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/12/79412/vlc1/79412_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Gel de ducha hydra sensitive L'Oréal men expert 0% parabenos",
        "ud": "Bote 300 ml",
        "price": 2.95,
        "volume": "/ud.",
        "fk_category": 14
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/21/46821/vlc1/46821_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Lote corporal hombre 9.60",
        "ud": "1 ud.",
        "price": 6.95,
        "volume": "/ud.",
        "fk_category": 14
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/44/70144/vlc1/70144_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Lote facial hombre Vído",
        "ud": "Caja 1 ud.",
        "price": 9.95,
        "volume": "/ud.",
        "fk_category": 14
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/90/47590/vlc1/47590_00_10.jpg?fit=crop&h=300&w=300",
        "name": "Lote corporal Nivea Men",
        "ud": "Lata 1 ud.",
        "price": 7.95,
        "volume": "/ud.",
        "fk_category": 14
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/39/79439/vlc1/79439_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Colagen sabor limón Deliplus",
        "ud": "Bote 250 g",
        "price": 4.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/45/9445/vlc1/9445_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Barrita con proteínas Enervit Sport sabor coco y chocolate",
        "ud": "Caja 3 barritas (120 g)",
        "price": 2.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/38/78238/vlc1/78238_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Aceite árbol del té Deliplus 100% puro",
        "ud": "Bote 10 ml",
        "price": 3.50,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/46/9446/vlc1/9446_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Barrita con proteínas Enervit Sport sabor yogur y vainilla",
        "ud": "Caja 3 barritas (120 g)",
        "price": 2.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/13/77713/vlc1/77713_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas quema grasas Deliplus",
        "ud": "Caja 40 cápsulas (19 g)",
        "price": 3.50,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/43/9443/vlc1/9443_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Barrita de frutos secos y vitaminas Enervit Sport",
        "ud": "Caja 3 barritas (105 g)",
        "price": 2.80,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/70/77170/vlc1/77170_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas multi vitaminas Deliplus",
        "ud": "Caja 40 cápsulas (21 g)",
        "price": 3.00,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/68/77168/vlc1/77168_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas dulces sueños Deliplus",
        "ud": "Caja 30 cápsulas (13 g)",
        "price": 3.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/93/79193/vlc1/79193_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Comprimidos efervescentes vitamina C Deliplus 500 mg sabor limón",
        "ud": "Tubo 20 ud. (80 g)",
        "price": 1.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/29/79629/vlc1/79629_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Batido sabor chocolate Deliplus",
        "ud": "Caja 6 sobres (270 g)",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/39/9439/vlc1/9439_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Barrita sustitutivo de comida Belladieta sabor chocolate negro",
        "ud": "Caja 8 barritas (240 g)",
        "price": 5.40,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/40/9440/vlc1/9440_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Barrita sustitutivo de comida Belladieta sabor avena y chocolate con leche",
        "ud": "Caja 8 barritas (240 g)",
        "price": 5.40,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/16/28116/vlc1/28116_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Gel energético con cafeína Enervit Sport sabor cítricos",
        "ud": "3 ud. x 25 ml",
        "price": 2.85,
        "volume": "/pack",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/16/77416/vlc1/77416_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Ampollas lipo reductor Deliplus",
        "ud": "Caja 12 ampollas (120 ml)",
        "price": 3.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/73/78573/vlc1/78573_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Perlas omega 3 Deliplus",
        "ud": "Caja 60 perlas (41 g)",
        "price": 3.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/97/77697/vlc1/77697_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas evácuax forte Deliplus",
        "ud": "Caja 40 cápsulas (18 g)",
        "price": 3.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/39/77739/vlc1/77739_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Ampollas ginseng Deliplus jalea real y vitamina C",
        "ud": "Caja 12 ampollas (120 ml)",
        "price": 4.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/84/77684/vlc1/77684_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas valeriana Deliplus",
        "ud": "Caja 60 cápsulas (31 g)",
        "price": 4.15,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/60/78360/vlc1/78360_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas cabello, uñas Deliplus",
        "ud": "Caja 40 cápsulas (21 g)",
        "price": 3.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/41/77741/vlc1/77741_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Ampollas própolis Deliplus jalea real y vitamina C",
        "ud": "Caja 12 ampollas (120 ml)",
        "price": 4.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/73/77173/vlc1/77173_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Spray oral própolis Deliplus",
        "ud": "Spray 20 ml",
        "price": 3.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/12/77712/vlc1/77712_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas vientre plano Deliplus",
        "ud": "Caja 40 cápsulas (17 g)",
        "price": 3.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/71/78371/vlc1/78371_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Perlas aceite de onagra Deliplus",
        "ud": "Caja 60 perlas (43 g)",
        "price": 3.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/33/77733/vlc1/77733_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Levadura de cerveza en escamas Deliplus",
        "ud": "Bote 125 g",
        "price": 3.50,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/38/77738/vlc1/77738_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Ampollas jalea real 1000 mg Deliplus",
        "ud": "Caja 12 ampollas (120 ml)",
        "price": 4.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/89/77689/vlc1/77689_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas cola de caballo Deliplus",
        "ud": "Caja 60 cápsulas (23 g)",
        "price": 4.50,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/87/77687/vlc1/77687_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas alcachofa Deliplus",
        "ud": "Caja 60 cápsulas (29 g)",
        "price": 4.50,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/32/77732/vlc1/77732_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Lecitina de soja en gránulos Deliplus",
        "ud": "Bote 250 g",
        "price": 4.50,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/75/77175/vlc1/77175_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas acción memoria Deliplus",
        "ud": "Caja 40 cápsulas (20 g)",
        "price": 3.10,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/30/79630/vlc1/79630_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Natilla sabor chocolate Deliplus con pepitas de chocolate",
        "ud": "Caja 6 sobres (270 g)",
        "price": 6.00,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/04/15404/vlc1/15404_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Polen Hacendado",
        "ud": "Tarro 230 g",
        "price": 5.35,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/79/77479/vlc1/77479_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Ampollas infantiles jalea y própolis Deliplus +3 años",
        "ud": "Caja 12 ampollas (120 ml)",
        "price": 3.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/34/78234/vlc1/78234_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas garcinia cambogia Deliplus",
        "ud": "Caja 40 cápsulas (18 g)",
        "price": 4.50,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/55/77755/vlc1/77755_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas control calorías e hidratos de carbono Deliplus",
        "ud": "Caja 40 cápsulas (22 g)",
        "price": 4.50,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/30/77930/vlc1/77930_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas antiox colágeno Deliplus",
        "ud": "Caja 40 cápsulas (14 g)",
        "price": 4.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/22/77422/vlc1/77422_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas huesos y articulaciones Deliplus",
        "ud": "Caja 40 cápsulas (24 g)",
        "price": 3.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/81/77681/vlc1/77681_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas levadura de cerveza Deliplus",
        "ud": "Caja 60 cápsulas (31 g)",
        "price": 3.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/54/77754/vlc1/77754_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Sticks drenapur Deliplus",
        "ud": "Caja 15 sticks (90 g)",
        "price": 5.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/90/77090/vlc1/77090_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas fucus y spirulina Deliplus",
        "ud": "Caja 60 cápsulas (27 g)",
        "price": 4.50,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/78/78678/vlc1/78678_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Sticks top silueta Deliplus",
        "ud": "Caja 15 sticks (45 g)",
        "price": 3.85,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/51/77751/vlc1/77751_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas t-sacia Deliplus",
        "ud": "Caja 40 cápsulas (22 g)",
        "price": 3.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/52/77052/vlc1/77052_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Ampollas piernas ligeras Deliplus",
        "ud": "Caja 12 ampollas (120 ml)",
        "price": 4.50,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/29/78229/vlc1/78229_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas café verde descafeinado Deliplus",
        "ud": "Caja 30 cápsulas (16 g)",
        "price": 4.50,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/84/78584/vlc1/78584_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas equinácea Deliplus",
        "ud": "Caja 60 cápsulas (30 g)",
        "price": 3.25,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/64/78864/vlc1/78864_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas detox celuvit Deliplus",
        "ud": "Caja 30 cápsulas (11 g)",
        "price": 3.85,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/24/77324/vlc1/77324_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas solar Deliplus",
        "ud": "Caja 40 cápsulas (20 g)",
        "price": 3.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/85/77685/vlc1/77685_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas hipérico Deliplus",
        "ud": "Caja 60 cápsulas (33 g)",
        "price": 4.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/27/77627/vlc1/77627_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas lecitina de soja Deliplus",
        "ud": "Caja 60 cápsulas (36 g)",
        "price": 4.50,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/37/77737/vlc1/77737_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Fibra 24h soluble Deliplus",
        "ud": "Bote 200 g",
        "price": 5.95,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/15/9515/vlc1/9515_00_07.jpg?fit=crop&h=300&w=300",
        "name": "Barrita almendras y chocolate Enervit Sport",
        "ud": "Caja 3 barritas (90 g)",
        "price": 2.20,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/16/9516/vlc1/9516_00_07.jpg?fit=crop&h=300&w=300",
        "name": "Barrita con proteínas Enervit Sport sabor chocolate",
        "ud": "Caja 3 barritas (120 g)",
        "price": 2.20,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/15/79515/vlc1/79515_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas isoflavonas de soja Systal",
        "ud": "Caja 30 cápsulas (17,9 g)",
        "price": 3.85,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/96/79596/vlc1/79596_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cápsulas ajo negro Systal",
        "ud": "Caja 15 cápsulas (7,7 g)",
        "price": 4.80,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/66/29266/vlc1/29266_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Gel energético Enervit Sport sabor naranja",
        "ud": "3 ud. x 32 g",
        "price": 2.85,
        "volume": "/pack",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/94/79594/vlc1/79594_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Comprimidos efervescentes magnesio Deliplus 300 mg sabor naranja",
        "ud": "Tubo 20 ud. (78 g)",
        "price": 2.20,
        "volume": "/ud.",
        "fk_category": 15
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/06/3706/vlc1/3706_00_10.jpg?fit=crop&h=300&w=300",
        "name": "Banana",
        "ud": "Pieza 200 g aprox.",
        "price": 0.24,
        "volume": "/ud.",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/05/3705/vlc1/3705_00_10.jpg?fit=crop&h=300&w=300",
        "name": "Plátano",
        "ud": "Pieza 160 g aprox.",
        "price": 0.41,
        "volume": "/ud.",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/32/3132/vlc1/3132_00_10.jpg?fit=crop&h=300&w=300",
        "name": "Plátano macho",
        "ud": "Pieza 310 g aprox.",
        "price": 0.60,
        "volume": "/ud.",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/13/3313/vlc1/3313_00_10.jpg?fit=crop&h=300&w=300",
        "name": "Uva blanca sin semillas",
        "ud": "Bandeja 500 g aprox.",
        "price": 2.50,
        "volume": "/ud.",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/18/3318/vlc1/3318_00_10.jpg?fit=crop&h=300&w=300",
        "name": "Uva negra sin semillas",
        "ud": "Bandeja 500 g aprox.",
        "price": 2.45,
        "volume": "/ud.",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/39/3839/vlc1/3839_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Kiwis amarillos",
        "ud": "500 g aprox.",
        "price": 2.63,
        "volume": "/pack",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/20/3820/vlc1/3820_00_10.jpg?fit=crop&h=300&w=300",
        "name": "Kiwi verde",
        "ud": "Pieza 110 g aprox.",
        "price": 0.33,
        "volume": "/ud.",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/32/3832/vlc1/3832_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Kiwis verdes",
        "ud": "1 kg aprox.",
        "price": 2.69,
        "volume": "/pack",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/30/3830/vlc1/3830_00_10.jpg?fit=crop&h=300&w=300",
        "name": "Aguacate",
        "ud": "Pieza 190 g aprox.",
        "price": 1.02,
        "volume": "/ud.",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/58/3858/vlc1/3858_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Aguacates",
        "ud": "550 g aprox.",
        "price": 2.19,
        "volume": "/pack",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/25/3125/vlc1/3125_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Piña",
        "ud": "Pieza 1,81 kg aprox.",
        "price": 2.15,
        "volume": "/ud.",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/25/5425/vlc1/5425_00_10.jpg?fit=crop&h=300&w=300",
        "name": "Media piña",
        "ud": "1/2 Pieza 950 g aprox.",
        "price": 1.32,
        "volume": "/ud.",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/40/3840/vlc1/3840_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Guacamole Hacendado",
        "ud": "Tarrina 500 g",
        "price": 3.29,
        "volume": "/ud.",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/52/3852/vlc1/3852_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Guacamole Hacendado",
        "ud": "Tarrina 200 g",
        "price": 1.59,
        "volume": "/ud.",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/50/3050/vlc1/3050_00_10.jpg?fit=crop&h=300&w=300",
        "name": "Mango",
        "ud": "Pieza 560 g aprox.",
        "price": 1.60,
        "volume": "/ud.",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/24/3024/vlc1/3024_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Piña natural a rodajas",
        "ud": "Bote 500 g aprox.",
        "price": 2.50,
        "volume": "/ud.",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/26/3026/vlc1/3026_00_10.jpg?fit=crop&h=300&w=300",
        "name": "Papaya",
        "ud": "Pieza 1,52 kg aprox.",
        "price": 5.61,
        "volume": "/ud.",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/99/3099/vlc1/3099_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Media papaya",
        "ud": "1/2 Pieza 770 g aprox.",
        "price": 3.00,
        "volume": "/ud.",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/31/3831/vlc1/3831_00_10.jpg?fit=crop&h=300&w=300",
        "name": "Coco",
        "ud": "Pieza 500 g",
        "price": 1.39,
        "volume": "/ud.",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/31/5931/vlc1/5931_00_07.jpg?fit=crop&h=300&w=300",
        "name": "Coco troceado",
        "ud": "Bandeja 120 g",
        "price": 1.69,
        "volume": "/ud.",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/17/3817/vlc1/3817_00_10.jpg?fit=crop&h=300&w=300",
        "name": "Chirimoya",
        "ud": "Pieza 310 g aprox.",
        "price": 0.93,
        "volume": "/ud.",
        "fk_category": 16
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/92/31592/vlc1/31592_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Huevos super grandes XL",
        "ud": "Paquete 12 ud.",
        "price": 2.17,
        "volume": "/ud.",
        "fk_category": 17
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/04/31504/vlc1/31504_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Huevos grandes L",
        "ud": "Paquete 12 ud.",
        "price": 1.45,
        "volume": "/ud.",
        "fk_category": 17
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/40/31540/vlc1/31540_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Huevos grandes L",
        "ud": "Paquete 6 ud.",
        "price": 0.95,
        "volume": "/ud.",
        "fk_category": 17
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/02/31002/vlc1/31002_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Huevos medianos M",
        "ud": "Paquete 24 ud.",
        "price": 2.42,
        "volume": "/ud.",
        "fk_category": 17
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/05/31505/vlc1/31505_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Huevos medianos M",
        "ud": "Paquete 12 ud.",
        "price": 1.29,
        "volume": "/ud.",
        "fk_category": 17
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/10/31310/vlc1/31310_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Huevos de gallinas camperas",
        "ud": "Paquete 6 ud.",
        "price": 1.28,
        "volume": "/ud.",
        "fk_category": 17
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/03/31303/vlc1/31303_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Huevos cocidos",
        "ud": "Paquete 6 ud.",
        "price": 1.17,
        "volume": "/ud.",
        "fk_category": 17
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/70/31170/vlc1/31170_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Huevos de codorniz",
        "ud": "Paquete 18 ud.",
        "price": 1.19,
        "volume": "/ud.",
        "fk_category": 17
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/12/31312/vlc1/31312_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Claras de huevo líquidas pasteurizadas",
        "ud": "Botella 1 L",
        "price": 2.10,
        "volume": "/ud.",
        "fk_category": 17
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/09/31309/vlc1/31309_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Claras de huevo líquidas pasteurizadas",
        "ud": "Botella 300 ml",
        "price": 1.30,
        "volume": "/ud.",
        "fk_category": 17
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/02/87102/vlc1/87102_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Huevo hilado Fabridoce",
        "ud": "Paquete 100 g",
        "price": 2.95,
        "volume": "/ud.",
        "fk_category": 17
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/60/40160/vlc1/40160_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa jabón natural de Marsella Bosque Verde líquido",
        "ud": "Botella 61 lavados (4 L)",
        "price": 4.20,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/80/40180/vlc1/40180_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa jabón natural de Marsella Bosque Verde líquido",
        "ud": "Botella 46 lavados (3 L)",
        "price": 3.19,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/79/40179/vlc1/40179_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa frescura azul Bosque Verde líquido",
        "ud": "Botella 46 lavados (3 L)",
        "price": 3.79,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/04/40404/vlc1/40404_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa blanca y de color Bosque Verde en gel concentrado",
        "ud": "Botella 27 lavados (810 ml)",
        "price": 3.25,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/55/40155/vlc1/40155_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa frescor de colonia Bosque Verde líquido",
        "ud": "Botella 46 lavados (3 L)",
        "price": 3.79,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/84/40184/vlc1/40184_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa de color Bosque Verde líquido",
        "ud": "Botella 46 lavados (3 L)",
        "price": 4.30,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/07/40407/vlc1/40407_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa jabón de Marsella Bosque Verde en gel concentrado",
        "ud": "Botella 27 lavados (810 ml)",
        "price": 2.75,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/69/40169/vlc1/40169_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa blanca y de color Bosque Verde líquido concentrado",
        "ud": "Botella 61 lavados (4 L)",
        "price": 6.95,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/68/40168/vlc1/40168_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa blanca y de color Bosque Verde líquido concentrado",
        "ud": "Botella 30 lavados (2 L)",
        "price": 3.95,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/62/40162/vlc1/40162_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa prendas delicadas Bosque Verde líquido",
        "ud": "Botella 66 lavados (1,95 L)",
        "price": 1.69,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/83/40183/vlc1/40183_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa de color Bosque Verde líquido",
        "ud": "Botella 30 lavados (1,95 L)",
        "price": 2.99,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/06/40006/vlc1/40006_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa prendas delicadas Perlan líquido",
        "ud": "Botella 50 lavados (1,5 L)",
        "price": 3.50,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/71/40171/vlc1/40171_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa fragancia Nenuco Colon en gel",
        "ud": "Botella 40 lavados (2,08 L)",
        "price": 5.95,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/64/40164/vlc1/40164_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa Ariel original líquido",
        "ud": "Botella 30 lavados (1,65 L)",
        "price": 6.67,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/55/40455/vlc1/40455_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa prendas delicadas Bosque Verde líquido concentrado",
        "ud": "Botella 45 lavados (1 L)",
        "price": 2.75,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/10/40410/vlc1/40410_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa flores del paraíso Bosque Verde en gel concentrado",
        "ud": "Botella 27 lavados (810 ml)",
        "price": 3.25,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/99/40399/vlc1/40399_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa pieles sensibles Bosque Verde líquido",
        "ud": "Botella 66 lavados (1,95 L)",
        "price": 3.99,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/74/40174/vlc1/40174_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa sport higiene Bosque Verde en gel",
        "ud": "Botella 30 lavados (1,95 L)",
        "price": 4.65,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/00/40400/vlc1/40400_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa frescor Vernel Wipp Express líquido",
        "ud": "Botella 36 lavados (1,8 L)",
        "price": 6.65,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/66/40166/vlc1/40166_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa adiós al separar Micolor en gel",
        "ud": "Botella 32 lavados (1,6 L)",
        "price": 6.95,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/67/40167/vlc1/40167_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa frescor duradero Micolor líquido",
        "ud": "Botella 22 lavados (1,1 L)",
        "price": 3.99,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/76/40176/vlc1/40176_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Detergente ropa negra y oscura Bosque Verde líquido",
        "ud": "Botella 30 lavados (1,95 L)",
        "price": 3.95,
        "volume": "/ud.",
        "fk_category": 18
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/44/41544/vlc1/41544_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus fijo & cubriente 02",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/50/41550/vlc1/41550_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus fijo & cubriente 04",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/51/41551/vlc1/41551_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus fijo & cubriente 06",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/52/41552/vlc1/41552_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus fijo & cubriente 08",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/84/45984/vlc1/45984_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus fijo & cubriente 10",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/20/76720/vlc1/76720_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido face finity Max Factor 75 golden",
        "ud": "30 ml",
        "price": 9.95,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/10/76710/vlc1/76710_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido face finity Max Factor 80 bronze",
        "ud": "30 ml",
        "price": 9.95,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/21/76721/vlc1/76721_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido face finity Max Factor 85 caramel",
        "ud": "30 ml",
        "price": 9.95,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/93/41293/vlc1/41293_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus larga duración 01",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/06/41306/vlc1/41306_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus larga duración 02",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/07/41307/vlc1/41307_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus larga duración 03",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/08/41308/vlc1/41308_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus larga duración 04",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/14/41314/vlc1/41314_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus larga duración 05",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/16/41316/vlc1/41316_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus perfección satin 01",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/17/41317/vlc1/41317_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus perfección satin 02",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/18/41318/vlc1/41318_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus perfección satin 03",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/19/41319/vlc1/41319_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus perfección satin 04",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/39/71139/vlc1/71139_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus perfección satin 103",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/82/76382/vlc1/76382_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido anti-age Maybelline 30 sand",
        "ud": "20 ml",
        "price": 9.95,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/85/76385/vlc1/76385_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido anti-age Maybelline 45 light honey",
        "ud": "20 ml",
        "price": 9.95,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/86/76386/vlc1/76386_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido anti-age Maybelline 48 sun beige",
        "ud": "20 ml",
        "price": 9.95,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/38/95338/vlc1/95338_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido lasting performance Max Factor 102 pastelle",
        "ud": "35 ml",
        "price": 13.95,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/39/95339/vlc1/95339_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido lasting performance Max Factor 105 soft beige",
        "ud": "35 ml",
        "price": 13.95,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/41/95341/vlc1/95341_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido lasting performance Max Factor 106 natural beige",
        "ud": "35 ml",
        "price": 13.95,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/43/95343/vlc1/95343_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido lasting performance Max Factor 108 honey beige",
        "ud": "35 ml",
        "price": 13.95,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/44/95344/vlc1/95344_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido lasting performance Max Factor 109 natural bronze",
        "ud": "35 ml",
        "price": 13.95,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/09/95109/vlc1/95109_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido lasting performance Max Factor 111 deep beige",
        "ud": "35 ml",
        "price": 13.95,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/50/78550/vlc1/78550_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido skin luminizer miracle Max Factor 75 golden",
        "ud": "30 ml",
        "price": 12.95,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/52/78552/vlc1/78552_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido skin luminizer miracle Max Factor 85 caramel",
        "ud": "30 ml",
        "price": 12.95,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/20/41420/vlc1/41420_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus acción global 01",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/21/41421/vlc1/41421_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus acción global 02",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/26/41426/vlc1/41426_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus acción global 03",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/27/41427/vlc1/41427_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus acción global 04",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/62/42162/vlc1/42162_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus bb bronzer 01",
        "ud": "40 ml",
        "price": 5.00,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/63/42163/vlc1/42163_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus bb bronzer 02",
        "ud": "40 ml",
        "price": 5.00,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/01/41401/vlc1/41401_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus natural radiante 01",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/02/41402/vlc1/41402_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus natural radiante 02",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/08/41408/vlc1/41408_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus natural radiante 03",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/09/41409/vlc1/41409_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus natural radiante 04",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/52/79252/vlc1/79252_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus mate 01",
        "ud": "25 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/53/79253/vlc1/79253_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus mate 02",
        "ud": "25 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/54/79254/vlc1/79254_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus mate 03",
        "ud": "25 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/01/76601/vlc1/76601_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido dream satin Maybelline 21 nude",
        "ud": "30 ml",
        "price": 8.65,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/85/76985/vlc1/76985_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido dream satin Maybelline 30 sand",
        "ud": "30 ml",
        "price": 8.65,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/88/76988/vlc1/76988_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido dream satin Maybelline 45 miel",
        "ud": "30 ml",
        "price": 8.65,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/10/42410/vlc1/42410_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Gotas de maquillaje Deliplus 02 claro",
        "ud": "23 ml",
        "price": 5.00,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/11/42411/vlc1/42411_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Gotas de maquillaje Deliplus 03 bronceado",
        "ud": "23 ml",
        "price": 5.00,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/12/42412/vlc1/42412_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Gotas de maquillaje Deliplus 04 oscuro",
        "ud": "23 ml",
        "price": 5.00,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/24/48024/vlc1/48024_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus hydra-confort 01 beige claro",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/22/48022/vlc1/48022_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus hydra-confort 02 beige rosado",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/21/48021/vlc1/48021_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus hydra-confort 03 beige medio",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/23/48023/vlc1/48023_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus hydra-confort 04 moka",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/10/48010/vlc1/48010_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Deliplus hydra-confort 05 dorado",
        "ud": "30 ml",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/21/73321/vlc1/73321_00_03.jpg?fit=crop&h=300&w=300",
        "name": "Maquillaje fluido Hot Metal Deliplus bronceador",
        "ud": "25 ml",
        "price": 6.50,
        "volume": "/ud.",
        "fk_category": 19
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/47/24147/vlc1/24147_00_10.jpg?fit=crop&h=300&w=300",
        "name": "Gambón grande congelado",
        "ud": "Granel 150 g aprox.",
        "price": 1.19,
        "volume": "/150 g",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/60/24260/vlc1/24260_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Gambón grande congelado",
        "ud": "Caja 2 kg",
        "price": 15.90,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/90/83490/vlc1/83490_00_10.jpg?fit=crop&h=300&w=300",
        "name": "Langostino cocido",
        "ud": "Granel 150 g aprox.",
        "price": 1.49,
        "volume": "/150 g",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/39/24139/vlc1/24139_00_07.jpg?fit=crop&h=300&w=300",
        "name": "Langostino cocido Pescanova ultracongelado",
        "ud": "Caja 1 kg",
        "price": 9.75,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/07/62007/vlc1/62007_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Preparado de paella y sopa Hacendado ultracongelado",
        "ud": "Paquete 685 g  escurrido",
        "price": 4.05,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/08/24108/vlc1/24108_00_10_1.jpg?fit=crop&h=300&w=300",
        "name": "Alistado pequeño congelado",
        "ud": "Granel 150 g aprox.",
        "price": 1.64,
        "volume": "/150 g",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/01/62001/vlc1/62001_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Preparado paella de marisco Hacendado ultracongelado",
        "ud": "Bandeja 510 g  escurrido",
        "price": 3.90,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/05/24105/vlc1/24105_00_10_1.jpg?fit=crop&h=300&w=300",
        "name": "Alistado mediano congelado",
        "ud": "Granel 150 g aprox.",
        "price": 3.59,
        "volume": "/150 g",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/05/24105/vlc1/24105_00_02_2.jpg?fit=crop&h=300&w=300",
        "name": "Alistado mediano Dimarosa congelado",
        "ud": "Caja 1 kg",
        "price": 23.95,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/35/24135/vlc1/24135_00_10.jpg?fit=crop&h=300&w=300",
        "name": "Langostino crudo ultracongelado",
        "ud": "Granel 150 g aprox.",
        "price": 1.43,
        "volume": "/150 g",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/45/24145/vlc1/24145_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Langostino crudo Pescanova ultracongelado",
        "ud": "Caja 1 kg",
        "price": 9.25,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/01/24201/vlc1/24201_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Colas de gambón peladas Hacendado ultracongeladas",
        "ud": "Bandeja 250 g  escurrido",
        "price": 5.50,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/00/24100/vlc1/24100_00_10_1.jpg?fit=crop&h=300&w=300",
        "name": "Gamba arrocera congelada",
        "ud": "Granel 150 g aprox.",
        "price": 1.64,
        "volume": "/150 g",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/00/24100/vlc1/24100_00_02_2.jpg?fit=crop&h=300&w=300",
        "name": "Gamba arrocera Dimarosa congelada",
        "ud": "Caja 2 kg aprox.",
        "price": 21.90,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/81/24181/vlc1/24181_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Gamba pelada cruda tamaño mediano Hacendado ultracongelada",
        "ud": "Paquete 360 g  escurrido",
        "price": 4.50,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/67/24267/vlc1/24267_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Camarón boreal cocido y pelado Royal Greenland ultracongelado",
        "ud": "Paquete 200 g",
        "price": 4.25,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/78/24278/vlc1/24278_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Gamba blanca cocida Dimarosa ultracongelada",
        "ud": "Bandeja 350 g",
        "price": 4.95,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/77/24277/vlc1/24277_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Langostino cocido y pelado Pescanova ultracongelado",
        "ud": "Paquete 200 g  escurrido",
        "price": 3.65,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/03/81003/vlc1/81003_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Arreglo para paella de marisco",
        "ud": "Bandeja 800 g aprox.",
        "price": 8.00,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/71/82971/vlc1/82971_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Langostino cocido",
        "ud": "Bandeja 600 g",
        "price": 5.95,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/28/62028/vlc1/62028_00_07.jpg?fit=crop&h=300&w=300",
        "name": "Langostino en su nido Vdfoodltd congelado",
        "ud": "Paquete 300 g",
        "price": 4.50,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/86/24286/vlc1/24286_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Langostino crudo y pelado Pescanova ultracongelado",
        "ud": "Paquete 200 g  escurrido",
        "price": 3.25,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/79/24179/vlc1/24179_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Gambón grande Hacendado ultracongelado",
        "ud": "Caja 2 kg",
        "price": 20.95,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/30/24230/vlc1/24230_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Gamba pelada cruda tamaño grande Hacendado ultracongelada",
        "ud": "Paquete 360 g  escurrido",
        "price": 5.95,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/86/62386/vlc1/62386_00_10.jpg?fit=crop&h=300&w=300",
        "name": "Bogavante americano mediano crudo East Coast Seafood congelado",
        "ud": "Pieza 450 g  escurrido",
        "price": 13.00,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/15/24115/vlc1/24115_00_10_1.jpg?fit=crop&h=300&w=300",
        "name": "Carabinero congelado",
        "ud": "Granel 200 g aprox.",
        "price": 12.59,
        "volume": "/200 g",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/15/24115/vlc1/24115_00_02_2.jpg?fit=crop&h=300&w=300",
        "name": "Carabinero Dimarosa congelado",
        "ud": "Caja 1 kg aprox.",
        "price": 62.95,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/18/24018/vlc1/24018_00_10.jpg?fit=crop&h=300&w=300",
        "name": "Alistado tamaño grande Hacendado congelado",
        "ud": "Granel 150 g aprox.",
        "price": 6.75,
        "volume": "/150 g",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/00/62300/vlc1/62300_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Langostinos cocidos Pescanova",
        "ud": "Caja 2 kg",
        "price": 17.50,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/68/24168/vlc1/24168_00_00.jpg?fit=crop&h=300&w=300",
        "name": "Bocas chicas de cangrejos congeladas",
        "ud": "Granel 150 g aprox.",
        "price": 2.24,
        "volume": "/150 g",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/98/24298/vlc1/24298_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Buey de mar cocido Errigal congelado",
        "ud": "Pieza 600 g",
        "price": 7.25,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/56/24156/vlc1/24156_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Boca grande de cangrejo congelada",
        "ud": "Pieza 130 g aprox.",
        "price": 7.53,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/67/24167/vlc1/24167_00_00.jpg?fit=crop&h=300&w=300",
        "name": "Cuerpos chicos Dimarosa congelados",
        "ud": "Granel 150 g aprox.",
        "price": 2.09,
        "volume": "/150 g",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/15/24015/vlc1/24015_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Alistado mediano Hacendado congelado",
        "ud": "Caja 1 kg",
        "price": 23.95,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/20/24120/vlc1/24120_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Nécora cocida Errigal Bay congelada",
        "ud": "Caja 500 g",
        "price": 5.95,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/02/24502/vlc1/24502_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cigala grande Dimarosa congelada",
        "ud": "Pieza 100 g aprox.",
        "price": 2.30,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/60/24160/vlc1/24160_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cuerpos grandes Dimarosa congelados",
        "ud": "Pieza 410 g aprox.",
        "price": 13.51,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/32/24032/vlc1/24032_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cigala mediana Hacendado ultracongelada",
        "ud": "Bandeja 500 g",
        "price": 7.95,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/33/24033/vlc1/24033_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Cigala grande Hacendado ultracongelada",
        "ud": "Bandeja 500 g",
        "price": 11.95,
        "volume": "/ud.",
        "fk_category": 20
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/94/52094/vlc1/52094_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Bocaditos en salsa gato adulto Delikuit con pollo, pavo y verduras",
        "ud": "Bote 400 g",
        "price": 0.39,
        "volume": "/ud.",
        "fk_category": 21
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/95/52095/vlc1/52095_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Bocaditos en salsa gato adulto Delikuit con salmón, trucha y verduras",
        "ud": "Bote 400 g",
        "price": 0.39,
        "volume": "/ud.",
        "fk_category": 21
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/93/52093/vlc1/52093_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Bocaditos en salsa gato adulto Delikuit con buey, hígado y verduras",
        "ud": "Bote 400 g",
        "price": 0.39,
        "volume": "/ud.",
        "fk_category": 21
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/70/52070/vlc1/52070_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Paté gato júnior Delikuit con pollo y pavo",
        "ud": "Tarrina 100 g",
        "price": 0.35,
        "volume": "/ud.",
        "fk_category": 21
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/73/52073/vlc1/52073_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Paté gato adulto Delikuit con trucha y salmón",
        "ud": "Tarrina 100 g",
        "price": 0.35,
        "volume": "/ud.",
        "fk_category": 21
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/72/52072/vlc1/52072_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Paté gato adulto Delikuit con pollo y pavo",
        "ud": "Tarrina 100 g",
        "price": 0.35,
        "volume": "/ud.",
        "fk_category": 21
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/71/52071/vlc1/52071_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Paté gato adulto Delikuit con ternera e hígado",
        "ud": "Tarrina 100 g",
        "price": 0.35,
        "volume": "/ud.",
        "fk_category": 21
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/92/52092/vlc1/52092_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Paté gato adulto Delikut con salmón y trucha",
        "ud": "Bote 400 g",
        "price": 0.65,
        "volume": "/ud.",
        "fk_category": 21
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/91/52091/vlc1/52091_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Paté gato adulto Delikuit con pollo y pavo",
        "ud": "Bote 400 g",
        "price": 0.65,
        "volume": "/ud.",
        "fk_category": 21
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/90/52090/vlc1/52090_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Paté gato adulto Delikuit con ternera e hígado",
        "ud": "Bote 400 g",
        "price": 0.65,
        "volume": "/ud.",
        "fk_category": 21
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/61/52061/vlc1/52061_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Bocaditos en gelatina gato adulto Delikuit",
        "ud": "Paquete 4 ud. (400 g)",
        "price": 1.20,
        "volume": "/ud.",
        "fk_category": 21
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/65/52065/vlc1/52065_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Bocaditos en gelatina gato adulto Delikuit",
        "ud": "Paquete 4 ud. (400 g)",
        "price": 1.20,
        "volume": "/ud.",
        "fk_category": 21
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/81/52081/vlc1/52081_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Bocaditos en salsa gato adulto Delikuit",
        "ud": "Paquete 4 ud. (400 g)",
        "price": 1.20,
        "volume": "/ud.",
        "fk_category": 21
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/82/52082/vlc1/52082_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Bocaditos en salsa gato adulto Delikuit",
        "ud": "Paquete 4 ud. (400 g)",
        "price": 1.20,
        "volume": "/ud.",
        "fk_category": 21
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/66/38166/vlc1/38166_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Gelatina gato Felix selección de sabores",
        "ud": "Paquete 4 ud. (400 g)",
        "price": 1.49,
        "volume": "/ud.",
        "fk_category": 21
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/56/38156/vlc1/38156_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Gelatina gato Felix selección de pescados",
        "ud": "Paquete 4 ud. (400 g)",
        "price": 1.49,
        "volume": "/ud.",
        "fk_category": 21
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/85/52085/vlc1/52085_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Mousse de lenguado gato adulto Delikuit",
        "ud": "Caja 4 tarrinas (340 g)",
        "price": 1.70,
        "volume": "/ud.",
        "fk_category": 21
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/75/52075/vlc1/52075_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Mousse con pollo gato adulto Delikuit",
        "ud": "Caja 4 tarrinas (340 g)",
        "price": 1.70,
        "volume": "/ud.",
        "fk_category": 21
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/99/52999/vlc1/52999_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Mousse con ternera gato adulto Delikuit",
        "ud": "Caja 4 tarrinas (340 g)",
        "price": 1.70,
        "volume": "/ud.",
        "fk_category": 21
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/80/52080/vlc1/52080_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Bocaditos en salsa gato adulto Delikuit",
        "ud": "12 ud. x 100 g",
        "price": 2.99,
        "volume": "/pack",
        "fk_category": 21
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/03/83203/vlc1/83203_00_02_1.jpg?fit=crop&h=300&w=300",
        "name": "3 Barras de pan",
        "ud": "3 ud. (750 g)",
        "price": 1.10,
        "volume": "/ud.",
        "fk_category": 22
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/02/83202/vlc1/83202_00_07_1.jpg?fit=crop&h=300&w=300",
        "name": "Barra de pan",
        "ud": "1 ud. (250 g)",
        "price": 0.45,
        "volume": "/ud.",
        "fk_category": 22
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/32/83232/vlc1/83232_00_02_1.jpg?fit=crop&h=300&w=300",
        "name": "3 Barras de pan aceite de oliva",
        "ud": "3 ud. (600 g)",
        "price": 1.30,
        "volume": "/ud.",
        "fk_category": 22
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/31/83231/vlc1/83231_00_02_1.jpg?fit=crop&h=300&w=300",
        "name": "Barra pan de aceite de oliva",
        "ud": "1 ud. (200 g)",
        "price": 0.44,
        "volume": "/ud.",
        "fk_category": 22
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/94/82294/vlc1/82294_00_02_1.jpg?fit=crop&h=300&w=300",
        "name": "Barra pan de pueblo",
        "ud": "1 ud. (800 g)",
        "price": 1.15,
        "volume": "/ud.",
        "fk_category": 22
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/62/83862/vlc1/83862_00_02_1.jpg?fit=crop&h=300&w=300",
        "name": "Barra de pan 41% integral",
        "ud": "1 ud. (210 g)",
        "price": 0.43,
        "volume": "/ud.",
        "fk_category": 22
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/48/83548/vlc1/83548_00_02_1.jpg?fit=crop&h=300&w=300",
        "name": "Barra de pan rústica",
        "ud": "1 ud. (250 g)",
        "price": 0.45,
        "volume": "/ud.",
        "fk_category": 22
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/86/83286/vlc1/83286_00_02.jpg?fit=crop&h=300&w=300",
        "name": "3 Baguettes masa madre",
        "ud": "3 ud. (700 g)",
        "price": 1.15,
        "volume": "/ud.",
        "fk_category": 22
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/30/83230/vlc1/83230_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Baguette masa madre",
        "ud": "1 ud. (250 g)",
        "price": 0.40,
        "volume": "/ud.",
        "fk_category": 22
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/60/82360/vlc1/82360_00_07_1.jpg?fit=crop&h=300&w=300",
        "name": "Barra de pan 6 cereales",
        "ud": "1 ud. (210 g)",
        "price": 0.65,
        "volume": "/ud.",
        "fk_category": 22
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/30/82830/vlc1/82830_00_02_1.jpg?fit=crop&h=300&w=300",
        "name": "Barra de pan artesana masa madre",
        "ud": "1 ud. (250 g)",
        "price": 0.55,
        "volume": "/ud.",
        "fk_category": 22
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/75/83275/vlc1/83275_01_01_1.jpg?fit=crop&h=300&w=300",
        "name": "Pan de espelta",
        "ud": "1 ud. (270 g)",
        "price": 1.25,
        "volume": "/ud.",
        "fk_category": 22
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/13/83613/vlc1/83613_00_02_1.jpg?fit=crop&h=300&w=300",
        "name": "Barra de pan sin sal añadida",
        "ud": "1 ud. (210 g)",
        "price": 0.53,
        "volume": "/ud.",
        "fk_category": 22
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/43/83843/vlc1/83843_01_01_1.jpg?fit=crop&h=300&w=300",
        "name": "Pan de nueces",
        "ud": "1 ud. (350 g)",
        "price": 1.50,
        "volume": "/ud.",
        "fk_category": 22
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/44/83844/vlc1/83844_01_01_1.jpg?fit=crop&h=300&w=300",
        "name": "Pan de multicereales",
        "ud": "1 ud. (350 g)",
        "price": 1.50,
        "volume": "/ud.",
        "fk_category": 22
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/89/83389/vlc1/83389_00_02.jpg?fit=crop&h=300&w=300",
        "name": "2 Baguettes para hornear Hacendado",
        "ud": "Paquete 2 ud. (300 g)",
        "price": 0.75,
        "volume": "/ud.",
        "fk_category": 22
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/61/83461/vlc1/83461_00_02_1.jpg?fit=crop&h=300&w=300",
        "name": "Pan bregado",
        "ud": "1 ud. (500 g)",
        "price": 1.50,
        "volume": "/ud.",
        "fk_category": 22
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/80/82380/vlc1/82380_00_01_1.jpg?fit=crop&h=300&w=300",
        "name": "Pan campeón del mundo",
        "ud": "1 ud. (750 g)",
        "price": 1.89,
        "volume": "/ud.",
        "fk_category": 22
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/58/83858/vlc1/83858_00_10_1.jpg?fit=crop&h=300&w=300",
        "name": "Pan integral 100%",
        "ud": "1 ud. (350 g)",
        "price": 1.60,
        "volume": "/ud.",
        "fk_category": 22
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/27/82727/vlc1/82727_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Baguette sin gluten",
        "ud": "Paquete 175 g",
        "price": 1.70,
        "volume": "/ud.",
        "fk_category": 22
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/44/63644/vlc1/63644_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pizza estacione rellena de queso Hacendado ultracongelada",
        "ud": "540 g",
        "price": 2.99,
        "volume": "/ud.",
        "fk_category": 23
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/97/63597/vlc1/63597_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pizzas tomate y queso Hacendado ultracongeladas",
        "ud": "2 ud. x 285 g",
        "price": 1.80,
        "volume": "/pack",
        "fk_category": 23
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/42/63642/vlc1/63642_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pizza 4 quesos rellena de gorgonzola Hacendado ultracongelada",
        "ud": "540 g",
        "price": 2.99,
        "volume": "/ud.",
        "fk_category": 23
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/59/63559/vlc1/63559_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pizza boloñesa Hacendado ultracongelada",
        "ud": "400 g",
        "price": 2.00,
        "volume": "/ud.",
        "fk_category": 23
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/86/63586/vlc1/63586_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pizza ibérica Hacendado ultracongelada",
        "ud": "380 g",
        "price": 2.00,
        "volume": "/ud.",
        "fk_category": 23
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/76/63576/vlc1/63576_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pizza reina Hacendado con crema de queso fresco",
        "ud": "390 g",
        "price": 1.89,
        "volume": "/ud.",
        "fk_category": 23
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/60/63560/vlc1/63560_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pizza campesina Hacendado ultracongelada",
        "ud": "390 g",
        "price": 2.00,
        "volume": "/ud.",
        "fk_category": 23
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/07/63607/vlc1/63607_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pizza mozzarella y pesto Hacendado ultracongelada",
        "ud": "400 g",
        "price": 2.00,
        "volume": "/ud.",
        "fk_category": 23
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/71/63571/vlc1/63571_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pizza salmón y gambas Hacendado ultracongelada",
        "ud": "390 g",
        "price": 2.00,
        "volume": "/ud.",
        "fk_category": 23
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/40/63340/vlc1/63340_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pizza masa fina 4 quesos Hacendado ultracongelada",
        "ud": "390 g",
        "price": 2.29,
        "volume": "/ud.",
        "fk_category": 23
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/38/63338/vlc1/63338_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pizza masa fina fajita Hacendado ultracongelada",
        "ud": "400 g",
        "price": 2.29,
        "volume": "/ud.",
        "fk_category": 23
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/01/63501/vlc1/63501_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pizza atún Hacendado ultracongelada",
        "ud": "390 g",
        "price": 2.00,
        "volume": "/ud.",
        "fk_category": 23
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/95/63595/vlc1/63595_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Mini pizzas jamón y queso Hacendado ultracongeladas",
        "ud": "Paquete 6 ud. (290 g)",
        "price": 1.99,
        "volume": "/ud.",
        "fk_category": 23
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/26/63326/vlc1/63326_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pizza masa fina kebab Hacendado ultracongelada",
        "ud": "400 g",
        "price": 2.29,
        "volume": "/ud.",
        "fk_category": 23
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/39/63339/vlc1/63339_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pizza masa fina jamón Hacendado ultracongelada",
        "ud": "400 g",
        "price": 2.29,
        "volume": "/ud.",
        "fk_category": 23
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/43/63643/vlc1/63643_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pizza americana rellena de cheddar Hacendado ultracongelada",
        "ud": "540 g",
        "price": 2.99,
        "volume": "/ud.",
        "fk_category": 23
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/25/63325/vlc1/63325_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pizza masa fina atún Hacendado ultracongelada",
        "ud": "400 g",
        "price": 2.29,
        "volume": "/ud.",
        "fk_category": 23
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/01/63601/vlc1/63601_00_07.jpg?fit=crop&h=300&w=300",
        "name": "Mini pizzas barbacoa con bacón Hacendado ultracongeladas",
        "ud": "Paquete 6 ud. (290 g)",
        "price": 1.99,
        "volume": "/ud.",
        "fk_category": 23
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/24/63624/vlc1/63624_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pizza jamón y queso sin gluten y sin lactosa Hacendado ultracongelada",
        "ud": "420 g",
        "price": 2.99,
        "volume": "/ud.",
        "fk_category": 23
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/23/63623/vlc1/63623_00_02.jpg?fit=crop&h=300&w=300",
        "name": "Pizza 4 quesos sin gluten y sin lactosa Hacendado ultracongelada",
        "ud": "410 g",
        "price": 2.99,
        "volume": "/ud.",
        "fk_category": 23
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/26/9426/vlc1/9426_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Yogur líquido infantil de fresa y plátano Go-Lácteo +8 meses",
        "ud": "Caja 4 ud. (360 g)",
        "price": 2.20,
        "volume": "/ud.",
        "fk_category": 24
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/40/64240/vlc1/64240_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Yogur infantil natural mio Bebé +6 meses",
        "ud": "4 ud. x 110 g",
        "price": 1.90,
        "volume": "/pack",
        "fk_category": 24
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/94/9194/vlc1/9194_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Postre lácteo infantil sabor natural Yogolino +6 meses",
        "ud": "4 ud. x 100 g",
        "price": 2.25,
        "volume": "/pack",
        "fk_category": 24
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/25/9425/vlc1/9425_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Yogur líquido infantil natural Go-Lácteo +6 meses",
        "ud": "Caja 4 ud. (360 g)",
        "price": 2.20,
        "volume": "/ud.",
        "fk_category": 24
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/27/9427/vlc1/9427_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Yogur líquido infantil de pera Go-Lácteo +6 meses",
        "ud": "Caja 4 ud. (360 g)",
        "price": 2.20,
        "volume": "/ud.",
        "fk_category": 24
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/92/9192/vlc1/9192_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Postre lácteo infantil de fresa Yogolino +8 meses",
        "ud": "4 ud. x 100 g",
        "price": 2.25,
        "volume": "/pack",
        "fk_category": 24
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/56/9456/vlc1/9456_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Yogur líquido infantil con cereales y miel Go-Lácteo +8 meses",
        "ud": "Caja 4 ud. (360 g)",
        "price": 2.20,
        "volume": "/ud.",
        "fk_category": 24
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/93/9193/vlc1/9193_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Postre lácteo infantil de plátano Yogolino +6 meses",
        "ud": "4 ud. x 100 g",
        "price": 2.25,
        "volume": "/pack",
        "fk_category": 24
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/65/9465/vlc1/9465_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Natillas infantiles con galletas Hacendado +6 meses",
        "ud": "2 ud. x 130 g",
        "price": 1.70,
        "volume": "/pack",
        "fk_category": 24
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/70/9470/vlc1/9470_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Yogur infantil cremoso de fresa Go-Lácteo +8 meses",
        "ud": "4 ud. x 110 g",
        "price": 2.00,
        "volume": "/pack",
        "fk_category": 24
      },
      {
        "image": "https://prod-mercadona.imgix.net/20191203/72/9472/vlc1/9472_00_01.jpg?fit=crop&h=300&w=300",
        "name": "Yogur infantil cremoso de manzana y pera Go-Lácteo +6 meses",
        "ud": "4 ud. x 110 g",
        "price": 2.00,
        "volume": "/pack",
        "fk_category": 24
      }
    ] , {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
