University Exam Result Processing System
A lightweight Node.js-based application for managing university exam results. It uses a Binary Search Tree (BST) to efficiently handle operations like searching, sorting, and ranking students based on their exam scores.

Features
Add new student results (ID, Name, Score).
Get students sorted by scores and their corresponding ranks.
Search for a student by their score using a Binary Search Tree.
Setup Instructions
1. Prerequisites
Install Node.js (v14 or later).
2. Initialize the Project
If you haven’t already, initialize the project:


npm init -y
3. Install Required Packages
Install the only required dependency:
npm install express
Directory Structure
/university-result-system
|-- /models
|   |-- Student.js         # Defines the BST and its methods
|-- /controllers
|   |-- studentController.js  # Logic for adding, searching, and sorting students
|-- /routes
|   |-- studentRoutes.js    # API routes for student operations
|-- server.js               # Main entry point for the server
How to Run the Application
Start the server:
node server.js
By default, the server runs on http://localhost:3000.

API Endpoints
1. Add a Student
Endpoint: POST /students/add
Description: Adds a new student to the BST.

Request Body Example:
{
    "id": "S123",
    "name": "Alice",
    "score": 85
}
Response:
{
    "message": "Student added successfully!"
}
2. Get Sorted Students
Endpoint: GET /students/sorted
Description: Retrieves a sorted list of students with ranks.

Response Example:
[
    { "rank": 1, "id": "S124", "name": "Bob", "score": 75 },
    { "rank": 2, "id": "S123", "name": "Alice", "score": 85 },
    { "rank": 3, "id": "S125", "name": "Charlie", "score": 95 }
]
3. Search for a Student
Endpoint: GET /students/search/:score
Description: Searches for a student by their score.

Example:
Search for a student with a score of 85:
GET /students/search/85
Response (if found):
{
    "id": "S123",
    "name": "Alice",
    "score": 85
}
Response (if not found):
{
    "message": "Student not found!"
}
Project Files
server.js
Sets up the Express server and mounts routes.

/models/Student.js
Defines the BST structure and utility methods for adding, searching, and sorting students.

/controllers/studentController.js
Contains the logic for adding students, fetching sorted results, and searching.

/routes/studentRoutes.js
Defines the API routes for managing students.

