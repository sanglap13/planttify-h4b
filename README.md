# Planttify 🌿 (Web Application)

Planttify is a comprehensive platform that provides two distinct frontends: one for Customer Relationship Management (CRM) and another for client-side use. The client-side application includes a heat zone detector to determine the optimal plantation zones based on the temperature of a location and its sub-locations.

## Introduction

Planttify is designed to assist both administrators and users in managing plantation activities effectively. The platform offers:

- **CRM Frontend:** A robust tool for managing customer relationships, tracking interactions, and organizing plantation-related data.
- **Client-side Application:** A user-friendly interface where clients can identify suitable plantation zones based on heat zone detection.
- **Backend:** Built using Spring Boot, the backend handles all the business logic and data management. It provides RESTful APIs for the frontend applications to interact with. The backend is responsible for user authentication, data processing, and integration with the machine learning model for temperature prediction.

## Features

### CRM Frontend

- Customer data management
- Interaction tracking
- Data visualization and reporting
- Task and project management

### Client-side Application

- Heat zone detection for plantations
- Visualization of heat zones for specific locations and their sub-locations
- User-friendly interface for easy interaction

### Machine Learning

- Temperature prediction using an ML model
- Data analysis on the "daily temperature of major cities" dataset

## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)
- Java Development Kit (JDK) 17, Spring Boot
- A modern web browser

### Steps

### Frontend

1. Clone the repository:
    
    ```bash
    git clone https://github.com/your-username/planttify.git
    cd planttify/frontend
    
    ```
    
2. Install dependencies:
    
    ```bash
    npm install
    
    ```
    
3. Start the development server:
    
    ```bash
    npm start
    
    ```
    
4. Open your browser and navigate to `http://localhost:3000`.

## Usage

### CRM Frontend

1. Log in using your administrator credentials.
2. Navigate through the dashboard to manage customers, view reports, and track interactions.

### Client-side Application

1. Enter the desired location for plantation.
2. Use the heat zone detector to find the optimal planting zones based on temperature data.
3. View the heat zones for sub-locations to make informed decisions about plantation.

## Project Structure

```css
cssCopy code
planttify/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   └── utils/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   ├── test/
│   │   │   ├── java/
│   │   │   └── resources/
├── ml-model/
│   ├── model.py
│   ├── requirements.txt
├── .gitignore
├── package.json
├── README.md
└── ... (other configuration files)

```

## Technologies Used

- **Frontend:** React.js, Redux, Material-UI
- **Machine Learning:** TensorFlow, scikit-learn, NumPy, pandas
- **Deployment:** Google Cloud Platform (GCP)
- **Others:** Chart.js, Axios


----

## Backend

## Prerequisites

- **JDK 17**: Ensure you have JDK 17 installed on your system.
- **IntelliJ IDEA Ultimate**: This project is developed using IntelliJ IDEA Ultimate.
- **Maven**: Used for dependency management.

## Project Structure

The project is divided into several packages as shown in the following structure:

```
com.devmare.hack4bengal
│
├── business
│   ├── domain
│   │   └── DefaultResponse.java
│   ├── dto
│   │   ├── AuthResponseDto.java
│   │   ├── CreateGroupDto.java
│   │   ├── GroupJoinDto.java
│   │   ├── LoginRequestDto.java
│   │   ├── RefreshTokenRequestDto.java
│   │   └── RegisterRequestDto.java
│   └── service
│       ├── impl
│       │   ├── GroupServiceImpl.java
│       │   └── UserServiceImpl.java
│       ├── GroupService.java
│       └── UserService.java
│
├── configuration
│   └── AppConfig.java
│
├── controller
│   ├── exception
│   ├── AppTestController.java
│   ├── AuthController.java
│   ├── GroupController.java
│   └── UserController.java
│
├── data
│   ├── enums
│   │   └── Role.java
│   ├── exceptions
│   │   └── UserInfoException.java
│   ├── model
│   │   ├── Group.java
│   │   ├── RefreshToken.java
│   │   ├── Roles.java
│   │   └── User.java
│   └── repository
│       ├── GroupRepository.java
│       ├── RefreshTokenRepository.java
│       └── UserRepository.java
│
├── security
│   ├── AuthFilter.java
│   ├── AuthService.java
│   ├── JwtService.java
│   ├── RefreshTokenService.java
│   └── SecurityConfig.java
│
└── Hack4BengalApplication.java
```

### Detailed Description

