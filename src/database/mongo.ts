import express, { NextFunction, Request, Response } from "express";

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1:27017/ConnectedHouse';

const connectDatabase = async (req: Request, res : Response, next: NextFunction) => {
    
    try {
        await mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
        next();
        //Get the default connection
        var db = mongoose.connection;
        //Bind connection to error event (to get notification of connection errors)
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    } catch (error) {
        next(error);
    }    
}

export default connectDatabase