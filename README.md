# Simple Users API

This repository contains a minimal in-memory REST API for managing users, implemented in **Node.js** using the **Express.js** framework.

---

## Programming Language and Framework

* **Language:** JavaScript (Node.js v22.14.0)
* **Framework:** [Express.js](https://expressjs.com/)

---

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v14 or higher)
* [npm](https://www.npmjs.com/) (installed with Node.js)
* [Postman](https://www.postman.com/) (for API testing)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Rhodin1/simple-users-api.git
   cd simple-users-api
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

### Running the API

Start the server:

```bash
npm start
```

By default, the API listens on port `3000`. You can change this by setting the `PORT` environment variable.

---

## API Endpoints

### 1. Create a User

* **Endpoint:** `POST /users`
* **Headers:** `Content-Type: application/json`
* **Body:**

  ```json
  {
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```
* **Response:** `201 Created`

  ```json
  {
    "id": "<uuid>",
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```

#### Example `curl` request

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'
```

### 2. Get a User by ID

* **Endpoint:** `GET /users/:id`
* **Response:**

  * `200 OK` with the user object if found
  * `404 Not Found` if no user with that ID exists

#### Example `curl` request

```bash
curl http://localhost:3000/users/<uuid>
```

---