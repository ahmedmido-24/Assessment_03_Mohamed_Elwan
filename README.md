# 📘 Assignment 4 – Express.js & ERD

---

## 🔍 Overview

This assignment focuses on building **CRUD APIs using Express.js**, handling data persistence with the **fs module**, and designing an **ERD diagram** based on given business rules.
All tasks are implemented with simplicity and clarity, following the assignment constraints.

---

## 🟢 Part 1: Simple CRUD Operations Using Express.js

### 📁 Data Handling Rules

* User data is stored in a **JSON file** (e.g., `users.json`).
* The `fs` module is used for all read/write operations.
* Data is **not stored or managed using in-memory arrays**.

---

### 📌 API Endpoints

* **POST** `/user`
  Add a new user to the JSON file after ensuring the email is unique.

* **PATCH** `/user/:id`
  Update an existing user’s name, age, or email using the user ID from request params.

* **DELETE** `/user/:id`
  Delete a user using the ID provided in params or request body.

* **GET** `/user/getByName`
  Retrieve a user by name using a query parameter.

* **GET** `/user`
  Retrieve all users from the JSON file.

* **GET** `/user/filter`
  Filter users by minimum age using query parameters.

* **GET** `/user/:id`
  Retrieve a single user by ID.

---

## 🟣 Part 2: ERD Diagram – Musicana Records

This part focuses on designing an **Entity Relationship Diagram (ERD)** for the Musicana records database.

### 📄 Description

* Musicians are stored with personal and contact information.
* Instruments have unique names and musical keys.
* Albums contain multiple songs and have a single producer.
* Songs belong to only one album and are performed by one or more musicians.
* Musicians can play multiple instruments and perform multiple songs.
* Producers can produce multiple albums.

The ERD visually represents all entities, attributes, and relationships according to the provided rules.

---

## 👤 Author

**Ahmed Mokhtar**
GitHub: [https://github.com/ahmedmido-24](https://github.com/ahmedmido-24)
