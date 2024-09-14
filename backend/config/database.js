import { Sequelize } from "sequelize";

const db = new Sequelize('invetory_barang_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;