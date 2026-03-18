# Event Booking Application

## Overview

This project is a simple Event Booking web application that allows users to view available events and book seats by providing basic details. The application demonstrates a complete end-to-end implementation using a modern frontend and backend with REST APIs and in-memory data storage.

The primary objective is to showcase clean architecture, correct API integration, and real-time seat availability updates after booking.

---

## Tech Stack

### Frontend (client)

* React
* Vite
* React Query (TanStack Query)
* Tailwind CSS
* Axios

### Backend (api)

* Node.js with Express
  (or Spring Boot, if implemented in Java)
* RESTful APIs
* In-memory data storage (no database)

---

## Features

* View list of available events
* Display event title, date, and available seats
* Book an event using name and email
* Real-time seat reduction after successful booking
* Sold-out state when seats are unavailable
* Loading and error handling states
* Client-side form validation
* Success and error notifications
* Modal booking form (if implemented)
* Responsive layout
* Clean component-based structure

---

## Project Structure

event-booking-app/

client/
  src/
    components/
    pages/
    hooks/
    api/
  package.json

api/
  Backend source code
  API implementation

README.md

---

## API Endpoints

### GET /events

Returns a list of available events.

Each event object contains:

* id
* title
* date
* availableSeats

---

### POST /book

Books a seat for a selected event.

Request Body:

{
"eventId": number,
"name": string,
"email": string
}

Validation:

* Event must exist
* Seats must be available

On Success:

* Seat count is reduced
* Updated event data is returned

On Failure:

* Appropriate error message is returned

---

## Setup Instructions

### Prerequisites

* Node.js installed
* npm installed
* (If applicable) Java and Maven for Spring Boot backend

---

### Backend Setup

Navigate to the api folder:

cd api

Install dependencies:

npm install

Start the server:

npm start

For Spring Boot:

mvn spring-boot:run

The backend will run on the configured port.

---

### Frontend Setup

Navigate to the client folder:

cd client

Install dependencies:

npm install

Run the development server:

npm run dev

The frontend will run on a local development server.

---

## Assumptions and Limitations

* Data is stored in memory; no database is used
* All data resets when the server restarts
* Email functionality is optional or simulated
* Designed for demonstration and evaluation purposes
* Not intended for production deployment

---

## Possible Improvements

* Add persistent database storage
* Implement authentication and authorization
* Prevent duplicate bookings per user
* Add comprehensive backend validation
* Enhance UI/UX and accessibility
* Add automated tests
* Deploy frontend and backend services

---

## Conclusion

This project focuses on delivering a clear, maintainable, and functional solution that satisfies the core requirements of an event booking system while demonstrating full-stack development skills and proper application structure.
