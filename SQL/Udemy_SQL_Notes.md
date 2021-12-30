# The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert
<br/>

### 1. Introduction and 5 Minutes of SQL
<br/>

#### 5. 5 Minutes of MySQL
* https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_or

* SELECT * FROM customers;
* SELECT * FROM orders;
* SELECT * FROM products  ORDER BY Price DESC;

* More Complex Code!
```SQL
SELECT
    customerName,
    COUNT(*) AS 'number of orders'
FROM customers
INNER JOIN orders
    ON orders.customerID = customers.customerID
GROUP BY customers.customerID;
```
<br/>

### 2. Getting Started: Overview+Installation
<br/>

#### 9. What is a Database?
* What is a Database?
    * A collection of data
    * A method of accessing & manipulating data
* Database vs. Database Management System (DMS)
* Your App => DBMS => Database
* "DBMS => Database" are often called as "Database"
    * EX. PostgreSQL  => MySQL
    * EX. Oracle Database  => SQLite

* SO, WHat is a Database?!?!??!?
    * "A Structured Set of COmputerized Data with an Accessible Interface" <Br/>

#### 10. SQL vs. MySQL
* SQL (Structured Query Language): the language we use to "talk" to our databases
* Working with MySQL(one of the DMS) is mainly using SQL

* EXAMPLES of Relational DMS - MySQL, SQLite, PostgreSQL, Oracle, and Many Others

* MySQL and PostgreSQL - both use the same syntax

* There are *slight* differences in syntax
* There is the SQL Standard online, and various  *DMS* have slight variations of those!!

* Two Takeaways
    * Once you learn SQL, it's pretty easy to switch to another DB that uses SQL
    * What makes databases (DBMS) unique are the features they offer, not the language
<br/>

#### 11. Installing MySQL - WATCH BEFORE INSTALLING
* Slides - http://webdev.slides.com/coltsteele/mysql-97#/

* Three Installation Options - on a PC, on a Mac, on CLoud9

* CLoud9 - what Colt will be using in the course
* His Recommenadation - Use Cloud9 to follow along in the course, then install on your local machine once you finish!!
<br/>

#### 12. Now using GoormIDE instead of Cloud9
* https://gist.github.com/nax3t/2773378c4d1bada8d66d12f4d5210248

* `mysql-ctl start`
* `mysql-ctl stop`
* `mysql-ctl cli`
* `exit`
* `Ctrl - C`

* How to source a SQL file on GoormIDE
    * Make a File inside the main folder
    * Go to the folder where the file you wanna run is

    * `mysql-ctl cli`
    * `use cat_app`
    * `source query.sql`
<br />

#### 17. Windows Installation
* MySQL Installer
* Root Password ~> set it to something easy to Remember!
* MySQL Command Line Client
<br/>

### 3. Create New Databases and Tables
<br/>

#### 19. Create Databases
* `mysql-ctl start` ~> starts the database server
* `show databases` ~> list all the databases you have on the server
* `CREATE DATABASE <name>; `

* VSCode Extension for MySQL and How to Use It
donghwa-kim.github.io/mysql_vs.html

* Practice
```SQL
show databases;
CREATE DATABASE hello_world_db;
```
<br/>

#### 20. Drop databases
* `DROP DATABASE <name>`
<br />

#### 21. Use dbs
* `USE <name>`
* `SELECT database();` : shows the current db
<br />

#### 22. Intro to tables
* A database is just a bunch of *tables* at least in a relational db
* Tables hold the data!
* Tables: are collections of related data held in a sturctured format within db

* Quick example using CAT
* Table - columns (headers)
* Talbe - rows (the actual data)
<br/>

#### 26. The Basic DataTypes
* Cat Table Structure
|  Name  |     Breed     |  Age  |
| :----: | :-----------: | :---: |
|  Blue  | Scottish Fold |   1   |
| Rocket |    Persian    |   3   |
| Monty  |     Tabby     |  10   |
|  Sam   |   Munchkin    |   2   |

* the type of data at each col should be consistent!!

* Numeric Types -  INT, SMALLINT, TINYINT, MEDIUMINT, BIGINT, DECIMAL, NUMERIC, FLOAT, DOUBLE, BIT
* String Types - CHAR, VARCHAR, BINARY, VARBINARY, BLOB, TINYBLOB, MEDIUMBLOB, LONGBLOB, TEXT, TINYTEXT, MEDIUMTEXT, LONGTEXT, ENUM
* Date Types - DATE, DATETIME, TIMESTAMP, TIME,YEAR

* For most of the times, you only use A part of them
    * Numeric Types - start with INT
    * String Types - start with VARCHAR

* varchar (variable-length string)
    * between 1 - 255 characters

* let's do
    * Name - VARCHAR(100)
    * Breed - VARCHAR(100)
    * Age - INT
<br/>

#### 28. Basic Datatypes Challenge
* draw a tweets table!
    * Username - VARCHAR(15)
    * Tweet_Content - VARCHAR(140)
    * Number_of_Favorites - INT
<br/>

#### 30. Creating Your Own Table
* Boilerplate:
```sql
CREATE TABLE tablename
    (
        column_name data_type,
        column_name data_type
    );
```

* EXAMPLE↓
```sql
CREATE TABLE cats
    (
        name VARCHAR(100),
        age INT
    );
```
* NOTE - USE PLURALS FOR TABLE NAMES
```sql
CREATE DATABASE cat_app
USE cat_app;
CREATE TABLE cats (
    name VARCHAR(100),
    age INT
);
```
<br />

#### 32. How do we know if it worked?
```sql
SHOW tables;
SHOW COLUMNS FROM <tablename>;
DESC <tablename>;
```
<br/>

#### 34. Drop Tables
```sql
DROP TABLE <tablename>;
```
<br />

#### 36. Make your own table challenge
* Create a pastries table with name and quantity
```sql
CREATE TABLE pastries(
    name VARCHAR(50),
    quantity INT,
);

SHOW COLUMNS FROM pastries;

DROP TABLE pastries;
```
<br />

### 4. Inserting Data (And a couple of Other Things)
<Br />

#### 39. Insert Data
* Basic Syntax
```sql
INSERT INTO cats(name, age)
VALUES ('Jetson', 7);
```
* when you write actual sql files, this way is preferred (on top of doing it in one line is also possible)
```sql
INSERT INTO cats
            (NAME,
            age)
VALUES      ("jetson",
            7);
```
* Our Practice
```sql
CREATE TABLE cats (name VARCAHR(50),age INT);

INSERT INTO cats(name, age)
VALUES('Blue',1);

INSERT INTO cats(age,name) VALUES(11,'Garfield');
```
<br />

#### 41. Super Quick Intro to SELECT
```sql
SELECT * FROM cats;
```
<br/>

#### 43. Multiple INSERT
```sql
INSERT INTO CATS(name, age)
VALUES ('Charlie', 10)
        , ('Sadie', 3)
        , ('Lazy Bear', 1);
```
<br/>

