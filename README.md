# Splash Application

Splash is a React application designed to fetch YouTube videos using the Rapid API. It utilises MongoDB for data storage and Express.js along with Node.js for the backend functionality.

## Features

- Fetch YouTube videos using the Rapid API.
- Store fetched videos in MongoDB for future reference.
- Utilize Express.js and Node.js for backend operations.
- Incorporate shimmer UI for a visually appealing user experience.

## Installation

To run this application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install all necessary dependencies.
4. Create a `.env` file in the root directory and add your Rapid API key and MongoDB connection string in the following format:

RAPID_API_KEY=your_rapid_api_key
MONGO_DB_CONNECTION=your_mongodb_connection_string

5. Run `npm start` to start the development server.

## Usage

Once the application is running, you can access it through your web browser. It will fetch YouTube videos based on your search queries using the Rapid API. You can then view, like, and comment on these videos. The application will store your interactions in the MongoDB database.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

