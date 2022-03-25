type ApiResponse = {
    response: string
    data?: Record<string, any>
    error?: Error
}

import mongoose from 'mongoose';

const responseSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ['temperature', 'humidity', 'barometer', 'proximity']
    },
    callResponse : String,
    // data?: Record<string, any>
});

//TODO change value to Boolean or Int

const response = mongoose.model('Response', responseSchema);

export default response;