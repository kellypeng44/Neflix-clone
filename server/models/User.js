const mongoose = require('mongoose');

// consider required for the registering stage, set default values for the none required ones
const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        profilePic: { type: String, default: '' },
        isAdmin: { type: Boolean, default: false },
    }, 
    {   timestamps: true }
);

// model("model name", reference point)
module.export = mongoose.model("User", UserSchema);