#### 45. Insert Challenge
```sql
CREATE TABLE people(first_name VARCHAR(20), last_name VARCHAR(20), age INT);

INSERT INTO people (first_name, last_name, age)
VALUES ('Tina', 'Belcher', 13);

INSERT INTO people (last_name, age, first_name)
VALUES ('Belcher', 42, 'Bob');

INSERT INTO people (first_name,last_name, age)
VALUES ('Linda', 'Belcher', 45)
        , ('Phillip', 'Frond', 38)
        , ('Calvin', 'Fischoeder', 70);

```
<br />

#### 49+50. MySQL Warnings
* If Errors are shown instead of Warnings,
```sql
set sql_mode = '';
```

```sql
SHOW WARNINGS;
```
<BR/>

#### 52. NULL and NOT_NULL
* NULL: VALUE IS NOT KNOWN

* EXAMPLE
```sql
INSERT INTO cats(name)
VALUES('Alabama');

INSERT INTO cats()
VALUES();
```
* In order to prevent something to be NULL,
```sql
CREATE TABLE cats2
(
    name VARCHAR(100) NOT NULL
    ,age INT NOT NULL
);
```
* Now
    * without name, it will be the default value - currently empty string
    * without age it will be the default value currently 0
<br/>

#### 54. Setting Default Vals
* To set Default Value
```sql
CREATE TABLE cats3
    (
        name VARCHAR(100) DEFAULT  'a',
        age INT DEFAULT 99
    );

INSERT INTO cats3() VALUES();
-- 'a', 99
-- here you can still set thigns to be NULL

CREATE TABLE cats4
    (
        name VARCHAR(100) NOT NULL DEFAULT 'a',
        age INT NOT NULL DEFAULT 99
    );
-- NULL is not allowed AND you have default values!

```
<br />

#### 56. A Primer On Primary Keys
* currently duplicate values can be inserted in tables
* Though we want to identify  different data!
* How Do We Make Each Unique??
    * CatID
    * Primary Key

* PRIMARY KEY - UNIQUE IDENTIFIER!

* EXAMPLE
```SQL
CREATE TABLE unique_cats (cat_id INT NOT NULL
                        , name VARCHAR(100)
                        , age INT
                        , PRIMARY KEY (cat_id))
```

```SQL
INSERT INTO unique_cats(cat_id, name, age) VALUES(1, "Fred", 23);
```

* Generate cat_id Automatically
```SQL
CREATE TABLE unique_cats2 (cat_id INT NOT NULL AUTO_INCREMENT
                        ,name VARCHAR(100)
                        ,age INT
                        ,PRIMARY KEY (cat_id));
```

```sql
INSERT INTO unique_cats2(name, age)  VALUES('BlueSteele',4);
--cat_id automatically given
```
<br/>

#### 58. Table Constraints Practice
* define an Employees table, with the following fields
    * id - number (auto increment), mandatory, primary key
    * last_name - text, mandatory
    * first_name - text, mandatory
    * middle_name - text, not mandatory
    * age - number, mandatory
    * current_status - text, mandatory, defaults to 'employed'
```SQL
CREATE TABLE employees(
    id INT NOT NULL AUTO_INCREMENT
    , last_name VARCHAR(30) NOT NULL
    , first_name VARCHAR(30) NOT NULL
    , middle_name VARCHAR(30)
    , age INT NOT NULL
    , current_status VARCHAR(30) NOT NULL DEFAULTS 'employed'
    , PRIMARY KEY(id)
);
```
<br/>

### 5. CRUD COMMANDS
<br />

#### 62. Intro to CRUD!!
* Create
    * INSERT INTO
* Read
* Update
* Delete
* will be what we'll focus on!
<br/>

#### 64. Preparing Our DATA
* let's start with a clean state..

* `DROP TABLE cats`

* We will have
```sql
CREATE TABLE cats
(
    cat_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
    name VARCHAR(100),
    breed VARCHAR(100),
    age INT,
);

INSERT INTO cats(name, breed, age)
VALUES ('Ringo', 'Tabby', 4)
        ,('Cindy', 'Maine Coon', 10)
        ,('Dumbledore', 'Maine Coon', 11)
        ,('Egg', 'Persian', 4)
        ,('Misty', 'Tabby', 13)
        ,('George Michael','Ragdol', 9)
        ,('Jackson', 'Sphynx', 7);
```
<br />

#### 66. Official Introduction to SELECT
* Read
    * How do we search data?
    
```SQL
SELECT * FROM cats;
SELECT name FROM cats;

SELECT name, age FROM cats;
SELECT cat_id, name, age FROM cats;
--order matters
```
<br/>

#### 68. Intro to WHERE!
```sql
SELECT * FROM cats WHERE age = 4;
SELECT * FROM cats WHERE name='George Michael';
SELECT * FORM cats WHERE name='GEORGE MICHAEL';
--both work
```
<br/>

#### 73. Intro to Aliases
* Aliases - Easier to read results
* Changes how the data is displayed!
```sql
SELECT cat_id AS id, name FROM cats;
```
<br/>

#### 75. The UPDATE Command
```sql
UPDATE cats SET breed='Shorthair'
WHERE breed='Tabby';
UPDATE cats SET age=14 WHERE name='Misty';
```
* A good rule of thumb - try SELECTing before you UPDATE
<Br />

#### 80. Introduction to DELETE 
```sql
DELETE FROM cats WHERE name='Egg';
DELETE FROM cats; --deletes everything!be careful
```
<br />

### 6. CRUD Challenge
* Spring Cleaning - The Annual Closet Inventory
* Create a new database shirts_db
* Create a new table called shirts
```sql
CREATE DATABASE shirts_db;
USE shirts_db;
CREATE TABLE shirts
    (
        shirt_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
        , article VARCHAR(20)
        , color VARCHAR(20)
        , shirt_size VARCHAR(1)
        , last_worn INT

    );

INSERT INTO shirts(article, color, shirt_size, last_worn)
VALUES ('t-shirt', 'white', 'S', 10),
('t-shirt', 'green', 'S', 200),
('polo shirt', 'black', 'M', 10),
('tank top', 'blue', 'S', 50),
('t-shirt', 'pink', 'S', 0),
('polo shirt', 'red', 'M', 5),
('tank top', 'white', 'S', 200),
('tank top', 'blue', 'M', 15)

INSERT INTO shirts(article, color, shirt_size, last_worn)
VALUES ('polo shirt', 'purple', 'M', 50);

SELECT article, color FROM shirts;

SELECT article, color, shirt_size, last_worn FROM shirts WHERE shirt_size = 'M';

UPDATE shirts SET shirt_size='L' WHERE article='polo shirt';

UPDATE shirts SET last_worn=0 WHERE last_worn=15;

UPDATE shirts SET shirt_size='XS', color='off white' WHERE color='white'

DELETE FROM shirts WHERE last_worn=200;

DELETE FROM shirts WHERE article='tank top';

DELETE FROM shirts;

DROP TABLE shirts;
```

