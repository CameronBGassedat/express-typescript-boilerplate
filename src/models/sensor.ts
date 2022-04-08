import mongoose from 'mongoose';
import { ModuleResolutionKind } from 'typescript';

enum SensorType{
    TEMPERATURE = "TEMPERATURE",
    HUMIDITY = "HUMIDITY",
    BAROMETER = "BAROMETER",
    PROXIMITY = "PROXIMITY"
}

type Sensor = {
    id: number | string
    type: SensorType
    designation : string
    rawValue: number | boolean
}

export const sensorSchema = new mongoose.Schema<Sensor>({
    type: { type: String, enum: ["TEMPERATURE", "HUMIDITY", "BAROMETER", "PROXIMITY"], required: true },
    designation : String,
    rawValue : Number
});

// TODO id should be either a number of a string

type SensorGet = Sensor & {value: string}
type SensorPost = Omit<Sensor, "id">
type SensorUpdate = Partial<SensorPost>


sensorSchema.set('toJSON', { virtuals: true });

export const Sensor = mongoose.model('Sensor', sensorSchema);
