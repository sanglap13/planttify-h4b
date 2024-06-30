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
- Java Development Kit (JDK)
- Apache Maven
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

### Backend

1. Navigate to the backend directory:
    
    ```bash
    cd ../backend
    
    ```
    
2. Build the project using Maven:
    
    ```bash
    mvn clean install
    
    ```
    
3. Run the Spring Boot application:
    
    ```bash
    mvn spring-boot:run
    
    ```
    
4. The backend server will start on `http://localhost:8080`.

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
- **Backend:** Spring Boot, Java
- **Database:** MongoDB
- **Machine Learning:** TensorFlow, scikit-learn, NumPy, pandas
- **Deployment:** Google Cloud Platform (GCP)
- **Others:** Chart.js, Axios

## Contributing

We welcome contributions to Planttify! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.
