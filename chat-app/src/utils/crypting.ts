import crypto from "crypto";
const ENC = "bf3c199c2470cb477d907b1e0917c17b";
const IV = "5183666c72eec9e4";
const ALGO = "aes-256-cbc";

export const encrypt = (text: string) => {
  const cipher = crypto.createCipheriv(ALGO, ENC, IV);
  let encrypted = cipher.update(text, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
};

export const decrypt = (text: string) => {
  const decipher = crypto.createDecipheriv(ALGO, ENC, IV);
  const decrypted = decipher.update(text, "base64", "utf8");
  return decrypted + decipher.final("utf8");
};
