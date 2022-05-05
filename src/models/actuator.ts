import mongoose from 'mongoose';

enum ActuatorType {
    BLINDS = "BLINDS",
    LIGHT = "LIGHT"
}

type Actuator = {
    id: number | string
    type: ActuatorType
    designation : String
    state : Boolean
}

const actuatorSchema = new mongoose.Schema<Actuator>({
    type: { type: String, enum: ["BLINDS", "LIGHT"], required: true },
    designation: String ,
    state: Boolean
});

actuatorSchema.set('toJSON', { virtuals: true });

export const Actuator = mongoose.model('Actuator', actuatorSchema);

