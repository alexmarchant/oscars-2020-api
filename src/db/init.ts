import { Sequelize } from "sequelize"

let pgurl
if (process.env.NODE_ENV === "production") {
  pgurl =
    "postgres://sdcgblyluaoihh:530a88a2b6c301a3492e98903b4ad479f2e1d49b72d035ece848dd517553f2d0@ec2-174-129-234-111.compute-1.amazonaws.com:5432/d8d1qip7fctfv"
} else {
  pgurl = "postgres://localhost:5432/oscars2020"
}

export const sequelize = new Sequelize(pgurl)

// var sequelize = new Sequelize("postgres://user:pass@example.com:5432/dbname")
