import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    id: String,
    email: String
});

//TODO add number type to id when correct syntax is found
//TODO find the correct way to omit

module.exports= mongoose.model('User', userSchema);

// type UserGet = Omit<userSchema, "password">
// type UserPost = Omit<User, "id">
// type UserUpdate = Partial<UserPost>