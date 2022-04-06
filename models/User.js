const { Schema, model } = require('mongoose');

const User = new Schema({
    username: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    registarationDate: { type: String, required: true },
    loginDate: { type: String, required: true },
    status: { type: String, required: true },
    password: { type: String, required: true }
});