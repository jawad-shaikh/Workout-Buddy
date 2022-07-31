const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    reps: {
        type: Number,
        require: true
    },
    load: {
        type: Number,
        require: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('workout', workoutSchema);