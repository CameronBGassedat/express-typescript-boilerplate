import mongoose from 'mongoose';

const sensorSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ['temperature', 'humidity', 'barometer', 'proximity']
    },
    designation : String,
    rawValue : Boolean
});

//TODO change value to Boolean or Int

const sensor = mongoose.model('Sensor', sensorSchema);

export default sensor;