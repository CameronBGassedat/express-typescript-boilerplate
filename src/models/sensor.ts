import mongoose from 'mongoose';

enum SensorType{
    TEMPERATURE = "TEMPERATURE",
    HUMIDITY = "HUMIDITY",
    BARO = "BARO",
    PROXIMITY = "PROXIMITY"
}

type Sensor = {
    id: number | string
    type: SensorType
    designation : string
    rawValue: number | boolean
}

const sensorSchema = new mongoose.Schema<Sensor>({
    id : Number,
    type : SensorType,
    designation : String,
    rawValue : Number
});

// TODO id should be iether a number of a string

type SensorGet = Sensor & {value: string}
type SensorPost = Omit<Sensor, "id">
type SensorUpdate = Partial<SensorPost>

module.exports = mongoose.model('Sensor', sensorSchema);

