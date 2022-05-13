import mongoose from 'mongoose';

export type IUser = {
    username: string,
    password: string,
    id: number,
    email: string
}

const userSchema = new mongoose.Schema<IUser>({
    username: String,
    password: String,
    email: String
});

type UserGet = Omit<IUser, "password">
type UserPost = Omit<IUser, "id">
type UserLogin = Pick<IUser, "email" | "password">
type UserUpdate = Pick<Partial<UserPost>, "username">

userSchema.set('toJSON', { virtuals: true });

export const User = mongoose.model('User', userSchema);
