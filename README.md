#**Storeo-server**

The first open source e-commerce package with developers in mind to create a customizable online service to sell goods.

The back end is written in: Node js, Express, using Stripe for payments using a RESTful api.

## DataBase Setup

1. Make sure that you have a SQL database installed(if mac it's recommended for ease to use brew) [PostgreSQL](https://www.moncefbelyamani.com/how-to-install-postgresql-on-a-mac-with-homebrew-and-lunchy/), [MySQL](https://gist.github.com/nrollr/3f57fc15ded7dddddcc4e82fe137b58e), [Cassandra](https://gist.github.com/ssmereka/e41d4ad053a547611ba7ef1dac4cc826), etc. for Linux or Windows, links and instructions will be included in later updates. ** THE DEFAULT IS MYSQL AND WE RECOMMEND MYSQL OR POSTGRESQL**
2. After installation of SQL database follow respective db guide to start DB. in most cases such as OSX enter the terminal and enter: `$ sudo mysql.server start` or `$ mysql -u <user> -p` . The first option will prompt you to enter your **computer's** password. The second way: `<user>` is the user name of the DB, by default it is `root` and there is no password by default.  For entering make sure that you start the batabase through home brew `$ brew services start postgresql` after you get the success start the server with `$ psql`
3. after successfully entering the database you should see (for MySQL): `mysql> ` and for PostgreSQL:  `psql>`
4. Now that you are in there in both lanuages make sure that you are on the user that can create a database, most likely you will be logged in with the right user and permissions to do so, if not [then](http://lmgtfy.com/?q=how+to+change+users+in+mysql).
5. Now that you are in there type `$ CREATE DATABASE <nameofdatabase>` where`<nameofdatabase>` is the name of the database the BE will be connecting to.

### Now that the Database is started and created follow the instructions below:

1. `$ npm install` for dependencies
2. follow the '.envexample' file to create your own '.env' file. More information [here](https://www.npmjs.com/package/dotenv).
3. type: `$ npm start` to start the back-end in babel. Babel is being used because of 'imports' that are not yet supported by Node.
4. `npm run populate` will generate mock data in the database. **!! NO FOREIGN LINKS WILL BE ADDED AND MUST BE DONE BY YOU!!**

****IN YOUR ENV FILE MAKE SURE YOU CONFIGURE IT TO YOUR LOCAL HOST SETTINGS!!****

`$ npm run start` will run the server with babel and create the database for you, babel is needed as we are using import/export not supported by Nodejs at time of publication.

`$ npm run populate` will seed the db for you with fake values, (look at readme inside of _docs folder for further config settings)

For creating more tables and columns, as needed, only edit/edit files in the 'Schemas' folder.

## About the Database

The database that is being used in this project is MySQL however can be swapped out easily in the config/config.js file.

the main relationship that is happening is with the category and products as at first glance can be confusing.

1. 'category' has a One to Many relationship with 'category_properties' table as a category can have many properties, e.g., a laptop can have many properties, such as, height, weight, color, screen size, etc. so a foreign key is necessary.
2. 'category' table has a One to Many relationship with 'products' table. The reason for this is because each category will have a product related to it. So a customer under the 'laptop' category can sell a 'MacBook', 'Lenovo', etc. so a foreign key is required to the category table.
3. Looking at the 'product_properties' table, the 'products' table has a One to Many relation with 'product_properties' similarily with 'categories' and 'category_properties'. For example, a 'MacBook' can have the properties of 'Screen size', 'Height', 'Weight', etc.
4. Returning to the 'products' table. There is a One to Many relationship with 'ordered_items' table. This is self explanitory, there can be one 'MacBook' ordered numerous times.
5. 'ordered_items' has a Many to One relationship with 'orders' table. Once again this is understandable as one order can have many ordered items.
6. Finally, 'users' is a One to Many relation with 'orders' as one user can have many orders.

find an image of the structure [here](https://imgur.com/a/6pRzUzW)

# Contributing

As this is a 100% open source project all contributions and pull requests will be highly welcomed and analyized by [Christian Francia](https://github.com/ctfrancia), [Luca PanzaVolta](https://github.com/LucaPanzavolta) and [Uros Cirkovic](https://github.com/ross-u). For anything concering the Front End please visit [here](https://github.com/zain-ali-syed/Storeo_Frontend) and [Zain Ali Syed](https://github.com/zain-ali-syed), [Tomasz Gasienica-Szostak](https://github.com/Casprovy) and [Uros Cirkovic](https://github.com/ross-u).

However, until thorough tests have been written and a Continuous Integration  like Jenkins or Travis has been implimented to check pull request builds we won't be able to accept any pull requests at the time. On the other hand, if you feel up to the task of writting tests for this project please get in contact with one of us and we will discuss it with you!

# Features to add

◻️Add tests

◻️Add quantity next to product or "In Stock" flag next to product

◻️After signing up send verification email

◻️After creating an account as a user receive an email authentication

