export default {
    HOST: process.env.DB_HOST || 'localhost',
    USER: process.env.DB_USERNAME || 'root',
    PASSWORD: process.env.DB_PASSWORD || 'root',
    DB: process.env.DB_DATABASE || 'file_upload_db',
    dialect: process.env.DB_DIALECT || 'mysql'
};