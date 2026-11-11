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
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/13c554ac-dcdf-4bd1-b444-736ef09f8bca" />
<img width="1920" height="1080" alt="image (6)" src="https://github.com/user-attachments/assets/0e47a1ae-27f1-4264-b7ae-377e6ee3ee6e" />
<img width="1920" height="1080" alt="image (5)" src="https://github.com/user-attachments/assets/a2899777-53be-4166-a844-3d19a9c0ec31" />
<img width="1920" height="1080" alt="image (4)" src="https://github.com/user-attachments/assets/42dffaca-8442-4de1-ae45-7029222e52b4" />
<img width="1920" height="1080" alt="image (3)" src="https://github.com/user-attachments/assets/ee3c1c5e-9d04-4dc1-a284-be31bae71a89" />
<img width="1920" height="1080" alt="image (2)" src="https://github.com/user-attachments/assets/2ba90492-29a5-4efe-a89f-e60f020b4166" />
<img width="1920" height="1080" alt="image (1)" src="https://github.com/user-attachments/assets/3df9bbd2-9dde-4a1b-bef0-c1fbb0aa2076" />


## Future Improvements
- Admin dashboard for managing vehicles and bookings
- Email and SMS booking confirmations
- Ratings and reviews for vehicles


