# 📚 GraphQL CRUD API with Express, Yoga & MongoDB

A simple CRUD (Create, Read, Update, Delete) API built using **GraphQL Yoga**, **Express**, and **MongoDB**.  
This project demonstrates how GraphQL differs from REST by allowing flexible queries and mutations from a single endpoint.

---

## 🚀 Tech Stack
- **Node.js**
- **Express.js**
- **GraphQL Yoga**
- **MongoDB + Mongoose**

---

## 🏗️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone <your-repo-url>
cd graphql

```

## 2️⃣ Install dependencies
```bash
npm install
```
## 3️⃣ Start MongoDB (Locally or via Mongo Atlas)
```bash
sudo service mongod start

```
## 4️⃣ Run the server
```bash
npm start 
```

## 📘 GraphQL Operations

Below are sample queries and mutations you can test directly in GraphiQL Playground or tools like Bruno, Postman, or Apollo Sandbox.

```bash
#CREATE
mutation {
  addBook(title: "pradip Code", author: "Robert C. Martin", year: 2008) {
    id
    title
    author
  }
}

#GET
query {
  books {
    id
    title
    author
  }
}

# UPDATE
mutation {
  updateBook(
    id: "68f3b7e08cb208d10c007b7d"
    title: "The Pragmatic Programmer"
    author: "Andrew Hunt"
    year: 1999
  ) {
    id
    title
    author
    year
  }
}

#DELETE
mutation {
  deleteBook(id: "68f3b8048cb208d10c007b7f")
}

```

## 🗂️ Project Structure
```bash
graphql/
│
├── models/
│   └── Book.js          # Mongoose model for books
│
├── resolvers.js         # Query & Mutation logic
├── schema.js            # GraphQL type definitions
├── server.js            # Express + Yoga + MongoDB setup
└── package.json

```