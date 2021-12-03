# Hotel-Management-Website
A hotel website using React-TypeScript, C#, and PostgreSQL.

## Description

This is a **work-in-progress** personal project focused on practising React hooks and CRUD (Create, Read, Update, Delete) operations.

The project has a **React-TypeScript** front-end. TypeScript was chosen over JavaScript because of its superiority in preventing errors. It was important to get practice using TypeScript as it is used widely in production code. React was chosen over other libraries following a similar mindset. 

The back-end of this application was developed in **C#**. 

Relationships between various schemas was an important part of this project, thus, the application uses a **PostgreSQL** relational database. 

A code-first approach was used for creating the schemas and to specify the relationships amongst them. **Entity Framework** was used to handle migrations.

**Git** was used to handle version control throughout development.

## Installation

To get setup, download this code, and then run the following command in the root directory of the app:

    dotnet run

Go to the */frontend* directory and run the following commands:

    npm install
    npm start

This should start the app, and we can see it by going to http://localhost:3001 in the browser.

## Usage

There are various things to try on the app. You can:

* Filter the available rooms by selecting a location, dates, and the number of guests. 
* Once these fields are selected, you can make a reservation. This will create a new reservation on the database and prevent the same room to be booked on those dates. 
* You can also login as an administrator to make CRUD operations on the database. 

## Future work
The following features will soon be added to the app:
* JSON web tokens for authentication of users. 
* Redux to handle states in React.

## License
[MIT](https://mit-license.org/) License


    

    



