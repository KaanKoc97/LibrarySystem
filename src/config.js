import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_HOST, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'postgres',
});

export default sequelize;
