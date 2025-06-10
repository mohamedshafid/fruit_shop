import jwt from "jsonwebtoken";

export const createToken = (userId, res) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  // Set the token in a cookie
  createCookie(res, token);

  return token;
};

const createCookie = (res, token) => {
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    sameSite: "strict", // Prevent CSRF attacks
  });
};
