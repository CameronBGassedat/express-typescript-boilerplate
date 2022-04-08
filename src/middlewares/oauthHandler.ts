import jwt from "jsonwebtoken"

export function verif_oauth(header : string)
{
    const token = header.split(" ");
    return jwt.verify(token[1], process.env.SECRET_KEY!);
}

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