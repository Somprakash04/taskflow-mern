
# 🗂️ TaskFlow - Role-Based Task Management System

A role-based task management system built with the **MERN stack** (MongoDB, Express, React with Vite, Node.js) that allows **Admins** to create and assign tasks, **Managers** to monitor progress, and **Employees** to complete and update their assigned tasks.

## 🚀 Features

- 🔐 Role-based authentication (Admin, Manager, Employee)
- ✅ Admin can assign tasks to Employees
- 📊 Manager can track the progress of all tasks
- 🧑‍💻 Employee dashboard to view and update assigned tasks
- 📅 Task status updates: **Pending → In Progress → Completed**
- 🔒 JWT-based secure login system
- 📦 MongoDB for task and user storage

## 🧱 Tech Stack

| Frontend         | Backend         | Database   | Others        |
|------------------|------------------|------------|----------------|
| React (Vite)     | Node.js          | MongoDB    | JWT Auth       |
| React Router DOM | Express.js       | Mongoose   | Bcrypt.js      |
| Axios            | CORS, dotenv     |            | Nodemon        |

---

## 📁 Folder Structure

```
project-root/
├── client/                  # React (Vite) frontend
|   ├── public/
│   ├── src/
│   │   ├── components/      # UI Components
│   │   ├── pages/           # Pages by role (Admin, Manager, Employee)
│   │   ├── context/         # Auth context
│   │   └── main.jsx
│   ├── vite.config.js
|   └── index.html
├── server/                  # Node + Express backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── .env
├── package.json
└── README.md
```

---

## 🛠️ Installation and Setup

### Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)

### 1. Clone the Repository

```bash
git clone https://github.com/Somprakash04/taskflow-mern.git
cd taskflow-mern
```

### 2. Backend Setup (Express + MongoDB)

```bash
cd server
npm install
```

Create a `.env` file in `/server`:

```
PORT=8000
MONGO_URL=mongodb://localhost:27017/taskflowDB
JWT_SECRET=yourSecretKey
```

Run the server:

```bash
npm server.js
```

### 3. Frontend Setup (React with Vite)

```bash
cd ../client
npm install
npm run dev
```

---

## 🔑 User Roles & Access

| Role     | Capabilities                                         |
|----------|------------------------------------------------------|
| Admin    | Add users, create tasks, assign tasks to employees   |
| Manager  | View task list, monitor progress                     |
| Employee | View assigned tasks, update status                   |

---


## 🧪 Future Features

- Email notifications on task assignment
- File uploads with tasks
- Comments system on each task
- Analytics dashboard for Admin

---

## 🙌 Contributing

Pull requests are welcome! Feel free to open issues or suggest features.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## ✨ Author

Made with ❤️ by [Sp Arun](https://github.com/Somprakash04)