### 7. The World of String Functions
<br/>

#### 97. Running SQL Files
* source filename.sql
<br/>

#### 99. Loading Our Books Data
```sql
DROP DATABASE IF EXISTS book_shop;

CREATE DATABASE book_shop;

USE book_shop;

CREATE TABLE books 
	(
		book_id INT NOT NULL AUTO_INCREMENT,
		title VARCHAR(100),
		author_fname VARCHAR(100),
		author_lname VARCHAR(100),
		released_year INT,
		stock_quantity INT,
		pages INT,
		PRIMARY KEY(book_id)
	);

INSERT INTO books (title, author_fname, author_lname, released_year, stock_quantity, pages)
VALUES
('The Namesake', 'Jhumpa', 'Lahiri', 2003, 32, 291),
('Norse Mythology', 'Neil', 'Gaiman',2016, 43, 304),
('American Gods', 'Neil', 'Gaiman', 2001, 12, 465),
('Interpreter of Maladies', 'Jhumpa', 'Lahiri', 1996, 97, 198),
('A Hologram for the King: A Novel', 'Dave', 'Eggers', 2012, 154, 352),
('The Circle', 'Dave', 'Eggers', 2013, 26, 504),
('The Amazing Adventures of Kavalier & Clay', 'Michael', 'Chabon', 2000, 68, 634),
('Just Kids', 'Patti', 'Smith', 2010, 55, 304),
('A Heartbreaking Work of Staggering Genius', 'Dave', 'Eggers', 2001, 104, 437),
('Coraline', 'Neil', 'Gaiman', 2003, 100, 208),
('What We Talk About When We Talk About Love: Stories', 'Raymond', 'Carver', 1981, 23, 176),("Where I'm Calling From: Selected Stories", 'Raymond', 'Carver', 1989, 12, 526),
('White Noise', 'Don', 'DeLillo', 1985, 49, 320),
('Cannery Row', 'John', 'Steinbeck', 1945, 95, 181);

```

<br/>

#### 101. Working with CONCAT
* CONCAT : Combine Data For Cleaner Output
* MySQL String Functions
` CONCAT(column, anotherColumn)`

```sql
SELECT author_fname, author_lname FROM books;

SELECT 
    CONCAT (autho_fname, ' ',  author_lname);
    AS 'full name'
FROM books;

SELECT author_fname AS first, author_lname AS last,
    CONCAT (author_fname, ' ', author_lname) AS full
FROM books
```
* CONCAT_WS: Concat with separator
```sql
SELECT
    CONCAT_WS(' - ', title, author_fname, author_lname)
FROM books;
```
<br/>

#### 103. Introducing SUBSTRING
* SUBSTRING: Work with parts of strings
```sql
SELECT SUBSTRING('Hello World', 1, 5);
--'Hello'
SELECT SUBSTRING('Hello World', 7); --World

SELECT SUBSTRING('Hello World', -3);--rld

SELECT CONCAT(SUBSTRING(title, 5), '...') AS 'first_few_title' FROM books;
```
<br/>

#### 105. Introducing REPLACE
* REPLACE : Replace parts of strings
~> case-sensitive

```sql
SELECT REPLACE('Hello World', 'l', 'r');
SELECT REPLACE(title, 'e', '3') FROM books;
```
<br />

#### 107. Using REVERSE
```sql
SELECT REVERSE('meow meow);
```
<br />

#### 109. Working with CHAR LENGTH
* CHAR_LENGTH: Counts how many characters there are
```sql
SELECT  author_lname, CHAR_LENGTH(author_lname) AS length FROM books;
```
* Use SQL Formatter For Prettier Style!
<br />

#### 111. Changing Case with UPPER and LOWER 
* UPPER(), LOWER() to Change a Character Case
```sql
SELECT LOWER('Hello World');
```
<br />

#### 115. String Function Challenge
```sql
SELECT UPPER(REVERSE('Why does my cat look at me with such hatred?'));

SELECT 
    REPLACE(title, ' ', '->') AS TITLE
FROM books;

SELECT author_lname AS forwards, REVERSE(author_lname) AS backwards FROM books;

SELECT UPPER( CONCAT(author_lname,' ',author_fname)) AS 'full name in caps'FROM books;

SELECT CONCAT(title, ' was released in ', released_year) AS blurb
FROM books;

SELECT title,CHAR_LENGTH(title) AS 'character count' FROM books;

SELECT CONCAT(SUBSTRING(title, 1, 10),'...') AS  'short title', CONCAT(author_lname, ',',author_fname) AS author, CONCAT( stock_quantity' in stock') AS quantity
FROM books;
```
<br />

### 8. Refining Our Selections
<br />

#### 118. Seed Data: Adding A Couple New Books
```sql
INSERT INTO books
    (title, author_fname, author_lname, released_year, stock_quantity, pages)
    VALUES ('10% Happier', 'Dan', 'Harris', 2014, 29, 256), 
           ('fake_book', 'Freida', 'Harris', 2001, 287, 428),
           ('Lincoln In The Bardo', 'George', 'Saunders', 2017, 1000, 367);
```
<br />

#### 120. Using DISTINCT
```sql
SELECT DISTINCT author_lname FROM books;
```
~> shows only the unique value

```sql
SELECT DISTINCT author_fname, author_lname FROM books;
```
<br/>

#### 122. Sorting Data with ORDER BY
```sql
SELECT author_lname FROM books ORDER BY author_lname;
```
* Order by Ascending order by default vs. [DESC]
```sql
SELECT title,  author_fname,author_lname
FROM books ORDER BY 2 ;
-- order by author_fname
```
* Order by multiple column criteria
```sql
SELECT author_fname, title FROM books ORDER BY author_fname, title;
```
<br/>

#### 124. Using LIMIT
* specifies how many data we want back!
```sql
SELECT title FROM books  LIMIT 10;

SELECT title, released_year FROM books
ORDER BY released_year DESC LIMIT 5;

SELECT title, released_year FROM books
ORDER BY released_year LIMIT 5 10;
```
<BR/>

#### 126. Better Searches w/ LIKE!!
* Syntax
```sql
WHERE author_fname LIKE '%da%';
```

* % : WildCard
```sql
SELECT title, author_fname FROM books WHERE author_fname  LIKE '%da%';
```
<br/>

#### 128. LIKE Part 2: More WildCards
* _: exactly one character

```sql
SELECT * FROM books WHERE stock_quantity LIKE '____';
```

* To look for something with those wildcards, use '\%' or '\_'!!
<br />

