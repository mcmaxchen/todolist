# To-do list

A to-do list web appliaction for Okev Agency.

## Table of contents
- [Installation]

## Prerequisites
- Node.js 14.x or higher

## Installation
You will need 2 terminals

1. Clone the repository:
   
   **git clone git@github.com:mcmaxchen/todolist.git todolist**

2. Set up the database
   
   Create a database "todolist" on MySQL
   Import the file "db.sql" using the command **mysql -u username -p todolist < db.sql** replace username by your username

4. Install packages

- [on the first terminal]
   cd client
   npm install
   npm start

- [on the second terminal]
   // If you are not in the repository
   cd todolist
   //
   
   cd server
   npm install
   npm start
