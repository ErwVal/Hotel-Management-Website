# Hotel-Management-Website
A hotel website in React-TypeScript and C# ASP.NET.

## Stack used:

- React Typescript
- C# ASP.NET
- Authentication with JSON Web Tokens
- Relational PostgreSQL database
- Entity Framework
- Boostrap
- Sass
- framer-motion


## Description

This project focused on practising React and CRUD (Create, Read, Update, Delete) operations.

The website has a **React-TypeScript** front-end. TypeScript was chosen over JavaScript because of its superiority in preventing errors. It was important to get practice using TypeScript as it is more commonly in production code. React was chosen over other libraries following a similar mindset. 

For styling, I used Bootstrap and Sass, alongside framer-motion to create animations when switching pages. 

The back-end of this application was developed in **C#**. 

Relationships between various schemas was an important part of this project, thus, the application uses a **PostgreSQL** relational database. 

A code-first approach was used for creating the schemas and to specify the relationships amongst them. **Entity Framework** was used to handle migrations.

**Git** was used to handle version control throughout development.


## Demo:

https://user-images.githubusercontent.com/85710692/147130549-022adafd-8d96-442f-95f9-ae2b13aa2f27.mp4



## Installation

To get setup, download this code, and then run the following command in the root directory of the app:

    dotnet run

Go to the */frontend* directory and run the following commands:

    npm install
    npm start

This should start the app, and we can see it by going to http://localhost:3000 in the browser.

## Usage

There are various things to try on the app. You can:

* Filter the available rooms by selecting a location, dates, and the number of guests. 
* Once these fields are selected, you can make a reservation. This will create a new reservation on the database and prevent the same room to be booked on those dates. 
* You can create a profile and look at the rooms you have booked. 
* You can amend the arrival/departure dates.
* You can amend the number of guests for your reservation.
* You can cancel your reservation.
* You can send a message to the administration using the contact form. The form will ask for your contact details if you are not logged in. 

## Future work
The following features will soon be added to the app:
* Redux to handle states in React.

## License
[MIT](https://mit-license.org/) License


    

    



