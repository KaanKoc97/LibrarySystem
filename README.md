
# Library System
A Node.js-based Library System that manages users, books, with borrowing and returning operations, using Sequelize and PostgreSQL.

## About
The Library System is a web application that allows users to borrow books, return them, and rate books they have read. The system is designed to keep track of book availability and the borrowing history of users.

## Features
- User management (create, get and list users)
- Book management (create, get and list books)
- Borrowing and returning books Validation of user and book relationships 
- Many-to-one relationship between books and users 
- Basic Rating System via returning
- Sequelize ORM for database operations

## Installation
Provide step-by-step instructions on how to install and set up your project locally.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KaanKoc97/LibrarySystem.git
   cd ./LibrarySystem

2. **Install dependencies**:
   ```bash
   npm install
   
3. **Database configurations**:
   Create a PostgreSQL database. Update the database connection details in the configuration file.

4. **Start the server**:
   ```bash
   npm start
   

## Tech Stack 
Backend: Node.js, Express.js 
Database: PostgreSQL with Sequelize ORM
API Testing: Postman or similar tool


## Configuration
The configuration details for the database connection and environment variables should be set up in a .env file at the root of the project.

**Example .env file:**
  ```bash
  PORT=3000 
  HOST="localhost"
  DB_NAME="db"
  DB_HOST="localhost"
  DB_USER="postgres"
  DB_PASS="root"

## Database Schema

The system uses the following entities:
User: Contains user information (e.g., name, id).
 Book: Contains book details (e.g., name, rating, votes).
 UserBook: A table to track the borrowing and returning of books(e.g., borrowedDate, returnDates).

## Relationships
Many-to-One: A user can borrow multiple books, but each borrowing entry is linked to a single user and a single book.

## API Endpoints
Here is a list of the main API endpoints:
User Endpoints
POST /users - Create a new user
GET /users - Get all users
GET /users/:id - Get a user by ID with previosly borrowed and currently borrowed details

Book Endpoints
POST /books - Add a new book
GET /books - Get all books
GET /books/:id - Get book details by ID with name and ratings details

Borrowing/Returning Endpoints
POST /users/:uid/borrow/:bid - Borrow books for a user
POST /users/:uid/return/:bid - Return a borrowed book
