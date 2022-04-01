import mongoose from 'mongoose';

const sensorSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ['temperature', 'humidity', 'barometer', 'proximity']
    },
    designation : String,
    rawValue : Number
});

module.exports = mongoose.model('Sensor', sensorSchema);
