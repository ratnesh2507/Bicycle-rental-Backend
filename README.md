# Bicycle Rental Backend

This repository contains the backend services for a Bicycle Rental System, built with Node.js and Express.js.
To check out the Frontend of this Project, click below 👇
## [FrontEnd](https://github.com/ratnesh2507/Bicycle-Rental-System)

## Features

- User authentication and authorization
- Bicycle inventory management
- Rental operations (renting and returning bicycles)
- Rental history tracking

## Technologies Used

- Node.js
- Express.js
- MongoDB (or any specified database)
- JWT for authentication
- Docker (if applicable)

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ratnesh2507/Bicycle-rental-Backend.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Bicycle-rental-Backend
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

### Configuration

1. Create a `.env` file in the root directory and add your environment variables (example below):
    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

### Running the Application

1. Start the server:
    ```sh
    npm run dev
    ```
2. The server will run on `http://localhost:3000`.

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Authenticate a user and return a JWT.

### Bicycles

- `GET /api/bicycles`: Retrieve a list of available bicycles.
- `POST /api/bicycles`: Add a new bicycle (Admin only).
- `PUT /api/bicycles/:id`: Update bicycle details (Admin only).
- `DELETE /api/bicycles/:id`: Delete a bicycle (Admin only).

### Rentals

- `POST /api/rentals/rent`: Rent a bicycle.
- `POST /api/rentals/return`: Return a rented bicycle.
- `GET /api/rentals/history`: View rental history of the logged-in user.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions, please open an issue or contact the repository owner.
