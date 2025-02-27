# SaaS Project Management Platform #

A simple SaaS platform for project management, built with React (Vite) for the frontend and Node.js (Express) with MongoDB for the backend. Users can register, log in, create projects, and manage tasks.

Features

✔ User Authentication (Register, Login)
✔ Create, View, and Manage Projects
✔ Secure JWT-based Authentication
✔ MongoDB Integration
✔ REST API with Express.js
✔ Responsive UI with React

Tech Stack

Frontend:
	•	React (Vite)
	•	React Router
	•	Axios

Backend:
	•	Node.js (Express)
	•	MongoDB with Mongoose
	•	JWT Authentication
	•	bcrypt.js for Password Hashing

Setup & Installation

1. Clone the Repository

git clone https://github.com/Calo08/saas-project-management
cd saas-project-management

2. Backend Setup (Node.js + Express + MongoDB)
	1.	Navigate to the backend folder:

cd project-management-backend


	2.	Install dependencies:

npm install


	3.	Create a .env file and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


	4.	Start the backend server:

node server.js

✅ Server will run on http://localhost:5000

3. Frontend Setup (React + Vite)
	1.	Navigate to the frontend folder:

cd ../project-management-frontend


	2.	Install dependencies:

npm install


	3.	Start the React app:

npm run dev

✅ App will run on http://localhost:5173

API Endpoints

Authentication

Method	Endpoint	Description
POST	/register	Register a new user
POST	/login	Authenticate a user

Projects

Method	Endpoint	Description
POST	/projects	Create a new project
GET	/projects	Get all projects

Usage Guide
	1.	Register a user on the /register page.
	2.	Login and get redirected to the projects page.
	3.	Create new projects and view them.

Deployment Guide

Deploy Backend on Render
	1.	Push backend code to GitHub.
	2.	Create a new service on Render.
	3.	Set up environment variables (MONGO_URI, JWT_SECRET).
	4.	Deploy & get backend URL (e.g., https://your-api.onrender.com).

Deploy Frontend on Vercel
	1.	Push frontend code to GitHub.
	2.	Create a new project on Vercel.
	3.	Deploy & update API URLs to Render backend URL.

Contributing
	1.	Fork the repo
	2.	Create a new branch
	3.	Commit changes
	4.	Open a pull request

License

This project is open-source and available under the MIT License.