#### 131. Refining Selections
```sql
SELECT title FROM books WHERE title LIKE '%stories%';

SELECT title ,  pages FROM books ORDER BY pages DESC LIMIT 1 ; 

SELECT CONCAT(title,' - ',released_year) AS summary FROM books ORDER BY released_year DESC LIMIT 3;

SELECT title, author_lname FROM books WHERE author_lname LIKE '% %';

SELECT title,released_year,   stock_quantity AS stock FROM books ORDER BY stock_quantity LIMIT 3

SELECT title, author_lname 
FROM books
ORDER BY author_lname, title

SELECT 
    UPPER(CONCAT("MY FAVORITE AUTHOR IS ", author_fname," ", author_lname,"!")) AS yell
FROM books
ORDER BY author_lname;
```
<br />

### 9. The Magic of Aggregate Functions
<br />

#### 134. The Count Function
* Built-in SQL functions to aggregate and induce something meaningful
* COUNT
```sql
SELECT COUNT(*) FROM books;

SELECT COUNT(DISTINCT author_fnames) FROM books;

SELECT COUNT(DISTINCT author_fnames) author_lnames) FROM books;

SELECT COUNT(*) FROM books WHERE title LIKE '%the%';
```
<BR/>

#### 136. The Joys of Group By
* GROUP BY summarizes or aggregates identical data into single rows
```SQL
SELECT title, author_lname FROM books;

SELECT title, author_lanme FROM books GROUP BY author_lname;
-- now that they are grouped by author last name, we can achieve many things like 'how many books each author has written so far?'

SELECT author_lname, COUNT(*) FROM books GROUP BY author_lname;

SELECT title, author_fname, author_lname FROM books;

SELECT author_fname, author_lname, COUNT(*) FROM books GROUP BY author_lname, author_fname;

SELECT released_year, COUNT(*) FROM books GROUP BY  released_year;
```
<br/>

#### 139. Min and Max Basics
* Min and Max w/o GROUP BY
  * Find the min released_year
  * ` SELECT MIN(released_year) FROM books; `

<br/>

#### 141. A Problem with Min and Max
* What is the title of longest book?
* SubQuery
  ```SQL
  SELECT * FROM books
  WHERE pages = (SELECT MAX(pages) FROM books);
  ```
  * problem ~> SLOW! with separate queries
* ORDER BY
  ```SQL
  SELECT * FROM books
  ORDER BY pages  DESC LIMIT 1;
  ```
<br/>

#### 143. Using Min and Max w/ GROUP BY
* Find the year each author published their first book
```SQL 
SELECT MIN(released_year),
    author_fname,
    author_lname
FROM books
GROUP BY author_fname,
    author_lname;
```
* Get the longest page count for each author
```SQL
SELECT MAX(pages),
    author_fname,
    author_lname
FROM books
GROUP BY author_fname,
    author_lname;
```
<br/>

#### 145. The Sum Function
* Sum all pages in the entire database
```SQL
SELECT SUM(pages) FROM books;
```

* Sum all pages each author has written
```SQL
SELECT SUM(pages), author_fname, author_lname FROM books GROUP BY author_fname, author_lname;
```
<br/>


#### 147. Avg function
* Calculate the average released_year across all books
```SQL
SELECT AVG(released_year ) FROM books;
```
* Calculate the average stock quantity for books released in the same  year!
```SQL
SELECT AVG(stock_quantity) FROM books GROUP BY released_year;
```
<br/>

#### 150. Aggregate Function Challenge
```SQL
SELECT COUNT(*) FROM books;

SELECT released_year, COUNT(*) FROM GROUP BY released_year;

SELECT SUM(stock_quantity) FROM books;

SELECT AVG(released_year)
    ,CONCAT(author_fname,author_lname) 
FROM books
GROUP BY author_fname, author_lname;

SELECT CONCAT(author_fname, author_lname)
FROM books
ORDER BY pages  DESC
LIMIT 1;

SELECT released_year AS year, COUNT(*) AS "# books", AVG(pages) AS "avg pages" FROM books GROUP BY released_year;
```
<br/>

### 10. Revisiting Data Types
<br/>

