# ✈️ AeroTrack — Fullstack Aviation Incident Management System

AeroTrack is a fullstack application designed to manage aviation incidents with secure authentication, role-based access control, and a modern UI.

The project is still in active development and serves as a portfolio project demonstrating backend and frontend engineering skills.

---

## 🧰 Stack

### Backend
- Java 17
- Spring Boot 3
- Spring Security + JWT
- PostgreSQL
- MapStruct
- Maven

### Frontend
- Angular
- Angular Material
- RxJS
- JWT Authentication

---

## 🚀 Features

### Authentication & Security
- JWT-based authentication
- Role-based access control (ADMIN / USER)
- Protected routes (frontend + backend)

### Incident Management
- Full CRUD (Create, Read, Update, Delete)
- Incident severity & status management
- Admin-only creation and modification

### Data Handling
- Pagination
- Filtering (keyword, severity)
- Sorting (server-side + client-side behavior)

### Frontend UI
- Angular Material interface
- Incident table with actions
- Role-based UI rendering
- Reactive forms for create/edit
- Route guards and HTTP interceptor

---

## 🏗 Architecture

### Backend
Clean layered architecture:
Controller → Service → Repository → DTO/Mapper

### Frontend
Modular Angular structure:
- feature-based modules
- route guards
- HTTP interceptor for JWT

---

## 🔌 Main API Endpoints

### Auth
- POST `/api/auth/login`

### Incidents
- GET `/api/incidents`
- POST `/api/incidents`
- PUT `/api/incidents/{id}`
- DELETE `/api/incidents/{id}`
- GET `/api/incidents/search`

---

## 📌 Status

✔ Backend MVP completed  
✔ Frontend MVP completed  
🚧 Ongoing improvements (UI polish, tests, Docker, CI/CD)

---

## 🎯 Purpose

This project is part of a portfolio aimed at backend / fullstack developer roles in enterprise environments (Spring Boot / Angular stacks).