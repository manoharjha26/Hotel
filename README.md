
# Hotel Booking Application

This is a modern hotel booking application built using the MERN stack, a popular choice for web development due to its scalability and flexibility.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication and authorization
- Secure password storage with bcrypt
- Hotel room booking and management
- Interactive UI with React
- RESTful API with Express and MongoDB

## Installation

### Prerequisites
- Node.js
- MongoDB

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/manoharjha26/Hotel.git
   cd Hotel/api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `api` directory and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the `client` directory:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Usage
- Open your browser and navigate to `http://localhost:3000` to access the application.
- Register or log in to book and manage hotel rooms.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the ISC License.
