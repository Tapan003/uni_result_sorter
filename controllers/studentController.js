const studentBST = require('../models/Student');
const fs = require('fs');
const path = require('path');


const addStudent = (req, res) => {
    const { id, name, score } = req.body;

   
    if (score < 0 || score > 100) {
        return res.status(400).json({ message: "Invalid score. It must be between 0 and 100." });
    }

    
    const success = studentBST.addStudent(id, name, score);

    if (success) {
        res.status(201).json({ message: "Student added successfully!" });
    } else {
        res.status(400).json({ message: "Student ID already exists. Entry rejected!" });
    }
};

const getSortedStudents = (req, res) => {
    const sortedStudents = studentBST.inOrderTraversal();
    res.status(200).json(sortedStudents.map((s, index) => ({
        rank: index + 1,
        id: s.id,
        name: s.name,
        score: s.score,
    })));
    const fileContent = JSON.stringify(dataToWrite, null, 2);

    // Define the file path
    const filePath = path.join(__studentController.js, '..', 'sorted_students.json');

    // Write the sorted data to the file
    fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).json({ message: 'Failed to save sorted data to file.' });
        }

        // Respond with the sorted data
        res.status(200).json({
            message: 'Sorted data successfully saved to file.',
            sortedStudents: dataToWrite,
        });
    });
};




const searchStudent = (req, res) => {
    const { score } = req.params;
    const student = studentBST.searchStudent(Number(score));
    if (student) {
        res.status(200).json({
            id: student.id,
            name: student.name,
            score: student.score,
        });
    } else {
        res.status(404).json({ message: "Student not found!" });
    }
};

module.exports = {
    addStudent,
    getSortedStudents,
    searchStudent,
};
