import mongoose from 'mongoose';
import { type } from 'os';

enum ActuatorType{
    BLINDS = "BLINDS",
    LIGHT = "LIGHT"
}

const actuatorSchema = new mongoose.Schema({
    id: String,
    type : ActuatorType,
    designation : String,
    state : Number
});

module.exports = mongoose.model('Actuator', actuatorSchema);