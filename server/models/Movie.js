const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String },
        img: { type: String },
        imgThumbnail: { type: String },
        imgLogo: { type: String },
        trailer: { type: String },
        video: { type: String },            // actual movie
        year: { type: String },
        ageLimit: { type: Number },
        genre: { type: String },
        isSeries: { type: Boolean, default: false },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);