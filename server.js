// import { authenticate } from './config';
import app from './src/app.js';
import 'dotenv/config'

const startServer = async () => {
    try {
        // await sequelize.authenticate();
        // console.log('Connected to the database.');

        // await sequelize.sync();

        const PORT = process.env.PORT || 3000;
        const HOST = process.env.HOST;
        app.listen(PORT, () => {
            console.log(`Server is running on http://${HOST}:${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();
