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

module.exports = mongoose.model('Sensor', sensorSchema);
