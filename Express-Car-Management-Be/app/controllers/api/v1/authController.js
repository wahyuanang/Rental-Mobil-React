const bcrypt = require('bcryptjs');
const { where } = require('sequelize');
const validator = require("validator");
const jwt = require("jsonwebtoken")
require("dotenv").config();

const { Users } = require("../../../models");

const createToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    });
};

const register = async (req, res) => {
    try {
        const { email, password, firstName, lastName, phone } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const existingUser = await Users.findOne({ where: { email } });
        if (existingUser != null) {
            return res.status(400).json({
                status: "Failed",
                message: "Email address already in use!",
                isSuccess: false,
                data: null,
            });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({
                status: "Failed",
                message: 'Email is not valid',
                isSuccess: false,
                data: null,
            });
        }

        if (!validator.isLength(password, { min: 8 })) {
            return res.status(400).json({
                status: "Failed",
                message: 'Password at least 8 char',
                isSuccess: false,
                data: null,
            });
        }
        else if (!validator.isLength(password, { max: 100 })) {
            return res.status(400).json({
                status: "Failed",
                message: 'Password max 100 char',
                isSuccess: false,
                data: null,
            });
        }

        const newUser = await Users.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,
            phone,
        })

        res.status(201).json({
            status: "Success",
            message: "Register user successfully",
            isSuccess: true,
            data: {
                newUser,
            },
        });
    }
    catch (error) {
        if (error.name === "SequelizeValidationError") {
            const errorMessage = error.errors.map((err) => err.message);
            return res.status(400).json({
                status: "Failed",
                message: errorMessage[0],
                isSuccess: false,
                data: null,
            });
        } else if (error.name === "SequelizeDatabaseError") {
            return res.status(400).json({
                status: "Failed",
                message: error.message || "Database error",
                isSuccess: false,
                data: null,
            });
        } else {
            return res.status(500).json({
                status: "Failed",
                message: "An unexpected error occurred",
                isSuccess: false,
                data: null,
            });
        }
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const emailLowerCase = email.toLowerCase()

        if (!validator.isEmail(emailLowerCase)) {
            return res.status(400).json({
                status: "Failed",
                message: 'Email is not valid',
                isSuccess: false,
                data: null,
            });
        }

        if (!validator.isLength(password, { min: 8 })) {
            return res.status(400).json({
                status: "Failed",
                message: 'Password at least 8 char',
                isSuccess: false,
                data: null,
            });
        }
        else if (!validator.isLength(password, { max: 100 })) {
            return res.status(400).json({
                status: "Failed",
                message: 'Password max 100 char',
                isSuccess: false,
                data: null,
            });
        }

        const userDetail = await Users.findOne({
            where: { email: emailLowerCase }
        });
        console.log(userDetail)
        if (!userDetail) {
            return res.status(404).json({
                status: "Failed",
                message: "Cannot find spesific users",
                isSuccess: false,
                data: null,
            });
        }
        const hashedPassword = userDetail.password
        const isCorrectPass = await bcrypt.compare(password, hashedPassword)

        if (isCorrectPass) {
            const token = createToken({
                id: userDetail.id,
                email: email,
                role: userDetail.role,
                firstName: userDetail.firstName,
                lastName: userDetail.lastName,
                fotoProfil: userDetail.fotoProfil,
                createdAt: userDetail.createdAt,
                updatedAt: userDetail.updatedAt
            })

            res.status(200).json({
                status: "Success",
                message: "Login user successfully",
                isSuccess: true,
                data: {
                    email: email,
                    firstName: userDetail.firstName,
                    lastName: userDetail.lastName,
                    phone: userDetail.phone,
                    token: token,
                    role: userDetail.role,
                    fotoProfil: userDetail.fotoProfil
                },
            });
        }
        else {
            res.status(400).json({
                status: "Failed",
                message: "Password is incorrect!",
                isSuccess: false,
                data: null,
            });
        }
    }
    catch (error) {
        if (error.name === "SequelizeValidationError") {
            const errorMessage = error.errors.map((err) => err.message);
            return res.status(400).json({
                status: "Failed",
                message: errorMessage[0],
                isSuccess: false,
                data: null,
            });
        } else if (error.name === "SequelizeDatabaseError") {
            return res.status(400).json({
                status: "Failed",
                message: error.message || "Database error",
                isSuccess: false,
                data: null,
            });
        } else {
            return res.status(500).json({
                status: "Failed",
                // message: "An unexpected error occurred",
                message: error.message,
                isSuccess: false,
                data: null,
            });
        }
    }
}

const logout = async (req, res) => {
    req.session.destroy()
    res.redirect("/login")
}


module.exports = {
    register,
    login,
    logout
}