#### 153. (VAR)CHAR
* CHAR has a fixed length! (Even if you're saving 'ab' to CHAR(4), 4 Bytes Are Used)
* CHAR(3) -> only 3 characters are allowed
* CHAR is faster for fixed length text - EX. P/F 
```SQL
CREATE TABLE dogs (name CHAR(5), breed VARCHAR(10 ));

INSERT INTO dogs (name, breed) VALUES ('Bob', 'Beagle'),
('Robby', 'Corgi'),
('Princess Jane', 'Retriever'); --exceeds limit
```

* VARCHAR ~> ' ' also takes 1 Byte, and 'abcd' takes 5 Bytes!!
<br />

#### 156. DECIMAL
* DECIMAL(5, 2) ~> 5: Total Number of Digits (0 - 65), 2:  Digits After Decimal Point (0 - 30)
* EX. 999.99
```SQL
CREATE TABLE items (price DECIMAL(5, 2));

INSERT INTO items(price) VALUES(7), --7.00 
                        (78787923749), --Error
                        (343.88), --343.88
                        (298.999); --299.00
```
<br />

#### 158. FLOAT and  DOUBLE
> "The  DECIMAL data type is a fixed point type and calculations are exact."
> "The  FLOAT and DOUBLE data types are floating-point types and calculations are approximate"
* FLOAT and  DOUBLE store larger numbers using less space
* BUT it comes at the cost  of precision
| types  | memory needed | precision issue |
| :----: | :-----------: | :-------------: |
| FLOAT  |    4 Bytes    |    ~7 digits    |
| DOUBLE |    8 Bytes    |   ~15 digits    |
* So if you need to choose between the two, DOUBLE is better in terms of precision
* And DECIMAL is quite preferred for precision!
```SQL
CREATE TABLE thingies (price FLOAT);
INSERT INTO thingies(price) VALUES (88.45);
SELECT * FROM thingies;

INSERT INTO thingies(price) VALUES (99938913.521); --99938900

```
<br />

#### 161. DATE, TIME, and DATETIME
* DATE - Values With a Date But No Time - 'YYYY-MM-DD'
* TIME - Values With a Time But No Date - 'HH:MM:SS'
* DATETIME - Values With a Date AND Time -'YYYY-MM-DD HH:MM:SS'

<br/>

#### 162. Creating Our  DATE Data 
```SQL

CREATE TABLE people (
    name VARCHAR(100),
    birthdate DATE,
    birthtime TIME,
    birthall DATETIME
);

INSERT INTO people (name, birthdate, birthtime, birthall)
VALUES ('Padma', '1983-11-11','10:07:35', '1983-11-11 10:07:35');
```
<br />

#### 164. CURDATE, CURTIME, and NOW
* CURDATE - DATE, CURTIME - TIME, NOW - DATETIME

```SQL
INSERT INTO people(name,birthdate, birthtime, birthall)
VALUES('Blooo', CURDATE(), CURTIME(), NOW());
```
<br />

#### 166. Formatting Dates
* There are a lot more date and time functions for SQL
```SQL
SELECT name, birthdate FROM people;

SELECT name, DAY (birthdate) FROM people;

SELECT name, birthdate, DAYNAME(birthdate) FROM people;
```

* Formatting Dates!
* "DATE_FORMAT(date, format)
```SQL
SELECT DATE_FORMAT(birthall, "%W %M %Y") FROM people;

SELECT DATE_FORMAT(birthall, "%m/%d/%Y") FROM people;
```
<br />

#### 168. Date Math
* DATEDIFF(expression1, expression2)
```SQL
SELECT DATEDIFF(NOW(), birthall) FROM people;
```

* DATE_ADD(date, INTERVAL expr unit)
```SQL
SELECT birthall, DATE_ADD(birthall, INTERVAL 1 MONTH) FROM people;

SELECT birthall, birthall + INTERVAL 1 MONTH FROM people;

SELECT
    birthall,
    birthall + INTERVAL 15 MONTH + INTERVAL 10 HOUR 
FROM people;
```
<br/>

#### 170. Working With TIMESTAMPS
* DATETIME VS. TIMESTAMP
  * DATETIME ranges from '1000-01-01 00:00:00' to '9999-12-31'
  * TIMESTAMP ranges from '1970-01-01 00:00:01' UTC to '2038-01-19 03:14:07'  UTC 
```SQL
CREATE TABLE comments (
    content VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW() --DEFAULT NOW() is crucial part in this case!!
);

INSERT INTO comments (content) VALUES ('lol what a funny article!');
INSERT INTO VALUES('I found this offensivee!'); 
```

* CURRENT_TIMESTAMP = NOW
* order to be able to CHANGE the timestamp,
```SQL
CREATE TABLE commentss(
    content  VARCHAR(100),
    changed_at  TIMESTAMP DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO commentss(content) VALUES('ajofsdjlfkjdsl'), ('lololol');

UPDATE commentss SET content = 'hahahah' WHERE content = 'lololol'; 
```
<br/>

#### 173. Data Types Exercises Solution
```SQL
CREATE TABLE inventory
(
    item_name VARCHAR(100),
    price DECIMAL(10, 2),
    quantity INT
)

SELECT CURTIME();

SELECT CURDATE();

SELECT NOW();

SELECT DAYOFWEEK(CURDATE());

SELECT DATE_FORMAT(NOW(), '%w');

SELECT DAYNAME(NOW());

SELECT DATE_FORMAT(NOW(), '%m/%d/%y');

SELECT DATE_TIME(NOW(), '%M %D at %h:%i');

CREATE TABLE tweets
(
    content VARCHAR(140),
    username VARCHAR(20),
    created_at TIMESTAMP DEFAULT NOW
);
```
<BR/>

### 11. The Power of Logical Operators!
<br/>

#### 176. Not Equal
* !=
```SQL
SELECT title, released_year FROM books WHERE released_year != 2017;
```
<br/>

#### 178. Not Like
* "NOT LIKE"
```SQL
SELECT title FROM books WHERE title NOT LIKE "%W";
```
<br/>

#### 180. GREATER THAN
* >
```SQL
SELECT * FROM books WHERE released_year > 2000;
```
* GREATER THAN OR EQUAL TO: >=
```SQL
SELECT * FROM books WHERE stock_quantity >= 200;

SELECT 99 > 1; --1 (True)
SELECT 99 > 101; --0 (False)

SELECT 'A' > 'a'; --0 (False)
SELECT 'A' = 'a'; --1(True)
```
<br/>

#### 182. Less Than
* <
* LESS THAN OR EQUAL TO: <=
```SQL
SELECT title, released_year FROM books WHERE released_year <1995;

SELECT title, released_year FROM books WHERE released_year <=1990;

SELECT 'Q'<'q'; --0(False)
```
<br/>

#### 184. LOGICAL AND
* && (deprecated) or AND 
```SQL
SELECT * FROM books WHERE author_lname='Eggers' && author_fname = 'David' AND released_year >= 2010;
```
<br/>

#### 186. LOGICAL OR
* ||(deprecated) or OR
```SQL
SELECT * FROM books WHERE author_lname = 'Eggers' OR author_fname = 'Dave' OR released_year > 2010;
```
<br />

#### 188. Between
* BETWEEN
```sql
SELECT * FROM books WHERE released_year >= 2004 AND released_year <= 2015;

SELECT * FROM books WHERE released_year BETWEEN 2004 AND 2015;
```

* NOT BETWEEN
* Comparing time and dates:
* best to cast first to guarantee the consistency in formats
```sql
SELECT CAST('2017-05-02' AS DATETIME);

SELECT * FROM people WHERE birthdt BETWEEN CAST('1981-01-01' AS DATETIME) AND CAST('2000-12-29' AS DATETIME);
```
<br/>

#### 190. In And Not In
* IN (A, B, C)
```sql
SELECT * FROM books
WHERE author_lname IN ('Smith', 'Lahiri');

SELECT *  FROM books
WHERE released_year >= 2000 AND
released_year % 2 != 0;
```
<br/>

#### 192. CASE STATEMENTS
* conditionals
```sql
SELECT *,
    CASE
        WHEN released_year >=2000 THEN 'Modern Lit'
        ELSE '20th Century Lit'
    END AS GENRE
FROM books;

SELECT title, 
    CASE
        WHEN stock_quantity BETWEEN 0 AND 50 THEN '*'
        WHEN stock_quantity BETWEEN 50 AND 100 THEN '**'
        ELSE '***'
    END AS STOCK
FROM books;

SELECT title,
    CASE
        WHEN stock_quantity <= 50 THEN '*'
        WHEN stock_quantity <= 100 THEN '**'
        ELSE '***'
    END AS STOCK
FROM books;
```
<br/>

#### 194. Logical Operator Challenge    
* solutions
```SQL
SELECT * FROM books
WHERE released_year <= 1980;

SELECT * FROM books
WHERE author_lname IN ('Eggers',  'Chabon');

SELECT * FROM books
WHERE author_lname =  'Lahiri' AND released_year > 2000; 

SELECT * FROM books
WHERE pages BETWEEN 100 AND 200;

SELECT * FROM books
WHERE author_lname LIKE 'C%'  OR
    author_lname LIKE 'S%';

SELECT * FROM books
WHERE SUBSTR(author_lname, 1, 1) IN ('C','S');

SELECT title, 
CASE
    WHEN title LIKE '%stories%' THEN 'short stories'
    WHEN title IN ('Just Kids', 'A Heartbreaking Work') THEN 'memoir'
    ELSE 'novel'
    END AS TYPE
FROM books;

SELECT title, author_lname, 
    CASE
        WHEN COUNT(*) = 1 THEN CONCAT(COUNT(*), ' book')
        ELSE CONCAT(COUNT(*), ' books')
    END AS COUNT

FROM books
GROUP BY author_lname,  author_fname;
```

<br />

### 12. ONE TO MANY
#### 198. Real World Data Is Messy
* relationships all over!
<br />

#### 199. Types of Relationships
* Three Types
1. One to One
2. One to Many
3. Many to Many
   
<br/>

#### 200. ONE TO MANY
* EX. CUSTOMERS & ORDERS

* We Want To Store...
  * A customer's first and last names
  * A customer's email
  * the date of the purchaes
  * the price of the order

    => this could be stored in one table
    => but splitting it into two, CUSTOMERS and ORDERS tables, will be BETTER!
    => less  duplicates!

* BETTER WAY
|  customers  |   orders    |
| :---------: | :---------: |
| customer_id |  order_id   |
| first_name  | order_date  |
|  last_name  |   amount    |
|    email    | customer_id |

* PRIMARY KEY - "unique"
* in orders table, customer_id is referring to customer_id in customers table
  * customer_id in orders table is the "FOREIGN KEY"!
  * order_id in orders table is the "PRIMARY KEY"!

<br/>

#### 201. Working With Foreign Keys
* creating tables
```SQL
CREATE TABLE customers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name  VARCHAR(100),
    last_name  VARCHAR(100),
    email  VARCHAR(100),
);

CREATE TABLE orders(
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_date DATE,
    amount DECIMAL(8,2),
    customer_id  INT,
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);

INSERT INTO customers (first_name, last_name, email)
VALUES ('Boy', 'George', 'george@gmail.com'),
       ('George', 'Michael', 'gm@gmail.com'),
       ('David', 'Bowie', 'david@gmail.com'),
       ('Blue', 'Steele', 'blue@gmail.com'),
       ('Bette', 'Davis', 'bette@aol.com');

INSERT INTO orders (order_date, amount, customer_id)
VALUES ('2016/02/10', 99.99, 1),
       ('2017/11/11', 35.50, 1),
       ('2014/12/12', 800.67, 2),
       ('2015/01/03', 12.50, 2),
       ('1990/04/11', 450.25, 5);
```
<br />

#### 203.Cross Join
* you rarely use cross joins
* or Cartesian Join/generating all possible combinations!
```SQL
SELECT * FROM customers, orders;
```
<br />

#### 205. Inner Join
* joining only the ones that are relevant
```sql
-- IMPLICIT INNER JOIN
SELECT * FROM customers,orders WHERE customers.id = orders.customer_id;

-- EXPLICIT INNER JOIN("BETTER CONVENTION!")
SELECT * FROM customers
JOIN orders
    ON customers.id = orders.customer_id;

SELECT * FROM orders
JOIN customers
    ON customers.id = orders.customer_id;

SELECT *, SUM(amount) AS total_spent FROM orders
JOIN customers
    ON customers.id = orders.customer_id
GROUP BY orders.customer_id;
```

<br/>

#### 208. Left Join
* select everything from a table and anything that matches another table too
```sql
SELECT * FROM customers
LEFT JOIN orders
    ON customers.id   =   orders.customer_id;
    -- even if Mr.Bowie and Ms.Steele have not bought anything they still show up in the table

SELECT 
    first_name,
    last_nmme,
    IFNULL(SUM(amount),0) AS total_spent

FROM customers
LEFT JOIN orders
    ON customers.id = orders.customer_id
GROUP BY customers_id
ORDER BY total_spent;
```
<br />

#### 210. Right Join
* similar logic to left join
```sql
-- RIGHT JOIN
SELECT * FROM customers
RIGHT JOIN orders
    ON customers.id = orders.customer_id;
```
* on  delete  cascade
```SQL
-- ON DELETE  CASCADE
CREATE TABLE orders(
    ...
    customer_id INT,
    FOREIGN KEY(customer_id)
        REFERENCES customers (id)
        ON DELETE CASCADE,
);  
```

<br/>

#### 216. Our First Joins
* STUDENTS & PAPERS
```SQL
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100)
);

CREATE TABLE papers (
    title VARCHAR(100),
    grade INT,
    student_id INT,
    FOREIGN KEY(student_id) REFERENCES students(id) ON DELETE CASCADE 
);

INSERT ...

SELECT * FROM students
INNER JOIN papers ON students.id = papers.student_id;

SELECT first_name, title, grade FROM students
INNER JOIN papers ON students.id = papers.student_id ORDER BY grade DESC;

SELECT first_name, title,grade FROM students LEFT JOIN papers ON students.id = papers.student_id ORDER BY grade DESC;

SELECT 
    first_name, 
    IFNULL(title, 'MISSING'),
    IFNULL(grade, 0)
FROM students
LEFT JOIN papers ON students.id = papers.student_id
ORDER BY grade DESC;

SELECT first_name, IFNULL(AVG(grade),0)FROM students
LEFT JOIN papers ON students.id = papers.student_id
GROUP BY students.id  ORDER BY AVG(grade)  DESC;

SELECT first_name, IFNULL(AVG(grade),0) AS average,CASE 
    WHEN AVG(grade) >= 75 THEN 'PASSING'
    ELSE 'FAILING' 
END AS passing_status
FROM students
LEFT JOIN papers
    ON students.id = papers.student_id
GROUP BY students.id
ORDER BY AVG(grade);
```
<br/>

### 13. Many To Many Relationship
<br/>

#### 221. Many To Many Basics
* we are building a *tv show reviewing application*
* Series Data (tv shows) <-> Reviewers Data (names) : Connect them with a Reviews Table!
| Reviewers  |   Reviews   |    Series     |
| :--------: | :---------: | :-----------: |
|   **id**   |   **id**    |    **id**     |
| first_name |   rating    |     title     |
| last_name  |  series_id  | released_year |
|     `      | reviewer_id |     genre     |

<br/>

#### 222. Creating Our Tables
* Create Tables

```sql
CREATE TABLE reviewers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100), 
    last_name VARCHAR(100) 
);

