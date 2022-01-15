import { SHA512 } from "crypto-js";
import jwt from "jsonwebtoken";

export const hashPassword: Function = (password: string): string =>
  SHA512(password + process.env.PASSWORD_SECRET).toString();

export const generateAccessToken = (userIdx: number) =>
  jwt.sign({ userIdx }, process.env.JWT_SECRET, {
    expireIn: "365d",
  });
