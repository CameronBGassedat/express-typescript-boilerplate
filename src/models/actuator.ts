import mongoose from 'mongoose';

enum ActuatorType {
    BLINDS = "BLINDS",
    LIGHT = "LIGHT"
}

const actuatorSchema = new mongoose.Schema({
    type: { type: String, enum: ["BLINDS", "LIGHT"], required: true },
    designation: String ,
    state: Number
});

actuatorSchema.set('toJSON', { virtuals: true });

export const actuator = mongoose.model('Actuator', actuatorSchema);

