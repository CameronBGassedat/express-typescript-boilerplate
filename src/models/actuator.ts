import mongoose from 'mongoose';

const actuatorSchema = new mongoose.Schema({
    id: String,
    name: {
        type: String,
        enum: ["blinds", "light"]
    },
    designation : String,
    state : Boolean
});
//TODO change value to Boolean or Int

module.exports = mongoose.model('Actuator', actuatorSchema);