const studentBST = require('../models/Student');

const addStudent = (req, res) => {
    const { id, name, score } = req.body;
    studentBST.addStudent(id, name, score);
    res.status(201).json({ message: "Student added successfully!" });
};

const getSortedStudents = (req, res) => {
    const sortedStudents = studentBST.inOrderTraversal();
    res.status(200).json(sortedStudents.map((s, index) => ({
        rank: index + 1,
        id: s.id,
        name: s.name,
        score: s.score,
    })));
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
