#Car-Rental-System
A trip booking web application for renting cars and bikes, designed for developing cities. Users can browse vehicles, book trips, see real-time location, pay securely, and share feedback.

## Features

- Browse and book cars and bikes
- Real-time geolocation to find your location and nearby vehicles
- Destination-based pricing
- Secure online payments
- Feedback forms for customers
- Responsive design that works on mobile, tablet, and desktop
- Accessibility improvements for a better user experience

## Tech Stack

**Frontend**
- ReactJS
- HTML5, CSS3, JavaScript
- Bootstrap

**Backend**
- Java
- Spring Boot
- JPA / Hibernate (ORM)

**Database**
- MySQL

## Project Structure

```
Car-Rental-System/
├── frontend/     # ReactJS application
├── backend/      # Spring Boot application
└── README.md
```

## Getting Started

### Prerequisites
- Node.js and npm
- JDK 17 (or the version you use)
- Maven
- MySQL

### 1. Clone the repository
```bash
git clone https://github.com/sakshikubde/Car-Rental-System.git
cd Car-Rental-System
```

### 2. Set up the database
Create a MySQL database:
```sql
CREATE DATABASE car_rental;
```
Update the database name, username, and password in `backend/src/main/resources/application.properties`.

### 3. Run the backend
```bash
cd backend
mvn spring-boot:run
```
The server starts at `http://localhost:8080`.

### 4. Run the frontend
```bash
cd frontend
npm install
npm start
```
The app opens at `http://localhost:3000`.

## Screenshots
_Add screenshots of your home page, booking page, and payment page here._

## Future Improvements
- Admin dashboard for managing vehicles and bookings
- Email and SMS booking confirmations
- Ratings and reviews for vehicles


