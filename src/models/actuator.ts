import mongoose from 'mongoose';
import { type } from 'os';

enum ActuatorType{
    BLINDS = "BLINDS",
    LIGHT = "LIGHT"
}

const actuatorSchema = new mongoose.Schema({
    id: String,
    ActuatorType : type,
    designation : String,
    state : Number
});

module.exports = mongoose.model('Actuator', actuatorSchema);