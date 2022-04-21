import { NextFunction } from "express";
import jwt from "jsonwebtoken"

// export function verif_oauth(header : string)
// {
    
// }

export function signin_oauth(email : string, _id : string)
{
    return jwt.sign(
    { user_id: _id, email },
    process.env.SECRET_KEY!,
    {
      expiresIn: "2h",
    }
  );
}

export function verif_oauth(req: Request, res: Response, next: NextFunction)
{
    try {
        const token = req.headers.get("authorization")!.split(" ");
        console.log(token);
        return jwt.verify(token[1], process.env.SECRET_KEY!);
    } catch (error) {
        next(error);
    }
}