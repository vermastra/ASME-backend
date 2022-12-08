const Student = require("../models/studentModel"); //schema
const cloudinary = require("cloudinary");

exports.addStudent = async (req, res) => {
    try {

        const myCloud = await cloudinary.v2.uploader.upload(req.body.payment, {
            folder: "payment",
        });
        const { eventName, firstName, lastName, email, scholarId, address } = req.body;
        const student = await Student.create({
            eventName,
            firstName,
            lastName,
            email,
            scholarId,
            address,
            payment: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            }
        });
        res.status(201).json({
            success: true,
            student,
        });

    } catch (err) {
        res.send(err.message)
    }
}


//update student
exports.updateStudent = async (req, res, next) => {
    try {
        let student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(500).json({
                success: false,
                message: "student not found"
            })
        }
        student = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        res.status(200).json({
            success: true,
            student
        })
    } catch (err) {
        res.send(err.message);
    }
}

//Delete student
exports.deleteStudent = async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(500).json({
                success: false,
                message: "student not found"
            })
        }
        if (student.payment.public_id !== NULL) {
            const imageId = student.payment.public_id;
            await cloudinary.v2.uploader.destroy(imageId);
        }

        await student.remove();

        res.status(200).json({
            success: true,
            message: "student deleted"
        })
    } catch (err) {
        res.send(err.message);
    }
}

//Get one Student Detail
exports.getStudentDetails = async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({
                success: false,
                message: "student not found"
            })
        }

        res.status(200).json({
            success: true,
            student,
        })
    } catch (err) {
        res.send(err.message);
    }
}

//get All Students
exports.getAllStudents = async (req, res) => {
    try {
        let student = await Student.find({ event: req.params.event });
        const studentCount = await Student.countDocuments();
        res.status(201).json({
            success: true,
            student,
            studentCount
        });

    } catch (err) {
        res.send(err.message)
    }
}