CREATE TABLE series (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    released_year YEAR(4),
    genre VARCHAR(100)
);

INSERT INTO reviewers...

INSERT INTO series... 

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rating DOUBLE(2, 1),
    series_id INT,
    reviewer_id INT,
    FOREIGN KEY (series_id)
        REFERENCES series(id)
        ON DELETE CASCADE,
    FOREIGN KEY (reviewer_id)
        REFERENCES reviewers(id)
        ON DELETE CASCADE
);

INSERT INTO reviews...
```
<br/>

#### 224. TV Joins Challenge 1
* title | rating
```SQL
SELECT title, rating FROM series
INNER JOIN reviews ON series.id = reviews.series_id;
```
<br/>

#### 226. TV Joins Challenge 2
* title | avg_rating
```SQL
SELECT 
    title,
    AVG(rating) as avg_rating
FROM series
INNER JOIN reviews 
    ON series.id = reviews.series_id
GROUP BY series.id ORDER BY avg_rating
```
<br/>

#### 228. TV Joins Challenge 3
* first_name | last_name | rating
```SQL
SELECT 
    first_name,
    last_name,
    rating
FROM reviewers
INNER JOIN reviews
    ON reviewers.id = reviews.reviewer_id
ORDER BY first_name DESC;
```
<br/>

#### 230. TV Joins Challenge
* unreviewed series
```SQL
SELECT
    title 
