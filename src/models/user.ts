import mongoose from 'mongoose';

interface User
{
    username: string,
    password: string,
    id: number,
    email: string
}

const userSchema = new mongoose.Schema<User>({
    username: String,
    password: String,
    id: Number,
    email: String
});

type UserGet = Omit<User, "password">
type UserPost = Omit<User, "id">
type UserLogin = Pick<User, "email" | "password">
type UserUpdate = Pick<Partial<UserPost>, "username">

userSchema.set('toJSON', { virtuals: true });

export const User = mongoose.model('User', userSchema);
