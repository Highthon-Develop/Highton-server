import { SHA512 } from "crypto-js";
import { sign, verify } from "jsonwebtoken";

export const hashPassword: Function = (password: string): string =>
  SHA512(password + process.env.PASSWORD_SECRET).toString();

export const generateAccessToken = (userIdx: number) =>
  sign({ userIdx }, process.env.JWT_SECRET, {
    expiresIn: "1y",
  });

export const verifyAccessTOken = (token: string): number =>
  verify(token, process.env.JWT_SECRET).userIdx;
