# MERN Notes Application

A full-stack notes application built with MongoDB, Express.js, React, and Node.js.  
Easily create, view, update, and delete notes with a modern UI and RESTful backend.

## Features

- Create, read, update, and delete notes
- Responsive React frontend with Tailwind CSS and DaisyUI
- Express.js REST API backend
- MongoDB database integration
- Rate limiting for API security
- Toast notifications for user feedback

## Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI, React Router
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Other:** Upstash Redis (rate limiting), dotenv

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/Rishimehta0004/MERN-notes-application.git
cd MERN-notes-application
```

### 2. Install dependencies

#### Backend
```sh
cd backend
npm install
```

#### Frontend
```sh
cd ../frontend
npm install
```

### 3. Set up environment variables

Create a `.env` file in the `backend` folder with your MongoDB URI and other secrets:

```env
MONGO_URI=your_mongodb_connection_string
PORT=9000
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

### 4. Run the application

#### Backend
```sh
cd backend
npm run dev
```

#### Frontend
```sh
cd ../frontend
npm run dev
```

### 5. Open in browser

Visit [http://localhost:5173](http://localhost:5173) for the frontend.

## Folder Structure

```
backend/      # Express.js API and MongoDB models
frontend/     # React app with Tailwind CSS and DaisyUI
.gitignore    # Ignores nirma_internship/ and other files
README.md     # Project documentation
```

## Notes

- The folder `nirma_internship/` is ignored and not tracked by git.
- For API documentation, see backend route files.

## License

MIT
