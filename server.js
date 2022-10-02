const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');

const 
// Express Middleware - 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// When setting up mysql2 - in server.js
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Connect db - Used to connect database to node in server.js
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: process.env.DB_PASSWORD,
        // Database you are trying to connect to
        database: 'classlist_db'
    },
    console.log(`Connected to the 'classlist_db' database.`)
);