FROM series
LEFT JOIN reviews
    ON series.id = reviews.series_id
WHERE reviews.rating IS NULL;
```
<br/>

#### 232. TV Joins Challenge
* genre |avg_rating
```SQL
SELECT
    genre,
    ROUND(AVG(rating),2) as avg_rating
FROM series
INNER JOIN reviews 
ON series.id = reviews.series_id
GROUP BY genre;
```
<BR/>

#### 235. TV Joins
* first_name | last_name | COUNT | MIN | MAX | AVG| STATUS
```SQL
SELECT 
    first_name,
    last_name,
    IFNULL(COUNT(reviews.rating),0) AS COUNT,
    IFNULL(MIN(reviews.rating),0) AS MIN,
    IFNULL(MAX(reviews.rating),0) AS MAX,
    IFNULL(AVG(reviews.rating),0) AS AVG,
    
    --IF(COUNT(reviews.rating) = 0, 'INACTIVE', 'ACTIVE')
    CASE 
        WHEN COUNT(reviews.rating) = 0 THEN 'INACTIVE'
        ELSE 'ACTIVE'
    END AS STATUS
FROM reviewers
LEFT JOIN reviews
ON reviewers.id = reviews.reviewer_id
GROUP BY reviewers.id;
```
<br/>

#### 236. TV Joins Challenge
* title, rating, reviewer
```SQL
SELECT title, rating, 
    CONCAT(first_name,  ' ',last_name)
FROM  reviewers
INNER JOIN reviews
    ON reviewers.id = reviews.reviewer_id
INNER JOIN series
    ON series.id = reviews.series_id
ORDER BY title;
```
<br/>

### 14. Instagram Clone
<br/>

#### 239. Intro to Instagram Clone Schema
* users, comments, likes, hashtags, photos, followers/followings
```SQL
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
CREATE TABLE photos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,  

    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (user_id)
        REFERENCES users  (id)
);
    
CREATE TABLE comments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    comment_text VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    photo_id INT NOT NULL,
    created_at TIMESTAMP  DEFAULT NOW( ),

    FOREIGN KEY(user_id) REFERENCES users(id),

    FOREIGN KEY(photo_id) REFERENCES photos(id)
    
);

CREATE TABLE likes(
    user_id INT NOT NULL,
    photo_id INT NOT NULL,
    
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(photo_id) REFERENCES photos(id),
    PRIMARY KEY(user_id,photo_id)--ensuring the unique set of it
);

CREATE TABLE  follows(
    follower_id INT NOT NULL,
    followee_id INT NOT NULL,
    created_at TIMESTAMP  DEFAULT NOW(),
    
    FOREIGN KEY(follower_id) REFERENCES users(id),
    FOREIGN KEY(followee_id) REFERENCES users(id),
    PRIMARY KEY (follower_id, followee_id)
)
```
<br/>

#### 251. Cloning Instagram's Hashtags
* three major ways to represent hashtags
1. Solution 1
|  id   |  image_url   |        tags         |
| :---: | :----------: | :-----------------: |
|   1   | '/ajdlfkjdl' | '#cat#pets#animals' |
* super easy to implement

* limited num of tags only
* cannot store additional information
* have to be careful with searching

2. Solution 2
* two tables - photos(id, image_url), tags table(tag_name, photo_id)

* unlimited num of tags
* slower than previous solution

3. Solution 3
* three tables
    * photos table - id, image_url
    * tags - id, tag_name
    * photo_tags table - photo_id, tag_id

* unlimited num of tags
* can add additional information
* more work with inserting/updating
* have to worry about cascade

* we will use the third one

```SQL
CREATE TABLE tags (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(255)  UNIQUE,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE photo_tags (
    photo_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    FOREIGN KEY(photo_id) REFERENCES photos(id),
    FOREIGN KEY(tag_id) REFERENCES tags(id),
    PRIMARY KEY(photo_id, tag_id)
);
```
<br/>

### 15. Working with lots of instagram data
<br/>

#### 257. Loading the JUMBO dataset
```SQL
mysql> C:\Users\SAMSUNG\Documents\GitHub\til\Udemy_SQL\practice
```
<br/>

#### 259. INSTA Challenge
1. Find the 5 oldest users

```SQL
SELECT * FROM  users
ORDER BY created_at  DESC LIMIT 5;
```
2. What day of the week do most users register on?

```SQL
SELECT DAYNAME(created_at) AS day, COUNT(*) AS count
FROM users
GROUP BY day
ORDER BY count  DESC
LIMIT 1;
```
3. Find the users who've never posted a photo

```SQL
SELECT username
FROM users
LEFT JOIN photos
    ON users.id = photos.user_id
WHERE photos.id IS NULL;
```
4. who got the most likes on a single photo?

```SQL
SELECT 
    username,
    photo_id, 
    photos.image_url,
    COUNT(*) AS total
FROM photos
INNER JOIN likes
    ON photos.id = likes.photo_id
INNER JOIN users
    ON photos.user_id = users.id
GROUP BY  photos.id
ORDER BY total DESC
LIMIT 1;
```
5. How many times does the average user post?
```SQL
SELECT
    (SELECT COUNT(*) FROM photos) / (SELECT COUNT(*) FROM users) AS  AVG;
```

6. What are the top 5 most commonly used hashtags?
```SQL
SELECT tag_name, COUNT(*) AS count FROM photo_tags 
INNER JOIN tags
ON photo_tags.tag_id = tags.id
GROUP BY tags.id
ORDER BY count  DESC
LIMIT 1;
```

7. Find users who have liked every single photo on the site
```SQL
SELECT username, COUNT(*) AS num_likes FROM users
INNER JOIN likes
    ON users.id = likes.user_id
GROUP BY likes.user_id
HAVING num_likes =(SELECT COUNT(*) FROM photos);
```
<br/>

### 16. Introducing to Node
<br/>
#### 276. MySQL and Other Languages
* MySQL & PHP, Node, Ruby, C#, C++, Java, Python, ...
* How do we interact with MySQL thorugh external code?
  * Client's Computer -> NodeJS -> MySQL  database

#### 278. Intro to JOIN US App
* "A Startup Mailing List Application"

<br/>

#### 283. Introduction to NPM & Faker!!
* NPM - Node Package Manager
* `npm install faker`
* refer to documentations!
<br/>

#### 285. Introducing the MySQL Package
* MySQL Node Package
  * connecting MySQL AND Nodejs
<br />

#### 287. Connecting Node to MySQL
* Create A Database
* `CREATE DATABASE join_us`

1. Connect to MySQL
```javascript
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'some_username',
    database: 'some_database'
})
```

2. Run Queries

```SQL
const a = 'SELECT 1 + 1 AS solution';

const b = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now';