- **`business`**: Contains business logic, domain models, DTOs, and service classes.
  - **`domain`**: Domain models.
  - **`dto`**: Data Transfer Objects (DTOs) used for API requests and responses.
  - **`service`**: Service layer containing business logic.
  
- **`configuration`**: Contains configuration classes.
  - **`AppConfig.java`**: Application configuration class.
  
- **`controller`**: REST controllers for handling API requests.
  - **`exception`**: Contains custom exceptions.
  - **`AppTestController.java`**: Controller for testing purposes.
  - **`AuthController.java`**: Handles authentication-related requests.
  - **`GroupController.java`**: Manages group-related requests.
  - **`UserController.java`**: Manages user-related requests.
  
- **`data`**: Data layer containing enums, exceptions, models, and repositories.
  - **`enums`**: Enumerations used in the project.
  - **`exceptions`**: Custom exceptions for data layer.
  - **`model`**: Data models representing database entities.
  - **`repository`**: Spring Data repositories for database operations.
  
- **`security`**: Security-related classes, including authentication and JWT handling.
  - **`AuthFilter.java`**: Filter for authentication.
  - **`AuthService.java`**: Service handling authentication logic.
  - **`JwtService.java`**: Service for JWT operations.
  - **`RefreshTokenService.java`**: Service for refresh token management.
  - **`SecurityConfig.java`**: Security configuration class.
  
- **`Hack4BengalApplication.java`**: Main class to bootstrap the Spring Boot application.

## Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/hack4bengal.git
   cd hack4bengal
   ```

2. **Import the project into IntelliJ IDEA Ultimate:**
   - Open IntelliJ IDEA Ultimate.
   - Click on `File > Open` and select the project directory.

3. **Build the project:**
   ```sh
   mvn clean install
   ```

4. **Run the application:**
   ```sh
   mvn spring-boot:run
   ```

## Configuration

Update the `application.yml` file with the following configuration:

## Hosted URL

The project is hosted on Google Cloud Platform (GCP) App Engine. The base URL for the API is:

`https://hack4bengal-427818.df.r.appspot.com`

## API Documentation

### Authentication APIs

#### Register

- **Endpoint:** `POST /api/v1/auth/register`
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string",
    "email": "string"
  }
  ```
- **Response:**
  ```json
  {
    "status": "SUCCESS",
    "data": {
      "id": "string",
      "username": "string",
      "email": "string"
    },
    "message": "Registration successful"
  }
  ```

#### Login

- **Endpoint:** `POST /api/v1/auth/login`
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "status": "SUCCESS",
    "data": {
      "accessToken": "string",
      "refreshToken": "string"
    },
    "message": "Login successful"
  }
  ```

#### Refresh Token

- **Endpoint:** `POST /api/v1/auth/refresh-token`
- **Request Body:**
  ```json
  {
    "refreshToken": "string"
  }
  ```
- **Response:**
  ```json
  {
    "status": "SUCCESS",
    "data": {
      "accessToken": "string",
      "refreshToken": "string"
    },
    "message": "Token refreshed successfully"
  }
  ```

### Group APIs

#### Create Group

- **Endpoint:** `POST /api/v1/group/create`
- **Request Body:**
  ```json
  {
    "name": "string",
    "description": "string"
  }
  ```
- **Response:**
  ```json
  {
    "status": "SUCCESS",
    "data": {
      "groupId": "string",
      "name": "string",
      "description": "string"
    },
    "message": "Group created successfully"
  }
  ```

#### Join Group

- **Endpoint:** `POST /api/v1/group/join`
- **Request Body:**
  ```json
  {
    "groupId": "string",
    "userId": "string"
  }
  ```
- **Response:**
  ```json
  {
    "status": "SUCCESS",
    "data": {
      "groupId": "string",
      "userId": "string"
    },
    "message": "Group joined successfully"
  }
  ```

#### Get All Groups

- **Endpoint:** `GET /api/v1/group/all`
- **Response:**
  ```json
  {
    "status": "SUCCESS",
    "data": {
      "groups": [
        {
          "groupId": "string",
          "name": "string",
          "description": "string"
        },
      ]
    },
    "message": "All groups fetched successfully"
  }
  ```

### User APIs

#### Get All Users

- **Endpoint:** `GET /api/v1/user/all`
- **Response:**
  ```json
  {
    "status": "SUCCESS",
    "data": {
      "users": [
        {
          "id": "string",
          "username": "string",
          "email": "string"
        },
        ...
      ]
    },
    "message": "Users fetched successfully"
  }
  ```

## Contributing

We welcome contributions to Planttify! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.
