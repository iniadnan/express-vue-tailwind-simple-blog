import mysql from 'mysql2';

// CREATE THE CONNECTION
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'express_blog_auth'
});

export default db;