connection.query(b, function (error, results, fields){

    if (error) throw error;
  console.log("answer is: ", results[0].time, results[0].date, results[0].now);
});

connection.end();
```

* 'for_study@localhost' by '';
<br/>

#### 289. Creating Our Users Table!
* Creating Our Schema
```SQL
CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);
```

<br/>

#### 291. Selecting Using Node
* Inserting Values
```SQL
INSERT INTO users(email) VALUES
('Katie@yahoo.com'), ('Tunde@gmail.com');
```

```javascript
const a = " SELECT * FROM users";

connection.query(q, (error, results, field) => {
    if (error) throw error;
    console.log(results);
});

connection.end();
```

<br/>

#### 293. Insert Using Node
* To INSERT a user
```javascript
const user = {email: 'jenny12345@gmail.com'};
connection.query('INSERT INTO users SET ?', user, function(error, results){
    if (error) throw error;
    console.log(results);
});
```

<br/>

#### 295. Some MySQL/Node Magic
* ex. faker.date.past() format does not match sql's
* but magic! MySQL automatically converts the date object to the right str format!
<br/>

#### 296. Bulk Inserting 500 Users!
* let's make a bulk data then insert
* inserting multiple users
```javascript
const data = [
    ['blah@gmail.com', '2017-05-01 03:51:37'],
    ['ugh@gmail.com', '2017-05-01 03:51:37'],
    ['meh@gmail.com', '2017-05-01 03:51:37']
];

const query = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(query, [data], function(err, result) {
    console.log(err);
    console.log(result);
});
```
<br />

#### 298. 500 Users Exercise
1. Find the Earliest Data A User Joined
```SQL
SELECT DATE_FORMAT(MIN(created_at), '%m %D %Y') AS earliest_date
FROM users;
```
2. Find Email Of The First User
```SQL
SELECT email FROM users WHERE created_at = (SELECT MIN(created_at) FROM users);
```
3. Users According TO THe Month They Joined
```SQL
SELECT MONTHNAME(created_at) AS month, COUNT(*) AS count FROM users
GROUP BY month
ORDER BY count DESC;
```
4. Count Number of Users With Yahoo Emails
```SQL
SELECT COUNT(*) AS yahoo_users FROM users
WHERE email LIKE '%yahoo%';
```
5. Calculate Total Number of Users for Each Email Host
```SQL
SELECT 
    CASE
        WHEN email LIKE '%@yahoo.com' THEN 'yahoo'
        WHEN email LIKE '%@gmail.com' THEN 'gmail'
        WHEN email LIKE '%@hotmail.com' THEN 'hotmail'
        ELSE 'other'
    END AS provider,
    COUNT(*)AS total_users
FROM  users
GROUP BY provider

ORDER BY  total_users DESC;
```
<br/>

### 17. Building Web App
<Br/>

#### 303. Introducing Express
* install express
```javascript
npm init
npm install  express --save
```

<br/>

#### 306. Our Web App!
* starting place
```javascript
const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send("HELLO FROM OUR WEB");
});

app.listen(3000, function(){
    console.log("App Listening on #3000...");
})
```

<br/>

#### 310. Connecting Express and MySQL
* use query inside app.get
```javascript
app.get('/', function (req, res){
     // Respond with That Count
    const query = "SELECT COUNT(*) AS count FROM users";
    connection.query(query, function(error, results){
        if (error) throw error;
        res.send("we have " + results[0].count + " users in our db");
    });
```
<br/>

#### 312. Adding EJS Template
* Working with Views - Adding HTML to Our Web
* Install EJS Package
```javascript
app.set("view engine", "ejs");
```

<br/>

#### 314. Connecting The Form
* app.post('/register', function (req, res){
  * ...
* })
* Install bodyParser
  * npm install --save body-parser
  * app.use(bodyParser.urlencoded({extended:true}));

* Actually bodyParser is deprecated and express.urlencoded also Works!
* app.use(express.static('public'));!!!

<br/>

### 18. Database Triggers!
* SQL statements that are automatically run when a specific table is changed
* The Syntax
```sql
CREATE TRIGGER trigger_name
    trigger_time trigger_event ON table_name FOR EACH ROW
    BEGIN
    ...
    END;
```

* trigger_time - BEFORE, AFTER
* trigger_event - INSERT, UPDATE, DELETE
* table_name - photos, users

* always better to set some limitations on the client-side, but this is good to know

<br/>

#### 320. Writing Our Trigger1
* Example 1 - A Simple Validation!
```SQL
DELIMETER $$

CREATE TRIGGER must_be adult
    BEFORE INSERT ON people FOR EACH ROW
    BEGIN
        IF NEW.age < 18
        THEN
            SIGNAL SQLSTATE '45000'
                SET MESSAGE=TEXT = "Must be an adult!'";
        END IF;

    END;
$$

DELIMETER;
```

* NOTE:
  * 45000 - reservd for exceptional errors
  * DELIMETER $$ - changing the delimeter to be $$ instead of ; temporarily!

<br />

#### 323. Preventing Instagram Self-Followers With Triggers
* example 2
```sql
DELIMETER $$

CREATE TRIGGER prevent_self_follows
    BEFORE INSERT ON follows FOR EACH ROW
    BEGIN 
        IF NEW.followee_id = NEW.follower_id
        THEN

            SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT =  "You cannot follow yourself!";
        END IF;
    END;
$$

DELIMETER ;
```

<br/>

#### 324. Creating Logger Triggers
* Example 3 - Logging Unfollows
* Create unfollows table
```sql
CREATE TRIGGER unfollows_trigger
    AFTER  DELETE ON follows
    FOR EACH ROW
    BEGIN
        INSERT INTO unfollows(follower_id, followee_id) VALUES(OLD.follower_id,  OLD.followee_id);
        -- INSERT INTO unfollows
        --    SET 
        --    follower_id = OLD.follower_id,
        --    followee_id = OLD.followee_id;
    END
```

* then try
```sql
DELETE FROM follows WHERE follower_id = 2 AND followee_id = 1;

SELECT * FROM unfollows;
```

<br/>

#### 325. Managing Triggers and Warnings!
* show triggers;
* drop trigger trigger_namel;
* triggers can make debugging harder actually!
<br />

#### Extras - MySQL Tutorials.org
* mysqltutorial.org

1. MySQL Recursive CTE (Common Table Expression)
* a CTE is defined using **WITH**
* in MySQL, every query generates a temporary result or relation.

* recursive CTE is defined using **WITH RECURSIVE** clause
* series of generation & traversal of hierarchical or tree-structured data!

```SQL
WITH RECURSIVE
cte_name [(col1, col2, ...)]
AS (subquery)
Select col1, col2, .. from cte_name;
```

* Examples
```SQL
WITH RECURSIVE
odd_no (sr_no, n) AS
(
    SELECT 1, 1
    union all
    SELECT sr_no+1, n+2 from  odd_no where sr_no < 5
)
SELECT * FROM odd_no;

```

