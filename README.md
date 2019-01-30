# Storeo-server
An open source e-commerce

# DataBase Setup

`$ npm install` for dependencies once the DB has been created,

*Make sure that you create the database and then place it in the .env file*

`$ npm run start` will run the server with babel and create the database for you, babel is needed as we are using import/export not supported by Nodejs at time of publication.

`$ npm run populate` will seed the db for you with fake values, (look at readme inside of _docs folder for further config settings)

For creating more tables and columns, as needed, only edit model files

