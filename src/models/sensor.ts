import mongoose from 'mongoose';

enum SensorType{
    TEMPERATURE = "TEMPERATURE",
    HUMIDITY = "HUMIDITY",
    BARO = "BARO",
    PROXIMITY = "PROXIMITY"
}

export type ISensor = {
    id: number | string
    type: SensorType
    designation : string
    rawValue: number | boolean
}

const sensorSchema = new mongoose.Schema<ISensor>({
    type: { type: String, enum: ["TEMPERATURE", "HUMIDITY", "BARO", "PROXIMITY"], required: true },
    designation : String,
    rawValue : Number
});

// TODO id should be either a number of a string

type SensorGet = ISensor & {value: string}
type SensorPost = Omit<ISensor, "id">
type SensorUpdate = Partial<SensorPost>


sensorSchema.set('toJSON', { virtuals: true });

export const Sensor = mongoose.model('Sensor', sensorSchema);
