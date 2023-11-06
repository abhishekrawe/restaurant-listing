# Restaurant Listing Platform

Welcome to the Restaurant Listing platform.

## Features

- **Search:** Easily search for restaurants by restaurant name.
- **Add:** Add the new Restaurant list with Name, contact, address, and Image link.
- **Update:** Update the new Restaurant list with Name, contact, address, and Image link.
- **Delete:** Delete the Specific restaurant item from the list.

## Technologies Used

- **Frontend:** JavaScript, React.js, Material UI
- **Backend:** MySQL, Node.js, Express.js 

## 🃏Glimse of Project ⏬

### `video ` 

https://github.com/abhishekrawe/restaurant-listing/assets/65603830/3e85e43f-2c9f-4e6b-a9cd-ca23ae1da331




## MySQL Database Schema

### Table: restaurant

| Column   | Type          | Details              |
|----------|---------------|----------------------|
| id       | int           | Primary Key, Auto-increment |
| name     | varchar(45)   | Restaurant name      |
| address  | varchar(255)  | Address of the restaurant |
| contact  | varchar(45)   | Contact information   |
| picture  | varchar(350)  | Picture URL/link     |

### Description

The 'restaurant' table in the MySQL database contains crucial information about restaurants. Here's a breakdown of the columns:

- **id:** Unique identifier for each restaurant entry. It's set as the primary key and auto-increments to ensure each restaurant has a distinct identifier.
- **name:** A field to store the name of the restaurant.
- **address:** Contains the address information of the restaurant.
- **contact:** Stores contact details such as a phone number or email address.
- **picture:** A field to store a URL or a link pointing to a picture associated with the restaurant.

This schema design allows for efficient storage and retrieval of essential details related to various restaurants.


## Installation

To run the backend locally:

1. Clone this repository.
2. Navigate to the project directory.
3. Cd to Backend
4. Install dependencies using `npm install`.
6. Run `node index.js` to start the server.
7. Access the platform via your browser at `http://localhost:5500`.

To run the frontend locally:

1. Navigate to the project directory.
2. Cd to Frontend
3. Install dependencies using `npm install`.
4. Run `npm start` to start the client.
5. Access the platform via your browser at `http://localhost:3000`.

## Usage

1. Explore restaurants by searching.
3. Add Delete and Update the Item with name address contact and image link.

## Contributing

We welcome and encourage contributions. To contribute to the project:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make changes and commit them.
4. Push your changes to your branch.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

We want to extend our gratitude to the developers and contributors who have helped make this project possible.
