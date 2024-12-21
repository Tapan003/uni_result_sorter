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
    const sortedStudents = studentBST.inOrderTraversal().reverse();

    const dataToWrite = sortedStudents.map((s, index) => ({
        rank: index + 1,
        id: s.id,
        name: s.name,
        score: s.score,
    }));

    // const dirPath = path.join(studentController.js, '..', 'output.json');
    // if (!fs.existsSync(dirPath)) {
    //     fs.mkdirSync(dirPath); 
    // }
    // const filePath = path.join(dirPath, 'output.json');

    fs.writeFile('university-result-system\controllers\sorted_students.json', JSON.stringify(dataToWrite, null, 2), (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).json({ message: 'Failed to save sorted data to file.' });
        }

        res.status(200).json({
            message: 'Sorted data successfully saved to file.',
            filePath: 'university-result-system\controllers\sorted_students.json', 
            sortedStudents: dataToWrite,
        });
    });
};




const searchStudent = (req, res) => {
    const { type, value } = req.params;

    if (type === 'score') {
        const student = studentBST.searchStudent(Number(value));
        if (student) {
            res.status(200).json({
                id: student.id,
                name: student.name,
                score: student.score,
            });
        } else {
            res.status(404).json({ message: "Student not found by score!" });
        }
    } else if (type === 'id') {
        const student = studentBST.searchStudentById(Number(value));
        if (student) {
            res.status(200).json({
                id: student.id,
                name: student.name,
                score: student.score,
            });
        } else {
            res.status(404).json({ message: "Student not found by ID!" });
        }
    } else {
        res.status(400).json({ message: "Invalid search type. Use 'id' or 'score'." });
    }
};


module.exports = {
    addStudent,
    getSortedStudents,
    searchStudent,
};
