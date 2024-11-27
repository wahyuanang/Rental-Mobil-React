"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cars",
      [
        {
          name: "Toyota Avanza",
          tahun: 2020,
          noPlat: "B 1234 XYZ",
          harga: 150000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/toyota-avanza.png?updatedAt=1732006905880",
          createdBy: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Honda Jazz",
          tahun: 2019,
          noPlat: "B 5678 ABC",
          harga: 200000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Honda-jazz.jpg?updatedAt=1732006905248",
          createdBy: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mitsubishi Pajero",
          tahun: 2021,
          noPlat: "B 9101 DEF",
          harga: 400000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/mitsubishi-pajero.jpg?updatedAt=1732006905116",
          createdBy: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Toyota Fortuner",
          tahun: 2022,
          noPlat: "B 2468 GHI",
          harga: 450000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Toyota-Fortuner.jpg?updatedAt=1732006905377",
          createdBy: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Honda CR-V",
          tahun: 2021,
          noPlat: "B 1357 JKL",
          harga: 350000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Honda%20CR-V.jpg?updatedAt=1732006904772",
          createdBy: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Suzuki Ertiga",
          tahun: 2020,
          noPlat: "B 7890 MNO",
          harga: 180000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Suzuki%20Ertiga.jpg?updatedAt=1732006902912",
          createdBy: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Daihatsu Xenia",
          tahun: 2019,
          noPlat: "B 4567 PQR",
          harga: 140000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Daihatsu%20Xenia.jpg?updatedAt=1732006902503",
          createdBy: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Toyota Rush",
          tahun: 2021,
          noPlat: "B 8901 STU",
          harga: 220000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Toyota%20Rush.jpg?updatedAt=1732006904077",
          createdBy: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mitsubishi Xpander",
          tahun: 2022,
          noPlat: "B 2345 VWX",
          harga: 250000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Mitsubishi%20Xpander.jpg?updatedAt=1732006902481",
          createdBy: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Honda Civic",
          tahun: 2021,
          noPlat: "B 6789 YZA",
          harga: 420000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Honda%20Civic.jpg?updatedAt=1732006901997",
          createdBy: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Toyota Camry",
          tahun: 2022,
          noPlat: "B 3456 BCD",
          harga: 550000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Toyota%20Camry.jpg?updatedAt=1732006901792",
          createdBy: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mazda CX-5",
          tahun: 2021,
          noPlat: "B 7890 EFG",
          harga: 480000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Mazda%20CX-5.jpg?updatedAt=1732006902265",
          createdBy: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hyundai Creta",
          tahun: 2022,
          noPlat: "B 1234 HIJ",
          harga: 350000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Hyundai%20Creta.jpg?updatedAt=1732006901870",
          createdBy: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Suzuki XL7",
          tahun: 2021,
          noPlat: "B 5678 KLM",
          harga: 230000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Suzuki%20XL7.jpg?updatedAt=1732006901825",
          createdBy: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Honda Brio",
          tahun: 2020,
          noPlat: "B 9012 NOP",
          harga: 160000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Honda%20Brio.jpg?updatedAt=1732006898106",
          createdBy: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Toyota Raize",
          tahun: 2022,
          noPlat: "B 3456 QRS",
          harga: 210000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Toyota%20Raize.jpg?updatedAt=1732006898036",
          createdBy: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mitsubishi Eclipse Cross",
          tahun: 2021,
          noPlat: "B 7890 TUV",
          harga: 470000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Mitsubishi%20Eclipse%20Cross.jpg?updatedAt=1732006898085",
          createdBy: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Daihatsu Rocky",
          tahun: 2022,
          noPlat: "B 1234 WXY",
          harga: 190000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Daihatsu%20Rocky.jpg?updatedAt=1732006904588",
          createdBy: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Honda HR-V",
          tahun: 2021,
          noPlat: "B 5678 ZAB",
          harga: 320000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Honda%20HR-V.jpeg?updatedAt=1732006898796",
          createdBy: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Toyota Corolla Cross",
          tahun: 2022,
          noPlat: "B 9012 CDE",
          harga: 440000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Toyota%20Corolla%20Cross.jpeg?updatedAt=1732006898221",
          createdBy: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Toyota Cross",
          tahun: 2022,
          noPlat: "B 9012 CDE",
          harga: 440000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Toyota%20Cross.jpg?updatedAt=1732006898339",
          createdBy: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mazda Miata",
          tahun: 2022,
          noPlat: "B 9012 CDE",
          harga: 440000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Mazda%20Miata.jpg?updatedAt=1732006898347",
          createdBy: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Honda NSX",
          tahun: 2022,
          noPlat: "B 9012 CDE",
          harga: 440000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/Honda%20NSX.JPG?updatedAt=1732006898903",
          createdBy: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BMW M3",
          tahun: 2022,
          noPlat: "B 9012 CDE",
          harga: 440000000,
          fotoMobil:
            "https://ik.imagekit.io/epqufjrrv/BMW%20M3.jpg?updatedAt=1732006898791",
          createdBy: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cars", null, {});
  },
};
