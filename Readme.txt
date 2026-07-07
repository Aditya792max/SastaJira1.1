# SastaJira v1.1

A lightweight Jira-inspired project management application built using the MERN stack. The application is designed to simplify issue tracking, task assignment, and team collaboration through an intuitive and responsive interface. It provides essential project management features while maintaining a clean and easy-to-use experience for developers, students, and small teams.

---

# Features

* User Management

  * Create and manage users.
  * Store user information securely in MongoDB.

* Ticket Management

  * Create new tickets.
  * Update ticket details.
  * Delete tickets.
  * Track ticket status.
  * Assign tickets to team members.

* Ticket Details

  * Ticket ID
  * Description
  * Status
  * Priority
  * Type
  * Created By
  * Assigned To

* RESTful API

  * Well-structured CRUD APIs built with Express.js.
  * JSON-based request and response handling.

* Database Integration

  * MongoDB Atlas for cloud database storage.
  * Mongoose ODM for schema validation and database operations.

* Responsive Frontend

  * Built using React.
  * Simple and user-friendly interface.

---

# Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Tools

* Git
* GitHub
* Postman
* Nodemon
* Visual Studio Code

---

# Project Structure

```
SastaJira1.1
│
├── client
│   ├── public
│   ├── src
│   └── package.json
│
├── server
│   ├── Models
│   ├── Routes
│   ├── index.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

# Installation

Clone the repository.

```bash
git clone https://github.com/Aditya792max/SastaJira1.1.git
```

Move into the project directory.

```bash
cd SastaJira1.1
```

---

## Backend Setup

Navigate to the server folder.

```bash
cd server
```

Install dependencies.

```bash
npm install
```

Create a `.env` file and add the following variables.

```env
PORT=8080
MONGODB_URI=your_mongodb_connection_string
```

Start the backend server.

```bash
npm run dev
```

---

## Frontend Setup

Open a new terminal.

```bash
cd client
```

Install dependencies.

```bash
npm install
```

Run the React application.

```bash
npm start
```

---

# API Endpoints

## User APIs

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | `/user/create`     | Create a new user |
| GET    | `/user/getAll`     | Fetch all users   |
| GET    | `/user/get/:id`    | Fetch user by ID  |
| PUT    | `/user/update/:id` | Update user       |
| DELETE | `/user/delete/:id` | Delete user       |

---

## Ticket APIs

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/ticket/create`     | Create a new ticket |
| GET    | `/ticket/getAll`     | Fetch all tickets   |
| GET    | `/ticket/get/:id`    | Fetch ticket by ID  |
| PUT    | `/ticket/update/:id` | Update ticket       |
| DELETE | `/ticket/delete/:id` | Delete ticket       |

---

# Sample Ticket Request

```json
{
  "ticketId": "TICKET-101",
  "description": "Fix login authentication issue",
  "status": "Open",
  "priority": "High",
  "type": "Bug",
  "createdBy": "6870a8bfe2c7d65dcd7c3f81",
  "assignedTo": "6870a8cce2c7d65dcd7c3f85"
}
```

---

# Sample User Request

```json
{
  "name": "Aditya Vikram Kirtania",
  "email": "aditya@example.com"
}
```

---

# Future Improvements

* User authentication using JWT.
* Role-based access control.
* Project management module.
* Comments on tickets.
* File attachments.
* Activity logs.
* Dashboard with analytics.
* Search and filtering.
* Due dates and reminders.
* Email notifications.
* Drag-and-drop Kanban board.

---

# Learning Outcomes

This project helped in understanding:

* REST API development with Express.js.
* MongoDB schema design using Mongoose.
* CRUD operations.
* Client-server architecture.
* API testing with Postman.
* React component-based development.
* State management.
* Git and GitHub workflow.

---

# Contributing

Contributions are welcome. If you would like to improve the project, feel free to fork the repository, make your changes, and submit a pull request.

---

# Author

**Aditya Vikram Kirtania**

* GitHub: [https://github.com/Aditya792max](https://github.com/Aditya792max)

---

# License

This project is created for learning and educational purposes. Feel free to use, modify, and improve it for personal or academic projects.
